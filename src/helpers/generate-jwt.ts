import jwt, {decode} from 'jsonwebtoken';

/**
 * Generate a JWT based on id and userName
 * 
 * @param id id of user
 * @param userName name of user
 * @returns 
 */
export const generateJwt = (id: number, userName: string) => {
  return new Promise((resolve, reject) => {
    const payload = { id, userName };
    jwt.sign(payload, process.env.SECRET_KEY,(err, token) => {
        if (err) {
            console.log(err);
            reject('No se pudo generar el JWT');
        }else{
            console.log('token',token)
            resolve(token);
        }
        console.log('payload',token)
    });
  });
};

/**
 * Generate a JWT based on object and expiration time
 * 
 * @param object object to generate jwt
 * @returns 
 */
export const generateJWTWhiteTime = (object:{},time:string | number | undefined) => {
  return new Promise((resolve, reject) => {
    const payload = {object};
    jwt.sign(
      payload,
      process.env.SECRET_KEY,
      { expiresIn: time},
      (err, token) => {
        if (err) {
          console.log(err);
          reject('No se pudo generar el JWT');
        }
        resolve(token);
      },
    );
  });
};

/**
 * Decode a JWT
 * 
 * @param payload payload of jwt
 * @returns 
 */
export const decodeJWT = (payload: string) => {
  return new Promise((resolve) => {
    const data = decode(payload);
    resolve(data);
  });
};

/**
 * Verify if a JWT is valid
 * 
 * @param token token to verify
 * @returns 
 */
export const verifyJWT = (token:string = '') => {
  try {
    const {object}: any = jwt.verify(token, process.env.SECRET_KEY);
    return [true,object]
  } catch (error) {
    return [false,null]
  }
};