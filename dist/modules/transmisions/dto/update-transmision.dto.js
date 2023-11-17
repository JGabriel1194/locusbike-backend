"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTransmisionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_transmision_dto_1 = require("./create-transmision.dto");
class UpdateTransmisionDto extends (0, swagger_1.PartialType)(create_transmision_dto_1.CreateTransmisionDto) {
}
exports.UpdateTransmisionDto = UpdateTransmisionDto;
//# sourceMappingURL=update-transmision.dto.js.map