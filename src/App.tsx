import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAppDispatch } from "./store/hooks/useAppDispatch";
import { useAuth } from "./store/hooks/useAuth";

import AuthLayout from "./components/Layout/AuthLayout";
import MainLayout from "./components/Layout/MainLayout";
import ProtectedRoute from "./router/ProtectedRoute";

import LoginPage from "./components/Authentication/LoginPage";

import CandidatesPage from "./components/CandidatesPage/CandidatesPage";
import DashboardPage from "./components/DashboardPage/DashboardPage";
import MailingPage from "./components/MailingPage/MailingPage";
import OffersPage from "./components/OffersPage/OffersPage";
import PipelinePage from "./components/PipelinePage/PipelinePage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import SettingsPage from "./components/SettingsPage/SettingsPage";
import StatsPage from "./components/StatsPage/StatsPage";

import NotFoundPage from "./components/NotFoundPage/NotFoundPage";

import { Paths } from "./common/constants/paths";
import { loginSuccess } from "./store/auth/authSlice";
import { getStoredToken } from "./store/auth/authStorage";

const App = () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated, isAuthLoaded } = useAuth();

  useEffect(() => {
    const token = getStoredToken();

    if (token) {
      dispatch(loginSuccess({ token, remember: true }));
    }
  }, []);

  if (!isAuthLoaded) return null;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={Paths.INDEX}
          element={
            isAuthenticated ? (
              <Navigate to={Paths.DASHBOARD} replace />
            ) : (
              <Navigate to={Paths.LOGIN} replace />
            )
          }
        />

        <Route element={<AuthLayout />}>
          <Route path={Paths.LOGIN} element={<LoginPage />} />
        </Route>

        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route path={Paths.DASHBOARD} element={<DashboardPage />} />
          <Route path={Paths.OFFERS} element={<OffersPage />} />
          <Route path={Paths.CANDIDATES} element={<CandidatesPage />} />
          <Route path={Paths.PIPELINE} element={<PipelinePage />} />
          <Route path={Paths.MAILING} element={<MailingPage />} />
          <Route path={Paths.STATS} element={<StatsPage />} />
          <Route path={Paths.PROFILE} element={<ProfilePage />} />
          <Route path={Paths.SETTINGS} element={<SettingsPage />} />
        </Route>

        <Route path={Paths.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
