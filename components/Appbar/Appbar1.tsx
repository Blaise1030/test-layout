import { AppBar, Toolbar, Typography } from "@mui/material";

export default function AppBar1({ merchantName }: { merchantName: string }) {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit" component="div">
          {merchantName}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
