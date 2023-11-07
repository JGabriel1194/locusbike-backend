import { Column, Model, Table } from "sequelize-typescript";

@Table
export class Bike extends Model<Bike> {
    @Column
    bikeSerie: String;

    @Column
    bikeBrand: string;

    @Column
    bikeModel: string;

    @Column
    bikeSize: string;

    @Column
    bileColor: string;

    @Column
    bikeYear: Date;

    @Column
    bikeMaterial: string;

    @Column
    bikeBrake: string;

    @Column
    bikeBrakeBrand: string;

    @Column
    bikeHandlebar: string;

    @Column
    bikePotency: string;

    @Column
    bikeTransmission: string;

    @Column
    bikePedal: string;

    @Column
    bikeSeat: string;

    @Column
    bikeRing: string;

    @Column
    bikeTire: string;

    @Column
    bikeState: string;
}
