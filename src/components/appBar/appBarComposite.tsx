import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HomeComposite from "../home/home-composite";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { common } from "@mui/material/colors";
import ClientesFieles from "../nosotros/components/clientes-fieles";
import { Link } from "@mui/material";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  { route: "#appBar", name: "Nosotros" },
  { route: "#nuestrosProductos", name: "Nuestros productos" },
  { route: "#reconocimientos", name: "Reconocimientos" },
  { route: "#testimonios", name: "Testimonios" },
  { route: "#contactenos", name: "Contactenos" },
];

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 14,
  padding: "4px 6px",
  marginRight: 2,
  lineHeight: 1.5,
  color: "#5A3327",
  backgroundColor: "#FFFFFF",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    boxShadow: "none",
    backgroundColor: "#FFFFFF",
  },
  "&:active": {
    boxShadow: "none",
  },
  "&:focus": {
    boxShadow: "0 0.2rem #26A684",
  },
});

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", justifyContent: "center" }}
    >
      <Typography variant="h6" sx={{ my: 0 }}>
        <div style={{ width: "100%" }}>
          <img
            src={require("../../images/Logo1.png")}
            width="100%"
            height="100%"
            alt="Logo"
          />
        </div>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }} href={item.route}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} id="appBar">
      <AppBar
        component="nav"
        color="inherit"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            {/* <div style={{ backgroundColor: "red", width: "10%" }}>
              <img
                src={require("../../images/Logo1.png")}
                width="100%"
                height="100%"
                alt="Logo"
              />
            </div> */}
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <BootstrapButton
                variant="contained"
                disableRipple
                key={item.name}
                size="small"
                href={item.route}
              >
                {item.name}
              </BootstrapButton>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
