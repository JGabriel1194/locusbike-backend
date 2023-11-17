"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBikeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_bike_dto_1 = require("./create-bike.dto");
class UpdateBikeDto extends (0, swagger_1.PartialType)(create_bike_dto_1.CreateBikeDto) {
}
exports.UpdateBikeDto = UpdateBikeDto;
//# sourceMappingURL=update-bike.dto.js.map