const mongoose = require('mongoose');

const { Schema } = mongoose;


const comicSchema = new Schema ({
    title: {
        type: String,
        required: [true, 'A title is required.'],
        minLength: [1, 'The title length must be at least 1 character.']
    },
    author: {
        type: String,
        required: [true, 'The author\'s name is required.'],
        minLength: [1, 'The author\'s name must be at least 1 character.']
    },
    publisher: {
        type: String,
    },
    genre: {
        type: String,
        default: 'funny',
    },
    pages: {
        type: Number,
        required: [true, 'Number of pages is required.'],
        min: [1, 'Enter a value greater than 0.']
    },
    rating: {
        type: Number,
        required: [true, 'Enter a rating between 1 and 5.'],
        min: [1, 'Please enter a number between 1 and 5'],
        max: [5, 'Please enter a number between 1 and 5.']
    },
    synopsis: {
        type: String,
        required: [true, 'A synopsis is required.'],
        minLength: [20, 'The synopsis length must be at least 20 characters.']
    },
    image: {
        type: String,
    },
})

const Comic = mongoose.model('Comic', comicSchema);

module.exports = Comic;