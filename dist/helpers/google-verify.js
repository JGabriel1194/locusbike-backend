"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleVerify = void 0;
const google_auth_library_1 = require("google-auth-library");
const client = new google_auth_library_1.OAuth2Client(process.env.CLIENT_ID);
const googleVerify = async (token) => {
    const ticket = await client.verifyIdToken({
        idToken: token,
    });
    const payload = ticket.getPayload();
    if (!payload) {
        return null;
    }
    const { name, email, picture } = payload;
    return { name, email, picture };
};
exports.googleVerify = googleVerify;
//# sourceMappingURL=google-verify.js.map