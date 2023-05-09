const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());


const users = [
    { id: 1, name: 'adil', email: 'adil@gmail.com' },
    { id: 2, name: 'john', email: 'jhon@gmail.com' },
    { id: 3, name: 'maria', email: 'maria@gmail.com' },
]

app.get('/', (req, res) => {
    res.send('User management server running')
})

app.get('/users', (req, res) => {
    res.send(users);
})

app.listen(port, () => {
    console.log(`server is running on PORT: ${port}`)
})