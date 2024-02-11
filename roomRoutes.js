const express = require('express');
const router = express.Router();
const Room = require('../models/Room');

router.get('/', async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/:id/book', async (req, res) => {
  const roomId = req.params.id;
  try {
    const room = await Room.findById(roomId);
    if (!room) {
      res.status(404).json({ message: 'Room not found' });
    } else if (room.booked) {
      res.status(400).json({ message: 'Room already booked' });
    } else {
      room.booked = true;
      await room.save();
      res.json({ message: 'Room booked successfully' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
