export type PartnersPageData = {
  banner: {
    background: {
      image: string;
      alt: string;
      position: string;
    };
    breadcrumb: Array<{
      label: string;
      href?: string;
    }>;
    eyebrow: string;
    title: string;
    description: string;
  };
  overview: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
  };
  directory: {
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
  principles: {
    id: string;
    eyebrow: string;
    title: string;
    items: Array<{
      id: string;
      title: string;
      description: string;
    }>;
  };
  cta: {
    id: string;
    title: string;
    description: string;
    action: {
      label: string;
      href: string;
    };
  };
};
