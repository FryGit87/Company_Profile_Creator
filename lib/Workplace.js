const fs = require("fs");

const createStaffroom = (staff) => {
  const htmlWorkplace = [];

  htmlWorkplace.push(
    staff
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => createBossCard(manager))
  );
  htmlWorkplace.push(
    staff
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => createEngineerCard(engineer))
  );
  htmlWorkplace.push(
    staff
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => createInternCard(intern))
  );

  return writeWorkplace(htmlWorkplace.join(""));
};
