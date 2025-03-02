import { ReactNode } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import { Navigate } from "react-router-dom"
import { AppRoute } from "../const"

type Props = {
  children: ReactNode
};

export function ProtectedRoute({ children }: Props) {
  const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated);
  return isAuth ? children : <Navigate to={AppRoute.SignIn} />;
};