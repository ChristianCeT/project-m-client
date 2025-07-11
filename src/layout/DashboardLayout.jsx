import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout() {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,

          minHeight: "100vh",
        }}
      >
        <Toolbar />
        <Box
          sx={{
            maxWidth: "1300px", // 💡 el ancho deseado del contenido
            mx: "auto", // 💡 centra horizontalmente
            width: "100%",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
