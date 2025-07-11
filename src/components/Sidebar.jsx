import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Toolbar,
  Typography,
  Divider,
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import BookIcon from "@mui/icons-material/Book";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PeopleIcon from "@mui/icons-material/People";
import LogoutIcon from "@mui/icons-material/Logout";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

export default function Sidebar() {
  const navigate = useNavigate();
  const [openBiblioteca, setOpenBiblioteca] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleBiblioteca = () => setOpenBiblioteca(!openBiblioteca);
  const toggleDrawer = () => setMobileOpen(!mobileOpen);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/", { replace: true });
  };

  const drawerContent = (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Box>
        <Toolbar>
          <Typography variant="h6">📒Biblioteca</Typography>
        </Toolbar>
        <Divider />

        <List disablePadding>
          <ListItemButton onClick={toggleBiblioteca}>
            <ListItemIcon>
              <LibraryBooksIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Biblioteca" />
            {openBiblioteca ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={openBiblioteca} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ pl: 1 }}>
              <ListItemButton onClick={() => navigate("/menu/reserve")}>
                <ListItemIcon>
                  <BookmarkIcon sx={{ fontSize: 20 }} />
                </ListItemIcon>
                <ListItemText secondary="Reserva" />
              </ListItemButton>

              <ListItemButton onClick={() => navigate("/menu/books")}>
                <ListItemIcon>
                  <BookIcon sx={{ fontSize: 20 }} />
                </ListItemIcon>
                <ListItemText secondary="Libros" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={() => navigate("/menu/users")}>
            <ListItemIcon>
              <PeopleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Usuarios" />
          </ListItemButton>
        </List>
      </Box>

      <Box>
        <Divider />
        <ListItemButton onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon style={{ color: "red" }} />
          </ListItemIcon>
          <ListItemText primary="Salir" />
        </ListItemButton>
      </Box>
    </Box>
  );

  return (
    <>
      {isMobile && (
        <IconButton
          onClick={toggleDrawer}
          sx={{ position: "fixed", top: 10, left: 10, zIndex: 1301 }}
          color="primary"
        >
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? mobileOpen : true}
        onClose={toggleDrawer}
        ModalProps={{ keepMounted: true }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}
