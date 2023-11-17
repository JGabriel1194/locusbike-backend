import { Model } from "sequelize-typescript";
export declare class Bike extends Model<Bike> {
    bikeSerie: String;
    bikeBrand: string;
    bikeModel: string;
    bikeSize: string;
    bileColor: string;
    bikeYear: Date;
    bikeMaterial: string;
    bikeBrake: string;
    bikeBrakeBrand: string;
    bikeHandlebar: string;
    bikePotency: string;
    bikeTransmission: string;
    bikePedal: string;
    bikeSeat: string;
    bikeRing: string;
    bikeTire: string;
    bikeState: string;
}
