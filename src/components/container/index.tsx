import { Container as MuiContainer, type ContainerProps } from "@mui/material";

export default function Container({
  children,
  sx,
  ...props
}: ContainerProps) {
  return (
    <MuiContainer
      maxWidth="xl"
      disableGutters
      {...props}
      sx={{
        width: "100%",
        maxWidth: "1920px",
        mx: "auto",
        ...sx,
      }}
    >
      {children}
    </MuiContainer>
  );
}