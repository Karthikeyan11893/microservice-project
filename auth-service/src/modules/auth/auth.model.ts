import mongoose, { Schema, Document } from 'mongoose';

export interface IAuth extends Document {
  email: string;
  password: string;
  role: string;
}

const AuthSchema = new Schema<IAuth>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ['USER', 'ADMIN'],
      default: 'USER',
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<IAuth>('Auth', AuthSchema);
