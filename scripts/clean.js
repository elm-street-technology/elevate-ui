#!/usr/bin/env node
const fs = require("fs");
const rimraf = require("rimraf");

let good = 0;
let bad = 0;
fs.readdirSync("src").forEach((name) => {
  try {
    rimraf.sync(name);
    good++;
  } catch (e) {
    bad++;
    console.log(`couldn't delete ${name}`);
  }
});

console.log(
  `successfully cleaned ${good} out of ${good + bad} entries${
    bad ? "; " + bad + " failures" : ""
  }`
);

process.exit(bad);
