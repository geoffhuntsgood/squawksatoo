import { Button } from "@mui/material";

export const DKButton = ({
  label,
  handleClick
}: {
  label: string;
  handleClick: any;
}) => (
  <Button variant="contained" onClick={handleClick}>
    {label}
  </Button>
);
