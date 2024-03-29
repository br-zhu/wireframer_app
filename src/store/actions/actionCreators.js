// THIS FILE KNOWS HOW TO MAKE ALL THE ACTION
// OBJECDTS THAT WE WILL USE. ACTIONS ARE SIMPLE
// LITTLE PACKAGES THAT REPRESENT SOME EVENT
// THAT WILL BE DISPATCHED TO THE STORE, WHICH
// WILL TRIGGER THE EXECUTION OF A CORRESPONDING
// REDUCER, WHICH ADVANCES STATE

// THESE ARE ALL THE TYPE OF ACTIONS WE'LL BE CREATING
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const CREATE_WIREFRAME_SUCCESS = 'CREATE_WIREFRAME_SUCCESS';
export const CREATE_WIREFRAME_ERROR = 'CREATE_WIREFRAME_ERROR';
export const DELETE_WIREFRAME_SUCCESS = 'DELETE_WIREFRAME_SUCCESS';
export const DELETE_WIREFRAME_ERROR = 'DELETE_WIREFRAME_ERROR';
export const SAVE_WORK_SUCCESS = 'SAVE_WORK_SUCCESS';
export const SAVE_WORK_ERROR = 'SAVE_WORK_ERROR';
export const GO_HOME_SUCCESS = 'GO_HOME_SUCCESS';
export const GO_HOME_ERROR = 'GO_HOME_ERROR';
// THESE CREATORS MAKE ACTIONS ASSOCIATED WITH USER ACCOUNTS

export function registerSuccess() {
    return { type: 'REGISTER_SUCCESS' }
};
export function registerError(error) { 
    return { type: 'REGISTER_ERROR', error }
};
export function loginSuccess() {
    return { type: 'LOGIN_SUCCESS' }
};
export function loginError(error) {
    return { type: 'LOGIN_ERROR', error }
};
export function logoutSuccess() {
    return { type: 'LOGOUT_SUCCESS' }
};

// THESE CREATORS MAKE ACTIONS FOR ASYNCHRONOUS WIREFRAME UPDATES
export function createWireframeSuccess() {
    return {
        type: 'CREATE_WIREFRAME_SUCCESS'
    }
}
export function createWireframeError(error) {
    return {
        type: 'CREATE_WIREFRAME_ERROR',
        error
    }
}
export function deleteWireframeSuccess() {
    return {
        type: 'DELETE_WIREFRAME_SUCCESS'
    }
}
export function deleteWireframeError(error) {
    return {
        type: 'DELETE_WIREFRAME_ERROR',
        error
    }
}
export function saveWorkSuccess() {
    return {
        type: 'SAVE_WORK_SUCCESS'
    }
}
export function saveWorkError(error) {
    return {
        type: 'SAVE_WORK_ERROR',
        error
    }
}
export function goHomeSuccess() {
    return {
        type: 'GO_HOME_SUCCESS'
    }
}
export function goHomeError(error) {
    return {
        type: 'GO_HOME_ERROR',
        error
    }
}
