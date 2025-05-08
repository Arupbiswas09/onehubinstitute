import mongoose from 'mongoose';

const facultySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  position: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true,
    enum: ['academic', 'music', 'computer', 'administration']
  },
  specialization: {
    type: [String],
    required: true
  },
  experience: {
    type: Number,
    required: true
  },
  qualifications: {
    type: [String],
    required: true
  },
  image: {
    type: String
  },
  bio: {
    type: String,
    required: true
  },
  achievements: {
    type: [String]
  },
  isActive: {
    type: Boolean,
    default: true
  }
});

export default mongoose.model('Faculty', facultySchema);