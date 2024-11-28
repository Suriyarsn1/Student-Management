import { useContext } from "react"
import { Student } from "../datacontext"
function Favlist() {
    const { studArr, handleRemove } = useContext(Student)
    return (<>
        <div>
            <h1 className="bg-pink-500 p-5 text-center text-3xl font-bold">Student List</h1>
        </div>

        {
            studArr.filter((studArr) =>
                studArr.isFavourite).map((studArr, index) => {
                    return <div className="bg-pink-50 p-3 flex justify-between items-center" >
                        <h1 className="text-2xl"  key={index}>{index+1}. {studArr.name}</h1> <button className="bg-pink-950 text-white p-2 border rounded-md " onClick={() => handleRemove(studArr.id)}>Delete</button>
                        </div>
                }


                )
        }
    </>)
}
export default Favlist