type ButtonSize = 'small' | 'medium' | 'large';
type ButtonVariant = 'primary' | 'secondary' | 'outline';

export interface ButtonProps {
  id?: string;
  text: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  disabled?: boolean;
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
  modelValue?: InputfieldValue;
  required?: boolean;
  disabled?: boolean;
  error?: string;
}

export interface SwitchOption {
  value: string;
  label: string;
}