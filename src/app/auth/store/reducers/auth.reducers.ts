import { User, Authenticate } from "../../models/user";
import { AuthActions, AuthActiontypes } from "../actions/auth.actions";
import { createFeatureSelector, createSelector } from "@ngrx/store";


export interface State {
    loggedIn: boolean;
    user: User | null;
}

export const initialState: State = {
    loggedIn: false,
    user: null,
}


export function reducer(state = initialState, action: AuthActions): State {
    switch (action.type) {
        case AuthActiontypes.Login: {
            return {
                ...state,
                loggedIn: true,
                user: action.payload.user
            };
        }
        case AuthActiontypes.Logout: {
            return initialState
        }

        default: {
            return state;
        }

    }
}

export const getAuthState = createFeatureSelector<State>('auth');

export const getLoggedIn = createSelector(
    getAuthState,
    (state: State) => state.loggedIn
);

export const getUser = createSelector(
    getAuthState,
    (state: State) => state.user
);