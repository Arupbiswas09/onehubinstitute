import mongoose from 'mongoose';

const learningObjectiveSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  standards: [{
    type: String,
    required: true
  }],
  assessmentCriteria: [{
    type: String,
    required: true
  }]
});

const weeklyPlanSchema = new mongoose.Schema({
  week: {
    type: Number,
    required: true
  },
  topics: [{
    type: String,
    required: true
  }],
  activities: [{
    type: String,
    required: true
  }],
  resources: [{
    type: String
  }],
  assessments: [{
    type: String
  }]
});

const quarterSchema = new mongoose.Schema({
  quarter: {
    type: Number,
    required: true,
    enum: [1, 2, 3, 4]
  },
  learningObjectives: [learningObjectiveSchema],
  weeklyPlans: [weeklyPlanSchema]
});

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  quarters: [quarterSchema],
  resources: [{
    type: String
  }],
  prerequisites: [{
    type: String
  }]
});

const curriculumSchema = new mongoose.Schema({
  grade: {
    type: Number,
    required: true,
    enum: [5, 6, 7, 8, 9, 10, 11, 12]
  },
  board: {
    type: String,
    required: true,
    enum: ['CBSE', 'ICSE', 'State']
  },
  stream: {
    type: String,
    enum: ['Science', 'Commerce', 'Humanities', null],
    default: null
  },
  academicYear: {
    type: String,
    required: true
  },
  subjects: [subjectSchema],
  technologyIntegration: {
    digitalLiteracy: {
      type: String,
      required: true
    },
    codingLanguages: [{
      type: String
    }],
    projects: [{
      title: String,
      description: String,
      duration: String,
      objectives: [String]
    }]
  },
  musicEducation: {
    theory: {
      type: String,
      required: true
    },
    practical: {
      type: String,
      required: true
    },
    instruments: [{
      name: String,
      skillLevel: String,
      requirements: [String]
    }],
    performances: [{
      type: String
    }]
  },
  assessmentGuidelines: {
    formative: [{
      type: String,
      required: true
    }],
    summative: [{
      type: String,
      required: true
    }],
    projectBased: [{
      type: String
    }]
  },
  implementationGuide: {
    timeAllocation: {
      type: Map,
      of: Number,
      required: true
    },
    resources: {
      physical: [String],
      digital: [String],
      humanResources: [String]
    },
    professionalDevelopment: [{
      topic: String,
      duration: String,
      objectives: [String]
    }]
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft'
  }
});

// Add timestamps for tracking changes
curriculumSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

export default mongoose.model('Curriculum', curriculumSchema);