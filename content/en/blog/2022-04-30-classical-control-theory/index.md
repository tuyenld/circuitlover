---
title: "Classical Control Theory"
description: "Classical Control Theory series by Brian Douglas"
excerpt: "Classical Control Theory series by Brian Douglas."
date: 2022-04-30T09:19:42+01:00
lastmod: 2022-04-30T09:19:42+01:00
categories: ["Control"]
tags: ["Brian-Douglas"]
contributors: ["Tuyen D. Le"]
katex: true
---

## Table of contents

- [Table of contents](#table-of-contents)
- [1. Background](#1-background)
  - [1.1. Step function](#11-step-function)
  - [1.2. Impulse unit function (in descrete domain)](#12-impulse-unit-function-in-descrete-domain)
  - [1.3. "Linear and Time Invariance" (LTI) systems](#13-linear-and-time-invariance-lti-systems)
  - [1.4. Laplace transformation](#14-laplace-transformation)
- [2. Transfer function](#2-transfer-function)
- [3. Fourier transformation](#3-fourier-transformation)
- [4. References](#4-references)

## 1. Background

### 1.1. Step function

![step-function](images/step-function.jpg)

{{< math >}}
$$
\begin{align*}
    u(t)={
        \begin{cases}
        1&{\text{if }}t \ge 0 \newline  
        0&{\text{if }}t \lt 0 \newline
        \end{cases}}
    \qquad
    u[n]={
        \begin{cases}
        1&{\text{if }}n \ge 0 \newline
        0&{\text{if }}n \lt 0 \newline
        \end{cases}}
\end{align*}
$$
{{< /math >}}

### 1.2. Impulse unit function (in descrete domain)

![Impulse function](images/impulse-function.jpg)

{{< math >}}
$$
\begin{align*}
    & \delta[n]={
        \begin{cases}
        1&{\text{if }}n = 0 \newline
        0&{\text{if }}n \ne 0 \newline
        \end{cases}} \newline
    & u[n] = \sum_{k = 0}^{\infty} \delta[n-k] \qquad \text{for step function} \newline
    & x[n] = \sum_{k = - \infty}^{\infty} x[k] \delta[n-k] \qquad \text{for arbitrary function}
\end{align*}
$$
{{< /math >}}

We will use this relation later on.

### 1.3. "Linear and Time Invariance" (LTI) systems

![LTI system](images/LTI-system.jpg)

An example of LTI system.

![LTI example](images/LTI-example.jpg)

### 1.4. Laplace transformation

![Laplace transformation](images/Laplace-transform.png)

## 2. Transfer function

Q. What is impulse response $h[n]$ of a system?  
A. When the input is a impulse unit function $\delta [n]$ (see "Impulse unit function" section above)

![impulse responses](images/impulse-response.jpg)

{{< math >}}
$$
\begin{align*}
    & \delta [n]\overset L \longrightarrow h[n] \qquad \text{ OR } \qquad y[n] = T\{x[n]\} \newline
    & x[n] = \sum_{k = - \infty}^{\infty} x[k] \delta[n-k] \newline
    & \Rightarrow y[n]=T \{ \sum_{k = - \infty}^{\infty} x[k] \delta[n-k] \} \overset {LTI} \longrightarrow  \sum_{k = - \infty}^{\infty} x[k] L \{\delta[n-k] \} \newline
    & \Rightarrow y[n] = \sum_{k = - \infty}^{\infty} x[k]  h[n-k] := x[n]*h[n] \quad \text{(This is convolution)}
\end{align*}
$$
{{< /math >}}

Now, if we take a `Laplace` transformation of $y[n]$, we have.

{{< math >}}
$$
\begin{align*}
    & x [n]\overset L \longrightarrow X[s] \newline
    & h [n]\overset L \longrightarrow H[s] \qquad \text{(where h[n] is the impulse response of the system)} \newline
    & y [n] = x[n]*h[n] \overset L \longrightarrow Y[s] = X[s] . H[s]
\end{align*}
$$
{{< /math >}}

We call $H[s]$ is the **transfer function** of the system.

An example of using impulse response in the system.

![impulse responses example](images/impulse-response-example.jpg)

From convolution to transfer function.

![convolution-to-transfer-function](images/convolution-to-transfer-function.jpg)

![impulse responses example](images/impulse-response-example-2.jpg)

Let take a step back to understand this picture. In this case, $u(t)$ is input, and $x(t)$ is output. If we take $u(t)=\delta (t)$, we should have $x(t)=X(t)$ at the output. Taking **Laplace** transformation both side of the equation, $X(s)$ becomes **Transfer function** of the system.

![impulse responses example](images/impulse-response-example-explain.jpg)

## 3. Fourier transformation

![Fourier transform](images/Fourier-transform.png)

Q. Why sinusoidal?  
A. Because its shape is the same in the `LTI` system. We only need to care about amplitude $A$ (i.e. **Gain**) and phase $\Phi$.

![Fourier use sinusoidal](images/Fourier-why-sin.png)

No phase information included.

![Fourier no phase included](images/Fourier-no-phase.png)

Using complex number to include phase information into account.

![Fourier complex number](images/Fourier-complex.png)

{{< math >}}
$$
\begin{align*}
    & F(v) = \cfrac{\sqrt{2}}{2} + \cfrac{\sqrt{2}}{2} j = e^{j \pi/4} \newline
    & F(v)e^{2 \pi j v t} = e^{j \pi/4} e^{2 \pi j v t}
\end{align*}
$$
{{< /math >}}

## 4. References

- Brian Douglas Youtube [channel](https://www.youtube.com/user/ControlLectures), "Classical Control Theory" [series](https://www.youtube.com/playlist?list=PLUMWjy5jgHK1NC52DXXrriwihVrYZKqjk)
- Dang Quang Hieu, Digital Signal Processing lecture note
