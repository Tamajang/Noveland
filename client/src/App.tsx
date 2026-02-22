// NoveLand App - Thai Novel Reading Website
// Design: Dark Cinematic Novel Platform
// Routes: Home, Novel Detail, Read Chapter, Search, Category, Bookmarks, Wallet, TopUp, Privacy, Terms, Contact

import { useState } from 'react';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";

// Pages
import Home from "./pages/Home";
import NovelDetail from "./pages/NovelDetail";
import ReadChapter from "./pages/ReadChapter";
import Search from "./pages/Search";
import Category from "./pages/Category";
import Bookmarks from "./pages/Bookmarks";
import Wallet from "./pages/Wallet";
import TopUp from "./pages/TopUp";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Reading page has its own full-screen layout without navbar/footer
function ReadingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

// Main layout with navbar, footer, mobile appbar
function MainLayout({
  children,
  onLoginClick,
}: {
  children: React.ReactNode;
  onLoginClick: () => void;
}) {
  return (
    <>
      <Navbar onLoginClick={onLoginClick} />
      <main>{children}</main>
      <Footer />
      <AppBar onLoginClick={onLoginClick} />
    </>
  );
}

function Router({ onLoginClick }: { onLoginClick: () => void }) {
  return (
    <Switch>
      {/* Reading page - no navbar/footer */}
      <Route path="/read/:novelId/:chapter">
        {(params) => (
          <ReadingLayout>
            <ReadChapter />
          </ReadingLayout>
        )}
      </Route>

      {/* All other pages with navbar/footer */}
      <Route path="/">
        {() => (
          <MainLayout onLoginClick={onLoginClick}>
            <Home />
          </MainLayout>
        )}
      </Route>
      <Route path="/novel/:id">
        {() => (
          <MainLayout onLoginClick={onLoginClick}>
            <NovelDetail />
          </MainLayout>
        )}
      </Route>
      <Route path="/search">
        {() => (
          <MainLayout onLoginClick={onLoginClick}>
            <Search />
          </MainLayout>
        )}
      </Route>
      <Route path="/category/:slug">
        {() => (
          <MainLayout onLoginClick={onLoginClick}>
            <Category />
          </MainLayout>
        )}
      </Route>
      <Route path="/bookmarks">
        {() => (
          <MainLayout onLoginClick={onLoginClick}>
            <Bookmarks />
          </MainLayout>
        )}
      </Route>
      <Route path="/wallet">
        {() => (
          <MainLayout onLoginClick={onLoginClick}>
            <Wallet />
          </MainLayout>
        )}
      </Route>
      <Route path="/topup">
        {() => (
          <MainLayout onLoginClick={onLoginClick}>
            <TopUp />
          </MainLayout>
        )}
      </Route>
      <Route path="/privacy">
        {() => (
          <MainLayout onLoginClick={onLoginClick}>
            <Privacy />
          </MainLayout>
        )}
      </Route>
      <Route path="/terms">
        {() => (
          <MainLayout onLoginClick={onLoginClick}>
            <Terms />
          </MainLayout>
        )}
      </Route>
      <Route path="/contact">
        {() => (
          <MainLayout onLoginClick={onLoginClick}>
            <Contact />
          </MainLayout>
        )}
      </Route>
      <Route path="/404">
        {() => (
          <MainLayout onLoginClick={onLoginClick}>
            <NotFound />
          </MainLayout>
        )}
      </Route>
      <Route>
        {() => (
          <MainLayout onLoginClick={onLoginClick}>
            <NotFound />
          </MainLayout>
        )}
      </Route>
    </Switch>
  );
}

function App() {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark" switchable>
        <TooltipProvider>
          <Toaster />
          <Router onLoginClick={() => setLoginOpen(true)} />
          <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
