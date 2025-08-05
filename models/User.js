import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  // Common fields
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType: { type: String, enum: ['doctor', 'supplier'], required: true },

  // Doctor-specific fields
  phone: { type: String },
  licenseNumber: { type: String },
  degree: { type: String },
  specialization: { type: String },

  // Supplier-specific fields
  companyName: { type: String },
  registrationNumber: { type: String },
  gstNumber: { type: String },
  drugLicenseNumber: { type: String },
  cdscoNumber: { type: String },
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);