import { Box, Typography } from "@mui/material";
import useTranslate from "@hooks/use_translate";

export default function PolicyPage() {
  const { translate } = useTranslate();

  return (
    <Box sx={{ p: 3 }}>
      <Typography component="h1" variant="h4">
        {translate("POLICY_TITLE")}
      </Typography>
      <Typography sx={{ mt: 2 }}>{translate("POLICY_PLACEHOLDER")}</Typography>
    </Box>
  );
}
