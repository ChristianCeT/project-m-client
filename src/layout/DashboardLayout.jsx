import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout() {
  return (
    <Box sx={{ display: "flex", overflowX: "hidden" }}>
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,

          overflowX: "auto", // ✅ Muy importante aquí
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
