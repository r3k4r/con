// models/counter.js
import mongoose from 'mongoose';

const counterSchema = new mongoose.Schema({
  sequence_name: { type: String, required: true, unique: true },
  sequence_value: { type: Number, default: 0 }
});

const Counter = mongoose.models.Counter || mongoose.model('Counter', counterSchema);
export default Counter;
