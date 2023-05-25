import { getPosts } from "./getPosts.js";
let params = new URLSearchParams(document.location.search);
let idPost = params.get("post")


const getPostInfo = async (post) => {
    let posts = await getPosts();
    let array = Object.entries(posts);
    let actual = array.reduce((acum, act) => {
        let actualPostKey = act[0];
        if(actualPostKey === post){
            acum = act[1];
        }
        return acum;
    }, {});
    
    return actual;
}
let postToView = await getPostInfo(idPost);


// Tiene el nombre de usuario, cuando se publico, comentario en texto
let commentSection = () => {
    let divComment = document.createElement("div")
    divComment.classList.add("comment-section__rectangle")

        let divUserName = document.createElement("div")
        divUserName.classList.add("comment-section__rectangle--username")

            let userNameAncor = document.createElement("a")
            userNameAncor.classList.add("anchorsFinals")
            userNameAncor.setAttribute("href","#")

                let userName = document.createElement("h6")
                    let  userNameText = document.createTextNode("hgarper")
                    userName.append(userNameText)
            
                let timeOfComment = document.createElement("p")
                    let timeOfCommentText = document.createTextNode("(3 days ago)")
                    timeOfComment.append(timeOfCommentText)
        
            userNameAncor.append(userName,timeOfComment)
        divUserName.append(userNameAncor)

        let divCommentText = document.createElement("div")
        divCommentText.classList.add("comment-section__rectangle--comment")

            let commentAncor = document.createElement("a")
            commentAncor.classList.add("anchorsFinals")
            commentAncor.setAttribute("href","#")

                let commentP = document.createElement("p")
                    let commentPText = document.createTextNode("Nice tips. In my opinion the main thing that separates pros from newbies is that pros turn on all the strict options and still manage to avoid as like the plague because they know a ton of tools like these to avoid it.")
                commentP.appendChild(commentPText)
    
            commentAncor.append(commentP)
        divCommentText.append(commentAncor) 
    divComment.append(divUserName,divCommentText)
    return divComment
}
// crea la imagen del usuario para el comentario
let commentImg = (postToView) => {
    let commentRectangle = commentSection()
    let divComment = document.createElement("div")
    divComment.classList.add("comment-section")

        let divPicture = document.createElement("div")
        divPicture.classList.add("comment-section__picture")

            let imgAncor = document.createElement("a")
            imgAncor.classList.add("anchorsFinals")
            imgAncor.setAttribute("href","#")

                let userImg = document.createElement("img")
                userImg.setAttribute("src",postToView.userProfileImg)
                userImg.classList.add("rounded-circle")
            imgAncor.appendChild(userImg)
        divPicture.appendChild(imgAncor)
    divComment.appendChild(divPicture)
    divComment.append(commentRectangle)
    return divComment
}


// tiene el tiempo de lectura y el icono
let minutesRead = (postToView) => { 
        let minutes = document.createElement("div")
        minutes.classList.add("minutes-read")
            let anchorMins = document.createElement("a")
            anchorMins.classList.add("minutes-read__anc","anchorsFinals")
            anchorMins.setAttribute("href","#")
                let parrafMins= document.createElement("p")
                parrafMins.classList.add("card-text")
                    let parrafMinsSmall = document.createElement("small")
                    parrafMinsSmall.classList.add("text-body-secondary")
                    let parrafMinsSmallText = document.createTextNode(postToView.postlectureTime)
                    parrafMinsSmall.append(parrafMinsSmallText)
                let imgBook = document.createElement("img")
                    imgBook.setAttribute("src","../assets/icons/book-Icon.svg")
                    imgBook.classList.add("mt-1")
        parrafMins.append(parrafMinsSmall)
        anchorMins.append(parrafMins,imgBook)
        minutes.append(anchorMins)
    return  minutes
}
// este contiene numero de reacciones totales
let emojisReaction = (postToView) => {
            let iconComment = document.createElement("img")
            iconComment.setAttribute("src","../assets/icons/black-Flat-Icon.svg")
            
            let  totalReactions = postToView.heartReactions + postToView.unicornReactions + postToView.crazyManReactions + postToView.hansReactions + postToView.fireReactions;
            let parrafComment = document.createElement("p")
                let parrafCommentText = document.createTextNode(totalReactions);
                
                let parrafCommentSpan = document.createElement("span")
                parrafCommentSpan.classList.add("d-none","d-md-inline-block")
                    let parrafCommentSpanText = document.createTextNode("comments")
                    parrafCommentSpan.append(parrafCommentSpanText)
    return parrafComment
}
// contiene la coleccion de los icons y el numero de reacciones
let emojisColection = () => {
    let divColector = document.createElement("div")
    divColector.classList.add("emojis-colection","card-body")
    return divColector
}

