import { FETCH_FAIL, FETCH_REQUEST, FETCH_SUCCESS } from "../actions/actionTypes"


const initialState ={
    user:[],
    error:"",
    isLoading:false
}

 export  const fetchReducer = (state=initialState ,action)=>{

    switch(action.type) {
        case FETCH_REQUEST :
            return {...state,isLoading:true};
            case FETCH_SUCCESS:
                return { isLoading:false,user: action.data ,error:""};
                case FETCH_FAIL:
                    return { isLoading:false ,user:[] ,error: action.data};
                    default:
              return state;
    }
 
}