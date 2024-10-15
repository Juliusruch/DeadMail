class Letter
{

    constructor(adress, message)
    {
        this.adress = adress;
        this.message = message;
        this.timeStamp = Date.now();
    }

    ageInMinutes()
    {
        return Math.floor((Date.now() - this.timeStamp) / 60000);
    }
}

module.exports = Letter;