exports.Query={
    hello:()=>{
        return "world";
    },
    numberofAnimals:()=>{
        return 234;
    },
    price:()=>{
        return 9876.321;
    },
    isCool:()=>{
        return false;
    },
    names:()=>{
        return ["hello","good","morning"];
    },
    products: (parent,args,{products})=>{
      return products;
    },
    product:(parent,{id},{products})=>{
        return products.find(product => product.id===id)
        

    },
    categories: (parent,args,{categories}) =>categories,
    category:(parent,{id},{categories})=>{
        return categories.find(category => category.id===id)        }
}