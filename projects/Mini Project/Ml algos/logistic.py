import numpy as np
import matplotlib.pyplot as plt

# Logistic function
def sigmoid(z):
    return 1 / (1 + np.exp(-z))

# Model parameters
a0 = -4   # intercept
a1 = 1    # coefficient

# Generate x values
x = np.linspace(0, 10, 200)   # range of x
z = a0 + a1 * x
p = sigmoid(z)

# Plot
plt.plot(x, p)
plt.xlabel("x (study hours)")
plt.ylabel("p (probability)")
plt.title("Logistic Regression Curve: a0 = -4, a1 = 1")
plt.grid(True)
plt.show()
