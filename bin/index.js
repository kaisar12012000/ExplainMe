#! /usr/bin/env node

const yargs = require("yargs");
const utils = require("./utils.js");
const chalk = require("chalk")

const usage = "\nUsage: tran <lang_name> sentence to be translated";
const options = yargs.usage(usage)
                     .option("f", {
                        alias: "file",
                        describe: "Specifies location of code file.",
                        type: false
                     })
                     .help(true)
                     .argv;

if(yargs.argv._[0] == null && (!yargs.argv.f && !yargs.argv.file) ) {
    utils.showHelp();
    return
}

if(yargs.argv.f || yargs.argv.file) {
    // code to english
    console.log(chalk.yellow("Reading code at " + yargs.argv.f + "...\n"))
    utils.explainCode(yargs.argv.f)
    return;
}
