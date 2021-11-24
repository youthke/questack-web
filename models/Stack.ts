import { Owner } from "./Owner";
import {Question} from "./Question"
export type Stack = {
  id: string,
  name: string,
  description: string,
  owner: Owner,
  questions: Question[]
}

