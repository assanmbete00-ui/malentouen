import { Box } from "@mui/material";

import Button from "@components/button";
import Section from "@components/section";
import SectionTitle from "@components/section_title";
import TextArea from "@components/text_area";
import TextField from "@components/text_field";

import styles from "./styles";
import type { ContactFormProps } from "./types";

export default function ContactForm({
  id,
  eyebrow,
  title,
  description,
  fields,
  submitLabel,
  values,
  errors,
  onChange,
  onSubmit,
}: ContactFormProps) {
  return (
    <Section id={id} spacing="spacious">
      <Box sx={styles.layout}>
        <Box sx={styles.intro}>
          <SectionTitle
            eyebrow={eyebrow}
            title={title}
            subtitle={description}
          />
        </Box>

        <Box
          component="form"
          noValidate
          onSubmit={onSubmit}
          sx={styles.form}
        >
          <Box sx={styles.row}>
            <TextField
              name="name"
              label={fields.name.label}
              placeholder={fields.name.placeholder}
              value={values.name}
              onChange={onChange}
              error={Boolean(errors.name)}
              helperText={errors.name}
              required
            />

            <TextField
              name="email"
              type="email"
              label={fields.email.label}
              placeholder={fields.email.placeholder}
              value={values.email}
              onChange={onChange}
              error={Boolean(errors.email)}
              helperText={errors.email}
              required
            />
          </Box>

          <Box sx={styles.row}>
            <TextField
              name="phone"
              type="tel"
              label={fields.phone.label}
              placeholder={fields.phone.placeholder}
              value={values.phone}
              onChange={onChange}
              error={Boolean(errors.phone)}
              helperText={errors.phone}
            />

            <TextField
              name="subject"
              label={fields.subject.label}
              placeholder={fields.subject.placeholder}
              value={values.subject}
              onChange={onChange}
              error={Boolean(errors.subject)}
              helperText={errors.subject}
              required
            />
          </Box>

          <TextArea
            name="message"
            label={fields.message.label}
            placeholder={fields.message.placeholder}
            value={values.message}
            onChange={onChange}
            error={Boolean(errors.message)}
            helperText={errors.message}
            required
          />

          <Box sx={styles.actions}>
            <Button type="submit"
              sx={styles.submitButton}
              >
              {submitLabel}
            </Button>
          </Box>
        </Box>
      </Box>
    </Section>
  );
}