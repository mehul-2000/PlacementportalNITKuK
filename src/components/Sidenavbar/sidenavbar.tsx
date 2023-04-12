import * as React from "react";
import { useNavigate } from "react-router-dom";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LoginIcon from "@mui/icons-material/Login";
import GroupsIcon from "@mui/icons-material/Groups";
import StarsIcon from "@mui/icons-material/Stars";
import CodeIcon from "@mui/icons-material/Code";
import ContactIcon from "@mui/icons-material/ConnectWithoutContact";
import { Route, Routes } from "react-router-dom";
import "./sidenavbar.css";
import Team from "../../pages/Team/Team";
import DeveloperCorner from "../../pages/Developer/Developer";
import Announcement from "../../pages/Announcement/Announcement";
import AddNewCompany from "../../pages/AddNewCompany/AddNewCompany";
import InterviewExperience from "../../pages/InterviewExperience/InterviewExperience";
import AdminCorner from "../../pages/Admin-Management/Admin-Management";
import Contact from "../../pages/Contact/Contact";
import HallOfFame from "../../pages/HallOfFame/HallOfFame";
import TeamPage from "../../pages/Team/Team";
import Footer from "../../components/Footer/footer";
import Landing from "../../pages/LandingPage/Landing";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();
  const navigateFunction = (e: any, index: any) => {
    if (index == 0) navigate("/main-portal/login");
    else if (index == 1) navigate("/main-portal/team");
    else if (index == 2) navigate("/main-portal/hall-of-fame");
    else if (index == 3) navigate("/main-portal/developers");
    else navigate("/main-portal/contact");
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          open={open}
          sx={{
            backgroundImage:
              "linear-gradient(107.2deg, rgb(150, 15, 15) 10.6%, rgb(247, 0, 0) 91.1%);",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography id="appbar" variant="h6" noWrap component="div">
              <img
                src="data:image/png;base64,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"
                alt="Kitty Katty!"
                className="nav-logo"
              />
              <span id="head-text">Placement Portal</span>
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {["Login", "Team", "Hall of Fame", "Developers", "Contact Us"].map(
              (text, index) => (
                <ListItem
                  key={text}
                  disablePadding
                  sx={{ display: "block" }}
                  onClick={(e) => navigateFunction(e, index)}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      color: "#413F3D",
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {index === 0 ? (
                        <LoginIcon />
                      ) : index === 1 ? (
                        <GroupsIcon />
                      ) : index === 2 ? (
                        <StarsIcon />
                      ) : index === 3 ? (
                        <CodeIcon />
                      ) : (
                        <ContactIcon />
                      )}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
          <Divider />
          {/* <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, backgroundColor: "#EDF1F5" }}>
          <DrawerHeader />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/developers" element={<DeveloperCorner />} />
            <Route path="/hall-of-fame" element={<HallOfFame />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>

          <Footer />
        </Box>
      </Box>
    </React.Fragment>
  );
}
