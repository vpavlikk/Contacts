const {Schema, model, Types} = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const schema = new Schema ({
    fullname: {type: String, required: true},
    user_id: {type: Types.ObjectId},
    email: {type: String},
    number: {type: String, required: true},
    additional_number: {type: String},
    type: {type: String},
    img: {type: String},
    company: {type: String},
    ava_src: {type: String}
});
schema.plugin(mongoosePaginate);

schema.index({fullname: 'text'});

module.exports = model('Contact', schema);
