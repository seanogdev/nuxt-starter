import { useNow } from '@vueuse/core';
import { DateTime } from 'luxon';

/**
 * A composable that provides a reactive DateTime object that updates every minute.
 * This is useful when you need the time but don't need high precision.
 * @returns A reactive DateTime object
 */
export function useNowByMinute() {
  const now = useNow({ interval: 60000 });
  return computed(() => DateTime.fromJSDate(now.value));
}
