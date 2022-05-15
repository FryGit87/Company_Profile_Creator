const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should return Intern school", () => {
      const schoolVal = "AdelUni";
      const intern = new Intern("Conrad", 15, "Hermes@gmail.com", schoolVal);
      expect(intern.school).toBe(schoolVal);
    });

    it("should return Intern string from getRole function", () => {
      const roleVal = "Intern";
      const intern = new Intern("Conrad", 15, "Hermes@gmail.com", "AdelUni");
      expect(intern.getRole()).toBe(roleVal);
    });

    it("should return username for GitHub from getGithub function", () => {
      const schoolVal = "AdelUni";
      const intern = new Intern("Conrad", 15, "Hermes@gmail.com", schoolVal);
      expect(intern.getSchool()).toBe(schoolVal);
    });
  });
});
