const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should return Employee name", () => {
      const name = "Hermes";
      const emp = new Employee(name);
      expect(emp.name).toBe(name);
    });
  });
});
