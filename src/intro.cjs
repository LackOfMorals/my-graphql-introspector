var neo4j = require("neo4j-driver");
const { toGraphQLTypeDefs } = require("@neo4j/introspector");
require('dotenv').config();


const fs = require("fs");


const NEO4J_URI = process.env.NEO4J_URI;
const NEO4J_USR = process.env.NEO4J_USR;
const NEO4J_PWD = process.env.NEO4J_PWD;


const driver = neo4j.driver(
  NEO4J_URI,
  neo4j.auth.basic(NEO4J_USR, NEO4J_PWD)
);

const sessionFactory = () =>
  driver.session({ defaultAccessMode: neo4j.session.READ });

// We create a async function here until "top level await" has landed
// so we can use async/await
async function main() {
  const typeDefs = await toGraphQLTypeDefs(sessionFactory);
  console.log(typeDefs);
  await driver.close();
}
main();
