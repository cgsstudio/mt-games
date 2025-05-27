export interface Transaction {
  id: number;
  date: string;
  event: string;
  profileImg: string | null;
  status: 'Complete' | 'Failed' | 'Pending';
  amount: string;
  change: '+' | '-' | '';
  coins: number;
  color: string;
}
