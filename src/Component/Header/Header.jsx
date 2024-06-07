import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import AppRoutes from "../Route/Route";
import "../Header/Header.css";
import CasinoIcon from "@mui/icons-material/Casino";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import PropaneIcon from "@mui/icons-material/Propane";
import { Link, NavLink, Route, Router, Routes } from "react-router-dom";
import LeaderBoard from "../Leaderboard/leaderBoard";
// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const connectWallet = () => {
    if (window.ethereum) {
      window.ethereum.request({ method: "eth_requestAccounts" }).then((res) => {
        console.log(res);
        window.ethereum
          .request({
            method: "eth_getBalance",
          })
          .then((balance) => {
            console.log(balance);
          });
      });
    } else {
      alert("install metamask extension!!");
    }
  };

  return (
    <>
      <AppBar
        position="static"
        className="color_gradient"
        style={{ height: "55px" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Avatar
              sx={{
                width: "40px",
                height: "40px",
                display: { xs: "none", md: "flex" },
                mr: 1,
              }}
              className="0"
              src="Images/logo.svg"
            />

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {/* {pages.map((page) => ( */}
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link>
                    <Typography textAlign="center">{"Game"}</Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link>
                    <Typography textAlign="center">{"Leaderboard"}</Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link>
                    <Typography textAlign="center">{"Promotions"}</Typography>
                  </Link>
                </MenuItem>
                {/* ))} */}
              </Menu>
            </Box>
            <Avatar
              sx={{
                width: "40px",
                height: "40px",
                display: { xs: "flex", md: "none" },
                mr: 1,
              }}
              className="0"
              src="Images/logo.svg"
            />

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <NavLink to="/" className="allGame mx-3" end>
                <li
                  onClick={handleCloseNavMenu}
                  sx={{ display: "block" }}
                  className="fw-lighter "
                >
                  <span>
                    {" "}
                    <CasinoIcon />
                  </span>{" "}
                  <span className="p-1 fw-bold"> Games</span>
                </li>
              </NavLink>

              <NavLink to="/leaderboard" className="allGame">
                <li
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                  className="fw-lighter"
                >
                  <LeaderboardIcon />{" "}
                  <span className="fw-bold p-1"> Leaderboard</span>
                </li>
              </NavLink>
              <NavLink to="/promotion " className="allGame mx-3 ">
                <li
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                  className="fw-lighter"
                >
                  <PropaneIcon />{" "}
                  <span className="p-1 fw-bold"> Promotions</span>
                </li>
              </NavLink>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Button
                variant="outlined"
                size="large"
                className="connect_btn m-1"
                onClick={connectWallet}
              >
                Connect
              </Button>

              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    sx={{ width: "100%", height: "100%" }}
                    src="Images/setting.svg"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{"Profile"}</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{"Log out"}</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box className="">
        <AppRoutes className="" />
      </Box>
    </>
  );
}
export default ResponsiveAppBar;
