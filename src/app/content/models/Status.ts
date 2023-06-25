import { User } from "./User";

export interface Status {
  id: number;
  name: string;
  description: string;
  registerDate: Date;
  alterationDate?: Date;
  registerUser?: User;
}
