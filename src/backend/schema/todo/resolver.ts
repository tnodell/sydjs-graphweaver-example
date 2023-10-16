import { createBaseResolver, Resolver } from "@exogee/graphweaver";
import { MikroBackendProvider } from "@exogee/graphweaver-mikroorm";
import { Todo } from "./entity";
import { Todo as OrmTodo } from "../../entities";
import { mySQLConnection } from "../../database";

@Resolver((of) => Todo)
export class TodoResolver extends createBaseResolver<Todo, OrmTodo>(
  Todo,
  new MikroBackendProvider(OrmTodo, mySQLConnection)
) {}
