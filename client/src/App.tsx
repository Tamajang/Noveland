// NoveLand App - Thai Novel Reading Website
// Design: Dark Cinematic Novel Platform
// Routes: Home, Novel Detail, Read Chapter, Search, Category, Bookmarks, Wallet, TopUp, Privacy, Terms, Contact


import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import AppBar from "./components/AppBar";

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

// Main layout with navbar, mobile appbar (no footer)
function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <AppBar />
    </>
  );
}

function Router() {
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
          <MainLayout>
            <Home />
          </MainLayout>
        )}
      </Route>
      <Route path="/novel/:id">
        {() => (
          <MainLayout>
            <NovelDetail />
          </MainLayout>
        )}
      </Route>
      <Route path="/search">
        {() => (
          <MainLayout>
            <Search />
          </MainLayout>
        )}
      </Route>
      <Route path="/category/:slug">
        {() => (
          <MainLayout>
            <Category />
          </MainLayout>
        )}
      </Route>
      <Route path="/bookmarks">
        {() => (
          <MainLayout>
            <Bookmarks />
          </MainLayout>
        )}
      </Route>
      <Route path="/wallet">
        {() => (
          <MainLayout>
            <Wallet />
          </MainLayout>
        )}
      </Route>
      <Route path="/topup">
        {() => (
          <MainLayout>
            <TopUp />
          </MainLayout>
        )}
      </Route>
      <Route path="/privacy">
        {() => (
          <MainLayout>
            <Privacy />
          </MainLayout>
        )}
      </Route>
      <Route path="/terms">
        {() => (
          <MainLayout>
            <Terms />
          </MainLayout>
        )}
      </Route>
      <Route path="/contact">
        {() => (
          <MainLayout>
            <Contact />
          </MainLayout>
        )}
      </Route>
      <Route path="/404">
        {() => (
          <MainLayout>
            <NotFound />
          </MainLayout>
        )}
      </Route>
      <Route>
        {() => (
          <MainLayout>
            <NotFound />
          </MainLayout>
        )}
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark" switchable>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