let emojisIcons = (postToView) => {
    let classCardBody = emojisColection()
    let divContainer = document.createElement("div")
    divContainer.classList.add("emojisReaction__icons","newParamsDiv")

            let heartSpan = document.createElement("span")
                
                let iconHeart = document.createElement("img")
                    iconHeart.setAttribute("src","../assets/icons/red-Heart-Icon.svg")
                    iconHeart.setAttribute("alt","icono de corazon")
                        let heartP = document.createElement("p")
                        let heartText = document.createTextNode(postToView.heartReactions)
                        heartP.appendChild(heartText)
                heartSpan.append(iconHeart,heartP)
            
            let unicornSpan = document.createElement("span")
                let iconUnicorn = document.createElement("img")
                    iconUnicorn.setAttribute("src","../assets/icons/unicorn-Icon.svg")
                    iconUnicorn.setAttribute("alt","icono de unicornio")
                        let unicornP = document.createElement("p")
                        let unicornText = document.createTextNode(postToView.unicornReactions)
                        unicornP.appendChild(unicornText)
                unicornSpan.append(iconUnicorn,unicornP)
            
            let crazySpan = document.createElement("span")
                let iconCrazy = document.createElement("img")
                    iconCrazy.setAttribute("src","../assets/icons/crazy-Man-Icon.svg")
                    iconCrazy.setAttribute("alt","icono de cabeza que explota")
                        let crazyP = document.createElement("p")
                        let crazyText = document.createTextNode(postToView.crazyManReactions)
                        crazyP.appendChild(crazyText)
                crazySpan.append(iconCrazy,crazyP)
            
            let handsSpan = document.createElement("span")
                let iconHands = document.createElement("img")
                    iconHands.setAttribute("src","../assets/icons/raise-.svg")
                    iconHands.setAttribute("alt","icono de manitas diciendo chocalas we")
                        let handsP = document.createElement("p")
                        let handsText = document.createTextNode(postToView.hansReactions)
                        handsP.appendChild(handsText)
                handsSpan.append(iconHands,handsP)
            
            let fireSpan = document.createElement("span")
                let iconFire = document.createElement("img")
                    iconFire.setAttribute("src","../assets/icons/fire-Icon.svg")
                    iconFire.setAttribute("alt","...pos es un icono de fuego")
                        let fireP = document.createElement("p")
                        let fireText = document.createTextNode(postToView.fireReactions)
                        fireP.appendChild(fireText)
                fireSpan.append(iconFire,fireP)
            

        divContainer.append(heartSpan,unicornSpan,crazySpan,handsSpan,fireSpan)
    classCardBody.appendChild(divContainer)   
    return divContainer
}   
// almacena el titulo de la publicacion
let postBodyWrapper = (postToView) => {
        let postH2 = document.createElement("h1")
            postH2.classList.add("card-title")

                let titleAncor = document.createElement("a")
                    titleAncor.classList.add("anchorsFinals")
                    titleAncor.setAttribute("href","./html/post.html")

                    let titleText = document.createTextNode(postToView.postTitle)
                titleAncor.appendChild(titleText)
            postH2.appendChild(titleAncor)

    return postH2
}
// jala de la BD el nombre completo del usuario que creo el post y la fecha de creacion
let userDataOnPost = (postToView) => {
    let userNameSpace = document.createElement("div")
        userNameSpace.classList.add("user-data-space__name")
    
        let ancoreBold = document.createElement("a")
            ancoreBold.classList.add("user-data-space__name--bold","anchorsFinals")
            ancoreBold.setAttribute("href","./html/post.html")

                let ancoreP = document.createElement("p")
                    ancoreP.classList.add("author-name")
                    let ancoreText = document.createTextNode(postToView.userName)
                ancoreP.append(ancoreText)
        ancoreBold.append(ancoreP)
    userNameSpace.append(ancoreBold)

        let creationAncor = document.createElement("a")
            creationAncor.classList.add("text-decoration-none","text-black","anchorsFinals")
            creationAncor.setAttribute("href","./html/post.html")

                let creationP = document.createElement("p")
                    creationP.classList.add("reation-date")
                    let creationText = document.createTextNode(postToView.date)
                creationP.appendChild(creationText)
            creationAncor.appendChild(creationP)
        userNameSpace.append(creationAncor)

    return userNameSpace
}
// almacena la imagen del creador del post
let creatorProfilePicture = (postToView) => {
    let creatorPicture = document.createElement("div")
        creatorPicture.classList.add("user-data-space")

        let imgOnMini = document.createElement("div")
            imgOnMini.classList.add("user-data-space__mini")

                let pictureAncor = document.createElement("a")
                    pictureAncor.classList.add("anchorsFinals")
                    pictureAncor.setAttribute("href","./html/post.html")
                
                        let picture = document.createElement("img")
                            picture.classList.add("rounded-circle")
                            picture.setAttribute("src",postToView.userProfileImg)
                pictureAncor.append(picture)
            imgOnMini.append(pictureAncor)
        creatorPicture.append(imgOnMini)
    return creatorPicture
}
// almacena la imagen principal del post
let imageCardPost = (postToView) => {
    let imgContainer = document.createElement("div")
    imgContainer.classList.add("img-container", "card","d-flex")
    
        let imgContainerAncor = document.createElement("a")
        imgContainerAncor.classList.add("anchorsFinals")
        imgContainerAncor.setAttribute("href","#")

            let image = document.createElement("img")
            image.classList.add("card-img-top")    
            image.setAttribute("src",postToView.postImage)
            image.setAttribute("alt",postToView.postImageTitle)

        imgContainerAncor.append(image)
        imgContainer.append(imgContainerAncor)
        return imgContainer
}
// mete las tags dinamicamente
let createDynamicTags = (postToView) => {
    let divContainer = document.createElement("div")
    divContainer.classList.add("emojis-colection__tags")

        let ancorTag = document.createElement("a")
        ancorTag.classList.add("emojis-colection__tags--blue","anchorsFinals")
        ancorTag.setAttribute("href","#")

            let tagInP = document.createElement("p")
                let tagText = document.createTextNode(postToView.postTags)
            tagInP.append(tagText)
        ancorTag.append(tagInP)
    divContainer.append(ancorTag)

    return divContainer
}
// crea la informacion del post
let postTextDynamic = (postToView) => {
    let postSection = document.createElement("div")
    postSection.classList.add("comment-section")

        let divContainer = document.createElement("div")
        divContainer.classList.add("article__contentMain")

            let postParagraph = document.createElement("p")
                let postText = document.createTextNode(postToView.postContend)
            postParagraph.append(postText)  

            let h3Subtitle = document.createElement("h3")
                let ancorInH3 = document.createElement("a")
                    ancorInH3.classList.add("anchorsFinals")
                    ancorInH3.setAttribute("href","#")
                        let textInAnc = document.createTextNode("1. Address the reasons why you want to come back to coding")
                    ancorInH3.append(textInAnc)
                h3Subtitle.append(ancorInH3)

            let imgInPost = document.createElement("img")
                imgInPost.setAttribute("src","https://picsum.photos/450/300")
                imgInPost.setAttribute("alt","foto de unas montañas")
            
            let moreTextPara = document.createElement("p")
                let moreText = document.createTextNode("Learning to code, and relearning to code is no different, you need to make a plan! To make sure you aren't all over the place, scrambling to learn every technology that you knew previously, you need to assemble a plan. Something very common with burnout is feeling overwhelmed with all the things you need to do to get back to where you were prior. To prevent this feeling, you need to take it one step at a time, to make your foundations strong but also to maintain that healthy relationship. In my case, for the past few weeks, I've just been relearning Python, the first programming language I learned. Since Python is easy to learn, I thought it would be a logical starting point for me. Although my main programming language was Rust, I felt like that would be a harder starting point, leading to more roadblocks and possibly being overwhelmed. Before you start getting into coding again, outline the languages/concepts/frameworks you want to relearn, and the resources that you will use. This will keep you on track, but also prevent you from being overwhelmed as you have a clear plan to get back to where you were before. Furthermore, it's rewarding to tick off the tasks that you have completed, giving yourself more motivation to continue.")
            moreTextPara.append(moreText)

        divContainer.append(postParagraph,imgInPost,moreTextPara)
    postSection.append(divContainer)

    return postSection
}
// almacena el contenido completo de la card post principal del main
let cardWrapper = (postToView,key) => {
    let userNameData = creatorProfilePicture(postToView)
        let userData = userDataOnPost(postToView)
            userNameData.append(userData)

        let test1 = emojisColection()
        let test2 = emojisIcons(postToView)
        let test3 = postBodyWrapper(postToView)
        let test4 = createDynamicTags(postToView)
        let test5 = postTextDynamic(postToView)
    let imgContainer = imageCardPost(postToView)
        imgContainer.append(userNameData)
        imgContainer.append(test1)
            test1.append(test2)
            test1.append(test3)
            test1.append(test4)
            test1.append(test5)
            
        
        // console.log(emojisList)
        // console.log(contenTags)
        let containerCard = document.createElement("div")
    containerCard.classList.add("card-cont","d-flex","justify-content-center")

        containerCard.append(imgContainer)
    // sectionWrapperr.appendChild(containerCard)
return containerCard
}

let newCard = cardWrapper(postToView)
console.log(newCard)

let sectionLocation = document.getElementById("postView")
sectionLocation.append(newCard)