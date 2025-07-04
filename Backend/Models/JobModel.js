const mongoose = require('mongoose'); // Changed import to require

const JobSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  createdTime: {
    type: Date,
    default: Date.now,
  },
  experienceMin: {
    type: Number,
    required: true,
  },
  experienceMax: {
    type: Number,
    required: true,
  },
  jobType: {
    type: String,
    enum: ['Internship', 'Fulltime', 'Contract', 'Part-time'],
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  salaryMin: {
    type: Number,
    required: true,
  },
  salaryMax: {
    type: Number,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Job = mongoose.model('Job', JobSchema);

module.exports = Job; 
