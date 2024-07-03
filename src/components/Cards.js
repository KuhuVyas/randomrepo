// import {Cards} from '@mui/material';
// import React from 'react'
// export default function Cards(props){
//     return (
//         <div>
//             <Button color='success' fullWidth sx={{backgroundColor:"blue", padding:"10x"}}> {props.content}</Button>
//         </div>
//     )
// }
//import { Tooltip } from '@mui/material'
import React from 'react'

const Card = (props) => {
  return (
   
    <div className='card' >
<h1> {props.title}</h1>

<img src='https://cdn.shopify.com/s/files/1/0306/6419/6141/articles/coding_languages.png?v=1619126283' 
alt="Coding Image" width="80%"height="110"></img>

<p> { props.description}</p>
    </div>
    
    )
}

export default Card
