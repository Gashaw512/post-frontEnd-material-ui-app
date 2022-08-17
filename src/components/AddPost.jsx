import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { DateRange, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: 5,
    p: 4,
    height: 280
};

const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px'

})

export const AddPost = () => {
    const [open, setOpen] = useState(false)
    return (
        <>

            <Tooltip title="Add Post" sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 } }} onClick={(e) => setOpen(true)} >
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>

            <Modal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} bgcolor= {"background.default"} color={'text.primary'}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" color='gray' textAlign='center'>
                        Create Post
                    </Typography>

                    <UserBox>
                        <Avatar sx={{ width: 30, height: 30 }}
                            src='https://media.istockphoto.com/id/1154642632/photo/close-up-portrait-of-brunette-woman.webp?s=612x612&w=is&k=20&c=VXaATThyOaAzg87ZuOUCCPlgMlJlpzO7WlAt0v7PNrQ=' />
                        <Typography variant='span' fontWeight={500}>John</Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: '100%' }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What is on your mind"
                        variant="standard"
                    />
                    <Stack direction='row' gap={1} mt={2} mb={3}>
                        <EmojiEmotionsIcon color='primary' />
                        <Image color='secondary' />
                        <VideoCameraBack color='succes' />
                        <PersonAdd color='error' />
                        <EmojiEmotionsIcon />
                    </Stack>
                    <ButtonGroup
                        variant='contained'
                        fullWidth
                        aria-label='outlined primary button group'
                    >
                        <Button>Post</Button>
                        <Button sx={{width:'100px'}}>
                            <DateRange />
                        </Button>
                    </ButtonGroup>
                </Box>
            </Modal>
        </>

    )
}
