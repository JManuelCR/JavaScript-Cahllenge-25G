import { cardWrapper } from "./postCard.js";
import { getPosts } from "./getPosts.js";

let postInformation = {
    userProfileImg: "https://randomuser.me/api/portraits/women/65.jpg",
    userName: "Ana",
    postTitle: "7 tricks in typescript",
    postContend: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    postImage: "https://res.cloudinary.com/practicaldev/image/fetch/s--3644EhCg--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/crpm3se7wbh1xywp78wt.jpg",
    postImageTitle: "una imagen random",
    postlectureTime: "5 minutos",
    postTags: ["#typescript","#randomtag2","#randomtag1"] ,
    date: "05-04-1586",
    heartReactions : "24",
    unicornReactions: "25",
    crazyManReactions: "25",
    hansReactions: "25",
    fireReactions: "25"
};

const targetDinamic = (posts,key) => {
    console.log(key);
    console.log(posts);
    let newCard = cardWrapper(posts,key)
    let target = document.getElementById("card-container")
    target.appendChild(newCard)
}
let Posts = async () => {
    let posts = await getPosts();
    let array = Object.entries(posts);
    return array;
};
let allPosts = await Posts()
let printPost = async (posts) =>{
    posts.forEach(element => {
        let cardPost = targetDinamic(element[1], element[0])
    });
    return
}
printPost(allPosts);

const filterRelevant = (post) => post.filter( post => {
    let reactions = post[1].heartReactions;
    return  reactions > 60;
});

let relevantSelector = document.getElementById("relevant");
relevantSelector.addEventListener('click', () => {
    let relevant = filterRelevant(allPosts);
    console.log(relevant);
    deletePosts();
    printPost(relevant);
    return;
});

const filterLastest = (post) => post.filter((item, index) => {
    if((post.length - 1) === index){
        console.log(item);
        return item
    }
});

let lastestSelector = document.getElementById("lastest");
lastestSelector.addEventListener('click', () => {
    let lastest = filterLastest(allPosts);
    console.log(lastest);
    deletePosts();
    printPost(lastest);
    return
});

const filterTop = (post) => post.filter( post => {
    let top = post[1].topCriterium;
    return  top > 90;
});

let topSelector = document.getElementById("top");
topSelector.addEventListener('click', () => {
    let top = filterTop(allPosts);
    console.log(top);
    deletePosts();
    printPost(top);
    return;
});

const deletePosts = () => {
    let list = document.getElementById("card-container");
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
    return ;
};

