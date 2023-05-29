import React from 'react'
import { FcLike } from 'react-icons/fc';
import { FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';
// import { toast } from 'react-toastify';
function Card(props) {
  // const setLiked = props.setLiked;
  let liked = props.liked;
  // let course = props.course;
  // const key = props.key
  const setLiked = props.setLiked


 function likeHandler(){
    if(liked.includes(props.id)){
      //Mere ko usko dislike karna hai
      setLiked((prev)=>prev.filter((cid)=>cid!==props.id))
      toast.warning("You hae disliked this course");
    }
    else{
      if(liked.length===0){
        setLiked([props.id]);
      }
      else{
        setLiked((prev) =>[...prev,props.id]);
      }
      toast.success("You have liked this course")
    }
 }


  return (
    <div className='w-[30%] bg-bgDark my-[9px] relative mx-[9px]'>
        <div className=''>
        <img src={props.image.url}  alt={props.image.alt}/>
        </div>
        <div onClick={likeHandler} className='bg-white w-[30px] h-[30px] rounded-2xl flex justify-center items-center absolute right-2 -my-4 cursor-pointer  '>
            {liked.includes(props.id)?<FcLike  size={20}/>:<FcLikePlaceholder  size={20}/>}
        </div>
        <div className='text-white   font-bold px-4 pt-5'>
            {props.title}
        </div>
        <div className='text-white px-4 py-4 text-sm  '>
            {props.description.length>100?props.description.substring(0,100)+"...":props.description}
        </div>
    </div>
  )
}

export default Card