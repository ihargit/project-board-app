import { IUser } from './User';
export interface ICard {
  id: string;
  name: string;
  description: string;
  dueDate?: Date | string;
  assignee?: IUser;
}
