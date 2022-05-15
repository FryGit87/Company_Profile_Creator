const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should return manager office number", () => {
      const officeNumVal = 2;
      const manager = new Manager(
        "Conrad",
        15,
        "Hermes@gmail.com",
        officeNumVal
      );
      expect(manager.officeNumber).toBe(officeNumVal);
    });

    it("should return Manager string from getRole function", () => {
      const roleVal = "Manager";
      const manager = new Manager("Conrad", 15, "Hermes@gmail.com", 2);
      expect(manager.getRole()).toBe(roleVal);
    });

    it("should return office number from getOfficeNumber function", () => {
      const officeNumVal = 2;
      const manager = new Manager(
        "Conrad",
        15,
        "Hermes@gmail.com",
        officeNumVal
      );
      expect(manager.getOfficeNumber()).toBe(officeNumVal);
    });
  });
});
