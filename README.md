# JavaScript Array Methods Practice

This project consists of four tasks focused on practicing array iteration methods (`map`, `filter`, `reduce`, and `toSorted`) using user data objects.

Each task is implemented in a separate JavaScript file and can be executed in the browser console or Node.js.

---

## 📌 Task 1: Get User Names

**File:** `task-1.js`

Write an arrow function `getUserNames(users)` that returns an array containing only the `name` properties from the given array of user objects.

### ✅ Methods Used

- `map()` — to extract the `name` property from each user.

---

## 📌 Task 2: Get Users Who Have a Certain Friend

**File:** `task-2.js`

Write an arrow function `getUsersWithFriend(users, friendName)` that returns an array of users who have `friendName` in their `friends` list.

### ✅ Methods Used

- `filter()` — to select users matching the condition.
- `includes()` — to check if a friend's name is present.

---

## 📌 Task 3: Sort by Number of Friends (Descending)

**File:** `task-3.js`

Write an arrow function `sortByDescendingFriendCount(users)` that returns a **new** array of users sorted by the length of their `friends` list in **descending** order.

### ✅ Methods Used

- `toSorted()` — to sort without mutating the original array.
- `friends.length` — to compare friend counts.

---

## 📌 Task 4: Total Balance by Gender

**File:** `task-4.js`

Write an arrow function `getTotalBalanceByGender(users, gender)` that returns the total balance of users whose gender matches the `gender` parameter.

### ✅ Methods Used

- `reduce()` — to compute a cumulative total.

---

## ✨ Summary of Concepts Learned

| Method       | Purpose                                   |
| ------------ | ----------------------------------------- |
| `map()`      | Transform elements and return a new array |
| `filter()`   | Select elements based on a condition      |
| `reduce()`   | Accumulate values into a single result    |
| `toSorted()` | Sort without mutating the original array  |
| `includes()` | Check for existence in an array           |

---

Prepared by: **Halenur Gürel** 🌿
