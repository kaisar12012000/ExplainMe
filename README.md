# ExplainMeA2S

## Table of contents
1. #### Introduction
2. #### Requirements
3. #### Installation
4. Usage
5. Report


## Introduction

A state-of-the-art command line interface that helps you understand code in a specific file. It uses Google's Generative AI to understand your code and explan you in english.

## Requirements

To use explain me you should have the following.
1. A Laptop.PC
1. NodeJS
2. Google Generative API Key


### Installation
The first step is to clone this repository.
Open command line and run the following command.
```
git clone https://github.com/kaisar12012000/ExplainMEA2S.git
```
The next step is to go to the master branch and intall all the required packages.
```
cd ExplainMeA2S
git checkout master
npm i
```
Now in the `.env` file type in your API key and save it.
Once you have added your google generative AI API key, it is time to intall it.
Run the following command.
```
npm i -g .
```
You are all set to understand your the code you write.
To test whether everything is intalled properly run the following command.
```
explainme
```
The following output show be visible.
```

Usage: tran -f <path to file you want to understand>

Options:
        --version:       Show version number.           [boolean]
-f,     --file           Specify path of file.          [boolean]
        -help            Show help.                     [boolean]

```

### Usage
Thus installation is successful and our CLI is ready to use.
To understand a code run the following command.
```
explainme -f <complete location of the file you want explanation for>
```
Please watch the following demo for reference.

https://drive.google.com/file/d/1E0P4HoauDhL3SUJphWpXjzePB4bf1gMg/view?usp=sharing

### Report

#### Objective:
To build a CLI that will help developers understand the code written in an active file.
#### Technologies used
NodeJS
#### Packages used
fs
process
dotenv
axios
chalk
yargs
#### Approach
Project was started by initializing npm package.json followed by installing the basic yet main packages. `yargs` was installed to efficiently handle arguments passed in the command line. Then I started working on the utility functions. Since this project was a high level project a I decided to first follow the reference material and build the language translation CLI and later on modify it to implement the required functionality.
I wrote the utility functions and built the language translation CLI which helped me understand how I can use `yargs` to achive a code explaning CLI. I started making changes to existing functions such that instead of taking the language and sentence to be translated as input it would take the `-f` flag and the location of the file as input. And soon I was able to do that.
Now only the main feature was to left to implement and with some deep thinking I implemented it to. I generated an API Key for my Google Generative AI API and used it to send my code via a post request and get the expantion as reponse.
Once I achived this much a basic prototype of the project was ready. It was time to clean the codebase and I started to do that. Once all clean up was done I tested the code, added an error handler and pushed it to github.
#### Challenges faced
The biggest challenge I faced was reagrding how I was going to get the explaination. At first I thought we could use any API and do it but then after carefully reading the requirements I understood we had to use only LLM API's. I quickly started researching and got confused in the documentations but with little more effort was able to understand it. I made a judgement call to use Google PaLM API over OpenAI based on important factors and got stuck implementing the API call.
I first tried to do it with the help of `@google/generative-ai` package for nodeJS but faced issues as it uses fetch to call the API but in NodeJS fetch is not present so I decided to go with a more crude approach and implemented the API call using axios.
After resoling all challenges the project was ready.
#### Suggestions or Improvements
1. The current version of project only gives you an explanation of any code you provide the location to. I look forward to implement a coversion feature that can convert code from one language to another.
2. The current version of code has one problem i.e. it only runs successfully when the terminal is open at the root directory. I would want to work on figuring out why its not able to read the API key when invoked out side the root directory. 
