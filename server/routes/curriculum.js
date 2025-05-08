import express from 'express';
import { check, validationResult } from 'express-validator';
import Curriculum from '../models/Curriculum.js';

const router = express.Router();

// Get all curricula
router.get('/', async (req, res) => {
  try {
    const { grade, board, stream, academicYear } = req.query;
    let query = {};
    
    if (grade) query.grade = grade;
    if (board) query.board = board;
    if (stream) query.stream = stream;
    if (academicYear) query.academicYear = academicYear;
    
    const curricula = await Curriculum.find(query);
    res.json(curricula);
  } catch (error) {
    console.error('Error fetching curricula:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get curriculum by ID
router.get('/:id', async (req, res) => {
  try {
    const curriculum = await Curriculum.findById(req.params.id);
    
    if (!curriculum) {
      return res.status(404).json({ message: 'Curriculum not found' });
    }
    
    res.json(curriculum);
  } catch (error) {
    console.error('Error fetching curriculum:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create new curriculum
router.post(
  '/',
  [
    check('grade', 'Grade is required').isIn([5, 6, 7, 8, 9, 10, 11, 12]),
    check('board', 'Valid board is required').isIn(['CBSE', 'ICSE', 'State']),
    check('academicYear', 'Academic year is required').not().isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const newCurriculum = new Curriculum(req.body);
      const curriculum = await newCurriculum.save();
      res.status(201).json(curriculum);
    } catch (error) {
      console.error('Error creating curriculum:', error);
      res.status(500).json({ message: 'Server error' });
    }
  }
);

// Update curriculum
router.put('/:id', async (req, res) => {
  try {
    const curriculum = await Curriculum.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    
    if (!curriculum) {
      return res.status(404).json({ message: 'Curriculum not found' });
    }
    
    res.json(curriculum);
  } catch (error) {
    console.error('Error updating curriculum:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Archive curriculum
router.patch('/:id/archive', async (req, res) => {
  try {
    const curriculum = await Curriculum.findByIdAndUpdate(
      req.params.id,
      { $set: { status: 'archived' } },
      { new: true }
    );
    
    if (!curriculum) {
      return res.status(404).json({ message: 'Curriculum not found' });
    }
    
    res.json(curriculum);
  } catch (error) {
    console.error('Error archiving curriculum:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;