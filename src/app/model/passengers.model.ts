import { child } from "./child.model";

export interface Passenger {
    id: number;
    fullName: string;
    checkedIn: boolean;
    checkInDate: number;
    children?: child[];
  }
  