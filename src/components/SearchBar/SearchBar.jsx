import { useState } from "react"






export default function SearchBar({onSearch}){
      const [id,setId] = useState("") ;

      const handleChange = (event) => {
            setId(event.target.value)                       // Aca seteamos el valor de setId como el valor ingresado por input

      }  
      
      return(
            <div>
                  <input type="search" onChange={handleChange} value={id}/>  
                  <button onClick={()=>onSearch(id)}>Agregar</button>

            </div>
      )
}




//     <input type="search" onChange={handleChange}/>   el onChange significa que ante algun cambio de estado, se ejecuta la funcion handleChange