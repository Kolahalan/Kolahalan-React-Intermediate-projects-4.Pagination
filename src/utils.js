const paginate = (followers) => { //Pass in a Array that needs to be paginated
    const itemsPerPage = 11
    const pages = Math.ceil(followers.length /itemsPerPage)
    const newFollowers = Array.from({length:pages},(_,index)=>{
        const start = index* itemsPerPage
        return followers.slice(start,start + itemsPerPage)
    })
    return newFollowers //Returns the new paginated array w.r.t itemsPerPage
}

export default paginate
