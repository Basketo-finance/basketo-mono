import Link from "next/link";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";

const pages = ["Explore", "Learn"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#fff",
        color: "#000",
        boxShadow: "none",
        maxHeight: "60px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <div style={{ fontSize: "24px", fontWeight: "bold" }}>
            <Link href="/">
              <a>
                <img
                  src="/images/logo_green.png"
                  alt="basketo-logo"
                  width={"200px"}
                />
              </a>
            </Link>
          </div>
          {/* <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex",} }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                variant="text"
                color="success"
              >
                {page}
              </Button>
            ))}
          </Box> */}

          <div style={{ display: "flex" }}>
            <Link href="/explore">
              <Button variant="outlined">App</Button>
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
