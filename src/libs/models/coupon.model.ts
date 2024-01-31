import mongoose from 'mongoose';

const couponSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      default: 'EBTI',
    },
    coupon: {
      type: String,
      unique: true,
      required: true,
    },
    type: {
      type: String,
      required: true,
      default: 'infinite',
    },
    count: {
      type: Number,
    },
    owner: {
      type: String,
    },
    activated: {
      type: Boolean,
      required: true,
      default: true,
    },
    used: {
      type: Boolean,
    },
    expiredAt: {
      type: String,
    },
  },
  { timestamps: true }
);

const Coupon = mongoose.models.Coupon || mongoose.model('Coupon', couponSchema);

export default Coupon;
