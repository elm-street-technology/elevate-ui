const { lstatSync, readdirSync } = require("fs");
const { join } = require("path");
const { exec } = require("child_process");

const source = process.argv[2];

const isDirectory = (source) => lstatSync(source).isDirectory();
const getDirectories = (source) =>
  readdirSync(source)
    .map((name) => join(source, name))
    .filter(isDirectory);

const directories = getDirectories(source);

directories.forEach((directory) => {
  exec(
    `yarn docgen ${directory}/index.js --pretty -o ${directory}/component.json`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`); //eslint-disable-line
        return;
      }
      console.log(`stdout: ${stdout}`); //eslint-disable-line
      console.log(`stderr: ${stderr}`); //eslint-disable-line
    }
  );
  // return console.log(directory);
});

// console.log(getDirectories(source));
