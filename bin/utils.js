const fs = require("fs");
const process = require("process")
const axios = require("axios")
const chalk = require('chalk');  
// import boxen from 'boxen';

require("dotenv").config()

function getExplanation (code) {

    const config = {
        'Content-Type': 'application/json'
    }
    const requestData = {
        "contents" : [{"parts":[{"text":"Explain the following code: \n"+code}]}]
    }

    axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GOOGLE_GENERATIVE_AI_API_KEY}`, requestData, config)
         .then(res => {
            console.log(chalk.hex("#83aaff")("Explanation:\n"))
            console.log(chalk.green(res.data.candidates[0].content.parts[0].text))
         })
         .catch(err => {
            console.error(chalk.red("Request to Google Generative AI API failed!\n"), err.response.data.error)
         })

}

function explainCode(file) {
    fs.readFile(file, "utf-8", (err, fileContent) => {
        if (err) {
            console.error("Error reading the file", err)
        }
        const code = fileContent // code written the file passed.
        
        getExplanation(code)

    })
}

const usage = "\nUsage: tran -f <path to file you want to understand>";

function showHelp () {
    console.log(usage);
    console.log("\nOptions: \r")
    console.log("\t--version:\t "+"Show version number." + "\t\t" + "[boolean]\r")
    console.log("-f, \t--file\t" + " " + "\t Specify path of file." + "\t\t" + "[boolean]\r")
    console.log("\t-help\t\t"+ ' Show help.' + '\t\t\t' + '[boolean]\n')
}

module.exports = { explainCode: explainCode, showHelp: showHelp };