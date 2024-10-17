const Letter = require("./Letter");
const Mailbox = require("./Mailbox");
const express =  require('express');
const cors = require('cors');
const app = express();
const port = 5000;




app.use(cors());
app.use(express.json());


const letterMap = new Map();
var count = 0;


const collectLetters = (mailbox) => {
    console.log(mailbox.letters)
    console.log(count++);
    if (mailbox.emptyBox())
    {
        letterMap.delete(`${mailbox.adress}`);
        return;
    }

    if (mailbox.getOldestLetter().ageInMinutes() >= 1)
    {
        console.log("deleted: " + mailbox.getOldestLetter());
        mailbox.deleteOldestLetter();
    }

}

function checkMail()
{
    letterMap.forEach(collectLetters);
}

setInterval(checkMail, 1000);


app.post('/api/sendLetter', (req, res) => {
    const {adress, message} = req.body;

    const letter = new Letter(message);
    
    const mailWrapper = letterMap.get(adress);
    if (!mailWrapper)
    {
        const mail = new Mailbox(adress);
        mail.addLetter(letter);
        letterMap.set(adress, mail);
        res.status(201).json(`Letter sent!`);
    }
    else if (mailWrapper.getFreeLetterSlots() > 0)
    {
        mailWrapper.addLetter(letter);
        res.status(201).json(`Letter sent!`);
    }
    else
    {
        res.status(201).json(`Mailbox has reached its maximum capacity!`);
    }
    
})



app.listen(port, () => {
    console.log(`Server is now running on port: ${port}... Waiting for input...`);
})


