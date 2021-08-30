const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
/* const routes = require('./controllers'); */

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
)


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});