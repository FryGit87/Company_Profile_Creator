const fs = require("fs");
const path = require("path");

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

const srcDir = path.resolve(__dirname, "../src");

const createBossCard = (manager) => {
  let originalTeam = fs.readFileSync(
    path.resolve(srcDir, "manager.html"),
    "utf8"
  );
  originalTeam = joinTheTeam(originalTeam, "name", manager.getName());
  originalTeam = joinTheTeam(originalTeam, "role", manager.getRole());
  originalTeam = joinTheTeam(originalTeam, "email", manager.getEmail());
  originalTeam = joinTheTeam(originalTeam, "id", manager.getId());
  originalTeam = joinTheTeam(
    originalTeam,
    "officeNumber",
    manager.getOfficeNumber()
  );
  return originalTeam;
};

const writeWorkplace = (htmlWorkplace) => {
  const originalTeam = fs.readFileSync(
    path.resolve(srcDir, "page-template.html"),
    "utf8"
  );
  return joinTheTeam(originalTeam, "team", htmlWorkplace);
};

const joinTheTeam = (originalTeam, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return originalTeam.replace(pattern, value);
};

module.exports = createStaffroom;
