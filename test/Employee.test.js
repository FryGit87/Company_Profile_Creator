const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should return Employee name", () => {
      const name = "Hermes";
      const emp = new Employee(name);
      expect(emp.name).toBe(name);
    });

    it("should return Employee id", () => {
      const idVal = 15;
      const emp = new Employee("Conrad", idVal);
      expect(emp.id).toBe(idVal);
    });

    it("should return Employee email", () => {
      const emailVal = "Hermes@gmail.com";
      const emp = new Employee("Conrad", 15, emailVal);
      expect(emp.email).toBe(emailVal);
    });
  });
});
