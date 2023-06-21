   import { createPost } from "./DataBase.js";
  //  import { sendDataToUpdate } from "./postView.js";

/**
const token = localStorage.getItem("token") || "";
// Regresarme a iniciar sesion
if(token === "") {
  window.location.replace("/login");
}
const payload = token.split(".")[1];

const destructuracion = atob(payload);
const id = JSON.parse(atob(payload)).id; // atob -> nos saca la data de la payload
const nameUser = document.querySelector("#name-profile") // JSON.parse -> para parsearlo
const ageUser = document.querySelector("#age-profile") // .id - > para acced
 */

const token = localStorage.getItem('token');
if(token === ""){
  window.location.replace("/login");
};
const payload = token.split(".")[1];
const idUserLoged = JSON.parse(atob(payload)).id
let tags = [];

// const getUserImgRamdom = (users) => {
//   const userId = getRamdomInt(0, users.length - 1);
//   let imgUser = users.filter((element, index) => index === userId);
//   return imgUser[0].picture.large;
// };

const getPosttInformation = () => {
    let postTitleInput = document.getElementById("postTitle");
    let postTitle = postTitleInput.value;
    let postContentInput = document.getElementById("postContent");
    let postContent = postContentInput.value;
    let postImageInput = document.getElementById("postImageUrl");
    let postImage = postImageInput.value;
    // let postImageTitleInput = document.getElementById("postImageTitle");
    // let postImageTitle = postImageTitleInput.value;
    let postlectureTimeInput = document.getElementById("lectureTime");
    let postTags = tags;
    let postlectureTime = postlectureTimeInput.value;
    let creationDate = new Date();
    let heartReactions = getRamdomInt(100);
    let marksCount = getRamdomInt(100);
    // let unicornReactions = getRamdomInt(100);
    // let crazyManReactions = getRamdomInt(100);
    // let hansReactions = getRamdomInt(100);
    // let fireReactions = getRamdomInt(100);
    // let userProfileImg =  getUserImgRamdom(users);
    // let topCriterium = getRamdomInt(100);
    let postInformation = {
      userCreatorId: idUserLoged,
      title: postTitle, //title
      content: postContent,
      image: postImage,
      time: postlectureTime,
      tags: postTags,
      date: creationDate,
      heartReactions : heartReactions,
      marks: marksCount 
    };
    return postInformation;
  };
const createButton = document.getElementById("submitButton")

createButton.addEventListener('click',async () => {
    event.preventDefault();
    let newPost = getPosttInformation();
    createPost(newPost)
    clearForm()
})
// const getMonthName = date => {
//     let monntName;
//     let monthNumber = date.getMonth(); 
//     switch (monthNumber){
//       case 0:
//         monntName = "Jan";
//       break;
//       case 1:
//         monntName = "Feb";
//       break;
//       case 2:
//         monntName = "Mar";
//       break;
//       case 3:
//         monntName = "Apr";
//       break;
//       case 4:
//         monntName = "Jun";
//       break;
//       case 5:
//         monntName = "Jul";
//       break;
//       case 6:
//         monntName = "Jan";
//       break;
//       case 7:
//         monntName = "Jan";
//       break;
//       case 8:
//         monntName = "Aug";
//       break;
//       case 9:
//         monntName = "Sep";
//       break;
//       case 10:
//         monntName = "Nov";
//       break;
//       case 11:
//         monntName = "Dec";
//       break;
//       default:
//         monntName = undefined;
//     }
//     return monntName;
// }
const getRamdomInt = max => Math.floor(Math.random() * max);

const createTagsTable = tags => {
  let tableTag = document.getElementById("tagsTable");
  tags.forEach((element, index) => {
    let tableItem = createTagTableItem(element, index);
    tableTag.appendChild(tableItem);
  });
  return; 
};
const createTagTableItem = (text,id) => {
    let tableDataItem = document.createElement("td");
    tableDataItem.setAttribute("id", `${id}`)
    let dataText = document.createTextNode(text);
    // let buttonDelete = document.createElement("button");
    // buttonDelete.classList.add("deleteButton", "btn", "btn-danger");
    // buttonDelete.setAttribute("type", "button");
    // buttonDelete.setAttribute("id", `item-${id}`);
    // let closeMark = document.createTextNode("x");
    // buttonDelete.appendChild(closeMark);
    tableDataItem.appendChild(dataText);
    // tableDataItem.appendChild(buttonDelete);
    return tableDataItem;
};

const addTagsButton = document.getElementById("buttonTags")
addTagsButton.addEventListener('click', () => {
    event.preventDefault();
    deleteTagsList();
    let postTagsInput = document.getElementById("postTags");
    let postTagInput = postTagsInput.value;
    let postTag = `#${postTagInput}`;
    tags.push(postTag);
    let postInput = document.getElementById("postTags");
    postInput.value = "";
    createTagsTable(tags);
    return tags;
});

// const deleteTagButton = (id) => {
//   let itemToErase = document.getElementById(`item-${id}`);
//   let arrayItem = itemToErase.innerText;
//   const index = tags.indexOf(arrayItem);
//   if (index !==  1) {
//     tags.splice(index, 1);
//   }
//   deleteTagsList();
//   createTagsTable(tags);
//   return tags;
// }
const deleteTagsList = () => {
  let list = document.getElementById("tagsTable");
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
    return;
};
const clearForm = () => {
  deleteTagsList();
  tags = [];
  let postTitleInput = document.getElementById("postTitle");
  postTitleInput.value = "";
  let postContentInput = document.getElementById("postContent");
  postContentInput.value = "";
  let postImageInput = document.getElementById("postImageUrl");
  postImageInput.value = "";
  // let postImageTitleInput = document.getElementById("postImageTitle");
  // postImageTitleInput.value = "";
  let postlectureTimeInput = document.getElementById("lectureTime");
  postlectureTimeInput.value = "";
  let postInput = document.getElementById("postTags");
  postInput.value = "";
}
const previewImage = () => {
  let postImageInput = document.getElementById("postImageUrl");
  let postImage = postImageInput.value;
  let imgPreview = document.getElementById("imgPreview");
  if(postImage !== ""){
    imgPreview.setAttribute("src", `${postImage}` );
  }else{
    imgPreview.setAttribute("scc", "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ficons.iconarchive.com%2Ficons%2Fccard3dev%2Fdynamic-yosemite%2F512%2FPreview-icon.png&f=1&nofb=1&ipt=68aa98d04b1dfc9def2120e1c8b36293eb8b25fd6d7c72ae2f7f39eb2acefab6&ipo=images");
  }
  return;
}

document.addEventListener('click', previewImage);

window.addEventListener('message', event => {
  let data = event.data;
})

// const postInfo = () => {
//   let postTitleInput = document.getElementById("postTitle");
//   postTitleInput.value = data.data.title;
//  let postContentInput = document.getElementById("postContent");
//  postContentInput.value = data.data.content
//  let postImageInput = document.getElementById("postImageUrl");
//  postImageInput.value = data.data.image;
//  let postlectureTimeInput = document.getElementById("lectureTime");
//  postlectureTimeInput.value;
//  tags = data.data.tags
// }

