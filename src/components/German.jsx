import React from "react";
import{duo,duo1,duo2,duo3,duo4,duo5} from "./utiles/Cdn.js";

const German=()=>
{
    const img=[duo,duo1,duo2,duo3,duo4,duo5];
    const [index,setindex]=useState(0);
    const interval=setInterval(()=>
    {
        setindex((prev)=>prev+1)
    })
}