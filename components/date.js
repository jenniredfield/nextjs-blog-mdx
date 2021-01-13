import { parseISO, format } from 'date-fns'

export default function Date({ dateString, classNames }) {
  const date = parseISO(String(dateString))
  return <time dateTime={dateString} className={classNames}>{format(date, 'LLLL d, yyyy')}</time>
}