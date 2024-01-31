import mongoose from 'mongoose';

const userinfoSchema = new mongoose.Schema(
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
  },
  { timestamps: true }
);

const Userinfo =
  mongoose.models.Userinfo || mongoose.model('Userinfo', userinfoSchema);

export default Userinfo;
