// Tiene el nombre de usuario, cuando se publico, comentario en texto
let commentSection = (username,textComment) => {
    let divComment = document.createElement("div")
    divComment.classList.add("comment-section__rectangle")

        let divUserName = document.createElement("div")
        divUserName.classList.add("comment-section__rectangle--username")

            let userNameAncor = document.createElement("a")
            userNameAncor.setAttribute("href","#")

                let userName = document.createElement("h6")
                    let  userNameText = document.createTextNode(username)
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
                    let commentPText = document.createTextNode(textComment)
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
let minutesRead = (timeRead) => { 
        let minutes = document.createElement("div")
        minutes.classList.add("minutes-read")
            let anchorMins = document.createElement("a")
            anchorMins.classList.add("minutes-read__anc")
            anchorMins.setAttribute("href","#")
                let parrafMins= document.createElement("p")
                parrafMins.classList.add("card-text")
                    let parrafMinsSmall = document.createElement("small")
                    parrafMinsSmall.classList.add("text-body-secobdary")
                    let parrafMinsSmallText = document.createTextNode(timeRead)
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
            
            let spanCounter = doccument.createElement("span")
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
let userTagsEmojis = (timeRead) => {
    let emojisReaction = emojisReactionWrapper()
    let minutesFunc = minutesRead(timeRead)

    let divContainer = document.createElement("div")
        divContainer.classList.add("user-data-space__tags--emojis")

    divContainer.append(emojisReaction,minutesFunc)
}
// este almacena las #tags (revisar como pasarle los #tags)
let tagsLighter = (tags) => {
    let divLighter = document.createElement("div")
        divLighter.classList.add("user-data-space__tags--lighter")

            let firstAncor = document.createElement("a")
                firstAncor.setAttribute("href","#")
                    let firstAncorP = document.createElement("p")
                        let firstAncorText = document.createTextNode(tags)
                    firstAncorP.appendChild(firstAncorText)
            firstAncor.appendChild(firstAncorP)

            let secondAncor = document.createElement("a")
            secondAncor.setAttribute("href","#")
                let secondAncorP = document.createElement("p")
                    let secondAncorText = document.createTextNode(tags)
                secondAncorP.appendChild(secondAncorText)
            secondAncor.appendChild(secondAncorP)

            let thirdAncor = document.createElement("a")
            thirdAncor.setAttribute("href","#")
                let thirdAncorP = document.createElement("p")
                    let thirdAncorText = document.createTextNode(tags)
                thirdAncorP.appendChild(thirdAncorText)
            thirdAncor.appendChild(thirdAncorP)

            let fourthAncor = document.createElement("a")
            fourthAncor.setAttribute("href","#")
                let fourthAncorP = document.createElement("p")
                    let fourthAncorText = document.createTextNode(tags)
                fourthAncorP.appendChild(fourthAncorText)
            fourthAncor.appendChild(fourthAncorP)
    divLighter.append(firstAncor,secondAncor,thirdAncor,fourthAncor)
}
// alacena el titulo de la publicacion con los iconos de la parte de abajo
let postBodyWrapper = (postTitle,timeRead,tags) => {
    let emojisComent = userTagsEmojis(timeRead)
    let hashTags = tagsLighter(tags)
    
    let postBody = document.createElement("div")
        postBody.classList.add("user-data-space__tags","card-body")
    
        let postH2 = document.createElement("h2")
            postH2.classList.add("card-title")

                let titleAncor = document.createElement("a")
                    titleAncor.setAttribute("href","./html/post.html")

                    let titleText = document.createTextNode(postTitle)
                titleAncor.appendChild(titleText)
            postH2.appendChild(titleAncor)
        postBody.append(postH2,emojisComent,hashTags)
}

