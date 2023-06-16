export default function authHeader() {
  let user = JSON.parse(localStorage.getItem('user'));

  console.log(user);

  if (user) {
    return { Authorization: 'Bearer ' + user.authorization.token };
  } else {
    return {};
  }
}