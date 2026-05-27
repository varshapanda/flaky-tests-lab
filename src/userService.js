let users = [];

async function saveUser(user) {
  return new Promise(resolve => setTimeout(resolve, 10)).then(() => {
    users.push(user);
  });
}

function getUsers() {
  return users;
}

function clearUsers() {
  users = [];
}

module.exports = { saveUser, getUsers, clearUsers };
