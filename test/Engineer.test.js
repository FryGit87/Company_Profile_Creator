const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should return Engineer Github", () => {
      const gitVal = "githubAcct";
      const engi = new Engineer("Conrad", 15, "Hermes@gmail.com", gitVal);
      expect(engi.github).toBe(gitVal);
    });

    it("should return Engineer string from getRole function", () => {
      const roleVal = "Engineer";
      const engi = new Engineer("Conrad", 15, "Hermes@gmail.com", "githubAcct");
      expect(engi.getRole()).toBe(roleVal);
    });

    it("should return username for GitHub from getGithub function", () => {
      const gitVal = "githubAcct";
      const engi = new Engineer("Conrad", 15, "Hermes@gmail.com", gitVal);
      expect(engi.getGithub()).toBe(gitVal);
    });
  });
});
