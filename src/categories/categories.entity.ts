import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Categorie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    categorieName: string;
}