const { ApolloServer}=require("apollo-server");
const{typeDefs}=require("./schema");
const {tweets,authors,stats}=require("./db")
const resolvers = {
    Query: {
      Tweets: () => tweets,
      Tweet: (_, { id }) => tweets.find(tweet => tweet.id == id),
    },
    Tweet: {
        Author: tweet => authors.find(author => author.id == tweet.author_id),
        Stat: tweet => stats.find(stat => stat.tweet_id == tweet.id),
      },
      User: {
        full_name: author => `${author.first_name} ${author.last_name}`,
      },
    
  };
const server=new ApolloServer({
    typeDefs,
    resolvers,

});
  
server.listen().then(({url}) => {
    console.log("server is ready at"+url);
})