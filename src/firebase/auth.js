import { auth } from "./firebase";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";


export const doCreateUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailandPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}

export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    return result
}

export const doSignOut = () => {
    return auth.signOut();
}

/*    export const doPasswordReset = (email) => {
        return auth.sendPasswordResetEmail(email)
    }

    export const doPasswordChange = (password) => {
        return updatePassword(auth.currentUser, password)
    }

    export const doSendEmailVerification = () => {
        return sendEmailVerification(auth.currentUser)
        url: `${window.location.origin}/home,`
    }
        */