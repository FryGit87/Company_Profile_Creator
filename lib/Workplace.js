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

const createEngineerCard = (engineer) => {
  let originalTeam = fs.readFileSync(path.resolve(srcDir, "engi.html"), "utf8");
  originalTeam = joinTheTeam(originalTeam, "name", engineer.getName());
  originalTeam = joinTheTeam(originalTeam, "role", engineer.getRole());
  originalTeam = joinTheTeam(originalTeam, "email", engineer.getEmail());
  originalTeam = joinTheTeam(originalTeam, "id", engineer.getId());
  originalTeam = joinTheTeam(originalTeam, "github", engineer.getGithub());
  return originalTeam;
};

const createInternCard = (intern) => {
  let originalTeam = fs.readFileSync(
    path.resolve(srcDir, "intern.html"),
    "utf8"
  );
  originalTeam = joinTheTeam(originalTeam, "name", intern.getName());
  originalTeam = joinTheTeam(originalTeam, "role", intern.getRole());
  originalTeam = joinTheTeam(originalTeam, "email", intern.getEmail());
  originalTeam = joinTheTeam(originalTeam, "id", intern.getId());
  originalTeam = joinTheTeam(originalTeam, "school", intern.getSchool());
  return originalTeam;
};

const writeWorkplace = (htmlWorkplace) => {
  const fullPath = path.resolve(srcDir, "page-template.html");
  const teamFileTemplate = fs.readFileSync(fullPath, "utf-8");
  const finalTeamHtml = joinTheTeam(teamFileTemplate, "team", htmlWorkplace);
  return finalTeamHtml;
};

const joinTheTeam = (teamHtml, staffData, staffValue) => {
  const placeholderPattern = new RegExp("{{ *" + staffData + " *}}", "gm");
  const placeholderReplaceHtml = teamHtml.replace(
    placeholderPattern,
    staffValue
  );
  return placeholderReplaceHtml;
};
module.exports = createStaffroom;
