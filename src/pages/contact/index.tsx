import PageBanner from "@components/page_banner";

import useContact from "./hooks/use_contact";
import useContactForm from "./hooks/use_contact_form";

import ContactOverview from "./sub_components/contact_overview";
import ContactChannels from "./sub_components/contact_channels";
import ContactForm from "./sub_components/contact_form";
import ContactLocation from "./sub_components/contact_location";

export default function Contact() {
  const data = useContact();

  const form = useContactForm(data.form);

  return (
    <>
      <PageBanner {...data.banner} />

      <ContactOverview {...data.overview} />

      <ContactChannels {...data.channels} />

      <ContactForm
        {...data.form}
        values={form.values}
        errors={form.errors}
        onChange={form.handleChange}
        onSubmit={form.handleSubmit}
      />

      <ContactLocation {...data.location} />
    </>
  );
}