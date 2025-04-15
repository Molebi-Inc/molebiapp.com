/**
|--------------------------------------------------
| Npm imports
|--------------------------------------------------
*/
import { twMerge } from "tailwind-merge"
import { clsx, type ClassValue } from "clsx"

export function cn(...inputs: ClassValue[]) {

  /**
  |--------------------------------------------------
  | Returned function
  |--------------------------------------------------
  */
  return twMerge(clsx(inputs))
}
