import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import DraftsIcon from '@mui/icons-material/Drafts';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { Switch } from '@mui/material';

const Sidebar = ({mode, setMode}) => {
  return (
    <Box flex={1} p={2} sx={{display:{xs:'none', sm:'block'}}} >
    <Box position='fixed'>
    <List>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#'>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#'>
            <ListItemIcon>
              <ContactPageIcon />
            </ListItemIcon>
            <ListItemText primary="Page" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#'>
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Group" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#'>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#'>
            <ListItemIcon>
              <LocalGroceryStoreIcon />
            </ListItemIcon>
            <ListItemText primary="Marketing" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#'>
            <ListItemIcon>
              <ModeNightIcon />
            </ListItemIcon>
            <Switch onChange={(e)=>setMode(mode=='light'? 'dark':'light')}/>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
    </Box>
  );
};

export default Sidebar;