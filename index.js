const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;

app.get('/', (req, res) =>{
    res.send('WOW!, this is my second node');
});

app.listen(port, ()=>{
    console.log('Listening to port',port);
});

app.post('/users', (req, res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('post will hitted', req.body);
    // res.send('inside post')
    res.json(newUser)
})

const users = [
    {id: 0, name: 'shabana', email: 'shabana@gmail.com', phone: '01729341805' },
    {id: 1, name: 'timur', email: 'shabana@gmail.com', phone: '01729341805' },
    {id: 2, name: 'evana', email: 'shabana@gmail.com', phone: '01729341805' },
    {id: 3, name: 'rokibul', email: 'shabana@gmail.com', phone: '01729341805' },
    {id: 4, name: 'Jafor', email: 'shabana@gmail.com', phone: '01729341805' }, 
]

app.get('/users', (req, res) =>{
    const search = req.query.search;
    if(search){
        const searchText = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchText)
    }
    else{
        res.send(users)
    }; 
})

app.get('/users/:id', (req, res)=>{
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})
