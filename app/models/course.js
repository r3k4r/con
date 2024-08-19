import mongoose from 'mongoose';
import { getNextCourseID } from '@/app/util/autoIncrement';


const courseSchema = new mongoose.Schema({
  courseID: {
    type: Number,
    unique: true,
    required: true,
    default: 0 // Initially, set a placeholder value; it will be updated on save
  },
  EnglishName: {
    type: String,
    required: true,
  },
  KurdishName: {
    type: String,
    required: true,
  },
  ArabicName: {
    type: String,
    required: true,
  },
  Englishdescription: { 
    type: String,
    required: true,
  },
  Kurdishdescription: {
    type: String,
    required: true,
  },
  Arabicdescription: {
    type: String,
    required: true,
  },
  EnglishLevel: {
    type: String,
    required: true,
  },
  KurdishLevel: {
    type: String,
    required: true,
  },
  ArabicLevel: {
    type: String,
    required: true,
  },
  EnglishAbout: {
    type: String,
    required: true,
  },
  KurdishAbout: {
    type: String,
    required: true,
  },
  ArabicAbout: {
    type: String,
    required: true,
  },
  EnglishPeriod: {
    type: String,
    required: true,
  },
  KurdishPeriod: {
    type: String,
    required: true,
  },
  ArabicPeriod: {
    type: String,
    required: true,
  },
  EnglishTime: {
    type: String,
    required: true,
  },
  KurdishTime: {
    type: String,
    required: true,
  },
  ArabicTime: {
    type: String,
    required: true,
  },
  EnglishCertificate: {
    type: String,
    required: true,
  },
  KurdishCertificate: {
    type: String,
    required: true,
  },
  ArabicCertificate: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

courseSchema.pre('save', async function (next) {
  if (this.isNew) {
    try {
      const nextID = await getNextCourseID();
      this.courseID = nextID;
    } catch (error) {
      console.error('Error getting next course ID:', error);
      return next(error);
    }
  }
  next();
});

const Course = mongoose.models.Course || mongoose.model('Course', courseSchema);
export default Course;
