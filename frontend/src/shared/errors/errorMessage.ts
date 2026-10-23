/**
 * Converts a thrown value into text suitable for a status message.
 *
 * @param error - an Error instance or another thrown value.
 * @returns The Error message, or JavaScript's string conversion of the value.
 *
 * @remarks
 * This helper does not log, translate, or sanitize the result.
 * String conversion of an arbitrary object can itself throw.
 */
export function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}
