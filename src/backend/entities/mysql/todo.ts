import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { BaseEntity, ExternalIdField } from "@exogee/graphweaver-mikroorm";

@Entity({ tableName: "todo" })
export class Todo extends BaseEntity {
  @PrimaryKey({ type: "int8" })
  id!: string;

  @Property({ type: "string", length: 250 })
  description!: string;

  @Property({ type: "boolean", default: false })
  isCompleted!: boolean;

  @ExternalIdField({ from: "user" })
  @Property({ type: "int8", nullable: false })
  userId!: string;
}
