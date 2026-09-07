export type PartnersDirectoryProps = {
  id: string;
  eyebrow: string;
  title: string;
  items: Array<{
    id: string;
    image: string;
    name: string;
    type: string;
  }>;
};
