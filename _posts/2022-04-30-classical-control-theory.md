---
title: "Classical Control Theory"
description: "Quick note of Classical Control Theory series by Brian Douglas"
category: control
layout: post
maths: true
comments: true
published: true
---

# 1. Some useful functions
Step function

![step-function](/images/posts/control/step-function.jpg)

$$
\begin{align*}
    u(t)={\begin{cases}1&{\text{if }}t \ge 0 \\0&{\text{if }}t \lt 0\\\end{cases}}
    \qquad
    u[n]={\begin{cases}1&{\text{if }}n \ge 0 \\0&{\text{if }}n \lt 0\\\end{cases}}
\end{align*}
$$


Impulse unit function (in descrete domain)

![Impulse function](/images/posts/control/impulse-function.jpg)

$$
\begin{align*}
    & \delta[n]={\begin{cases}1&{\text{if }}n = 0 \\0&{\text{if }}n \ne 0\\\end{cases}} \\
    & u[n] = \sum_{k = 0}^{\infty} \delta[n-k] \qquad \text{for step function} \\
    & x[n] = \sum_{k = - \infty}^{\infty} x[k] \delta[n-k] \qquad \text{for arbitrary function}
\end{align*}
$$

We will use this relation later on.

# 2. What are "Linear and Time Invariance" (LTI) systems?

![LTI system](/images/posts/control/LTI-system.jpg)

An example of LTI system.

![LTI example](/images/posts/control/LTI-example.jpg)

What is **Laplace transformation**

![Laplace transformation](/images/posts/control/Laplace-transform.png)

Q. What is impulse response $h[n]$ of a system?  
A. When the input is a impulse unit function $\delta [n]$ (see "Impulse unit function" section above)

![impulse responses](/images/posts/control/impulse-response.jpg)

$$
\begin{align*}
    & \delta [n]\overset L \longrightarrow h[n] \qquad \text{ OR } \qquad y[n] = T\{x[n]\} \\
    & x[n] = \sum_{k = - \infty}^{\infty} x[k] \delta[n-k] \\
    & \Rightarrow y[n]=T \{ \sum_{k = - \infty}^{\infty} x[k] \delta[n-k] \} \overset {LTI} \longrightarrow  \sum_{k = - \infty}^{\infty} x[k] L \{\delta[n-k] \} \\
    & \Rightarrow y[n] = \sum_{k = - \infty}^{\infty} x[k]  h[n-k] := x[n] * h[n] \quad \text{(This is convolution)}
\end{align*}
$$

Now, if we take a `Laplace` transformation of $y[n]$, we have.

$$
\begin{align*}
    & x [n]\overset L \longrightarrow X[s] \\
    & h [n]\overset L \longrightarrow H[s] \qquad \text{(where h[n] is the impulse response of the system)}\\
    & y [n] = x[n] * h[n] \overset L \longrightarrow Y[s] = X[s] . H[s]
\end{align*}
$$

We call $H[s]$ is the **transfer function** of the system.

An example of using impulse response in the system.

![impulse responses example](/images/posts/control/impulse-response-example.jpg)



From convolution to transfer function.

![convolution-to-transfer-function](/images/posts/control/convolution-to-transfer-function.jpg)


![impulse responses example](/images/posts/control/impulse-response-example-2.jpg)

Let take a step back to understand this picture. In this case, $u(t)$ is input, and $x(t)$ is output. If we take $u(t)=\delta (t)$, we should have $x(t)=X(t)$ at the output. Taking **Laplace** transformation both side of the equation, $X(s)$ becomes **Transfer function** of the system.

![impulse responses example](/images/posts/control/impulse-response-example-explain.jpg)

References
- Brian Douglas Youtube [channel](https://www.youtube.com/user/ControlLectures), "Classical Control Theory" [series](https://www.youtube.com/playlist?list=PLUMWjy5jgHK1NC52DXXrriwihVrYZKqjk)
- Dang Quang Hieu, Digital Signal Processing lecture note