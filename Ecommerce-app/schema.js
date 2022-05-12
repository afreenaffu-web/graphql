const { gql}=require("apollo-server")

exports.typeDefs=gql`
type Query{
    hello: String
    numberofAnimals: Int
    price:Float
    isCool: Boolean
    names:[String!]!
    products:[Product!]!
    product(id: ID!): Product
    categories:[Category!]!
    category(id:ID!):Category
}
type Product{
    name:String!
    id:ID!
    description:String!
    image:String!
    quantity: Int!
    price: Float!
    onSale:Boolean!
    category:Category
    reviews:[Review!]!
}
type Category{
    id:ID!
    name: String!
    products:[Product!]!
}
type Review{
    id:ID!
    date: String!
    title:String!
    comment:String!
    rating:Int!
    
}
`;