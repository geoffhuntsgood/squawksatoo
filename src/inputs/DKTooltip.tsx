import { QuestionMarkOutlined } from "@mui/icons-material";
import { Tooltip } from "@mui/material";

export const DKTooltip = ({ helpText }: { helpText: string }) => (
  <Tooltip title={helpText} arrow placement="left-start">
    <sup>
      <QuestionMarkOutlined sx={{ fontSize: 15 }} />
    </sup>
  </Tooltip>
);
