const router = require('express').Router();
let Exercise = require('../models/exercise.model');
router.route('/').get((req,res)=>{
    Exercise.find()
    .then(exercise=>res.join())
    .catch(err=>res.status(400).json('Error :' ,err));
});

router.post('/add',(req,res)=>{
    const username =req.body.username;
    const discription = req.body.discription;
    const duration=Number(req.body.duration);
    const date=Date.parse(req.body.date);
    const newExercise = new Exercise({username , discription , duration , date});
    newExercise.save()
    .then(()=>{res.json('Exercise added')})
    .catch(err=>res.status(400).json('Error :' ,err));
})
module.exports=router;

