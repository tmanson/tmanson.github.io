import React from "react";
import { AppBar, Avatar, Container, Stack, Typography } from "@mui/material";
import photoUrl from '../assets/photo.jpeg'

import './Header.scss'

Header.propTypes = {};

function Header(props) {
  return <AppBar className={'header-app-bar'} >
    <Stack direction={"row"} gap={2}>
      <Avatar src={photoUrl} sx={{width:64, height:64}}/>
      <Stack>
        <Typography variant={"h4"} component="div">Tomy MANSON</Typography>
        <Typography variant={"subtitle2"} component="div">tomymanson@gmail.com</Typography></Stack>
    </Stack>


  </AppBar>;
}

export default Header;