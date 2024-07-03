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
import { Box, Typography } from "@mui/material";
import React from "react";

const Card = (props) => {
  return (
    <Box
      sx={{
        backgroundColor: "#ddd7a0",
        textAlign: "center",
        alignItems: "center",
        alignSelf:"center",
        // width: "80%",
        height: "200px",
        fontFamily: "Roboto",
        fontWeight: "400",
        border: "2px solid black",
      }}
    >
      <Typography fontWeight={"700"} fontStyle={"roboto"} fontSize={"24px"}> {props.title}</Typography>

      <img
        src="https://cdn.shopify.com/s/files/1/0306/6419/6141/articles/coding_languages.png?v=1619126283"
        alt="Coding Image"
        width="80%"
        height="110"
      ></img>

      <Typography> {props.description}</Typography>
    </Box>
  );
};

export default Card;
