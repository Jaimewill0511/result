const fetch = require('node-fetch');
const fs = require('fs');




fetch('http://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(json =>  {
    let body = JSON.stringify(json, null, 2);
    fs.writeFile('posts.json', body, (err) => {
        if(err) throw err;
        //If there is an error
        console.log('file created succesfully')
    })
})

