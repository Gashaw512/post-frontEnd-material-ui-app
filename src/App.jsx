import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import Rightbar from './components/Rightbar'
import { Stack, Box, createTheme, ThemeProvider } from "@mui/material";
import { AddPost } from "./components/AddPost";
import { useState } from "react";

const App = () => {
    const [mode, setMode] = useState('light');
    const darkTheme = createTheme({
        palette: {
            mode: mode
        }
    })
    return (
        <ThemeProvider theme={darkTheme}>
            <Box bgcolor={"background.default"} color={'text.primary'} >
                <Navbar />
                <div style={{ marginTop: 80 }}>
                    <Stack direction={'row'} spacing={5} justifyContent='space-evenly'>
                        <Sidebar setMode={setMode} mode={mode} />
                        <Feed />
                        <Rightbar />

                    </Stack>
                    <AddPost />
                </div>
            </Box>
            </ThemeProvider>
            );
     
        
}
export default App;