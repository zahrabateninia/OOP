# Encapsulation

When calculating an employee's wage, we can use either procedural code or an object-oriented programming (OOP) approach. In procedural code, a function may handle the calculation, but OOP provides a more structured way.

In OOP, we create an object representing the employee. This object holds properties like `baseSalary`, `rate`, and `overTime`, along with a method (`calculateWage`) for computing the wage. The key here is the use of `this`. When we use `this` inside the method, it refers to the current instance of the object, allowing easy access to its properties (`baseSalary`, `rate`, `overTime`).

This approach follows the principles of encapsulation by bundling related properties and methods within the object. It improves code organization, readability, and maintainability. The details of wage calculation are hidden within the object, and `this` helps reference internal properties without the need for external parameters. This encapsulation enhances the overall structure of the code, making it more modular and reusable.
