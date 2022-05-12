const { gql}=require("apollo-server")

exports.typeDefs=gql`
type Tweet {
    id: ID!
    body: String
    date: Int
    author_id:Int
    Author:User
    Stat:Stat
 }

 type Query{
    
    Tweets:[Tweet!]!
    Tweet(id: ID!): Tweet
    
}
 type User {
    id: ID!
    username: String
    first_name: String
    last_name: String
    full_name: String
    name: String 
    avatar_url: String
 }
 type Stat {
    views: Int
    likes: Int
    tweet_id:Int
    retweets: Int
    responses: Int
 }
 
 
 
 
 
`;