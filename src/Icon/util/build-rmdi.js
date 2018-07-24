#!/usr/bin/env node

// Based on @jxnblk's rmdi: https://github.com/jxnblk/rmdi/blob/master/build.js
const fs = require("fs");
const path = require("path");
const readdir = require("recursive-readdir");
const camelCase = require("lodash/camelcase");
const uniqBy = require("lodash/uniqby");
const exec = require("child_process").exec;

const pkgPath = path.join(
  __dirname,
  "../../../node_modules/material-design-icons"
);
const outDir = path.join(__dirname, "./svg");

const ignore = (file, stats) => {
  if (stats.isDirectory()) return false;
  // ignore svg/design directories
  if (file === "design") return true;
  return !/\.svg$/.test(file);
};

const is24px = (filename) => /24px.svg$/.test(filename);

const rename = (filename) =>
  path
    .basename(filename, path.extname(filename))
    .replace(/^ic_/, "")
    .replace(/_24px$/, "")
    .replace(/^3d/, "ThreeD"); // remove number from beginning

const readFile = (filename) => {
  const content = fs.readFileSync(filename, "utf8");
  const name = camelCase(rename(filename));
  return {
    filename,
    name,
    content,
  };
};

const writeFile = ({ name, content }) => {
  const filename = path.join(outDir, name + ".svg");
  fs.writeFileSync(filename, content);
};

const copy = async () => {
  const files = await readdir(pkgPath, [ignore]);
  const icons = uniqBy(files, (file) => path.basename(file))
    .filter(is24px)
    .map(readFile)
    .sort((a, b) => (a.name < b.name ? -1 : 1));

  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

  icons.forEach(writeFile);
};

copy().then(() => {
  // Convert the SVGs we just generated to Icon Components: https://github.com/c8r/pixo
  exec(
    "yarn pixo src/Icon/build/svg -d src/Icon -t src/Icon/build/template -i -c -r",
    (error, stdout, stderr) => {
      //do whatever here
      if (error) process.stdout.write("error: " + error);
      if (stdout) process.stdout.write("stdout: " + stdout);
      if (stderr) process.stdout.write("stderr: " + stderr);
    }
  );
});
