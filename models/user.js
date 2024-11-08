const mongoose = reuqire('mongoose'); 
const Schema = mongoose.Schema;  
const Model = mongooose.Model; 

const UserSchema = new Schema({ 
    name: { 
        type: String,
        required: [ true, "Username is required!"]
    }, 
    email: { 
        type: String, 
        required: [ true, "Email is required" ] 
    }, 
    password: { 
        type: String, 
        required: [ true, "Password is required" ] 
    }, 
    image: { 
        type: String, 
        required: [ true, "Image is required!" ], 
        default: '', 
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
        required: [ true, 'prStats are required in order to continue!' ], 
        default: { 
            bench: 0, 
            squat: 0, 
            deadlift: 0, 
            bbrow: 0, 
            dbpress: 0, 
        }
    }, 
}); 

const User =  Model('User', UserSchema); 
export default User; 