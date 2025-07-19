type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface ButtonProps {
  text: string;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
}

type InputfieldType = 'text' | 'email' | 'password' | 'number' | 'date';
type InputfieldValue = string | number;

interface InputfieldProps {
  label?: string;
  type?: InputfieldType;
  name: string;
  id?: string;
  placeholder?: string;
  value?: InputfieldValue;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  onChange?: (event: Event) => void;
}
