const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Govpedia = new Schema({
    title: {
        type: String,
        enum: [
            '',
            'Dr',
            'Engineer',
            'Honorable',
            'Mr',
            'Mrs',
            'Ms',
            'Professor',
        ],
    },
    name: {
        type: String,
        //required: [true, 'Please add a name'],
        trim: true,
    },
    age: {
        type: Number,
    },
    gender: {
        type: String,
        enum: [
            'Male',
            'Female',
        ],
    },
    districtRepresented: {
        type: String,
    },
    yearInService: {
        type: Number,
    },
    email: {
        type: String,
        match: [
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please use a valid email',
        ],
    },
    contact: {
        type: String,
        //maxlength: [20, 'Contact can not be longer than 20 characters'],
    },
    twitter: {
        type: String,    
    },
    instagram: {
        type: String,
    },
    website: {
        type: String,
    },
    portfolio: {
        type: String,
    },
    partyAffiliation: {
        type: String,
        enum: [
            'Democratic Party',
            'Republican Party',
        ],
    },
    portfolio: {
        type: String,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
});
module.exports = mongoose.model('Govpedia', Govpedia);