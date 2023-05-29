import { useState } from "react";
import Card from "./Card";

function Cards(props){

    let[liked,setLiked] = useState([]);
        let courses = props.courses;
        let category = props.category;

    function getAllCourses(){
        if(category==="All"){
            let allCourses =[];
            Object.values(courses).forEach((array)=>
            array.forEach((course)=>
               allCourses.push(course) ));
            return allCourses;
        }
        else{
            return courses[category];
        }
        
    }

    return(
        
            <div className="flex flex-wrap justify-center">
                {
                    getAllCourses().map((course)=>{
                        return <Card key={course.id} {...course} liked={liked} setLiked={setLiked} ></Card>
                    })
                }
            </div>
        
    )
}

export default Cards;