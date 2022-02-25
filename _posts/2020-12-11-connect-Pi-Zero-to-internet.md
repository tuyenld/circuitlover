---
layout: post
title: Connect Raspberry Pi Zero (not W) to the Internet
categories: pi
comments: true
description: "How to connect Pi Zero to the Internet without using any extra devices."
---


Raspi Zero (not W) have neither Wi-Fi nor Ethernet, so how could we want to update our board on the fly? 
Well, we can create a virtual Ethernet interface. I'll show you how to do it.

The network topology I'm going to deploy it as follows.

![Pi Zero Internet](/images/posts/Pi-Zero-internet.jpg)

First, you need to run this script. It will create a virtual UDC ethernet interface.

```bash

#!/bin/sh

# https://www.isticktoit.net/?p=1383

CONFIG=/sys/kernel/config/usb_gadget/piwebcam
mkdir -p "$CONFIG"
cd "$CONFIG" || exit 1

echo 0x1d6b > idVendor # Linux Foundation
echo 0x0104 > idProduct # Multifunction Composite Gadget
echo 0x0100 > bcdDevice # v1.0.0
echo 0x0200 > bcdUSB # USB2
mkdir -p strings/0x409
echo "fedcba9876543210" > strings/0x409/serialnumber
echo "Tobias Girstmair" > strings/0x409/manufacturer
echo "iSticktoit.net USB Device" > strings/0x409/product
mkdir -p configs/c.1/strings/0x409
echo "Config 1: ECM network" > configs/c.1/strings/0x409/configuration
echo 250 > configs/c.1/MaxPower
# Add functions here
# see gadget configurations below
# End functions
udevadm settle -t 5 || :
ls /sys/class/udc > UDC

# Ethernet Adapter
#-------------------------------------------
# Add functions here
mkdir -p functions/ecm.usb0
# first byte of address must be even
HOST="48:6f:73:74:50:43" # "HostPC"
SELF="42:61:64:55:53:42" # "BadUSB"
echo $HOST > functions/ecm.usb0/host_addr
echo $SELF > functions/ecm.usb0/dev_addr
ln -s functions/ecm.usb0 configs/c.1/
# End functions
udevadm settle -t 5 || :
ls /sys/class/udc > UDC
#put this at the very end of the file:
ifconfig usb0 10.0.0.1 netmask 255.255.255.252 up
route add -net default gw 10.0.0.2

# USB Mass storage
#-------------------------------------------
# Add functions here
FILE=/dev/mmcblk0p2
# FILE=/home/pi/usbdisk.img
# mkdir -p ${FILE/img/d}
# mount -o loop,ro,offset=1048576 -t ext4 $FILE ${FILE/img/d} # FOR OLD WAY OF MAKING THE IMAGE
# mount -o loop,ro, -t vfat $FILE ${FILE/img/d} # FOR IMAGE CREATED WITH DD
mkdir -p functions/mass_storage.usb0
echo 0 > functions/mass_storage.usb0/stall
echo 1 >functions/mass_storage.usb0/lun.0/removable
echo 0 > functions/mass_storage.usb0/lun.0/cdrom
echo 0 > functions/mass_storage.usb0/lun.0/ro
echo 0 > functions/mass_storage.usb0/lun.0/nofua
echo $FILE > functions/mass_storage.usb0/lun.0/file
ln -s functions/mass_storage.usb0 configs/c.1/
# End functions
udevadm settle -t 5 || :
ls /sys/class/udc > UDC

# REMOVE USB Mass Storage
# rm configs/c.1/mass_storage.usb0
# rm -rf functions/mass_storage.usb0

```

Now, try to ping from your Pi to the host PC `ping 10.0.0.2`.

You created another network, so you need to "register" it to your router.

```bash
## Add route to your Gateway Network
ldtuyen@pc:~$ ssh root@172.16.10.1
[Enter username and password]

root@OpenWrt:~# route -n
Kernel IP routing table
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
0.0.0.0         192.168.1.1     0.0.0.0         UG    0      0        0 eth0.2
172.16.10.0     0.0.0.0         255.255.255.0   U     0      0        0 br-lan
192.168.1.0     0.0.0.0         255.255.255.0   U     0      0        0 eth0.2
root@OpenWrt:~# ip route add 10.0.0.0/24 via 172.16.10.159
root@OpenWrt:~# 
root@OpenWrt:~# route -n
Kernel IP routing table
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
0.0.0.0         192.168.1.1     0.0.0.0         UG    0      0        0 eth0.2
10.0.0.0        172.16.10.159   255.255.255.0   UG    0      0        0 br-lan
172.16.10.0     0.0.0.0         255.255.255.0   U     0      0        0 br-lan
192.168.1.0     0.0.0.0         255.255.255.0   U     0      0        0 eth0.2
root@OpenWrt:~# 

```

Try to ping from your Pi to Google `ping 8.8.8.8`. If it fails, you may be need to check your network topology.

In order to use the Internet, the DNS server of your Raspberry Pi need to be changed.

```bash
$ cat /etc/resolv.conf
# Generated by resolvconf
nameserver 8.8.8.8 
nameserver fe80::3e47:11ff:fe87:fc43%wlan0
$ 
$ ping google.com
PING google.com (172.217.24.46) 56(84) bytes of data.
64 bytes from hkg07s23-in-f46.1e100.net (172.217.24.46): icmp_seq=1 ttl=115 time=23.8 ms
64 bytes from hkg07s23-in-f46.1e100.net (172.217.24.46): icmp_seq=2 ttl=115 time=23.6 ms
^C
--- google.com ping statistics ---
2 packets transmitted, 2 received, 0% packet loss, time 1001ms
rtt min/avg/max/mdev = 23.672/23.750/23.829/0.172 ms
```
Done! Now you could use the Internet on your Pi Zero.

