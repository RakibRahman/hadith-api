const jsonServer = require('json-server');
const { ApolloServer, gql } = require('apollo-server');
var fs = require('fs');

const server = jsonServer.create();

const router = jsonServer.router('db.json');

const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3000;

const GQL_PORT = process.env.GRAPHQL_PORT || 5000;

server.use(middlewares);
server.use(router);

server.listen(port);

// graphql server

const typeDefs = gql`
	type Verse {
		id: Int!
		description: String!
		references: String!
		grade: String!
	}

	type Query {
		verses: [Verse!]!
		verse(id: Int!): Verse!
	}

	type Mutation {
		p: Verse
	}
`;

const resolvers = {
	Query: {
		verses: async () => {
			try {
				const obj = JSON.parse(fs.readFileSync('./db.json', 'utf8'));

				return obj.hadiths;
			} catch (error) {
				throw error;
			}
		},
		verse: async (_parent, { id }, _ctx) => {
			try {
				const obj = JSON.parse(fs.readFileSync('./db.json', 'utf8'));

				const verse = obj.hadiths.find((verse) => verse.id === id);

				if (!verse) throw new Error('verse not found');

				return verse;
			} catch (error) {
				throw error;
			}
		},
	},
	Mutation: {
		p: () => null,
	},
};

const gqlServer = new ApolloServer({
	typeDefs,
	resolvers,
});

gqlServer.listen(GQL_PORT).then(() => {
	console.log('graphql server running on port ' + GQL_PORT);
});
