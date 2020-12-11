import mongoose from 'mongoose';
import { MONGO_URI } from '../config/config';
export const db = mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});