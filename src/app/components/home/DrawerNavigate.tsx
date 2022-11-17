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


export default function DrawerNavigate() {
  const [open, setOpen] = useState(false)
  const toggleDrawer = () => {
    setOpen(open ? false : true)
  }

  return (
    <div>
       <React.Fragment >
          <Button onClick={() => toggleDrawer()}>"hiu"</Button>

          <SwipeableDrawer
            anchor='left'
            open={open}
            onClose={() => toggleDrawer()}
            onOpen={() => console.log("hi")}
          >
            item
          </SwipeableDrawer>
        </React.Fragment>
    </div>
  );
}
