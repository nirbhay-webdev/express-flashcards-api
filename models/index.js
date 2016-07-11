var mongoose = require("mongoose");

mongoose.connect(process.env.MONGOLAB_URI || 
    process.env.MONGOHQ_URI || "mongodb://user:pass@host:port/flashcards");

// After creating a new model, require and export it:
module.exports.Flashcard = require("./flashcard.js");
