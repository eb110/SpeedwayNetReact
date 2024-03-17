import { useEffect, useState } from "react";
import { TotalRecord } from "../models/TotalRecord";
import { TotalRecordsPage } from "../../features/totalRecords/TotalRecordsPage";
import { Header } from "./Header";
import { Container, CssBaseline, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

const App = () => {

  return (
    <>
      <CssBaseline />
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default App;
