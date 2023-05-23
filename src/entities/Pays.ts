import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { ObjectType, Field, ID, InputType } from "type-graphql";
import { Length, IsIn } from "class-validator";

@ObjectType()
@Entity()
export class Pays {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  code: string;
  

  @Field()
  @Column()
  emoji: number;
}

@InputType()
export class PaysInput {
  @Field()
  name: string;

  @Field()
  code: string;

  @Field()
  emoji: number;
}