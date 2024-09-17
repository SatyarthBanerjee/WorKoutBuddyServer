const mongoose = require("mongoose");
const WorkoutDataSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    load:{
        type:Number,
        required:true

    },
    reps:{
        type:Number,
        required:true
    }
    
},{ timestamps: true })
const WorkoutData = mongoose.model('WorkoutData',WorkoutDataSchema);
module.exports = WorkoutData;