import {
  Field,
  GraphQLEntity,
  ID,
  ObjectType,
  RelationshipField,
} from "@exogee/graphweaver";
import { Todo as OrmTodo } from "../../entities";
import { User } from "../user";

@ObjectType("Todo")
export class Todo extends GraphQLEntity<OrmTodo> {
  public dataEntity!: OrmTodo;

  @Field(() => ID)
  id!: string;

  @Field(() => String)
  description!: string;

  @Field(() => String)
  isCompleted!: string;

  @RelationshipField<Todo>(() => User, { id: "userId" })
  user!: User;
}
