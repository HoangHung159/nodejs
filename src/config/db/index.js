const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_edu_dev', {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true,
        });
        console.log('succes');
    } catch (error) {
        console.log('fail');
    }
}

module.exports = { connect };
