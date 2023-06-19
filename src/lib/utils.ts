import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}

export function abrevText(text: string) {
  return text
    .split(" ")
    .map((item) => item[0])
    .join("")
}

type ItemNavVariants = "default" | "active" | "withBg" | "activeWithBg"

export function selectCorrectVariant(
  id: string,
  index: string,
  img?: string
): ItemNavVariants {
  if (id === index) {
    if (img) {
      return "active"
    }
    return "activeWithBg"
  } else {
    if (img) {
      return "default"
    }
    return "withBg"
  }
}
