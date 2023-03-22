import { User } from './User';

export interface Wallet {
  id: string;
  user: User;
  balance: number;
}
