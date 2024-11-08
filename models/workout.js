const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 
const Model = mongoose.Model; 

const exercice = { 
    name: String, 
    weight: Number, 
    reps: Number, 
    guy: String, 
}

const WorkoutSchema = new Schema({ 
    name: { 
        type: String, 
        required: [ true, 'Name is required!' ], 
    }, 
    authorIds: { 
        type: [ Schema.Types.ObjectId ], 
        required: [ true, 'Authors are required!' ], 
    }, 
    exercices: { 
        type: [ exercice ], 
    }
}); 

const Workout = Model('Workout', WorkoutSchema); 
export default Workout; 