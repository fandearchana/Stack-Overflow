import axios from 'axios'
const API= axios.create({
    baseURL : 'http://localhost:5000'
});

API.interceptors.request.use((req) => {
    if (localStorage.getItem('Profile'))
    {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`;
    }
    return req;
});

// for Auth
export const logIn = (authData) => API.post('/user/login', authData);
export const signUp = (authData) => API.post('/user/signup', authData);
// for Questions
export const postQuestion = (questionData) => API.post('/questions/Ask', questionData)
export const getAllQuestions = () => API.get('/questions/get');
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`)
export const voteQuestion =(id, value, userId) => API.patch(`/questions/vote/${id}`, { value, userId })
//for Answer
export const postAnswer = (id , noOfAnswers, answerBody, userAnswerd, userId) => API.patch(`/answer/post/${id}`, { noOfAnswers , answerBody , userAnswerd, userId});
export const deleteAnswer =(id, answerId, noOfAnswers) => API.patch(`/answer/delete/${id}`, {answerId ,noOfAnswers})
//to get all users from database
export const getAllUsers = () => API.get('/user/getAllUsers')
//for updateing user profile
export const updateProfile = (id, updatedData) => API.patch(`/user/update/${id}`, updatedData)