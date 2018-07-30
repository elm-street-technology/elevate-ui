#!/usr/bin/env node
/* eslint-disable no-console */
const { lstatSync, readdirSync } = require("fs");
const { join } = require("path");
const { exec } = require("child_process");

const cwd = process.cwd();
const srcComponentFiles = `${cwd}/src/`;
const docComponentFiles = `${cwd}/demo/src/docs`;
const docExamples = `${cwd}/demo/public/docs`;

const isDirectory = (source) => lstatSync(source).isDirectory();
const getDirectories = (source) =>
  readdirSync(source)
    .map((name) => join(source, name))
    .filter(isDirectory);

const sourceComponents = getDirectories(srcComponentFiles);

// copy documentation examples to public
exec(`cp -R ${docComponentFiles} ${docExamples}`);

/**
 * Some of these may error out, and thats okay
 **/
sourceComponents.forEach((sourceComponent) => {
  exec(
    `yarn docgen ${sourceComponent}/index.js --pretty -o ${sourceComponent}/component.json`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    }
  );
});
