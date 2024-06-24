import React, { useEffect } from "react";
import appwriteService from '../appwrite/config'
import {Container, PostCard} from '../components'


export default function Home(){
    const [posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if(posts){
                setPosts(posts.documents)
            }
        })
    }, [])

    if(posts.length === 0){
        return (
            <div className="w-full py-8 mt-4 text-center">
                <container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-wxl font-bold hover:text-gray-500">
                                Login to Read Posts
                            </h1>
                        </div>
                    </div>
                </container>

            </div>
        )
    }

    return(
        <div className="w-full py-8">
            <container>
                <div className="flex flex-wrap">
                    {posts.map((post) =>{
                        <div key={post.$id} className="p-2 w-1/4">
                          {/* <PostCard post = {post} /> */}
                          <PostCard {...post} />
                        </div>;
                    })}
                </div>
            </container>

        </div>
    )
}