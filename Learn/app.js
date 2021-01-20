// api url
const url = "https://jsonplaceholder.typicode.com/users/1";

// dom
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let address = document.querySelector("#address");

// user data
let user = {};

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User>}
 */

function fetchUser() {
  return axios.get(url);
}
console.log(fetchUser());

fetchUser().then.apply(function (response) {
  response.address.city;
});

function startApp() {
  //   axios
  //     .get(url)
  fetchUser()
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
