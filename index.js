const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const staff = [];
const hire = require("./lib/workplace");
const fileDir = path.resolve(__dirname, "dist");
const filePath = path.join(fileDir, "Workplace.html");

function run() {
  getManagerInfo();
}

function getManagerInfo() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the team manager's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the team manager's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the team manager's email address?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the team manager's office number?",
      },
    ])
    .then((data) => {
      const manager = new Manager(
        data.name,
        data.id,
        data.email,
        data.officeNumber
      );
      staff.push(manager);
      addStaff();
    });
}

function getEngineerInfo() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the engineer's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineer's email?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the engineer's username for GitHub?",
      },
    ])
    .then((data) => {
      const engineer = new Engineer(
        data.name,
        data.id,
        data.email,
        data.github
      );
      staff.push(engineer);
      addStaff();
    });
}

function getInternInfo() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the intern's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the intern's email?",
      },
      {
        type: "input",
        name: "school",
        message: "What is the intern school?",
      },
    ])
    .then((data) => {
      const intern = new Intern(data.name, data.id, data.email, data.school);
      staff.push(intern);
      addStaff();
    });
}

function addStaff() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "staffRole",
        message: "Would you like to hire an Engineer or Intern?",
        choices: ["Engineer", "Intern", "No budget to employee anymore staff!"],
      },
    ])
    .then((data) => {
      if (data.staffRole === "Engineer") {
        getEngineerInfo();
      } else if (data.staffRole === "Intern") {
        getInternInfo();
      } else {
        concatenateStaff();
      }
    });
}

function concatenateStaff() {
  // need to fs
  fs.writeFileSync(filePath, hire(staff), "utf-8");
}

run();
