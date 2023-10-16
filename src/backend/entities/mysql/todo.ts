import { Entity, PrimaryKey, Property, Unique } from "@mikro-orm/core";
import { BaseEntity } from "@exogee/graphweaver-mikroorm";

@Entity({ tableName: "todo" })
export class Todo extends BaseEntity {
  @PrimaryKey({ type: "int8" })
  id!: string;

  @Property({ type: "string", length: 250 })
  description!: string;

  @Property({ type: "boolean", default: false })
  isCompleted!: boolean;

  @Property({ type: "int8", nullable: false })
  userId!: string;
}
