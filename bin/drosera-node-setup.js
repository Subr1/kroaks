#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const chalk = require("chalk");

console.log(chalk.green.bold("🚀 Drosera Node Setup CLI"));

const templateDir = path.join(__dirname, "..", "templates");
const targetDir = process.cwd();

const copyFile = (fileName) => {
  const src = path.join(templateDir, fileName);
  const dest = path.join(targetDir, fileName);
  fs.copyFileSync(src, dest);
  console.log(chalk.blue(\`✅ \${fileName} created.\`));
};

(async () => {
  const answer = await inquirer.prompt([
    {
      type: "confirm",
      name: "proceed",
      message: "Generate Drosera setup files in this directory?",
      default: true,
    },
  ]);

  if (!answer.proceed) {
    console.log(chalk.yellow("❌ Operation cancelled."));
    process.exit(0);
  }

  copyFile(".env.example");
  copyFile("docker-compose.yaml");
  copyFile("drosera.service");

  const scriptsPath = path.join(targetDir, "scripts");
  if (!fs.existsSync(scriptsPath)) fs.mkdirSync(scriptsPath);

  fs.copyFileSync(path.join(templateDir, "setup.sh"), path.join(scriptsPath, "setup.sh"));
  fs.chmodSync(path.join(scriptsPath, "setup.sh"), 0o755);
  console.log(chalk.blue("✅ setup.sh copied to scripts/"));

  console.log(chalk.green("\\n✅ All files generated."));
  console.log(chalk.cyan("👉 Next steps:\\n  - Edit .env\\n  - Run: bash scripts/setup.sh"));
})();
