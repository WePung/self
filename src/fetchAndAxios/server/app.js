const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json()) // json parsing을 위해서
app.use(express.urlencoded({extended:true})) // parsing을 위해서

let id = 2;
const todoList = [{
    id: 1,
    text:"할 일 1",
    done: false,
}];

app.get('/api/todo', (req, res)=>{
    res.json(todoList);
});

app.post('/api/todo', (req, res)=>{
    const {text, done} = req.body;
    console.log("req.body = "+ req.body);
    todoList.push({
        id : id++,
        text,
        done
    });
    return res.send('success');
});

app.listen(4000, ()=>{
    console.log("server start")
});