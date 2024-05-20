const express = require('express'); 
const bodyParser = require('body-parser'); 
const app = express();
const port = process.env.PORT || 3000; 
app.use(bodyParser.json());

let users = [ 
{ id: 1, name: 'John Doe', email: 'john@example.com' }, 
{ id: 2, name: 'Jane Smith', email: 'jane@example.com' } 
]; 

// Get all users 
app.get('/users', (req, res) => { 
res.json(users); 
}); 

app.use(bodyParser.json());
app.post('/post', (req, res) => { 
    // var {name} = req.body;
    const { name, email } = req.body;
    res.send(`Welcome ${name}, deatails has been sent to your email id: ${email}`)
});

app.post("file-upload", (req, res) => {
    const {image} = req.sendFile(filepath);
    res.send(`${image.name}`)

});
  
    
app.listen(port, () => { 
console.log(`Server is running on port ${port} localhost:3000`); 
});