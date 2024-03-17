import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const linksStyle = {
  textDecoration: "none",
  color: "white",
  paddingRight: "20px",
};

export const Header = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
        <Typography
            sx={linksStyle}
            component={Link}
            to="/"
            variant="h6"
          >
            Home
          </Typography>
          <Typography
            sx={linksStyle}
            component={Link}
            to="/totalRecords"
            variant="h6"
          >
            Statystyki
          </Typography>
          <Typography
            sx={linksStyle}
            component={Link}
            to="/addSpeedwayRace"
            variant="h6"
          >
            Dodaj Mecz
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};
