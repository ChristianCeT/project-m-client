import {
  Box,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import { getUsers } from "../services/userService";

export default function Users() {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        👥 Usuarios
      </Typography>

      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          style={{ color: "white" }}
        >
          Agregar usuario
        </Button>
      </Box>

      {users.length === 0 ? (
        <Typography variant="body1" align="center" sx={{ mt: 3 }}>
          No hay usuarios registrados
        </Typography>
      ) : (
        // 👉 Este Box permite el scroll en pantallas pequeñas
        <Box sx={{ width: "100%", overflowX: "auto" }}>
          <Paper sx={{ minWidth: 600 }}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                  <TableCell>ID</TableCell>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Correo</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user._id}>
                    <TableCell>{user._id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Box>
      )}
    </Box>
  );
}
