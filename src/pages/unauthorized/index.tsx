import { Stack, Typography } from "@mui/material";
import Button from "@components/button";
import Dialog from "@components/dialog";
import useTranslate from "@hooks/use_translate";

export default function UnauthorizedPage() {
  const { translate } = useTranslate();

  const handleClickGo = () => {
    const oldLang =
      localStorage.getItem("i18nextLng") ||
      "en";

    localStorage.clear();

    localStorage.setItem(
      "i18nextLng",
      oldLang,
    );

    const currentUrl =
      window.location.pathname +
      window.location.search;

    const loginUrl =
      `/public/login?redirectUrl=${encodeURIComponent(
        currentUrl,
      )}`;

    window.location.replace(loginUrl);
  };

  return (
    <Dialog
      open
      id="unauthorizedDialog"
      title={translate("session_terminated")}
      size="large"
      actions={
        <Button
          appVariant="primary"
          onClick={handleClickGo}
        >
          {translate("back_to_login")}
        </Button>
      }
    >
      <Stack rowGap={2}>
        <Typography>
          {translate("session_ter_1")}
        </Typography>

        <Typography>
          {translate("session_ter_2")}
        </Typography>
      </Stack>
    </Dialog>
  );
}