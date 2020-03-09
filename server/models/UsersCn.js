const {Schema, model} = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const schema = new Schema ({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
});
schema.plugin(mongoosePaginate);

schema.index({fullname: 'text'});

module.exports = model('UserCn', schema);