import FooterSection from "../footer_section";
import NavigationItem from "@components/header/sub_components/navigation_item";
import type { FooterNavigationProps } from "./types";

export default function FooterNavigation({
  items,
  title,
}: FooterNavigationProps) {
  return (
    <FooterSection title={title}>
      {items.map((item) => (
        <NavigationItem key={item.id} item={item} variant="footer" />
      ))}
    </FooterSection>
  );
}
