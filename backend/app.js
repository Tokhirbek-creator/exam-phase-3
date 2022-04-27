require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
let db = require('./db');
const PORT = 3001;
const app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(morgan('dev'));

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

//Получаем массив комнат
app.get('/rooms', (req, res) => {
    const rooms = db.map(el =>  ({id:el.id, room:el.room}))
    res.json(rooms);
});
//Отдает массив устройств в комнате
app.get('/rooms/:id', (req, res) => {
    const room = db.find(el => el.id === +req.params.id)
    res.json({devices: room?.devices});
});

app.listen(PORT, ()=>{
    console.log('Server has been started on PORT ' + PORT)
})
