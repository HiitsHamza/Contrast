export interface UserProfile {
  uid: string;
  displayName: string;
  email: string;
  phoneNumber?: string;
  location?: string;
  bio?: string;
  preferences?: {
    notifications?: boolean;
    marketingEmails?: boolean;
  };
  createdAt: number;
  updatedAt: number;
} 