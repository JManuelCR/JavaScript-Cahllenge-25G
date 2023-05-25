let postInformation = {
    userProfileImg: "https://randomuser.me/api/portraits/women/65.jpg",
    userName: "Ana",
    postTitle: "7 tricks in typescript",
    postContend: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    postImage: "https://picsum.photos/200",
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

// Tiene el nombre de usuario, cuando se publico, comentario en texto
let commentSection = (postInformation) => {
    let divComment = document.createElement("div")
    divComment.classList.add("comment-section__rectangle")

        let divUserName = document.createElement("div")
        divUserName.classList.add("comment-section__rectangle--username")

            let userNameAncor = document.createElement("a")
            userNameAncor.setAttribute("href","#")

                let userName = document.createElement("h6")
                    let  userNameText = document.createTextNode(postInformation.userName)
                    userName.append(userNameText)
            
                let timeOfComment = document.createElement("p")
                    let timeOfCommentText = document.createTextNode("(3 days ago)")
                    timeOfComment.append(timeOfCommentText)
        
            userNameAncor.append(userName,timeOfComment)
        divUserName.append(userNameAncor)

        let divCommentText = document.createElement("div")
        divCommentText.classList.add("comment-section__rectangle--comment")

            let commentAncor = document.createElement("a")
            commentAncor.setAttribute("href","#")

                let commentP = document.createElement("p")
                    let commentPText = document.createTextNode(postInformation.postContend)
                commentP.appendChild(commentPText)
    
            commentAncor.append(commentP)
        divCommentText.append(commentAncor) 
    divComment.append(divUserName,divCommentText)
    return divComment
}
// crea la imagen del usuario para el comentario
let commentImg = () => {
    let divComment = document.createElement("div")
    divComment.classList("comment-section")

        let divPicture = document.createElement("div")
        divPicture.classList.add("comment-section__picture")

            let imgAncor = document.createElement("a")
            imgAncor.setAttribute("href","#")

                let userImg = document.createElement("img")
                userImg.setAttribute("src","https://randomuser.me/api/portraits/women/34.jpg")
                userImg.classList.add("rounded-circle")
            imgAncor.appendChild(userImg)
        divPicture.appendChild(imgAncor)
    divComment.appendChild(divPicture)
    return divComment
}
// tiene el tiempo de lectura y el icono
let minutesRead = (postInformation) => { 
        let minutes = document.createElement("div")
        minutes.classList.add("minutes-read")
            let anchorMins = document.createElement("a")
            anchorMins.classList.add("minutes-read__anc")
            anchorMins.setAttribute("href","#")
                let parrafMins= document.createElement("p")
                parrafMins.classList.add("card-text")
                    let parrafMinsSmall = document.createElement("small")
                    parrafMinsSmall.classList.add("text-body-secondary")
                    let parrafMinsSmallText = document.createTextNode(postInformation.postlectureTime)
                    parrafMinsSmall.append(parrafMinsSmallText)
                let imgBook = document.createElement("img")
                    imgBook.setAttribute("src","./assets/icons/book-Icon.svg")
                    imgBook.classList.add("mt-1")
        parrafMins.append(parrafMinsSmall)
        anchorMins.append(parrafMins,imgBook)
        minutes.append(anchorMins)
    return  minutes
}
// este contiene el svg de los comentarios y el numero de comentarios
let emojisReaction = () => {
    let divEmoji = document.createElement("div")
    divEmoji.classList.add("emojisReactionn__comments")

        let emojisAncor = document.createElement("a")
        emojisAncor.classList.add("text-container")
        emojisAncor.setAttribute("href","#")

            let iconComment = document.createElement("img")
            iconComment.setAttribute("src","./assets/icons/black-Flat-Icon.svg")

            let parrafComment = document.createElement("p")
                let parrafCommentText = document.createTextNode("23")
                parrafComment.appendChild(parrafCommentText)
            
                let parrafCommentSpan = document.createElement("span")
                parrafCommentSpan.classList.add("d-none","d-md-inline-block")
                    let parrafCommentSpanText = document.createTextNode("comments")
                    parrafCommentSpan.append(parrafCommentSpanText)
        emojisAncor.append(iconComment,parrafComment)
    divEmoji.append(emojisAncor)
    return divEmoji
}
// contiene la coleccion de los icons y el numero de reacciones
let emojisIcons = () => {
    let divContainer = document.createElement("div")
    divContainer.classList.add("emojisReaction__icons")

        let iconsAncor = document.createElement("a")
        iconsAncor.classList.add("text-decoration-none")
        iconsAncor.setAttribute("href","#")

            let iconHeart = document.createElement("img")
                iconHeart.setAttribute("src","./assets/icons/red-Heart-Icon.svg")
                iconHeart.setAttribute("alt","icono de corazon")
            
            let iconUnicorn = document.createElement("img")
                iconUnicorn.setAttribute("src","./assets/icons/unicorn-Icon.svg")
                iconUnicorn.setAttribute("alt","icono de unicornio")
            
            let iconCrazy = document.createElement("img")
                iconCrazy.setAttribute("src","./assets/icons/crazy-Man-Icon.svg")
                iconCrazy.setAttribute("alt","icono de cabeza que explota")
            
            let iconHands = document.createElement("img")
                iconHands.setAttribute("src","./assets/icons/raise-.svg")
                iconHands.setAttribute("alt","icono de manitas diciendo chocalas we")
            
            let iconFire = document.createElement("img")
                iconFire.setAttribute("src","./assets/icons/fire-Icon.svg")
                iconFire.setAttribute("alt","... pos es un icono de fuego")
            
            let spanCounter = document.createElement("span")
                let spanCounterP = document.createElement("p")
                let spanCounterPText = document.createTextNode("240 reactions")

                spanCounterP.append(spanCounterPText)
                spanCounter.append(spanCounterP)

        iconsAncor.append(iconHeart,iconUnicorn,iconCrazy,iconHands,iconFire)      
    divContainer.append(iconsAncor)   
    return divContainer
}   
// mete el numero de comentarios y la lista de emojis en un nuevo div
let emojisReactionWrapper = () => {
    let emojis = emojisIcons()
    let comment = emojisReaction() 

    let emojisReactionContainer = document.createElement("div")
        emojisReactionContainer.classList.add("emojisReaction")
    
    emojisReactionContainer.append(emojis,comment)
    return emojisReactionContainer
}   
// mezcla en un nuevo div las reacciones (emojis,comments) y el tiempo de lectura
let userTagsEmojis = (postInformation) => {
    let emojisReaction = emojisReactionWrapper()
    let minutesFunc = minutesRead(postInformation)

    let divContainer = document.createElement("div")
        divContainer.classList.add("user-data-space__tags--emojis")

    divContainer.append(emojisReaction,minutesFunc)
}
// este almacena las #tags (revisar como pasarle los #tags)
let tagsLighter = (postInformation) => {
    let divLighter = document.createElement("div")
        divLighter.classList.add("user-data-space__tags--lighter")

            let firstAncor = document.createElement("a")
                firstAncor.setAttribute("href","#")
                    let firstAncorP = document.createElement("p")
                        let firstAncorText = document.createTextNode(postInformation.tags)
                    firstAncorP.appendChild(firstAncorText)
            firstAncor.appendChild(firstAncorP)
}
// almacena el titulo de la publicacion con los iconos de la parte de abajo
let postBodyWrapper = (postInformation) => {
    let emojisComent = userTagsEmojis(postInformation)
    let hashTags = tagsLighter(postInformation)
    
    let postBody = document.createElement("div")
        postBody.classList.add("user-data-space__tags","card-body")
    
        let postH2 = document.createElement("h2")
            postH2.classList.add("card-title")

                let titleAncor = document.createElement("a")
                    titleAncor.setAttribute("href","./html/post.html")

                    let titleText = document.createTextNode(postInformation.postTitle)
                titleAncor.appendChild(titleText)
            postH2.appendChild(titleAncor)
        postBody.append(postH2,emojisComent,hashTags)
}
// jala de la BD el nombre completo del usuario que creo el post y la fecha de creacion
let userDataOnPost = (postInformation) => {
    let userNameSpace = document.createElement("div")
        userNameSpace.classList.add("user-data-space__name")
    
        let ancoreBold = document.createElement("a")
            ancoreBold.classList.add("user-data-space__name--bold")
            ancoreBold.setAttribute("href","./html/post.html")

                let ancoreP = document.createElement("p")
                    ancoreP.classList.add("author-name")
                    let ancoreText = document.createTextNode(postInformation.userName)
                ancoreP.append(ancoreText)
        ancoreBold.append(ancoreP)
    userNameSpace.append(ancoreBold)

        let creationAncor = document.createElement("a")
            creationAncor.classList.add("text-decoration-none","text-black")
            creationAncor.setAttribute("href","./html/post.html")

                let creationP = document.createElement("p")
                    creationP.classList.add("reation-date")
                    let creationText = document.createTextNode(postInformation.date)
                creationP.appendChild(creationText)
            creationAncor.appendChild(creationP)
        userNameSpace.append(creationAncor)

    return userNameSpace
}
// almacena la imagen del creador del post con su nombre y fecha de creacion
let creatorProfilePicture = (postInformation) => {
    let userNameDate = userDataOnPost(postInformation)
    let creatorPicture = document.createElement("div")
        creatorPicture.classList.add("user-data-space","d-flex")

        let imgOnMini = document.createElement("div")
            imgOnMini.classList.add("user-data-space__mini")

                let pictureAncor = document.createElement("a")
                    pictureAncor.setAttribute("href","./html/post.html")
                
                        let picture = document.createElement("img")
                            picture.classList.add("rounded-circle")
                            picture.setAttribute("src",`${postInformation.userProfileImg}`)
                pictureAncor.append(picture)
            imgOnMini.append(pictureAncor)
        creatorPicture.append(imgOnMini,userNameDate)
}
// almacena la imagen principal del post
let imageCardPost = (postInformation) => {
    let fullProfile = creatorProfilePicture(postInformation)
    let fullCard = postBodyWrapper(postInformation)

    let imgContainer = document.createElement("div")
    imgContainer.classList.add("img-container", "card", "mb-3","d-flex")
    
        let imgContainerAncor = document.createElement("a")
        imgContainerAncor.setAttribute("href","#")

            let image = document.createElement("img")
            image.classList.add("card-img-top")    
            image.setAttribute("src",`${postInformation.postImage}`)
            image.setAttribute("alt","img del post")

        imgContainerAncor.append(image)
        imgContainer.append(imgContainerAncor,fullProfile,fullCard)
        return imgContainer
}
// almacena el contenido completo de la card post principal del main
let cardWrapper = (postInformation) => {
    let imgContainer = imageCardPost(postInformation)
    
    let containerCard = document.createElement("div")
    containerCard.classList.add("card-cont","d-flex", "justify-content-center")

    containerCard.append(imgContainer)
return containerCard
}

const targetDinamic = () => {
    let target = document.getElementById("card-container")
    let card = cardWrapper()
}

export { cardWrapper };
