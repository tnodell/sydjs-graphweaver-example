var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};

// src/backend/index.ts
var backend_exports = {};
__export(backend_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(backend_exports);
var import_reflect_metadata = require("reflect-metadata");
var import_graphweaver_server = __toESM(require("@exogee/graphweaver-server"));

// src/backend/schema/user/entity.ts
var import_graphweaver = require("@exogee/graphweaver");
var User = class extends import_graphweaver.GraphQLEntity {
};
__name(User, "User");
__decorateClass([
  (0, import_graphweaver.Field)(() => import_graphweaver.ID)
], User.prototype, "id", 2);
__decorateClass([
  (0, import_graphweaver.SummaryField)(),
  (0, import_graphweaver.Field)(() => String, { nullable: true })
], User.prototype, "username", 2);
__decorateClass([
  (0, import_graphweaver.Field)(() => String)
], User.prototype, "password", 2);
__decorateClass([
  (0, import_graphweaver.Field)(() => String, { nullable: true })
], User.prototype, "firstName", 2);
__decorateClass([
  (0, import_graphweaver.Field)(() => String, { nullable: true })
], User.prototype, "lastName", 2);
User = __decorateClass([
  (0, import_graphweaver.ObjectType)("User")
], User);

// src/backend/schema/user/resolver.ts
var import_graphweaver2 = require("@exogee/graphweaver");
var import_graphweaver_mikroorm3 = require("@exogee/graphweaver-mikroorm");

// src/backend/entities/postgresql/user.ts
var import_core = require("@mikro-orm/core");
var import_graphweaver_mikroorm = require("@exogee/graphweaver-mikroorm");
var User2 = class extends import_graphweaver_mikroorm.BaseEntity {
};
__name(User2, "User");
__decorateClass([
  (0, import_core.PrimaryKey)({ type: "int8" })
], User2.prototype, "id", 2);
__decorateClass([
  (0, import_core.Unique)({ name: "user_username_key" }),
  (0, import_core.Property)({ type: "string", length: 255 })
], User2.prototype, "username", 2);
__decorateClass([
  (0, import_core.Property)({ type: "string", length: 255 })
], User2.prototype, "password", 2);
__decorateClass([
  (0, import_core.Property)({ type: "string", length: 255, nullable: true })
], User2.prototype, "firstName", 2);
__decorateClass([
  (0, import_core.Property)({ type: "string", length: 255, nullable: true })
], User2.prototype, "lastName", 2);
User2 = __decorateClass([
  (0, import_core.Entity)({ tableName: "user" })
], User2);

// src/backend/entities/mysql/todo.ts
var import_core2 = require("@mikro-orm/core");
var import_graphweaver_mikroorm2 = require("@exogee/graphweaver-mikroorm");
var Todo = class extends import_graphweaver_mikroorm2.BaseEntity {
};
__name(Todo, "Todo");
__decorateClass([
  (0, import_core2.PrimaryKey)({ type: "int8" })
], Todo.prototype, "id", 2);
__decorateClass([
  (0, import_core2.Property)({ type: "string", length: 250 })
], Todo.prototype, "description", 2);
__decorateClass([
  (0, import_core2.Property)({ type: "boolean", default: false })
], Todo.prototype, "isCompleted", 2);
__decorateClass([
  (0, import_core2.Property)({ type: "int8", nullable: false })
], Todo.prototype, "userId", 2);
Todo = __decorateClass([
  (0, import_core2.Entity)({ tableName: "todo" })
], Todo);

// src/backend/database.ts
var import_postgresql = require("@mikro-orm/postgresql");
var import_mysql = require("@mikro-orm/mysql");
var postgresConnection = {
  connectionManagerId: "postgresql",
  mikroOrmConfig: {
    entities: [User2],
    driver: import_postgresql.PostgreSqlDriver,
    dbName: "gw",
    host: "127.0.0.1",
    user: "postgres",
    password: "",
    port: 5432
  }
};
var mySQLConnection = {
  connectionManagerId: "mysql",
  mikroOrmConfig: {
    entities: [Todo],
    driver: import_mysql.MySqlDriver,
    dbName: "gw",
    user: "root",
    password: "",
    port: 3306
  }
};

// src/backend/schema/user/resolver.ts
var UserResolver = class extends (0, import_graphweaver2.createBaseResolver)(
  User,
  new import_graphweaver_mikroorm3.MikroBackendProvider(User2, postgresConnection)
) {
};
__name(UserResolver, "UserResolver");
UserResolver = __decorateClass([
  (0, import_graphweaver2.Resolver)((of) => User)
], UserResolver);

// src/backend/schema/todo/entity.ts
var import_graphweaver3 = require("@exogee/graphweaver");
var Todo2 = class extends import_graphweaver3.GraphQLEntity {
};
__name(Todo2, "Todo");
__decorateClass([
  (0, import_graphweaver3.Field)(() => import_graphweaver3.ID)
], Todo2.prototype, "id", 2);
__decorateClass([
  (0, import_graphweaver3.Field)(() => String)
], Todo2.prototype, "description", 2);
__decorateClass([
  (0, import_graphweaver3.Field)(() => String)
], Todo2.prototype, "isCompleted", 2);
__decorateClass([
  (0, import_graphweaver3.RelationshipField)(() => User, { id: "userId" })
], Todo2.prototype, "user", 2);
Todo2 = __decorateClass([
  (0, import_graphweaver3.ObjectType)("Todo")
], Todo2);

// src/backend/schema/todo/resolver.ts
var import_graphweaver4 = require("@exogee/graphweaver");
var import_graphweaver_mikroorm4 = require("@exogee/graphweaver-mikroorm");
var TodoResolver = class extends (0, import_graphweaver4.createBaseResolver)(
  Todo2,
  new import_graphweaver_mikroorm4.MikroBackendProvider(Todo, mySQLConnection)
) {
};
__name(TodoResolver, "TodoResolver");
TodoResolver = __decorateClass([
  (0, import_graphweaver4.Resolver)((of) => Todo2)
], TodoResolver);

// src/backend/schema/index.ts
var resolvers = [UserResolver, TodoResolver];

// src/backend/index.ts
var graphweaver = new import_graphweaver_server.default({
  resolvers
});
var handler = graphweaver.handler();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=index.js.map
