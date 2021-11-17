import React from "react";
import Navbar from "./Navbar";
import Header from "./notNav";
import Footer from "./Footer";
import { Box } from "@chakra-ui/react";
export default function Layout({ children }) {
  return (
    <>
      <Box display="flex" minHeight="100vh" flexDirection="column">
        <Navbar />

        {children}
        <Footer />
      </Box>
    </>
  );
}
