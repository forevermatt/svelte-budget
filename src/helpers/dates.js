
export const formatDate = timestamp => (new Date(timestamp)).toLocaleDateString()

/**
 * Format the given timestamp as a yyyy-mm-dd date, per ISO-8601. If no
 * timestamp is given, returns an empty string.
 *
 * @param timestamp
 * @returns {string}
 */
export const formatDateISO8601 = timestamp => {
  if (timestamp) {
    let date = new Date(timestamp)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    const monthString = String(month).padStart(2, '0')
    const dayString = String(day).padStart(2, '0')
    return `${year}-${monthString}-${dayString}`
  } else {
    return ''
  }
}

export const getCurrentYearMonthString = () => {
  return getYearMonthStringForMonthsBefore(0, new Date())
}

export const getMonthAfter = yearMonthString => {
  const [givenYear, givenMonth] = yearMonthString.split('-')
  let desiredMonth = Number(givenMonth) + 1
  let desiredYear = Number(givenYear)
  if (desiredMonth > 12) {
    desiredYear++
    desiredMonth = 1
  }
  let desiredMonthString = String(desiredMonth)
  if (desiredMonthString.length < 2) {
    desiredMonthString = '0' + desiredMonthString
  }
  return `${desiredYear}-${desiredMonthString}`
}

const getYearMonthStringForMonthsBefore = (numMonthsAgo, when) => {
  var currentYear = when.getFullYear()
  var currentMonth = when.getMonth() // 0 to 11
  var desiredDate = new Date(currentYear, currentMonth - numMonthsAgo)
  var fullYear = desiredDate.getFullYear()
  var desiredMonth = (desiredDate.getMonth() + 1) // 1 to 12
  return fullYear + '-' + String('0' + desiredMonth).slice(-2)
}

export const isInPast = yearMonthString => yearMonthString < getCurrentYearMonthString()
