import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useSession, signIn, signOut } from "next-auth/react";

//function
function notificationsLabel(count) {
  if (count === 0) {
    return "no notifications";
  }
  if (count > 99) {
    return "more than 99 notifications";
  }
  return `${count} notifications`;
}

export default function ButtonAppBar() {
  const { data: session } = useSession();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const settings = [
    { title: "Profile", func: handleCloseUserMenu },
    { title: "Logout", func: signOut },
  ];
  //const settings = ['Profile', 'Logout'];

  if (session) {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img src="MFUlogo.png" alt="" style={{ width: "125px" }} />
            </Typography>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Welcome, {session.user.name}
            </Typography>

            <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
              <IconButton aria-label={notificationsLabel(100)} sx={{ p: 2 }}>
                <Badge badgeContent={120} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 2 }}>
                  <Avatar alt="P" src={session.user.image} />
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
                {settings.map((setting) => (
                  <MenuItem key={setting.title} onClick={setting.func}>
                    <Typography textAlign="center">{setting.title}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
  } else {
    return (
      <Box md={{ flexGrow: 1}}>
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              align="center"
              sx={{ flexGrow: 0 }}
            >
             <img src="MFUlogo.png" alt="" style={{ width: "125px" }} />
            </Typography>
            <Typography
              variant="h6"
              component="div"
              align="center"
              sx={{ flexGrow: 1 }}
            >
            </Typography>
            <Typography
              variant="h6"
              component="div"
              align="center"
              sx={{ flexGrow: 0 }}
            >
              <Button color="success" onClick={() => signIn()}>
                Login
              </Button>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}
