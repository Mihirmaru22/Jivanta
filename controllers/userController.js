import { User } from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const registerUser = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      userType,
      phone,
      licenseNumber,
      degree,
      specialization,
      companyName,
      registrationNumber,
      gstNumber,
      drugLicenseNumber,
      cdscoNumber,
    } = req.body;

    if (!userType || !['doctor', 'supplier'].includes(userType)) {
      return res.status(400).json({ message: 'Invalid user type' });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    let userData = {
      name,
      email,
      password: hashedPassword,
      userType,
    };

    if (userType === 'doctor') {
      userData = {
        ...userData,
        phone,
        licenseNumber,
        degree,
        specialization,
      };
    } else if (userType === 'supplier') {
      userData = {
        ...userData,
        companyName,
        phone,
        registrationNumber,
        gstNumber,
        drugLicenseNumber,
        cdscoNumber,
      };
    }

    const user = await User.create(userData);

    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: 'User not found' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.status(200).json({
    message: "Login successful",
    token,
    user: {
      _id: user._id,
      name: user.name,
      email: user.email
    }
  });
};

