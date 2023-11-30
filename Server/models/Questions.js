import mongoose from 'mongoose'
const QuestionSchema = mongoose.Schema({
    questionTitle :{type : String, required :"Question must have title" },
    questionBody :{type : String, required :"Question must have title" },
    questionTags :{type : [String], required :"Question must have title" },
    noOfAnswers :{type : Number, default:0 },
    upVote :{type:[String], default :[]},
    downVote :{type:[String], default :[]},
    userPosted:{type:String, required :"Question must have an auther" },
    userId:{type:String},    
    askedOn:{type: Date ,default :Date.now},
    answer:[{
        answerBody :String,
        userAnswerd :String,
        userId : String,
        answerdOn: {type:Date , default :Date.now},
    }]

})
export default mongoose.model("Questions", QuestionSchema)