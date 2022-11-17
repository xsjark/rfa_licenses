import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';



export default function DrawerNavigate() {
    const [open, setOpen] = useState(false)
    const toggleDrawer = () => {
        setOpen(open ? false : true)
    }

    const list = [
        {
            label: "Mis Licensias",
            url: "/"
        },
        {
            label: "Comprar Suministros",
            url: "/"
        },
        {
            label: "Soporte tecnico",
            url: "/"
        },
        {
            label: "Solicitud de desarollo",
            url: "/"
        },
        {
            label: "Facturacion",
            url: "/"
        }
    ]

    return (
        <div>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={() => toggleDrawer()}
            >
                <MenuIcon />
            </IconButton>

            <SwipeableDrawer
                anchor='left'
                open={open}
                onClose={() => toggleDrawer()}
                onOpen={() => console.log("hi")}
                PaperProps={{
                    sx: { width: { xs: "80%", md: "20%" } },
                }}
            >
                {
                    list.map((item) => {
                        return (<Box>
                            <List>
                                <ListItem>
                                    <ListItemButton>
                                    <ListItemText primary={item.label} />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Box>
                    )})
                }


            </SwipeableDrawer>
        </div>
    );
}
