import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { Mail, Notifications } from '@mui/icons-material';

function Navbar(props) {
    
    const [open, setOpen]=useState(false);

    const StyledToolbar = styled(Toolbar)({
        display: 'flex',
        justifyContent: 'space-between'
    });
    const Search = styled("div")(({ theme }) => ({
        backgroundColor: 'white',
        padding: '0 10px',
        borderRadius: theme.shape.borderRadius,
        width: '40%'

    }));
    const Icons = styled(Box)(({ theme }) => ({
        display: 'none',
        gap: '10px',
        alignItems: 'center',
        [theme.breakpoints.up('sm')]: {
            display: 'flex'
        }
    }));
    const UserBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        gap: '20px',
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        },
        alignItems: 'center'
    }));
    return (
        <AppBar  width='100%' z-index='99999'>

            <StyledToolbar>
                <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>Logo</Typography>
                <AccessTimeFilledIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
                <Search><InputBase placeholder='Search ....' /></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar onClick={(e)=>setOpen(true)}   sx={{ width: 30, height: 30 }} src='https://media.istockphoto.com/id/1154642632/photo/close-up-portrait-of-brunette-woman.webp?s=612x612&w=is&k=20&c=VXaATThyOaAzg87ZuOUCCPlgMlJlpzO7WlAt0v7PNrQ=' />
                </Icons>
                <UserBox onClick={(e)=>setOpen(true)}>
                    <Avatar sx={{ width: 30, height: 30 }}
                    src='https://media.istockphoto.com/id/1154642632/photo/close-up-portrait-of-brunette-woman.webp?s=612x612&w=is&k=20&c=VXaATThyOaAzg87ZuOUCCPlgMlJlpzO7WlAt0v7PNrQ=' />
                    <Typography variant='span'>John</Typography>
                </UserBox>
            </StyledToolbar>

            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                onClose={(e)=>setOpen(false)}
                open={open}
                
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>
        </AppBar>
    );
}

export default Navbar;