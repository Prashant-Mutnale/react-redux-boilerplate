import {FETCH_POSTS} from './types'

export const fetchPosts = () => dispatch =>{
    console.log("got")
    fetch("http://35.154.198.64/gprapi/home/getHomePageDetails?user_lat=40.5852602&user_lng=-105.08442300000002")
    .then(res => res.json())
    .then(posts => 
        dispatch({
            type: FETCH_POSTS,
            payload: posts
        })
    
    )
  
}