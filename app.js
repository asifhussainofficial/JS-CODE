for (let i = 1; i <= 15; i++) {
  if (i % 5 === 0) {
    console.log(`${i} - "ASAP Frontend"`);
  } else if (i % 2 === 0) {
    console.log(`${i} - "Frontend"`);
  } else console.log(`${i} - "ASAP"`);
}

let str = "ASAP Frontend";

for (let i = 0; i < str.length; ++i) {
  console.log(str[i]);
}

function convertUsdToAud(dollars) {
  let AUD = dollars * 1.5;
  return AUD;
}

console.log(convertUsdToAud(500));

function singUp(
  email,
  password,
  name,
  discord,
  subscription,
  lessonsCompleted
) {
  let user = {
    email: email,
    password: password,
    name: name,
    discord: discord,
    subscription: subscription,
    lessonsCompleted: lessonsCompleted,
  };

  console.log(user);
}

singUp(
  "asif@gmail.com",
  "asdk123",
  "Asif Hussain",
  "asifhussain",
  "VIP+",
  [1, 2]
);
