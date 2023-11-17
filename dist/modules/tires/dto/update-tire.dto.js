"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTireDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_tire_dto_1 = require("./create-tire.dto");
class UpdateTireDto extends (0, swagger_1.PartialType)(create_tire_dto_1.CreateTireDto) {
}
exports.UpdateTireDto = UpdateTireDto;
//# sourceMappingURL=update-tire.dto.js.map