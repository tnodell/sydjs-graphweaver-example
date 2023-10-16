import { Entity, PrimaryKey, Property, Unique } from '@mikro-orm/core';
import { BaseEntity } from '@exogee/graphweaver-mikroorm';

@Entity({ tableName: 'user' })
export class User extends BaseEntity {
	@PrimaryKey({ type: 'int8' })
	id!: string;

	@Unique({ name: 'user_username_key' })
	@Property({ type: 'string', length: 255 })
	username!: string;

	@Property({ type: 'string', length: 255 })
	password!: string;

	@Property({ type: 'string', length: 255, nullable: true })
	firstName?: string;

	@Property({ type: 'string', length: 255, nullable: true })
	lastName?: string;
}
