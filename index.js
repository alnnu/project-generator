#!/usr/bin/env/ node

import inquirer from "inquirer";
import fs from 'fs';
import path from 'path';

const Cur_Dir = process.cwd()

const options = fs.readdirSync(
    path.resolve(
        './template',
    ),
    'utf-8',
);

const questions = [
    {
        name: 'project',
        type: 'list',
        message: 'What project template would you like to generate?',
        choices: options
    },
    {
        name: 'project-name',
        type: 'input',
        message: 'Project name:',
        validate: function (input) {
            if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
            else return 'Project name may only include letters, numbers, underscores and hashes.';
        }
    }
]


inquirer.prompt(questions).then(answers => {
    const project = answers['project']
    const name = answers['project-name']

    createDir(project,name)
})


function createDir(project, name) {
    const template = `./template/${project}`

    const fileTOcreate = fs.readdirSync(template);

    fs.mkdirSync(`${Cur_Dir}/${name}`);

    fileTOcreate.forEach(file => {
        const origFilePath = `${template}/${file}`

        const stats = fs.statSync(origFilePath)

        if(stats.isFile()) {
            const contents = fs.readFileSync(origFilePath, 'utf8')
            const writePath = `${Cur_Dir}/${name}/${file}`
            fs.writeFileSync(writePath, contents, 'utf8')
        } else if (stats.isDirectory()) {
            createDir(`${project}/${file}`, `${name}/${file}`);
        }
    })

}
