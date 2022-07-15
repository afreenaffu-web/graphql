const { ApolloServer}=require("apollo-server");
const{typeDefs}=require("./schema");
const {db}=require("./db")
const resolvers = {
    Query: {
      Tweets: () => db.tweets,
      Tweet: (_, { id }) => db.tweets.find(tweet => tweet.id == id),
    },
    Tweet: {
        Author: tweet => db.authors.find(author => author.id == tweet.author_id),
        Stat: tweet => db.stats.find(stat => stat.tweet_id == tweet.id),
      },
      User: {
        full_name: author => `${author.first_name} ${author.last_name}`,
      },
      Mutation: {
        createTweet: (_, { body }) => {
          const nextTweetId =
            db.tweets.reduce((id, tweet) => {
              return Math.max(id, tweet.id);
            }, -1) + 1;
          const newTweet = {
            id: nextTweetId,
            date: new Date(),
            author_id: nextTweetId, // <= you'll have to deal with that
            body,
          };
          db.tweets.push(newTweet);
          return newTweet;
        },
        deleteTweet: (_, { id }) => {
          
          db.tweets=db.tweets.filter((tweet) => tweet.id !== id);
          return true;
        },
 
      },
    
  };
const server=new ApolloServer({
    typeDefs,
    resolvers,

});
  
server.listen().then(({url}) => {
    console.log("server is ready at"+url);
})