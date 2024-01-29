import mongoose from 'mongoose';

const answerValueSubSchema = new mongoose.Schema(
  {
    'H-01': {
      type: Number,
      required: true,
    },
    'H-02': {
      type: Number,
      required: true,
    },
    'H-03': {
      type: Number,
      required: true,
    },
    'H-04': {
      type: Number,
      required: true,
    },
    'D-01': {
      type: Number,
      required: true,
    },
    'D-02': {
      type: Number,
      required: true,
    },
    'D-03': {
      type: Number,
      required: true,
    },
    'D-04': {
      type: Number,
      required: true,
    },
    'I-01': {
      type: Number,
      required: true,
    },
    'I-02': {
      type: Number,
      required: true,
    },
    'I-03': {
      type: Number,
      required: true,
    },
    'I-04': {
      type: Number,
      required: true,
    },
    'C-01': {
      type: Number,
      required: true,
    },
    'C-02': {
      type: Number,
      required: true,
    },
    'C-03': {
      type: Number,
      required: true,
    },
    'C-04': {
      type: Number,
      required: true,
    },
    'E-01': {
      type: Number,
      required: true,
    },
    'E-02': {
      type: Number,
      required: true,
    },
    'E-03': {
      type: Number,
      required: true,
    },
    'E-04': {
      type: Number,
      required: true,
    },
  },
  { _id: false }
);

const ebtiSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    birth: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    sns: {
      type: String,
      required: true,
    },
    education: {
      type: String,
      required: true,
    },
    job: {
      type: String,
      required: true,
    },
    jobSatisfaction: {
      type: String,
      required: true,
    },
    task: {
      type: String,
      required: true,
    },
    career: {
      type: String,
      required: true,
    },
    answerValue: {
      type: answerValueSubSchema,
      required: true,
    },
  },
  { timestamps: true }
);

const EBTI = mongoose.models.EBTI || mongoose.model('EBTI', ebtiSchema);

export default EBTI;
