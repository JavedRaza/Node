const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/mydb", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("coneected successfully");
    })
    .catch((err) => {
        console.log("error occured");
    })

//Define Schema
const Bio = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Father: {
        type: String,
        required: true
    },
    Age: Number,
    Study: Boolean,
    currentdate: {
        type: Date,
        default: Date.now
    }
})

// Models
const PersonalDetail = new mongoose.model("PersonalDetail", Bio);

const Javeddata = new PersonalDetail({
    name: "John",
    Father: "Doe",
    Age: 32,
    Study: false
})
Javeddata.save();