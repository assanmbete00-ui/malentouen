import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import MusicNoteRoundedIcon from "@mui/icons-material/MusicNoteRounded";
import WhatsappIcon from "@mui/icons-material/WhatsApp";

export const SOCIALS = [
  {
    id: "facebook",
    label: "Facebook",
    icon: FacebookRoundedIcon,
    url: "",
    visible: true,
    enabled: true,
  },
  {
    id: "instagram",
    label: "Instagram",
    icon: InstagramIcon,
    url: "",
    visible: true,
    enabled: true,
  },
  {
    id: "youtube",
    label: "YouTube",
    icon: YouTubeIcon,
    url: "",
    visible: true,
    enabled: false,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: LinkedInIcon,
    url: "",
    visible: true,
    enabled: false,
  },
  {
    id: "x",
    label: "X",
    icon: XIcon,
    url: "",
    visible: true,
    enabled: false,
  },
  {
    id: "tiktok",
    label: "TikTok",
    icon: MusicNoteRoundedIcon,
    url: "",
    visible: true,
    enabled: false,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    icon: WhatsappIcon,
    url: "",
    visible: true,
    enabled: false,
  },
] as const;