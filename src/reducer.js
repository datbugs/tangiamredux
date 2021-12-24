const initialState = {
    value:0
};

const reducerCount =(state = initialState, actions)=>{
    switch(actions.type){
        case "TANG":
            return {...state, value:state.value+1}
        case "GIAM":
            return {...state, value:state.value-1}
        case "RESET":
            return {...state, value:state.value=0} 
    default:
        return state;   
    }
    
}
export default reducerCount