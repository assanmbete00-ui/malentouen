import { Box, Typography } from "@mui/material";

import Breadcrumb from "@components/breadcrumb";
import Button from "@components/button";

import * as styles from "./styles";
import type { AdminPageHeaderProps } from "./types";

export default function AdminPageHeader({
  title,
  description,
  breadcrumbs,
  primaryAction,
  secondaryActions,
}: AdminPageHeaderProps) {
  const hasActions = primaryAction || (secondaryActions && secondaryActions.length > 0);

  return (
    <Box component="section" aria-labelledby="page-header-title">
      {breadcrumbs && breadcrumbs.length > 0 && (
        <Breadcrumb items={breadcrumbs} sx={{ mb: 1.5 }} />
      )}

      <Box sx={styles.root}>
        <Box sx={styles.textBlock}>
          <Typography
            id="page-header-title"
            component="h1"
            sx={styles.title}
          >
            {title}
          </Typography>

          {description && (
            <Typography sx={styles.description}>{description}</Typography>
          )}
        </Box>

        {hasActions && (
          <Box sx={styles.actions}>
            {secondaryActions?.map((action) => (
              <Button
                key={action.label}
                appVariant="outline"
                onClick={action.onClick}
                href={action.href}
                disabled={action.disabled}
                startIcon={action.startIcon}
                endIcon={action.endIcon}
              >
                {action.label}
              </Button>
            ))}

            {primaryAction && (
              <Button
                appVariant="primary"
                onClick={primaryAction.onClick}
                href={primaryAction.href}
                disabled={primaryAction.disabled}
                startIcon={primaryAction.startIcon}
                endIcon={primaryAction.endIcon}
              >
                {primaryAction.label}
              </Button>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
}
