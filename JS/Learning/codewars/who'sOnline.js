const whosOnline = (friends) => {
  let users = {
    online: [],
    offline: [],
    away: []
  };

  const friendOnline = friends.filter(
    (item) => item.lastActivity < 10 && item.status === "online"
  );
  const friendOffline = friends.filter((item) => item.status === "offline");
  const friendAway = friends.filter(
    (item) => item.lastActivity > 10 && item.status === "online"
  );

  for (const user of friendOnline) {
    users.online.push(user.username);
  }
  for (const user of friendOffline) {
    users.offline.push(user.username);
  }
  for (const user of friendAway) {
    users.away.push(user.username);
  }

  for (const key in users) {
    if (users[key].length == 0) {
      delete users[key];
    }
  }

  return users;
};
friends = [
  {
    username: "David",
    status: "online",
    lastActivity: 10
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22
  },
  {
    username: "Bob",
    status: "away",
    lastActivity: 104
  }
];
console.log(whosOnline(friends));
