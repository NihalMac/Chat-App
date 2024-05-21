import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function formatDate(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export default formatDate

