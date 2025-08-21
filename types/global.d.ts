// types/contact.d.ts

export interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  serviceType: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}