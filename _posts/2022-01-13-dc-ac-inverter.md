---
published: true
category: pe
date: 2022-01-06
description: "Single-phase and three-phase PWM inverter."
layout: post
title: The fundamental of DC-AC inverter
comments: true
maths: true
---

Table of contents
- [1. Full-brige inverters](#1-full-brige-inverters)
  - [1.1. Biploar PWM](#11-biploar-pwm)
  - [1.2. Unipolar PWM](#12-unipolar-pwm)
  - [1.3. Hybrid PWM](#13-hybrid-pwm)
- [Vector space and three-phase inverter](#vector-space-and-three-phase-inverter)
- [Power losses and heating design of an DC-AC inverter](#power-losses-and-heating-design-of-an-dc-ac-inverter)
- [References](#references)


# 1. Full-brige inverters
TL;DR
- Unipolar by definition: having or oriented in respect to a single pole.
- Bipolar by definiton: having or involving the use of two poles or polarities.

## 1.1. Biploar PWM

## 1.2. Unipolar PWM

## 1.3. Hybrid PWM

# Vector space and three-phase inverter

# Power losses and heating design of an DC-AC inverter
Power losses of an inverter is defined as

$$
P_{Loss} = P_{in} - P_{out}
$$

We could measure the losses in two ways.
1. **Direct** measure $P_{in}$ and $P_{out}$. The stability of this method is difficult to achieve. A small variant in input or output could lead to a large error.
2. **Indrect** by using Calorimetric methos. Highest accuracy is achieved, but it is complicate to operate.

A alternative of measuring the losses is **deriving the losses**. The losses can be calculated by estimate of 4 types of power losses.
1. Switching losses
2. Conducting Losses
3. Blocking losses (neglecgable)
4. Driving losses (neglecable)

The rule of thumb for a good design is 50% of switching losses and 50% of conducting losses. Let take a closer look at the three-phase inverter.

![three phase inverter](/images/posts/dc-ac-inverter/three-phase-inverter.png)

$$
P_{conduction} = \frac{1}{2 \pi} \int_{0}^{2 \pi} v (\omega t) i (\omega t) dt
$$

Power switch is only conducting for half of period.

$$
\begin{align*}

& P_C^{IGBT} = \frac{1}{2 \pi} \int_{0}^{\pi} \left[ V_{CE,0} \cdot i_{IGBT}(\omega t) + R_{CE} \cdot i_{IGBT}^2 (\omega t) \right] dt \\
  
& P_C^{MOSFET} = \frac{1}{2 \pi} \int_0^{\pi} \left [ r_{ds} \cdot i_{MOS}^2 (\omega t) \right ] dt \\

& P_C^{Diode} = \frac{1}{2 \pi} \int_0^{\pi} \left [ V_{Forward} \cdot i_{diode} (\omega t) + R_F \cdot i_{diode}^2 (\omega t) \right] dt

\end{align*}
$$

$$
\text{Note: } V_{CE,0}, \; R_{CE}, \; R_{DS}, \;V_{F,0}, \; R_{F} \text{ are from the datasheets of Mosfet/IGBT/Diode.}
$$

Using Kirchhoff's current law, we have,

$$
i_{IGBT} (\omega t) + i_{Diode} (\omega t) = \hat{i}_N \; sin(\omega t)
$$

where 

$$
\begin{align*}
  
& i_{IGBT}(\omega t) = m_{IGBT} (\omega t) \cdot \hat{i}_N \; sin(\omega t) \qquad (1) \\
& i_{Diode}(\omega t) = m_{Diode} (\omega t) \cdot \hat{i}_N \; sin (\omega t)

\end{align*}
$$

In case of Sine-triangle PWM modulation, modulation function $m = M \cdot sin(\omega t + \phi)$ with $M$ is modulation index.

$$
\begin{align*}
  
& m_{IGBT} - m_{Diode} = m \qquad (2) \\
& m_{IGBT} + m_{Diode} = 1

\end{align*}
$$

we have,

$$
\begin{align*}
  
&m_{IGBT} = \frac{1+m}{2} = \frac{1}{2} \left( 1 + M \cdot sin(\omega t) \right) \qquad (3) \\

&m_{Diode} = \frac{1-m}{2} = \frac{1}{2} \left( 1 - M \cdot sin(\omega t) \right) 

\end{align*}
$$

Replace equation `(1)` by equation `(3)` we get,

$$
i_{IGBT} (\omega t) = \frac{1}{2}  \left[ 1 + M \cdot sin(\omega t) \right]  \hat{i}_N \; sin(\omega t) \\
i_{Diode} (\omega t) = \frac{1}{2}  \left[ 1 - M \cdot sin(\omega t) \right]  \hat{i}_N \; sin(\omega t) 
$$

Finally, we get the important formular for conduction losses.

$$
\begin{align*}
  
& P^{IGBT}_C = \frac{\hat{i_N} \cdot V_{CE,0}}{2 \pi} \left( 1 + \frac{M \cdot \pi}{4} cos \phi \right) + \frac{R_{CE} \cdot \hat{i_N}^2}{2 \pi} (\frac{\pi}{4} + \frac{2M}{3} cos\phi) \\

& P^{MOS}_C = \frac{R_{DS} \cdot \hat{i_N}^2}{2 \pi} (\frac{\pi}{4} + \frac{2M}{3} cos\phi) \qquad (V_{CE,0} = 0) \\

& P^{Diode}_C = \frac{\hat{i_N} \cdot V_{F,0}}{2 \pi} \left( 1 - \frac{M \cdot \pi}{4} cos \phi \right) + \frac{R_{F} \cdot \hat{i_N}^2}{2 \pi} (\frac{\pi}{4} - \frac{2M}{3} cos\phi)

\end{align*}
$$


Since $R_{DS} \gg R_{CE}$, we could say that $P_C^{MOS}$ is not smaller than $P_C^{IBGT}$.


# References
[^fn1]: David Perreault. *6.334 Power Electronics.* Spring 2007. Massachusetts Institute of Technology: MIT OpenCourseWare, [https://ocw.mit.edu](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-334-power-electronics-spring-2007). License: [Creative Commons BY-NC-SA](https://creativecommons.org/licenses/by-nc-sa/4.0/).