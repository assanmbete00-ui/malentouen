import { Box, Stack, Typography } from "@mui/material"
import { useRef } from "react"

import DialogProvider from "../../components/dialog_provider"
import useTranslate from "../../hooks/use_translate"

export default function UnauthorizedPage() {
  const { translate } = useTranslate()
  const componentRef = useRef<HTMLDivElement | null>(null)

  const handleClickGo = () => {
    const oldLang = localStorage.getItem("i18nextLng") || "en"
    localStorage.clear()
    localStorage.setItem("i18nextLng", oldLang)

    const currentUrl = window.location.pathname + window.location.search
    const loginUrl = `/public/login?redirectUrl=${encodeURIComponent(
      currentUrl
    )}`

    if (componentRef?.current) {
      const dialog = document.getElementById("unauthorizedDialog")
      componentRef.current.style.display = "none"
      if (dialog) {
        dialog.style.display = "none"
      }
    }
    window.location.replace(loginUrl)
  }

  return (
    <Box
      ref={componentRef}
      id={"unauthorizedPage"}
      sx={{
        display: "none",
        width: "100vw",
        height: "100vh",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
        zIndex: 999
      }}
    >
      <DialogProvider
        sx={{ display: "none" }}
        isOpen={true}
        id="unauthorizedDialog"
        setClose={() => {}}
        title={translate("session_terminated")}
        size="large"
        rightButton={{
          text: translate("back_to_login"),
          color: "primary",
          onClick: handleClickGo
        }}
      >
        <Stack rowGap={2}>
          <Typography>{translate("session_ter_1")}</Typography>
          <Typography>{translate("session_ter_2")}</Typography>
        </Stack>
      </DialogProvider>
    </Box>
  )
}
