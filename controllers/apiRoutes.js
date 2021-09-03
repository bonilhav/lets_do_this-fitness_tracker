const db = require('../models');

module.exports = (app) => {
    app.get('/api/workouts', async (req, res) => {
        try {
            const workout = await db.Workout.find({})
            res.json(workout);
        } catch (e) {
            res.json(e);
        }
    });

    app.post('/api/workouts', async (req, res) => {
        try {
            const workout = await db.Workout.create({})
            res.json(workout);
        }
        catch (e) {
            res.json(e);
        }
    })


    app.put('/api/workouts/:id', ({ body, params }, res) => {

        try {
            const workoutData = db.Workout.findByIdAndUpdate(
                params.id,
                { $push: { exercises: body } },
                { new: true, runValidators: true }
            )
            res.json(workoutData)
        } catch (e) {
            res.json(e);
        }
    })

    app.get('/api/workouts/range', (req, res) => {
        try {
            const workout = await db.Workout.find({})
            res.json(workout);
        } catch (e) {
            res.json(e);
        }
    });
};