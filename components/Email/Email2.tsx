import { Stack, TextField, Typography } from "@mui/material";

export default function Searchbar1() {
  return (
    <Stack direction={"column"} spacing={1}>
      <Typography>Contact Us 2</Typography>
      <TextField placeholder="Email" />
      <TextField placeholder="Phone" />
    </Stack>
  );
}
