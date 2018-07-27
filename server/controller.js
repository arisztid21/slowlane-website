module.exports={
    readPosts: (req, res)=>{
        res.status(200).send(db.get_posts)
    },
    createPost: (req, res) =>{
        let newPost = {
            title: title,
            img: img,
            content: content
        }
    }
}