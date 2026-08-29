import type { TextFieldProps } from "@components/text_field/types";

export type TextAreaProps = Omit<
  TextFieldProps,
  "multiline" | "rows" | "minRows"
> & {
  rows?: number;
};