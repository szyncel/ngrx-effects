import { Action } from '@ngrx/store';
import { Authenticate, User } from '../../models/user';

export enum AuthActiontypes {
    Login = '[Auth] Login',
    Logout = '[Auth] Logout',
    LoginSuccess = '[Auth] Login Success',
    LoginFailure = '[Auth] Login Failure'
}

export class Login implements Action {
    readonly type = AuthActiontypes.Login;

    constructor(public payload: any) { }
}


export class Logout implements Action {
    readonly type = AuthActiontypes.Logout;
}


export type AuthActions = Login | Logout;