import Post from "../model/postModel.js";


export const getAllPost = async (req,res)=>{
    try {
        const post = await Post.find()
        res.status(200).json({
            status : 'success',
            result : post.length,
            data : {
                post,
            }
        })
    } catch (error) {
        console.log('error look Up For ---->>',error)
        res.status(400).json({
            status : 'fail',
        })
    }
}

export const GetOnePost = async (req,res)=>{
    try {
        const {id} = req.params;
        const postOne = await Post.findById({_id:id})
        res.status(200).json({
            status : 'success',
            data : {
                postOne,
            }
        })

    } catch (error) {
        console.log('error look Up For ---->>',error)
        res.status(400).json({
            status : 'fail',
        })
    }
}

export const createPost = async (req,res)=>{
    try {
        const {title,body} = req.body;
        const CreatePost = Post({
        title,
        body
       })
       await CreatePost.save()
       res.status(200).json({
        status : 'success',
    })
    } catch (error) {
        console.log('error look Up For ---->>',error)
        res.status(400).json({
            status : 'fail',
        })
    }
}


export const updatePost = async (req,res)=>{
    try {
        const {id} = req.params;
        const {title,body} = req.body;
        const CreatePost = await Post.findByIdAndUpdate({_id:id},{
        title,
        body
       },{new:true,runValidators:true})
       if(!CreatePost){
        return res.status(404).json({ message: "No Post Update Please enter the fields correctly" });
       }
       res.status(200).json({
        status : 'success',
    })

    } catch (error) {
        console.log('error look Up For ---->>',error)
        res.status(400).json({
            status : 'fail',
        })
    }
} 


export const deletePost = async (req,res)=>{
    try {
        const {id} = req.params;
        const deletePost = await Post.findByIdAndDelete(id)
        res.status(200).json({
            status : 'success',
            deletePost
        })
    } catch (error) {
        console.log('error look Up For ---->>',error)
        res.status(400).json({
            status : 'fail',
        })
        
    }
}

export const deleteMany = async (req,res)=>{
    try {
        const deleteMany = await Post.deleteMany({})
        res.status(200).json({
            status : 'success',
            deleteMany
        })
    } catch (error) {
        console.log('error look Up For ---->>',error)
        res.status(400).json({
            status : 'fail',
        })
    }
}