// api url
const url = "https://jsonplaceholder.typicode.com/users/";

// dom
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let address = document.querySelector("#address");

// user data
let user = {};

function startApp() {
  axios
    .get(url)
    .then(function (response) {
      //   console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      console.log(user);
      username.innerText = user[0].name;
      email.innerText = user[0].email;
      address.innerText = user[0].address;
      // innerText 메소드
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
