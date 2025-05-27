export interface ProfileFormData {
  username: string;
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
}

export interface ProfileImageProps {
  image: string | null;
  defaultImage: string;
  onEdit: () => void;
}

export interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  selectedImage: string | null;
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
