"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadsService = void 0;
const common_1 = require("@nestjs/common");
const customResponses_1 = require("../../helpers/customResponses");
let UploadsService = class UploadsService {
    constructor() { }
    async UploadFile(res, folder, file) {
        try {
            const uploadFile = {
                fileName: file.filename,
                fileType: file.mimetype,
                filePath: `${process.env.HOSTNAME}/uploads/${folder}/${file.filename}`,
            };
            return (0, customResponses_1.customResponse)(true, res, 201, 'Archivo subido', uploadFile);
        }
        catch (error) {
            (0, customResponses_1.badResponse)(error);
        }
    }
};
UploadsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], UploadsService);
exports.UploadsService = UploadsService;
//# sourceMappingURL=uploads.service.js.map