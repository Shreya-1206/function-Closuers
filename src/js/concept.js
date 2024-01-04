const greetMe = function (greetings) {
   return (user) => `${greetings}, ${user} !!`;
};

const hey = greetMe("Hello");
const bye = greetMe('Bye');

console.log(bye('Shreya'));
console.log(hey(" Ray"))