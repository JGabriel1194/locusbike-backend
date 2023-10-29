import { Column, Model, Table } from "sequelize-typescript";

@Table
export class Modelo extends Model<Modelo> {
    @Column
    modelName: string;

    @Column
    modelDetail: string;
}
