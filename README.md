# Technology Term Hub

<img src="https://github.com/johncuseyhub/GettingStarted/blob/main/HubBanner.png" alt="John Cusey Hub Logo" height="150" width="1000">

 <a href="https://johncuseyhub.github.io/TechnologyTermsHub/static/index.html">Technology Terms Database</a>

# Developers Notes
## Create Project

After the package.json was generated I changed scripts section with a start script so when I type start in the command console the server will start.       

```
"scripts": {
    "start": "node server.js"
  },
  ```

```
C:\Users\john\Desktop\New folder>npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (new-folder) terms
version: (1.0.0)
description: Program to save technology terms using Node JS and Express
entry point: (index.js) server.js
test command:
git repository:
keywords:
author: John Cusey
license: (ISC)
About to write to C:\ProjectFolder\package.json:

{
  "name": "terms",
  "version": "1.0.0",
  "description": "Program to save technology terms using Node JS and Express",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "John Cusey",
  "license": "ISC"
}


Is this OK? (yes) yes

ProjectFolder>
```
## Adding Express to the project

```
ProjectFolder> npm install express
added 50 packages, and audited 51 packages in 2s

2 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```
