import type { ReactNode } from "react";

export type MediaLightboxItem = {
  id: string;
  type?: "image" | "video";
  src: string;
  alt: string;
  title?: ReactNode;
  poster?: string;
};

export type MediaLightboxLabels = {
  close: string;
  previous: string;
  next: string;
};

export type MediaLightboxProps = {
  open: boolean;
  items: MediaLightboxItem[];
  activeIndex: number;
  labels: MediaLightboxLabels;
  onClose: () => void;
  onChange: (index: number) => void;
};