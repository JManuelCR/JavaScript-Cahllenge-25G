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
    let newCard = cardWrapper(posts,key)
    let target = document.getElementById("card-container")
    target.appendChild(newCard)
}

let printPost = async () =>{
    let posts = await getPosts();
    let array = Object.entries(posts);
    array.forEach(element => {
        console.log(element[0]);
        let cardPost = targetDinamic(element[1], element[0])
    });
    return 
};

printPost();