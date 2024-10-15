const Letter = require("./Letter");
const express =  require('express');
const cors = require('cors');
const app = express();
const port = 5000;




app.use(cors());
app.use(express.json());


const letterMap = new Map();


const collectLetters = (letters) => {
    console.log("checkup");
    conmsole.log(letters)
    if (letters.length == 0)
    {
        return;
    }

    if (letters[0].ageInMinutes() >= 1)
    {
        console.log("deleted: " + letters[0]);
        letters.shift();
    }

}

function checkMail()
{
    letterMap.forEach(collectLetters);
}

setInterval(checkMail, 6000);


app.post('/api/sendLetter', (req, res) => {
    const {adress, message} = req.body;

    const letter = new Letter(adress, message);
    
    if (!letterMap.get(adress))
    {
        letterMap.set(adress, [letter]);
    }
    else
    {
        letterMap.get(adress).push(letter);
    }
    res.status(201).json(`Test`);
    
})



app.listen(port, () => {
    console.log(`Server is now running on port: ${port}... Waiting for input...`);
})


