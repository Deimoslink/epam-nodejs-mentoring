import * as CONFIG from  '../config/app.config';
import {userSchema} from '../schemas/user-mongoose-schema';
const mongoose = require('mongoose');
const conStr = CONFIG.connections.mongoose;

mongoose.connect(conStr);

const User = mongoose.model('User', userSchema);

User.collection.drop(() => {
    mongoose.disconnect();
});
