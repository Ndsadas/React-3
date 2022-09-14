import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import FolderIcon from "@mui/icons-material/Folder";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

const Chats = ({ name }) => {
    return (
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemAvatar><Avatar><FolderIcon /></Avatar></ListItemAvatar>
                <ListItemText primary={name} />
            </ListItemButton>
        </ListItem>
    );
};

export default Chats;