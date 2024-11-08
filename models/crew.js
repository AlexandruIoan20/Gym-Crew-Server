const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 
const Model = mongoose.Model; 

const CrewSchema = new Schema({ 
    name: { 
        type: String, 
        required: [ true, "Name is required" ], 
    }, 
    participants: {
        type: [ Schema.Types.ObjectId ], 
        required: [ true, "The crew needs some participants" ], 
    }, 
    level: { 
        type: Number, 
        required: [ true, "Level is required" ], 
        default: 0, 
    }, 
    workoutIds: { 
        type: [ Schema.Types.ObjectId ], 
    }, 
    xp: { 
        type: Number, 
        required: [ true, "xp is required" ], 
        default: 0, 
    }, 
}); 

const Crew = Model('Crew', CrewSchema); 
export default Crew; 