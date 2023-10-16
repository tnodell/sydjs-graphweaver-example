import {
  Field,
  GraphQLEntity,
  ID,
  ObjectType,
  SummaryField,
} from "@exogee/graphweaver";
import { User as OrmUser } from "../../entities";

@ObjectType("User")
export class User extends GraphQLEntity<OrmUser> {
  public dataEntity!: OrmUser;

  @Field(() => ID)
  id!: string;

  @SummaryField()
  @Field(() => String, { nullable: true })
  username?: string;

  @Field(() => String)
  password!: string;

  @Field(() => String, { nullable: true })
  firstName?: string;

  @Field(() => String, { nullable: true })
  lastName?: string;
}
