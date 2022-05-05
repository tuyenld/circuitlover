---
title: "AC to DC converter"
description: "Basic AC to DC converter topologies"
category: pe
layout: post
maths: true
comments: true
published: true
---

Table of contents
- [1. One-switch sigle-ended forward converter (isolated buck converter)](#1-one-switch-sigle-ended-forward-converter-isolated-buck-converter)
- [2. Two-switch sigle-ended forward converter (isolated buck converter)](#2-two-switch-sigle-ended-forward-converter-isolated-buck-converter)
- [3. Practical consideration](#3-practical-consideration)
  - [3.1. How to use Impedance Analyzer](#31-how-to-use-impedance-analyzer)
- [4. References](#4-references)


If you don't know what is `K1 L1 L2 1` transformer directive means, you should check [^lt_transf] for more details.

# 1. One-switch sigle-ended forward converter (isolated buck converter)

![forward converter topology](/images/posts/ac-dc-inverter/forward-basic-topology.png)

This is essentially a buck converter with transformer inserted.

We want to operate in Continuous Conduction Mode.
$I_{Lout}$ never reach zero.

In DCM we may have `peak detect` phenomina, we $V_{out}^{'} = (3-4) \times V_{out}$

$$
\begin{align*}
& \text{- switch on: } V_{D2} = \frac{N2}{N1} V_{in} \\
& \text{- switch off: } V_{D2} = 0; \\
& \frac{V_{OUT}}{V_{IN}} = \frac{N2}{N1} D
\end{align*}
$$

$$
\text{Output voltage ripple } V_{ripple} = ESR * \Delta I 
$$

ESR is from $C_{OUT}$, and $\Delta I$ is effected by the design of $L_{out}$. 
Rule of thumb is $\Delta I$ = 10% to 40% of full load.

Refer [^fn1] for more details.

# 2. Two-switch sigle-ended forward converter (isolated buck converter)
also called asymmetrical half bridge forward

# 3. Practical consideration
## 3.1. How to use Impedance Analyzer
The table is adapted from [^4191A].

![Equivalent circuit model selection](/images/posts/ac-dc-inverter/equivalent-circuit-impedance.png)

| Equi. circuit | Type of DUTs                                                                                                                                        |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| A             | (1) Coils with high core loss; (2) To measure magnetizing inductance $L_M$, you need to open the secondary side. Only $L_M,C_1,R_{core}$ were left. |
| B             | (1) coils in general; (2) resistors; (3) Measuring leakage inductance $L_{leakage}$, you need to short the secondary side.                          |
| C             | High value resistors                                                                                                                                |
| D             | Capacitors                                                                                                                                          |
| E             | Resonators (crystal, ceramic, ferrite)                                                                                                              |

# 4. References
[^fn1]: David Perreault. *6.334 Power Electronics Ch. 7.* Spring 2007. Massachusetts Institute of Technology: MIT OpenCourseWare, [https://ocw.mit.edu](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-334-power-electronics-spring-2007). License: [Creative Commons BY-NC-SA](https://creativecommons.org/licenses/by-nc-sa/4.0/).
[^lt_transf]: [LTspice: Simple Steps for Simulating Transformers](https://www.analog.com/en/technical-articles/ltspice-basic-steps-for-simulating-transformers.html)
[^4191A]: Operation manual Model 4191A network/spectrum Analyzer page 141/356 [Online](https://xdevs.com/doc/HP_Agilent_Keysight/HP%204195A%20Operation.pdf)