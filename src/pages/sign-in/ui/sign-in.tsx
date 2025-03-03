import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { schema } from "../lib/schema";
import { SignInType } from "../model/signin.type";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../shared/store/store";
import { setLogin } from "../../../entities/auth-api";
import { Navigate } from "react-router-dom";
import { AppRoute } from "../../../shared/const";

export function SignIn() {
  const { isAuthenticated, authError } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();

  const formMethodsEdit = useForm<SignInType>({
    defaultValues: {
      login: '',
      password: ''
    },
    resolver: yupResolver(schema)
  });

  const handleSubmit = formMethodsEdit.handleSubmit(({ login, password }) => {
    const res = dispatch(setLogin({ username: login, password }))
    console.log(res)
  }, (err) => {
    console.log(err)
  });

  if (isAuthenticated) {
    return <Navigate to={AppRoute.AppLayout} />
  };

  return (
    <Container maxWidth="xs">
      <Stack direction="column" alignItems="center" sx={{ mt: 8 }}>
        <Typography variant="h5" gutterBottom>
          Вход в систему
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            error={!!formMethodsEdit.formState.errors['login']}
            helperText={formMethodsEdit.formState.errors['login']?.message}
            label="Логин"
            fullWidth
            margin="normal"
            variant="outlined"
            {...formMethodsEdit.register('login')}
          />
          <TextField
            error={!!formMethodsEdit.formState.errors['password']}
            helperText={formMethodsEdit.formState.errors['password']?.message}
            fullWidth
            margin="normal"
            label="Пароль"
            type="password"
            variant="outlined"
            {...formMethodsEdit.register('password')}
          />
          {authError && <p style={{ color: "red" }}>{authError}</p>}
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
            Войти
          </Button>
        </form>
      </Stack>
    </Container>
  )
}