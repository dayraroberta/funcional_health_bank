const { GraphQLServer } = require('graphql-yoga');

const resolvers = {
    Query: {
        status: () => 'server listening...'
    }
}
const server = new GraphQLServer({
    resolvers,
    typeDefs: './schema.graphql'
});
server.start(() => {
    console.log('Server up!');
});
