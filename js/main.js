import { cardWrapper } from "./postCard.js";

let postInformation = {
    userProfileImg: "https://randomuser.me/api/portraits/women/65.jpg",
    userName: "Ana",
    postTitle: "7 tricks in typescript",
    postContend: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    postImage: "https://picsum.photos/200",
    postImageTitle: "una imagen random",
    postlectureTime: "5 minutos",
    postTags: "#typescript #randomtag2 #randomtag1",
    date: "05-04-1586",
    heartReactions : "24",
    unicornReactions: "25",
    crazyManReactions: "25",
    hansReactions: "25",
    fireReactions: "25"
};

cardWrapper(postInformation);