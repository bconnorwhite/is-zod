import type { ZodSchema } from "zod";

export default function is<T>(value: unknown, schema: ZodSchema<T>): value is T {
  return schema.safeParse(value).success;
}

export function validate<T>(schema: ZodSchema<T>) {
  return (value: unknown): value is T => is(value, schema);
}
