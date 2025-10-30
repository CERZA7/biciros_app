export interface UserData {
  uid: string;
  nombre: string;
  email: string;
  rol: 'admin' | 'trabajador';
  createdAt: Date;
}

export interface AuthContextType {
  user: any | null;
  userData: UserData | null;
  login: (email: string, password: string) => Promise<any>;
  logout: () => Promise<void>;
  loading: boolean;
}