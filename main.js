// The scope of `random` is too loose 
// const random = Math.floor(Math.random() * 3);

const getRandEvent = () => {
    const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight 
const getTrainingDays = event => {
    //step 2: declare days before the if statement
    let days;
  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }

  return days;
};

// The scope of `name` is too tight 
const logEvent = event => {
//   const name = 'Nala';
  console.log(`${name}'s event is: ${event}`);
};

const logTime = days => {
//   const name = 'Nala';
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 
const name = 'Nala';

logEvent(event);
logTime(days);


// //other competitor
// const event2 = getRandEvent();
// const days2 = getTrainingDays(event2);
// const name2 = 'Warren';
 
// logEvent(name2, event2);
// logTime(name2, days2);
