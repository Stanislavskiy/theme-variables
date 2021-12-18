#!/usr/bin/env node
import yargs from 'yargs';
// import fs from 'fs';

const options = yargs
 .usage("Usage: -c <config>")
 .option("c", { alias: "config", describe: "Path to the theme config file", type: "string", demandOption: true })
 .argv;

console.log('CLI interface test', options.config);