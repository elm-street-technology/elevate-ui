#!/usr/bin/env node
/* eslint-disable no-console */
const { lstatSync, readdirSync } = require("fs");
const { join } = require("path");
const { exec } = require("child_process");
const endsWith = require("lodash/endsWith");
const colors = require("colors"); // eslint-disable-line

const cwd = process.cwd();
const srcComponentFiles = `${cwd}/src/`;
const docComponentFiles = `${cwd}/demo/src/docs`;
const docExamples = `${cwd}/demo/public/`;
const feedFlowTypes = `${cwd}/src/Feed/flow-types.js`;

const isDirectory = (source) => lstatSync(source).isDirectory();
const getDirectories = (source) =>
  readdirSync(source)
    .map((name) => join(source, name))
    .filter(isDirectory);

const sourceComponents = getDirectories(srcComponentFiles);

// copy documentation examples to public
exec(`cp -R ${docComponentFiles} ${docExamples}`);

// copy Feed flow-types.js to public
exec(`mkdir ${docExamples}docs/Feed/`);
exec(`cp ${feedFlowTypes} ${docExamples}docs/Feed`);

// create json files for each component
sourceComponents.forEach((sourceComponent) => {
  if (
    endsWith(sourceComponent, "src/withStyles") ||
    endsWith(sourceComponent, "src/Loadable") ||
    endsWith(sourceComponent, "src/ThemeProvider") ||
    endsWith(sourceComponent, "src/Color")
  ) {
    console.log(
      `Skipping documentation for the ${sourceComponent} directory...`.yellow
    );
    return;
  }
  return exec(
    `yarn docgen ${sourceComponent}/index.js --pretty -o ${sourceComponent}/component.json`,
    (error, stdout) => {
      if (error) {
        console.error(`${error}`.red);
        return;
      }
      console.log(`${stdout}`);
      console.log(`Created documentation for ${sourceComponent}`.green);
    }
  );
});
