import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { IconButton, useMediaQuery } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const pages = ["Explore", "Learn"];

const Navbar = () => {

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: "none",
        height: "75px",
        background: "rgba(0,0,0,0)",
        backdropFilter: "blur(10px)",
        display:"flex",alignItems:'center',
        zIndex:'10',
      }}
    >
      <Container sx={{height:'100%',maxWidth:"lg"}}>
        <Toolbar sx={{ display:'flex',justifyContent: "space-between",height:'100%' }}>
          <Box sx={{ fontSize: {xs:'14px',md:"20px"},display:'flex',alignItems:'center' }}>
            <Link href="/">
              Basketo
            </Link>
          </Box>
          <Box>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{fontSize:{xs:'10px',md:'14px'}}} 
                // onClick={}
                variant="text" color="primary"
              >
                {page}
              </Button>
            ))}
          </Box>

          <div style={{ display: "flex" }}>
            <Link href="/explore">
              <Button sx={{fontSize:{xs:'10px',md:'14px'}}} variant="outlined" >App</Button>
            </Link>

            {/* <Box sx={{ display: { xs: "block", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box> */}
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
