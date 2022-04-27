const express = require('express');
const path = require('path');
var fs = require('fs');

const app = express();

const port = 3000;

app.use(express.static(path.join(__dirname,'./static')));


app.get('/', (request, response) => {

    response.sendFile(path.join(__dirname,'./static/index.html'));
});


app.listen( port, ()=> {
    console.log(`Express server listening on port ${port} !`);
});


try {
    // read contents of the file
    const data = fs.readFileSync('./static/index.html');

    const fileContent = data.toString();

     //console.log(fileContent);

    // split the contents by new line
    const lines = fileContent.split(/\r?\n/);

    // print all lines
    lines.forEach((line) => {
        if(line.indexOf('id="tableButtons"') >= 0){
        console.log(line);
        }
    });

} catch (err) {
    console.error(err);
}

  
