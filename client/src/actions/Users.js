import * as api from'../api'

export const fetchAllUsers = () => async (dispatch) => {
    try{
        const { data } = await api.getAllUsers();
        console.log(data)
        dispatch({
            type : 'FETCH_USERS', payload: data
        })
    }catch (error){
        console.log (error)
    }
}

export const updateProfile = (id, updatedData) => async (dispatch) => {
    try{
        const { data } = await api.updateProfile( id, updatedData)  
        dispatch({ type: 'UPDATE_CURRENT_USER', payload: data}) 
    } catch(error){
        console.log(error)
    }
}