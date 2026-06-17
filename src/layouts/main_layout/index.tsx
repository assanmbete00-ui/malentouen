import { type ReactNode, type ComponentType } from "react";
import { Box } from "@mui/material";

import Container from "@components/container";
import Header from "@components/header";
import Footer from "@components/footer";
import ScrollToTop from "@components/scroll_to_top";

import BaseLayout from "@layouts/base_layout";

import styles from "./styles";

type MainLayoutProps = {
  children: ReactNode;
  ContextProvider?: ComponentType<{ children: ReactNode }>;
  FooterComponent?: ComponentType;
  bgColor?: "primary" | "secondary";
  disableContainer?: boolean;
};

export default function MainLayout({
  children,
  ContextProvider,
  FooterComponent = Footer,
  bgColor = "secondary",
  disableContainer = false,
}: MainLayoutProps) {
  const pageContent = disableContainer ? children : <Container>{children}</Container>;

  const content = (
    <Box sx={styles.root}>
      <Header />

      <Box component="main" sx={styles.main}>
        {pageContent}
      </Box>

      <FooterComponent />
    </Box>
  );

  return (
    <BaseLayout bgColor={bgColor}>
      <ScrollToTop />
      {ContextProvider ? <ContextProvider>{content}</ContextProvider> : content}
    </BaseLayout>
  );
}