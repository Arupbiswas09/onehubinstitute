import express from 'express';
import Inquiry from '../models/Inquiry.js';
import { check, validationResult } from 'express-validator';

const router = express.Router();

// Get all inquiries (admin only)
router.get('/', async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.json(inquiries);
  } catch (error) {
    console.error('Error fetching inquiries:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create new inquiry
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('phone', 'Phone number is required').not().isEmpty(),
    check('subject', 'Subject is required').not().isEmpty(),
    check('message', 'Message is required').not().isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const newInquiry = new Inquiry(req.body);
      const inquiry = await newInquiry.save();
      res.status(201).json(inquiry);
    } catch (error) {
      console.error('Error creating inquiry:', error);
      res.status(500).json({ message: 'Server error' });
    }
  }
);

// Update inquiry status (admin only)
router.put('/:id', async (req, res) => {
  try {
    const inquiry = await Inquiry.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    
    if (!inquiry) {
      return res.status(404).json({ message: 'Inquiry not found' });
    }
    
    res.json(inquiry);
  } catch (error) {
    console.error('Error updating inquiry:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;