import admin from 'firebase-admin';
import { project_id, client_email, private_key } from '../firebase-admin.json';

const firebaseVerifyIdToken = (token: string) => {
    if (typeof window !== 'undefined' && !admin.apps.length) {
        admin.initializeApp({
            credential: admin.credential.cert({
                projectId: project_id,
                clientEmail: client_email,
                privateKey: private_key,
            }),
            databaseURL: 'https://abasteca-startup-default-rtdb.firebaseio.com',
        });
    }

    return admin
        .auth()
        .verifyIdToken(token)
        .catch((err) => {
            throw err;
        });
};

const authAdmin = admin.auth;

export { authAdmin, firebaseVerifyIdToken, admin as firebaseAdmin };
