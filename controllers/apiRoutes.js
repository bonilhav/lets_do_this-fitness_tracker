const Workout = require("../models/workout")

module.exports = function (app) {
    app.get('/api/workouts', function (req, res) {
        try {
            const workoutData = Workout.find()
            res.json(workoutData)
        } catch (e) {
            res.json(e);
        }
    })

    app.post('/api/workouts', function (req, res) {
        try {
            const workoutData = Workout.create({})
            res.json(workoutData)
        } catch (e) {
            res.json(e);
        }
    });

    app.get('/api/workouts/range', function (req, res) {
        try {
            const workoutData = Workout.find()
            res.json(workoutData)
        } catch (e) {
            res.json(e);
        }
    });

    app.post('/api/workouts/range', function (req, res) {
        try {
            const workoutData = Workout.create({})
            res.json(workoutData)
        } catch (e) {
            res.json(e);
        }
    });

    app.put('/api/workouts/:id', function (req, res) {
        try {
            const workoutData = Workout.findByIdAndUpdate(
                params.id,
                {$push:{exercises:body}},
            )
            res.json(workoutData)
        } catch (e) {
            res.json(e);
        }
    });
};