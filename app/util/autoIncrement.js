// utils/autoIncrement.js
import Counter from '@/app/models/counter';

export async function getNextCourseID() {
  try {
    const counter = await Counter.findOneAndUpdate(
      { sequence_name: 'courseID' },
      { $inc: { sequence_value: 1 } },
      { new: true, upsert: true }
    );
    return counter.sequence_value;
  } catch (error) {
    console.error('Error getting next course ID:', error);
    throw error;
  }
}
