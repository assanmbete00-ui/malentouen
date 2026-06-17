import { Box, CircularProgress } from "@mui/material";
import { useMemo } from "react";

type LoadingScreenProps = {
  loading: boolean;
  children?: React.ReactNode;
};

export default function LoadingScreen({
  loading,
  children,
}: LoadingScreenProps) {
  const memorizedComponent = useMemo(() => {
    if (loading) {
      return (
        <Box
          sx={{
            minHeight: 300,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <CircularProgress />
        </Box>
      );
    }

    return <>{children}</>;
  }, [loading, children]);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {memorizedComponent}
    </Box>
  );
}
