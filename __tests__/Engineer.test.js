const Engineer = require("../lib/Engineer");

test("Creating an Engineer Employee", () => {
    const engineer = new Engineer("Ekam", 10, "ekam@gmail.com", "ekamSidhu");

    expect(engineer.github).toEqual(expect.any(String));

    expect(engineer.getGitHub()).toEqual(expect.any(String));

    expect(engineer.getRole()).toEqual("Engineer");
}) 