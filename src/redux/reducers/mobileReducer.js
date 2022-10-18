import { BUY_MOBILE } from "../actions/actionTypes"


const initialStock ={

     noOfMobiles: 100
}


const mobileReducer = (state=initialStock ,action) =>{

        switch(action.type){
            case BUY_MOBILE :
                return {noOfMobiles: state.noOfMobiles-1};
                default:
                    return state;

        }

}
export default mobileReducer;