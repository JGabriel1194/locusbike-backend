import { Column, Model, Table } from "sequelize-typescript";

@Table
export class Brand extends Model<Brand> {
    @Column
    brandName: string;
    
    @Column
    brandTipe: string;

}
