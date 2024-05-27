import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const BasicAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Faturas
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default BasicAppBar;
