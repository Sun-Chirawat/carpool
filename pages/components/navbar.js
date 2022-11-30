import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";

import { useSession, signIn, signOut } from "next-auth/react";

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

  if (session) {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img src="MFUlogo.png" alt="" style={{ width: "125px" }} />
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >  
              Welcome, {session.user.name}
            </Typography>
            <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
              <img
                src={session.user.image}
                alt=""
                style={{ borderRadius: "50px", width: "50px" }}
              />{" "}
              <IconButton aria-label={notificationsLabel(100)}>
                <Badge badgeContent={120} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Typography>

            <Button color="error" onClick={() => signOut()}>
              LOGOUT
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  } else {
    return (
      <Box md={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              align="center"
              sx={{ flexGrow: 1 }}
            >
              News
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Logo
            </Typography>

            <Button color="success" onClick={() => signIn()}>
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}
