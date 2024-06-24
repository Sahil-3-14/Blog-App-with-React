import React , {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import appwriteService from '../appwrite/config'


export default function EditPost(){
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()
    
    useEffect(() => {
        if(slug){
            appwriteService.getPost(slug).then((post) => {
                if(post){
                    setPosts(post)
                }
            })
        } else{
            navigate('/')
        }
    },[slug, navigate])

    return post ? (
        <div className="py-8">
            <Container>
                <PostForm post = {post}/>
            </Container>
        </div>
    ) : null
}
