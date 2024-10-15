const express =  require('express');
const cors = require('cors');
const app = express();
const port = 5000;


app.use(cors());
app.use(express.json());


const MessageMap = new Map();


app.post('/api/sendLetter', (req, res) => {
    const {adress, message} = req.body;
    console.log(adress + " " + message);
    MessageMap.set(adress, message);
    res.status(201).json("Letter send succesfully");
})



app.listen(port, () => {
    console.log('Server is running on port' + port);
})
