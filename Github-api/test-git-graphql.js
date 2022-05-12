const github_data={
    "token":"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",
    "username":"afreenaffu-web"
};
const fetch = require("node-fetch");
const body={
    "query":`
    query {
        user(login:${github_data["username"]})
        {
          avatarUrl
          company
          name
          isEmployee
          
        }
      }
    `
};
const baseUrl="https://api.github.com/graphql";
const headers={
    "Content-Type":"application/json",
    Authentication:"bearer "+github_data["token"]

}
fetch(baseUrl,{
    method:"POST",
    headers:headers,
    body:JSON.stringify(body)
}).
then(response => {console.log(JSON.stringify(response))}).
catch(err => console.log(JSON.stringify(err)));