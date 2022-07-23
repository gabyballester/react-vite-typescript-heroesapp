import { IUser } from '../../../common/models/index';
import { type } from '../../auth';

interface IAuthReducer{
  logged: boolean;
  user: IUser;
}

export const authReducer = (state: IAuthReducer, action: any) => {
  switch (action.type) {
    case type.login:
      return { ...state, logged: true, user: action.payload };

    case type.logout:
      console.log(state);
    
      return { ...state, logged: false, user: null };

    default:
      return state;
  }
};
