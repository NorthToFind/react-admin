const initialState = {  
    info: {age:12}  
};  
    
export const counterReducer = (state = initialState, action) => {  
    switch (action.type) {  
        case 'INCREMENT':  
            return { ...state,  info:{name:"增加",age:16 }};  
        case 'DECREMENT':  
            return { ...state, ... { name:"减少" }};  
        default:  
            return state;  
    }  
};