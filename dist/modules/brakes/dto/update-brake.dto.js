"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBrakeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_brake_dto_1 = require("./create-brake.dto");
class UpdateBrakeDto extends (0, swagger_1.PartialType)(create_brake_dto_1.CreateBrakeDto) {
}
exports.UpdateBrakeDto = UpdateBrakeDto;
//# sourceMappingURL=update-brake.dto.js.map