import { Column, Model, Table } from "sequelize-typescript";

@Table
export class Brake extends Model<Brake>{
    @Column
    brakeTipe: string;

    @Column
    brakeBrand: string;

    @Column
    brakeImage: string;

    @Column
    brakeDetail: string;
}
