import { FC } from "react";
import Header from "./website/Header";
import Footer from "./website/Footer";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import { useRouter } from "next/router";
import { themeOptions } from "@/theme/customTheme";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import HeaderDashboard from "./dashboard/Header";

interface IndexProps {
  children: JSX.Element | JSX.Element[];
}

const Index: FC<IndexProps> = ({ children }) => {
  const router = useRouter();
  const excludedPaths = ["/"];
  const routes = router.pathname.split("/");
  const isLayout = !!excludedPaths.includes(router.pathname);
  const isDashboard = routes[1] === "dashboard";

  // Create rtl cache
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [rtlPlugin],
  });

  return (
    <ThemeProvider theme={createTheme(themeOptions("light"))}>
      <CacheProvider value={cacheRtl}>
        {isLayout ? (
          <Box position={"relative"} zIndex={10}>
            <Box position={"absolute"} top={0} left={0} right={0} zIndex={9}>
              <Header />
              <Box position={"absolute"} top={0} left={0} right={0} zIndex={8}>
                {children}
              </Box>
            </Box>
            <Footer />
          </Box>
        ) : isDashboard ? (
          <>
            <HeaderDashboard>{children}</HeaderDashboard>
          </>
        ) : (
          <>{children}</>
        )}
      </CacheProvider>
    </ThemeProvider>
  );
};

export default Index;
