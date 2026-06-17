import type { SxProps } from "@mui/material"
import Box from "@mui/material/Box"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import Divider from "@mui/material/Divider"
import { JSX, useCallback } from "react"

import Button from "../button"
import styles from "./styles"

type DialogActionButtonProps = {
  text: string
  color: "primary" | "error" | "secondary" | "warning"
  onClick?: () => void | Promise<void>
  loading?: boolean
  disabled?: boolean
  display?: "none" | "block"
  customSx?: SxProps
}

type DialogPropviderProps = {
  title: string
  isOpen: boolean
  setClose: () => void | Promise<void>
  children: JSX.Element
  leftButton?: DialogActionButtonProps
  rightButton?: DialogActionButtonProps
  size: "small" | "medium" | "large"
  id?: string
  sx?: SxProps
}

const responsiveWidth = {
  small: ["100vw", "30rem"],
  medium: ["100vw", "40rem"],
  large: ["100vw", "50rem"]
}

export default function DialogProvider({
  title,
  isOpen,
  setClose,
  children,
  leftButton,
  rightButton,
  size = "medium",
  id,
  sx
}: DialogPropviderProps) {
  return (
    <>
      <Dialog
        id={id}
        sx={sx}
        open={isOpen}
        onClose={setClose}
        PaperProps={{
          sx: {
            ...styles.dialogPaperProps,
            width: responsiveWidth[size]
          }
        }}
      >
        <DialogTitle sx={styles.dialogTitle}>{title}</DialogTitle>
        <Divider sx={styles.dialogDivider} />
        <DialogContent sx={styles.dialogContent}>{children}</DialogContent>
        <Divider sx={styles.dialogDivider} />
        <DialogActionArea leftButton={leftButton} rightButton={rightButton} />
      </Dialog>
    </>
  )
}

function DialogActionArea({
  leftButton,
  rightButton
}: {
  leftButton?: DialogActionButtonProps
  rightButton?: DialogActionButtonProps
}) {
  const LeftButtonMemo = useCallback(
    () =>
      !!leftButton ? (
        <Button
          {...leftButton}
          sx={{ display: leftButton.display, ...leftButton.customSx }}
          loading={leftButton.loading}
        >
          {leftButton.text}
        </Button>
      ) : (
        <Box />
      ),
    [leftButton]
  )
  const RightButtonMemo = useCallback(
    () =>
      !!rightButton ? (
        <Button
          {...rightButton}
          sx={{ display: rightButton.display, ...rightButton.customSx }}
          loading={rightButton.loading}
        >
          {rightButton.text}
        </Button>
      ) : (
        <Box />
      ),
    [rightButton]
  )
  return (
    <DialogActions sx={styles.dialogActions}>
      <LeftButtonMemo />
      <RightButtonMemo />
    </DialogActions>
  )
}
