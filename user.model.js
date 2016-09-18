var mongoose = require('mongoose'), Schema = mongoose.Schema;
var UserSchema = new Schema({
    username: { type: String, require: true },
    password: { type: String, require: true },
    websiteData: { type: Object, require: false }
});
var User = mongoose.model('user', UserSchema);
module.exports = { User: User };
//# sourceMappingURL=user.model.js.map