import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./store/hooks/useAuth";
import { checkAuth } from "./store/auth/authApi";
import { useAppDispatch } from "./store/hooks/useAppDispatch";

import AuthLayout from "./components/Layout/AuthLayout";
import MainLayout from "./components/Layout/MainLayout";
import ProtectedRoute from "./router/ProtectedRoute";

import LoginPage from "./components/Auth/LoginPage";

import DashboardPage from "./components/DashboardPage/DashboardPage";
import OffersPage from "./components/OffersPage/OffersPage";
import CandidatesPage from "./components/CandidatesPage/CandidatesPage";
import PipelinePage from "./components/PipelinePage/PipelinePage";
import MailingPage from "./components/MailingPage/MailingPage";
import StatsPage from "./components/StatsPage/StatsPage";

import NotFoundPage from "./components/NotFoundPage/NotFoundPage";

import { Paths } from "./common/constants/paths";
import { useEffect } from "react";

const App = () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated, isAuthLoaded } = useAuth();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

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
        </Route>

        <Route path={Paths.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
