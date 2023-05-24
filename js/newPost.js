
// (function () {
//     'use strict'
  
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     var forms = document.querySelectorAll('.needs-validation')
  
//     // Loop over them and prevent submission
//     Array.prototype.slice.call(forms)
//       .forEach(function (form) {
//         form.addEventListener('submit', function (event) {
//           if (!form.checkValidity()) {
//             event.preventDefault()
//             event.stopPropagation()
//           }
  
//           form.classList.add('was-validated')
//         }, false)
//       })
//   })()

  const getProductInformation = () => {
    let nameInput = document.getElementById("postUserName");
    let userName = nameInput.value;
    let userLastnameInput = document.getElementById("postUserLastname");
    let userLastname = userLastnameInput.value; 
    let fullNme = userName + userLastname;
    let postTitleInput = document.getElementById("postTitle");
    let postTitle = postTitleInput.value;
    let postContendInput = document.getElementById("postContend");
    let postContend = postContendInput.value;
    let postImageInput = document.getElementById("postImageUrl");
    let postImage = postImageInput.value;
    let postImageTitleInput = document.getElementById("postImageTitle");
    let postImageTitle = postImageTitleInput.value;
    let postlectureTimeInput = document.getElementById("lectureTime");
    let postlectureTime = postlectureTimeInput.value;
    let postTagsInput = document.getElementById("postTags");
    let postTags = postTagsInput.value;
    let postInformation = {
      userName: fullNme,
      postTitle: postTitle,
      postContend: postContend,
      postImage: postImage,
      postImageTitle: postImageTitle,
      postlectureTime: postlectureTime,
      postTags: postTags
    };
    console.log(postInformation);
    return postInformation;
  };
  const addPostButton = async () => {
    event.preventDefault();
    let newProduct = getProductInformation();
    let pushToBD = await fetch(
      `https://jschallenge-25g-default-rtdb.firebaseio.com/DevTo/userPost/.json`,
      
      {
        method: "POST",
        body: JSON.stringify(newProduct),
      }
    );
    let data = await pushToBD.json();
    console.log(data);
    return data;
  };