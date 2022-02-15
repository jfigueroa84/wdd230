/* Params: temperature in fahrenheit and wind speed
 * Processing: calculates the wind chill
 * Returns: wind chill (or N/A if prereqs not met)
 */
function windChill(tempF, speedMph) {
  if (tempF > 50 || speedMph < 3) {
    return 'N/A';
  }

  return (
    35.74 + 0.6215 * tempF - 35.75 * Math.pow(speedMph, 0.16) + 0.4275 * tempF * Math.pow(speedMph, 0.16) ).toFixed(); 
}
