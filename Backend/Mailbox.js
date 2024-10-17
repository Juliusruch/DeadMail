class Mailbox
{

    constructor(adress)
    {
        this.adress = adress;
        this.letters = [];
    }

    addLetter(letter)
    {
        this.letters.push(letter);
    }

    emptyBox()
    {
        return this.letters.length == 0;
    }

    getOldestLetter()
    {
        return this.letters[0];
    }

    getFreeLetterSlots()
    {
        return 10 - this.letters.length;
    }

    deleteOldestLetter()
    {
        this.letters.shift();
    }
}

module.exports = Mailbox;