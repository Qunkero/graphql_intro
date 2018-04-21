const { schema, root } = require('./graphql_base');
const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();

app.use((req, res, next) => {
  console.log(req.url, '------ request url');
  next();
});

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(3000, () => {
  console.log('server listening on 3000');
});