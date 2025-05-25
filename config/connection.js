const mongoose = require('mongoose');

const URI ='mongodb+srv://bstivencanor:GACV0wsCkAFbGGiS@2873441.wbrxdxb.mongodb.net/TiendaBL'

mongoose.connect(URI);

module.exports = mongoose;