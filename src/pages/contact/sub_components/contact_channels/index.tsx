import {
  Box,
  Link,
  Typography,
} from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

import Card from "@components/card";
import Section from "@components/section";
import SectionTitle from "@components/section_title";

import styles from "./styles";
import type { ContactChannelsProps } from "./types";
import type { ContactChannelIcon } from "../../types";

const ICONS: Record<ContactChannelIcon, typeof LocationOnOutlinedIcon> = {
  location: LocationOnOutlinedIcon,
  phone: PhoneOutlinedIcon,
  email: MailOutlineOutlinedIcon,
  hours: AccessTimeOutlinedIcon,
  website: LanguageOutlinedIcon,
};

export default function ContactChannels({
  id,
  eyebrow,
  title,
  description,
  items,
}: ContactChannelsProps) {
  return (
    <Section
      id={id}
      variant="paper"
      spacing="spacious"
    >
      <SectionTitle
        eyebrow={eyebrow}
        title={title}
        subtitle={description}
      />

      <Box sx={styles.grid}>
        {items.map((item) => {
          const Icon = ICONS[item.icon];

          return (
            <Card key={item.id} sx={styles.card}>
              <Box sx={styles.iconBox}>
                <Icon sx={styles.icon} />
              </Box>

              <Typography sx={styles.label}>
                {item.label}
              </Typography>

              <Typography
                component="div"
                sx={styles.value}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    sx={styles.link}
                  >
                    {item.value}
                  </Link>
                ) : (
                  item.value
                )}
              </Typography>
            </Card>
          );
        })}
      </Box>
    </Section>
  );
}