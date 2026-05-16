import mongoose, { Schema, Document } from 'mongoose';

export interface IPermission extends Document {
  name: string;
}

const PermissionSchema = new Schema<IPermission>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<IPermission>('Permission', PermissionSchema);
