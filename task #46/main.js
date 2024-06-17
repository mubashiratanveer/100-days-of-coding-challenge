"use strict";
// **Question 46:** Enhanced Laptop Object: Construct an object for a laptop including properties
// `make`, `model`, `year`, and a method `describe()` that logs a sentence about the laptop.
// **Explain & TIP:** Objects can also contain functions (methods) that can perform actions
// using the object's properties. This introduces method definition within objects.
let laptop = {
    make: "Dell",
    model: "XPS 15",
    year: "2022",
    describe: function () {
        console.log(`This laptop is a ${this.year} ${this.model} ${this.make}`);
    }
};
laptop.describe();
