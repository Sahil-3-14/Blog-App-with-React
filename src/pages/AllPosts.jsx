import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'
import {Container, PostCard} from '../components'

export default function AllPosts() {
    const [post , setPosts]=  useState([])
    useEffect(() => {

    },[])

    appwriteService.getPosts([]).then((post) => {
        if(post){
            setPosts(post.documents)
        }
    })

  return (
    <div className="">
      <container>
        <div className="flex flex-wrap">
          {post.map((post) => (
            <div key={post.$id}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </container>
    </div>
  );
}
