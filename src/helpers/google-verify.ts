import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(process.env.CLIENT_ID);

/**
 * Esta función verifica el token de google
 * @param token - token de google, se obtiene del front end al hacer login con google
 * @returns - retorna un objeto con la información del usuario
 */
export const googleVerify = async(token: string) => {
    const ticket = await client.verifyIdToken({
        idToken: token,
    });
    const payload = ticket.getPayload();
    if(!payload){
        return null;
    }
    
    const { name, email, picture } = payload;
    return { name, email, picture };
}