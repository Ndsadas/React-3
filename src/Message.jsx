import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const Message = ({ author, text }) => {
    return (
        <div className="text">
            <Box sx={{ width: '100%', maxWidth: 500 }}>
                <Typography variant="h4" color="primary" gutterBottom>{author}:</Typography>
                <Typography variant="h6" color="primary" gutterBottom>{text}</Typography>
            </Box>
        </div>
    )
}


export default Message;