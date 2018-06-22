import {FETCH_POSTS} from '../actions/types'

const initialState = {
    items :[],
    infosignup : {}
}

export default function (state = initialState, action){
  console.log("called")
    switch (action.type) {
        case FETCH_POSTS :
        console.log("got")
          return{
            ...state,
            items: action.payload
          }
          default : 
          return state;
    }
    // switch (action.type) {
       
    //     case SIGNUP_INFO :
    //     console.log("gotinfo")
    //       return{
    //         ...state,
    //         infosignup: action.payload
    //       }
    //       default : 
    //       return state;
    // }
}