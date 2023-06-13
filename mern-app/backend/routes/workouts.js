const express = require('express');
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutsController');

const router = express.Router();

router.get('/', getWorkouts);

//get single workouts
router.get('/:id', getWorkout);

// post a new workout
router.post('/', createWorkout);

//delete a workout
router.delete('/:id', deleteWorkout);

//update a workout
router.patch('/:id', updateWorkout);

module.exports = router;