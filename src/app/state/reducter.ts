import {createReducer, MetaReducer, on} from "@ngrx/store";
import {initAction, loggin, setDada, setFriend} from "./actions";

const initialiseState = {
  isLoggin: false,
  pangolin:null,
  amis:null,
  id:null,
}

export const rootReducer = createReducer(
  initialiseState,
  on(initAction, (state) => {
     return {
       ...state,
     }
  }),
  on(loggin, (state, props) => {
    return{
      ...state,
      isLoggin: props.isLoggin,
    }
  }),
  on(setDada, (state, props) => {
    return{
      ...state,
      id:props.id,
      pangolin: props.pangolin,
    }
  }),
  on(setFriend, (state, props) => {
    return{
      ...state,
      amis:props.amis
    }
  })
);

export const metaReducers : MetaReducer[] = [];
