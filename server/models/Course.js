import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['academic', 'music', 'computer']
  },
  description: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: function() {
      return this.category === 'academic' || this.category === 'music';
    }
  },
  subjects: {
    type: [String],
    required: function() {
      return this.category === 'academic';
    }
  },
  duration: {
    type: String,
    required: true
  },
  features: {
    type: [String]
  },
  image: {
    type: String
  },
  fees: {
    type: Number,
    required: true
  },
  isPopular: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Course', courseSchema);