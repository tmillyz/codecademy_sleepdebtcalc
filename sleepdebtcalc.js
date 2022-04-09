function getSleepHours(day) {
  switch (day) {
    case 'Monday':
      return 8;
      break;
    case 'Tuesday':
      return 8;
      break;
    case 'Wednesday':
      return 7;
      break;
    case 'Thursday':
      return 8;
      break;
    case 'Friday':
      return 6;
      break;
    case 'Saturday':
      return 5;
      break;
    case 'Sunday':
      return 6;
      break;
  }
};
// Testing if switch statement returns the right number
//console.log(getSleepHours('Saturday'))
const getActualSleepHours = () => { return getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday')};
// Testing function
//console.log(getActualSleepHours());
const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
}
//Testing function
//console.log(getIdealSleepHours());
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
  console.log(`You got ${idealSleepHours} hours. The perfect amount of sleep!`);
} else if (actualSleepHours > idealSleepHours) {
  console.log('You got '+(actualSleepHours - idealSleepHours)+ ' hours more sleep than you needed.');
} else {
  console.log('You should get '+(idealSleepHours - actualSleepHours)+ ' hours more rest!');
  }
};

calculateSleepDebt();
