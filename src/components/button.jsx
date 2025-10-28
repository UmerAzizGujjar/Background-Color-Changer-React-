import React from "react";

function Button({color="White",setcolor}){
    return(
        <button className='px-4 py-2 rounded-full text-white'
              style={{backgroundColor:color}} onClick={()=>setcolor(color)}>
               {color}
              </button>
    )

}

export default Button