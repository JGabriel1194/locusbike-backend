"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.badResponse = exports.customResponse = void 0;
const customResponse = (ok, res, status, msg, data) => {
    res.status(status).json({
        ok,
        msg,
        data,
    });
};
exports.customResponse = customResponse;
const badResponse = (res) => {
    res.status(500).json({
        ok: false,
        msg: `Ha ocurrido un error vuelva a intentarlo`,
    });
};
exports.badResponse = badResponse;
//# sourceMappingURL=customResponses.js.map