import {LOGIN_SUCCESS, LOGOUT} from '../Actions/Types';
import {BodyRequestLogin} from '../../screens/Register/types/types';

interface ActionType {
  type?: string;
  payload: {
    admin: BodyRequestLogin;
    token: string;
  };
}
const INITIAL_STATE: {
  admin: BodyRequestLogin;
  token: string;
} = {
  admin: <BodyRequestLogin>{},
  token: '',
};

export default (state = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        processing: false,
        admin: action.payload.admin,
        token: action.payload.token,
      };
    case LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
