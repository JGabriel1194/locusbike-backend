"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePedalDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_pedal_dto_1 = require("./create-pedal.dto");
class UpdatePedalDto extends (0, swagger_1.PartialType)(create_pedal_dto_1.CreatePedalDto) {
}
exports.UpdatePedalDto = UpdatePedalDto;
//# sourceMappingURL=update-pedal.dto.js.map