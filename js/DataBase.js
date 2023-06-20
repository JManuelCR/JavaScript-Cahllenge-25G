const getPosts = async () => {
    let response = await fetch(
      `http://localhost:8080/post`
    );
    let posts = await response.json();
    return posts;
  };
  
const getUsers = async () =>{
    let response= await fetch(
        ``
    )
}
export { getPosts };
// let getUsers = async ( ) => {
//     let respomse = await fetch[
//         ``
//     ]
// }