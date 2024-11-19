// export function formatToLocalTime(isoDate) {
//     // Ensure isoDate is provided and valid
//     if (!isoDate) {
//       console.error("Invalid date input");
//       return "Invalid Date";
//     }
  
//     const date = new Date(isoDate); // Parse ISO date string
  
//     // Check if the date is valid
//     if (isNaN(date.getTime())) {
//       console.error("Invalid Date format:", isoDate);
//       return "Invalid Date NaN";
//     }
  
//     // Options for the date formatter
//     const options = {
//       day: 'numeric', // Numeric day (e.g., 4)
//       month: 'short', // Short month name (e.g., APR)
//       year: 'numeric', // Full year (e.g., 2024)
//       hour: 'numeric', // Numeric hour
//       minute: '2-digit', // 2-digit minute
//       hour12: true, // Use 12-hour format
//     };
  
//     // Format the date to local time
//     const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
  
//     // Split the formatted string to rearrange
//     const [monthDayYear, time] = formattedDate.split(', ');
//     const [monthDay, year] = monthDayYear.split(' ');
  
//     // Custom format: day + short month + year + time
//     return `${monthDay} ${monthDay.split(' ')[1]}, ${year} ${time.toUpperCase()}`;
//   }
  
//   // Example usage
//   const isoDate = '2024-11-18T19:57:12.663Z'; // Test valid input
//   console.log(formatToLocalTime(isoDate)); // Valid date
  
//   const invalidIsoDate = 'invalid-date'; // Test invalid input
//   console.log(formatToLocalTime(invalidIsoDate)); // "Invalid Date"


export function formatToLocalTime(isoDate) {
  // Ensure isoDate is provided and valid
  if (!isoDate) {
    console.error("Invalid date input");
    return "Invalid Date";
  }

  const date = new Date(isoDate); // Parse ISO date string

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    console.error("Invalid Date format:", isoDate);
    return "Invalid Date NaN";
  }

  // Options for the date formatter
  const options = {
    day: 'numeric', // Numeric day (e.g., 4)
    month: 'short', // Short month name (e.g., Apr)
    year: 'numeric', // Full year (e.g., 2024)
    hour: 'numeric', // Numeric hour
    minute: '2-digit', // 2-digit minute
    hour12: true, // Use 12-hour format
  };

  // Format the date to local time
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
  console.log("date-time",formattedDate);

  // Parse formatted date into the desired format
  const [datePart,Year, timePart] = formattedDate.split(', '); // e.g., "Nov 19, 2024" and "4:35 PM"
  console.log("datePart",datePart);
  const [month, day] = datePart.split(" ");
  console.log("month",month,"day",day,"year",Year);

  console.log("timePart",timePart);

  // Custom format: day month year time
  return `${day} ${month.charAt(0).toUpperCase() + month.slice(1).toLowerCase()} ${Year} ${timePart.toUpperCase()}`;
}

// // Example usage:
// const isoDate = "2024-11-18T19:57:12.663Z";
// console.log(formatToLocalTime(isoDate)); // Output: "18 NOV 2024 7:57 PM"

  
  