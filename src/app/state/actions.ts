import {createAction, props} from "@ngrx/store";


export const initAction = createAction(
  'Init Pangolin'
)

export const loggin = createAction('loggin', props<{ isLoggin: boolean}>())
export const setDada = createAction('setData', props<{ pangolin: any,id:any}>())
export const setFriend = createAction('setFriend', props<{ amis:any}>())
