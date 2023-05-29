
function Filter({filterDatas,category,setcategory}){

    function categoryHandler(filterData){
        setcategory(filterData)
        console.log(category)
        
    }

return(  
        <div className=" flex  mx-auto w-[450px]  justify-between ">
            {
                filterDatas.map((filterData )=>{
                    return <button  onClick={()=>categoryHandler(filterData.title)} key={filterData.id} className={`text-white px-3 bg-black border-white p-[4px]  rounded-md my-4 hover:bg-opacity-50
                    ${filterData.title===category?"border-2 bg-opacity-60":"border-0 bg-opacity-40"}
                    `} >{filterData.title}</button>
                })
            }
            
        </div>
)   
}

export default Filter;