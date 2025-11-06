const getTotalBalanceByGender = (users, gender) => {
  return users.reduce((total, user) => {
    if (user.gender === gender) {
      total + user.balance;
    }
    return total;
  }, 0);
};
