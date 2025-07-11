import { useState } from "react";
import { login } from "../services/auth";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Paper,
  Alert,
} from "@mui/material";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!email.trim()) newErrors.email = "El correo es obligatorio";
    if (!password.trim()) newErrors.password = "La contraseña es obligatoria";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    try {
      const user = await login(email, password);
      if (user) {
        navigate("/menu/books", { replace: true });
      }
    } catch (error) {
      setGeneralError(error.message);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="xs">
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h5" align="center" gutterBottom>
            Iniciar sesión
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
              label="Correo"
              autoComplete="email"
              type="email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={Boolean(errors.email)}
              helperText={errors.email}
            />

            <TextField
              label="Contraseña"
              autoComplete="current-password"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={Boolean(errors.password)}
              helperText={errors.password}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 2, color: "white" }}
            >
              Entrar
            </Button>

            {generalError && (
              <Alert severity="error" sx={{ mt: 2 }}>
                {generalError}
              </Alert>
            )}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
