const mongoose = reuqire('mongoose'); 
const Schema = mongoose.Schema;  
const Model = mongooose.Model; 

const UserSchema = new Schema({ 
    name: { 
        type: String,
        required: [ true, "Username is required!"]
    }, 
    image: { 
        type: String, 
        required: [ true, "Image is required!" ]
    }, 
    crewIds: { 
        type: [ Schema.Types.ObjectId ]
    }, 
    workoutIds: { 
        type: [ Schema.Types.ObjectId ]
    }, 
    friends: { 
        type: [ String ]
    }, 
    friendRequests: {
        type: [ Schema.Types.ObjectId ], 
    }, 
    prStats: { 
        type: { 
            bench: number, 
            squat: number, 
            deadlift: number, 
            bbrow: number, 
            dbpress: number, 
        }, 
        required: [ true, 'prStats are required in order to continue!' ]
    }
}); 

const User =  Model('User', UserSchema); 
export default User; 