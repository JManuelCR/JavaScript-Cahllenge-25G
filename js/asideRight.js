let filterTags = (posts) =>{ 
    const postArray = posts
    postArray.reduce((acc,item) =>{
        return acc.concat(item.tags);
        // [...acc] + item.tags
},{})
    return postArray
}
console.log(filterTags())

export {filterTags};
