'use strict';
    const mongoose = require("mongoose");
    var validator = require("validator")

    const Schema = mongoose.Schema;

    const TodoSchema = new Schema({
        username: {
            type: String,
            required: true,
            unique: [true]
        },
        userimg: {
            data: Buffer,
            contentType: String
        }
        
    });

module.exports = mongoose.model("Nikxgramcollection", TodoSchema);