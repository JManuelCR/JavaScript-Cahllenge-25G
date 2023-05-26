const getPosts = async () => {
    let response = await fetch(
        `https://jschallenge-25g-default-rtdb.firebaseio.com/DevTo/userPost/.json`
    );
    let postData = await response.json();
    return postData;
};