

const notFound = (req,res)=>{
    res.sendStatus(404).send("Such Route Doesn't Exists")

}

module.exports = notFound