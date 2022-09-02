---
title: MOSFET and IGBT
description: "MOSFET and IGBT structure and how to use them properly."
excerpt: "Fundamental of grid connected inverter."
date: 2020-10-18T09:19:42+01:00
lastmod: 2020-10-18T09:19:42+01:00
categories: ["Power-Electronics"]
tags: ["mosfet-igbt"]
contributors: ["Tuyen D. Le"]
---

Table of contents

- [N-channel MOSFET](#n-channel-mosfet)
  - [Physical view](#physical-view)
  - [Electrical view](#electrical-view)
  - [Circuit symbol](#circuit-symbol)
  - [N-channel MOSFET](#n-channel-mosfet-1)
- [References](#references)

## N-channel MOSFET

### Physical view

Current flows between diffusion terminals if the voltage on the `Gate` large enough to create a **conducting channel**, otherwise the MOSFET is off and the diffusion terminals are not connected. [^ref1]

![physical view](images/nmosfet-physical-view.png)

### Electrical view

The four terminals of a Field Effect Transitor are `Gate`, `Source`, `Drain` and `Bulk`.

![electrical view](images/nmosfet-electrical-view.png)

### Circuit symbol

MOSFET and JFET circuit symbols

| P-channel | ![s](images/JFET_P-Channel_Labelled.svg) | ![d](images/IGFET_P-Ch_Enh_Labelled.svg) | ![d](images/IGFET_P-Ch_Enh_Labelled_simplified.svg) | ![f](images/Mosfet_P-Ch_Sedra.svg) | ![f](images/IGFET_P-Ch_Dep_Labelled.svg) |
| :-------: | :----------------------------------------------------: | :----------------------------------------------------: | :---------------------------------------------------------------: | :----------------------------------------------: | ------------------------------------------------------ |
| **N-channel** | ![d](images/JFET_N-Channel_Labelled.svg) | ![e](images/IGFET_N-Ch_Enh_Labelled.svg) | ![e](images/IGFET_N-Ch_Enh_Labelled_simplified.svg) | ![r](images/Mosfet_N-Ch_Sedra.svg) | ![r](images/IGFET_N-Ch_Dep_Labelled.svg) |
|           |         JFET (they are only in depletion mode)         |                MOSFET enhancement mode                 |                 MOSFET enhancement mode (no bulk)                 |        MOSFET enhancement mode (no bulk)         | MOSFET depletion mode (switched on)                                  |

{% include tldr.html box="TRICK" tldr="The arrow forms the pn junction from the 'buck' to the 'gate' in the symbol of MOSFET" %}

When a channel exists in a MOSFET, current can flow from source to drain as well as from drain to source - it's just a matter of how the device is connected in the circuit [^ref2]. Conventional current flows from Drain to Source in an N Channel MOSFET.

### N-channel MOSFET

When a channel exists in a MOSFET, current can flow from **drain to source** *or* from **source to drain** - it's a function of how the device is connected in the circuit. The conduction channel has no intrinsic polarity - it's kind of like a resistor in that regard.

The intrinsic body diode inside the MOSFET is in parallel with the conduction channel, however. When the conduction channel is present, the diode is shunted and current flows through the path of least resistance (the channel). When the channel is off, the diode is in circuit and will either conduct or block depending on the drain-source current polarity.

As your picture shows, there are both N-channel and P-channel devices, as well as enhancement mode and depletion mode devices. In all of these cases, current can flow from **source to drain** as well as from **drain to source** - it's just a matter of how the device is connected in the circuit.

Your picture does *not* show the intrinsic diode in the devices - the arrow point towards or away from the gate is an indication of the channel type (N-channel points towards the gate, P-channel points away from the gate).

![n-channel enhancement MOSFET](images/n-channel-MOSFET.png)

This symbol shows you the inherent diode between drain and source.

N-channel enhancement devices need a voltage on the gate *higher* than the source in order to create a conduction channel. (Enhancement devices don't have a channel automatically, and need gate voltage to create one - because it's N-channel Vgate>Vsource for this to happen.)

P-channel enhancement devices need a voltage on the gate *lower* than the source in order to create a conduction channel. (Enhancement devices don't have a channel automatically, and need gate voltage to create one - because it's P-channel Vgate<Vsource for this to happen.)

N-channel delpetion devices have a channel by default, and need a voltage on the gate *lower* than the source in order to turn the channel *off*. The channel can be widened to a certain extent by increasing the gate-to-source voltage above 0.

P-channel depletion devices also have a channel by default, and need a voltage on the gate *higher* than the source in order to turn the channel *off*. The channel can be widened to a certain extent by decreasing the gate-to-source voltage below 0.

## References

[^ref1]: Chris Terman. *6.004 Computation Structures.* Spring 2017. Massachusetts Institute of Technology: MIT OpenCourseWare, [https://ocw.mit.edu](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-004-computation-structures-spring-2017). License: [Creative Commons BY-NC-SA](https://creativecommons.org/licenses/by-nc-sa/4.0/).  
[^ref2]: [Adam Lawrence](https://electronics.stackexchange.com/users/1293/adam-lawrence), In an NMOS, does current flow from source to drain or vice-versa?, [URL](https://electronics.stackexchange.com/q/48671) (version: 2012-11-11)
