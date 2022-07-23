export const saveUserData = (data) =>{
    return{
        type: 'SAVE',
        payload: data
    }
}

export const deleteUserData = () =>{
    return{
        type: 'DELETE'
    }
}

