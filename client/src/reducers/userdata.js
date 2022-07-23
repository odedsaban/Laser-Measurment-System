
const initialState ={
    username : null,
    permissions: []
}

const userData = (state = initialState, action)=>{

    switch(action.type){
        case 'SAVE':
            return action.payload;
        case 'DELETE':
            return {
                username : null,
                permissions: []
            };
        default:
            return state;    
    }
}

export default userData;