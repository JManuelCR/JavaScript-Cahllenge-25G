const getPosts = async () => {
    let response = await fetch(
      `http://localhost:8080/post`
    );
    let posts = await response.json();
    return posts;
  };
  
const deletePost = async (id) =>{
  const token = localStorage.getItem('token');
    let response = await fetch(
        `http://localhost:8080/post/${id}`, {
          method: DELETE,
          headers: {
            'Autorization': `Bearer ${token}`
          }          
        }
    )
}
const editPost = async (id, data) =>{
  const token = localStorage.getItem('token');
    let response = await fetch(
        `http://localhost:8080/post/${id}`, {
          method: PATCH,
          headers: {
            'Autorization': `Bearer ${token}`
          }, 
          body: JSON.stringify(data)          
        }
    )
}

const getPostById = async (id) =>{
  const token = localStorage.getItem('token');
  let response = await fetch(
    `http://localhost:8080/post/${id}`, {
      method: GET,
      headers: {
        'Autorization': `Bearer ${token}`
      }          
    }
)
}
const createUser = async (data) =>{
    let response = await fetch(
        `http://localhost:8080/`, {
          method: POST,
          body: JSON.stringify(data)
        }
    )
}
const login = async (data) => {
  let reponse = await fetch(
    `http://localhost:8080/auth`, {
      method: POST,
      body: JSON.stringify(data)
    }
  )
}
const addComment = async (id, data) => {
  const token = localStorage.getItem('token');
    let response = await fetch(
        `http://localhost:8080/post/${id}`, {
          method: PATCH,
          headers: {
            'Autorization': `Bearer ${token}`
          },
          body: JSON.stringify(data)          
        }
    )
}

export { getPosts, deletePost, editPost, getPostById, createUser, login, addComment };
// let getUsers = async ( ) => {
//     let respomse = await fetch[
//         ``
//     ]
// }