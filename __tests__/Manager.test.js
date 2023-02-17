const Manager = require("../lib/Manager");

test("Creating a Manager", () => {
    const manager = new Manager("Ekam", 1, "ekam@gmail.com", 20);

    expect(manager.officenumber).toEqual(expect.any(Number));

    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));

    expect(manager.getRole()).toEqual("Manager");
})