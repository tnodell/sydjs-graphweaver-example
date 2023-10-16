/* sydjs-test Graphweaver Project */
import 'reflect-metadata';
import Graphweaver from '@exogee/graphweaver-server';
import { resolvers } from './schema';

const graphweaver = new Graphweaver({
	resolvers,
});

export const handler = graphweaver.handler();

