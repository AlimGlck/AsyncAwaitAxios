import axios from "./node_modules/axios/lib/axios.js"; 




export default async function getData(x){
  let user = await axios(`https://jsonplaceholder.typicode.com/users/${x}`);
  let posts = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${x}`);

 let result = Object.assign(user.data,posts.data)

  return result;

}

