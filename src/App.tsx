import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CaregiversPage from "./pages/CaregiversPage";
import CaregiverProfilePage from "./pages/CaregiverProfilePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFound from "./pages/NotFound";
import DashBoard from "./pages/Dashboard";
import CadastroPaciente from "./pages/CadastroPaciente";
import ConfirmationPage from "./pages/ConfirmationPage";
import ChatPage from "./pages/ChatPage";
import LayoutDashboard from "./components/dashboard/LayoutDash";
import NotFoundDash from "./components/dashboard/NotFoundDash";
import ProfileCuidadora from "./pages/ProfileCuidadora";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="cuidadores" element={<CaregiversPage />} />
            <Route path="cuidadores/:id" element={<CaregiverProfilePage />} />
            <Route path="sobre" element={<AboutPage />} />
            <Route path="entrar" element={<LoginPage />} />
            <Route path="cadastrar" element={<RegisterPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/dashboard" element={<LayoutDashboard />}>
            <Route path="*" element={<NotFoundDash />} />
            <Route path="" element={<DashBoard />} />
            <Route path="chat" element={<ChatPage />} />
            <Route path="profile-cuidador/:id" element={<ProfileCuidadora />} />
            <Route path="paciente">
              <Route path="cadastrar" element={<CadastroPaciente />} />
              <Route path="confirmacao" element={<ConfirmationPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
