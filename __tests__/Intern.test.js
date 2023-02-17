const Intern = require("../lib/Intern");

test("Creating an Intern Employee", ()=>{
    const intern= new Intern("Ekam",1,"ekam@gmail.com","MGN");

    expect(intern.school).toEqual(expect.any(String));

    expect(intern.getSchool()).toEqual(expect.any(String));  // ===   && == 

    expect(intern.getRole()).toEqual("Intern");
})