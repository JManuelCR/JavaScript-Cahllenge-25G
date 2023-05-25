let tags = [];
let users = [
  {
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/19.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/19.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/19.jpg"
    }
  },
  {
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/89.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/89.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/89.jpg"
    }
  },
  {
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/87.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/87.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/87.jpg"
    }
  },
  {
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/8.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/8.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/8.jpg"
    }
  },
  {
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/64.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/64.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/64.jpg"
    }
  },
  {
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/5.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/5.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/5.jpg"
    }
  },
  {
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/30.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/30.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/30.jpg"
    }
  },
  {
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/72.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/72.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/72.jpg"
    }
  },
  {
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/84.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/84.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/84.jpg"
    }
  },
  {
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/82.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/82.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/82.jpg"
    }
  },
  {
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/9.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/9.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/9.jpg"
    }
  },
  {
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/5.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/5.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/5.jpg"
    }
  },
  {
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/26.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/26.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/26.jpg"
    }
  },
  {
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/36.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/36.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/36.jpg"
    }
  },
  {
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/44.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/44.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/44.jpg"
    }
  },
  {
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/88.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/88.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/88.jpg"
    }
  },
  {
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/57.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/57.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/57.jpg"
    }
  },
  {
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/46.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/46.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/46.jpg"
    }
  },
  {
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/40.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/40.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/40.jpg"
    }
  },
  {
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/52.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/52.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/52.jpg"
    }
  }
];
const getUserImgRamdom = (users) => {
  const userId = getRamdomInt(0, users.length - 1);
  let imgUser = users.filter((element, index) => index === userId);
  return imgUser[0].picture.large;
};

const getPosttInformation = () => {
    let nameInput = document.getElementById("postUserName");
    let userName = nameInput.value;
    let userLastnameInput = document.getElementById("postUserLastname");
    let userLastname = userLastnameInput.value; 
    let fullNme = `${userName} ${userLastname}`;
    let postTitleInput = document.getElementById("postTitle");
    let postTitle = postTitleInput.value;
    let postContendInput = document.getElementById("postContend");
    let postContend = postContendInput.value;
    let postImageInput = document.getElementById("postImageUrl");
    let postImage = postImageInput.value;
    let postImageTitleInput = document.getElementById("postImageTitle");
    let postImageTitle = postImageTitleInput.value;
    let postlectureTimeInput = document.getElementById("lectureTime");
    let postTags = tags;
    let postlectureTime = postlectureTimeInput.value;
    let date = new Date();
    let creationDate = date;
    let heartReactions = getRamdomInt(100);
    let unicornReactions = getRamdomInt(100);
    let crazyManReactions = getRamdomInt(100);
    let hansReactions = getRamdomInt(100);
    let fireReactions = getRamdomInt(100);
    let userProfileImg =  getUserImgRamdom(users);
    let topCriterium = getRamdomInt(100);
    let postInformation = {
      userProfileImg: userProfileImg,
      userName: fullNme,
      postTitle: postTitle,
      postContend: postContend,
      postImage: postImage,
      postImageTitle: postImageTitle,
      postlectureTime: postlectureTime,
      postTags: postTags,
      date: creationDate,
      heartReactions : heartReactions,
      unicornReactions: unicornReactions,
      crazyManReactions: crazyManReactions,
      hansReactions: hansReactions,
      fireReactions: fireReactions,
      topCriterium : topCriterium
    };
    console.log(postInformation);
    return postInformation;
  };
const addPostButton = async () => {
    event.preventDefault();
    let newProduct = getPosttInformation();
    let pushToBD = await fetch(
      `https://jschallenge-25g-default-rtdb.firebaseio.com/DevTo/userPost/.json`,
      
      {
        method: "POST",
        body: JSON.stringify(newProduct),
      }
    );
    let data = await pushToBD.json();
    clearForm();
    return data;
  };
const getMonthName = date => {
    let monntName;
    let monthNumber = date.getMonth(); 
    console.log(monthNumber);
    switch (monthNumber){
      case 0:
        monntName = "Jan";
      break;
      case 1:
        monntName = "Feb";
      break;
      case 2:
        monntName = "Mar";
      break;
      case 3:
        monntName = "Apr";
      break;
      case 4:
        monntName = "Jun";
      break;
      case 5:
        monntName = "Jul";
      break;
      case 6:
        monntName = "Jan";
      break;
      case 7:
        monntName = "Jan";
      break;
      case 8:
        monntName = "Aug";
      break;
      case 9:
        monntName = "Sep";
      break;
      case 10:
        monntName = "Nov";
      break;
      case 11:
        monntName = "Dec";
      break;
      default:
        monntName = undefined;
    }
    return monntName;
}
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
    tableDataItem.setAttribute("id", `item-${id}`)
    let dataText = document.createTextNode(text);
    let buttonDelete = document.createElement("button");
    buttonDelete.classList.add("deleteButton", "btn", "btn-danger");
    buttonDelete.setAttribute("type", "button");
    buttonDelete.setAttribute("onclick", `deleteTagButton(${id})`);
    let closeMark = document.createTextNode("x");
    buttonDelete.appendChild(closeMark);
    tableDataItem.appendChild(dataText);
    tableDataItem.appendChild(buttonDelete);
    return tableDataItem;
};
const addTagsButton = () => {
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
};

const deleteTagButton = (id) => {
  let itemToErase = document.getElementById(`item-${id}`);
  let arrayItem = itemToErase.innerText;
  console.log(arrayItem);
  const index = tags.indexOf(arrayItem);
  if (index !==  1) {
    tags.splice(index, 1);
  }
  console.log(tags);
  deleteTagsList();
  createTagsTable(tags);
  return tags;
}
const deleteTagsList = () => {
    let list = document.getElementById("tagsTable");
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
    return (id = 1);
};
const clearForm = () => {
  deleteTagsList();
  tags = [];
  let nameInput = document.getElementById("postUserName");
  nameInput.value = "";
  let userLastnameInput = document.getElementById("postUserLastname");
  userLastnameInput.value = ""; 
  let postTitleInput = document.getElementById("postTitle");
  postTitleInput.value = "";
  let postContendInput = document.getElementById("postContend");
  postContendInput.value = "";
  let postImageInput = document.getElementById("postImageUrl");
  postImageInput.value = "";
  let postImageTitleInput = document.getElementById("postImageTitle");
  postImageTitleInput.value = "";
  let postlectureTimeInput = document.getElementById("lectureTime");
  postlectureTimeInput.value = "";
  let postInput = document.getElementById("postTags");
  postInput.value = "";
}
const previewImage = () => {
  console.log("it works");
  let postImageInput = document.getElementById("postImageUrl");
  let postImage = postImageInput.value;
  console.log(postImage);
  let imgPreview = document.getElementById("imgPreview");
  if(postImage !== ""){
    imgPreview.setAttribute("src", `${postImage}` );
  }else{
    imgPreview.setAttribute("scc", "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ficons.iconarchive.com%2Ficons%2Fccard3dev%2Fdynamic-yosemite%2F512%2FPreview-icon.png&f=1&nofb=1&ipt=68aa98d04b1dfc9def2120e1c8b36293eb8b25fd6d7c72ae2f7f39eb2acefab6&ipo=images");
  }
  return;
}

document.addEventListener('click', previewImage);


