import { createContext, useState } from "react";
const Student = createContext()


function Data(value) {
    //Array of Object

    var [studArr, setStudArr] = useState([
        {
            id: 1,
            name: "Suriya",
            isFavourite: false
        },
        {
            id: 2,
            name: "Arun",
            isFavourite: false
        },
        {
            id: 3,
            name: "Vijay",
            isFavourite: false
        },
        {
            id: 4,
            name: "Suthan",
            isFavourite: false
        },
        {
            id: 5,
            name: "Ramu",
            isFavourite: false
        }
    ])
    //Student Add Function

    const handleAdd = (id) => {
        const updateStud = studArr.map((studArr) => {
            if (studArr.id === id) {
                return { ...studArr, isFavourite: true };
            }
            return studArr
        })
        setStudArr(updateStud)

    }
    //Student Remove Function

    const handleRemove = (id) => {
        const updatedstud = studArr.map((studArr) => {
            if (studArr.id === id) {
                return { ...studArr, isFavourite: false };
            }
            return studArr;
        });
        setStudArr(updatedstud);
    };



    return (
        <><Student.Provider value={{ studArr, setStudArr, handleAdd, handleRemove }}>
            {value.children}
        </Student.Provider>
        </>
    )
}
export default Data
export { Student }