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
} from "@mui/material";

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

  const toggleBiblioteca = () => {
    setOpenBiblioteca(!openBiblioteca);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/", { replace: true });
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        },
      }}
    >
      <Box>
        <Toolbar>
          <Typography variant="h6">📒Biblioteca</Typography>
        </Toolbar>
        <Divider />

        <List disablePadding>
          {/* Menú con subitems */}
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
    </Drawer>
  );
}
