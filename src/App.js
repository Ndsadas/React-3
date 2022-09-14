import React, { useEffect, useRef, useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { red, } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';
import Chats from './Chats';
import Message from './Message';



const theme = createTheme({
    palette: {
        primary: {
            main: red[500],
        },
    },
});

function App() {
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');
    const [message, setMessage] = useState([]);
    const [chatList] = useState([
        { name: "Menu", id: "1" },
        { name: "Information", id: "2" },
    ]);
    const inputRef = useRef(null);

    const onButtonClick = () => {
        let newId = 1;
        if (message.length > 0) newId = message[message.length - 1].id + 1;
        if (author.length > 0) {
            setMessage(message => [...message, { text: text, author: author, id: newId }]);
        } else {
            alert("Author name needed")
        }
    };

    useEffect(() => {
        setTimeout(() => {
        }, 1000);
        focusTextField(inputRef.current);
    }, [message, author]);

    function focusTextField(input) {
        if (input) {
            input.focus();
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <div className="App main">
                <div className="message-text">
                    <Typography variant="h5" component="div" color="primary">Information</Typography>
                    <List>
                        {chatList.map((item) => <Chats name={item.name} key={item.id} />)}
                    </List>
                </div>
                <div className="messages">
                    <Box
                        sx={{
                            alignItems: 'center',
                            '& > :not(style)': { m: 1 },
                        }}
                        noValidate
                        autoComplete="on"
                    >
                        <Typography variant="h3" component="div" color="primary">Messages</Typography>
                        <TextField
                            helperText="Please enter your name"
                            id="demo-helper-text-aligned"
                            label="Name"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            inputRef={inputRef}
                        />
                        <TextField
                            helperText="Plase enter your any text"
                            id="demo-helper-text-aligned-no-helper"
                            label="Text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                        <Stack direction="row" spacing={2}>
                            <Button variant="contained" onClick={onButtonClick} endIcon={<SendIcon />}>
                                Send
                            </Button>
                        </Stack>
                    </Box>
                    {
                        message.map(item => {
                            return (
                                <Message author={item.author} text={item.text} key={item.id} />
                            )
                        })
                    }
                </div>
            </div>
        </ThemeProvider >
    )
}

export default App;
