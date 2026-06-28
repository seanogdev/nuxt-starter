import { DateTime } from 'luxon';

type LocalizedDateFormat = 'short' | 'medium' | 'full' | 'huge';
type LocalizedTimeFormat = 'simple' | 'withSeconds' | 'withShortOffset' | 'withLongOffset';

const DATE_FORMATS = {
  full: DateTime.DATE_FULL,
  huge: DateTime.DATE_HUGE,
  medium: DateTime.DATE_MED,
  short: DateTime.DATE_SHORT,
} as const;

const TIME_FORMATS = {
  simple: DateTime.TIME_SIMPLE,
  withLongOffset: DateTime.TIME_WITH_LONG_OFFSET,
  withSeconds: DateTime.TIME_WITH_SECONDS,
  withShortOffset: DateTime.TIME_WITH_SHORT_OFFSET,
} as const;

function formatRelative(dateTime: DateTime) {
  return dateTime.toRelative();
}

export function useDate() {
  function formatTime(dateTime: DateTime, format: LocalizedTimeFormat = 'simple') {
    return dateTime.toLocaleString(TIME_FORMATS[format]);
  }

  function formatDate(dateTime: DateTime, format: LocalizedDateFormat = 'medium') {
    return dateTime.toLocaleString(DATE_FORMATS[format]);
  }

  function formatDateTime(
    dateTime: DateTime,
    dateFormat: LocalizedDateFormat = 'medium',
    timeFormat: LocalizedTimeFormat = 'simple',
  ) {
    const datePart = dateTime.toLocaleString(DATE_FORMATS[dateFormat]);
    const timePart = dateTime.toLocaleString(TIME_FORMATS[timeFormat]);
    return `${datePart} ${timePart}`;
  }

  return {
    formatDate,
    formatDateTime,
    formatRelative,
    formatTime,
  };
}
