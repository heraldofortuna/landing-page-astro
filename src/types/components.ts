type ButtonSize = 'small' | 'medium' | 'large';
type ButtonVariant = 'primary' | 'secondary' | 'outline';

export interface ButtonProps {
  text: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  onClick?: string | null | undefined;
}

type InputfieldType = 'text' | 'email' | 'password' | 'number' | 'date';
type InputfieldValue = string | number;

export interface InputfieldProps {
  label?: string;
  type?: InputfieldType;
  name: string;
  id?: string;
  placeholder?: string;
  value?: InputfieldValue;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  onChange?: string | null | undefined;
}

export interface SwitchOption {
  value: string;
  label: string;
}