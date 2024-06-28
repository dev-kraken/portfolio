type Form = {
  label: string;
  field: string;
  name: string;
  value: string;
  required?: boolean;
};
export type AiTemplate = {
  name: string;
  desc: string;
  icon: string;
  category: string;
  slug: string;
  aiPrompt: string;
  form?: Form[];
};
