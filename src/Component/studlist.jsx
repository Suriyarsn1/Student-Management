import { Student } from "../datacontext"
import { useContext } from "react"
import { Link } from "react-router-dom"
function Studlist()
{
    const {studArr,handleAdd}=useContext(Student)

    

    return(<>
        <div>
            <h1 className="bg-pink-500 p-5 text-center text-3xl font-bold">Student List</h1>
        </div>
        
    
    
    {
        studArr.map((studArr,index)=>(
            <div className="" key={index}>
             <div className="bg-pink-50 p-3 flex justify-between items-center">
                 <h1 className="text-2xl" >{studArr.id}.{studArr.name}</h1>
                 <button className="bg-pink-950 text-white p-2 border rounded-md " onClick={()=>handleAdd(studArr.id)} disabled={studArr.isFavourite}>fav
                 {studArr.isFavourite ? "Added" : "Add to Favourite"}</button> 
             </div></div>
            
           
        
   ))}
    <div className="mt-2 flex justify-center ">
             <Link className="bg-transparent text-black p-2  border rounded-md  shadow-lg"  to={'/fav'}>Favourite List</Link>
             </div>
            
       
    
    </>)
}
export default Studlist