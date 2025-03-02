# Neo4j GraphQL introspector for v7 library
This is amodifed fork of Neo4j introspector that uses an Alpha release of v7 GraphQL library

## Usage
Clone repo

```Text
git clone
```

Install
```Text
npm install
```

Set connection to Neo4j / AuraDB by creating a .env file at the folder root.  Replace values for NEO4J_URI, NEO4J_USR and NEO4J_PWD with the values that match your configuraiton

```Text
NEO4J_URI=neo4j://localhost:7687
NEO4J_USR=neo4j
NEO4J_PWD=password
```

Run the Introspector
```Text
node ./src/intro.csj
```
