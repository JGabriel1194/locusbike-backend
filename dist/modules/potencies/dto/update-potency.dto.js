"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePotencyDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_potency_dto_1 = require("./create-potency.dto");
class UpdatePotencyDto extends (0, swagger_1.PartialType)(create_potency_dto_1.CreatePotencyDto) {
}
exports.UpdatePotencyDto = UpdatePotencyDto;
//# sourceMappingURL=update-potency.dto.js.map