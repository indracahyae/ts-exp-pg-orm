import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
} from "typeorm";
import { Categories } from "./Categories";

@Entity()
export class Products extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  price!: number;

  @ManyToOne(() => Categories, (categories) => categories.products)
  categories!: Categories;
}
