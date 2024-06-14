// Users Local Storage Key
const USERS_KEY = 'users';
const CURRENT_USER_KEY = 'currentUser';
const ITEMS_KEY = 'items';

// Get users from local storage
export const getUsers = () => JSON.parse(localStorage.getItem(USERS_KEY)) || [];

// Save users to local storage
export const saveUsers = (users) => localStorage.setItem(USERS_KEY, JSON.stringify(users));

// Get current user from local storage
export const getCurrentUser = () => JSON.parse(localStorage.getItem(CURRENT_USER_KEY));

// Save current user to local storage
export const setCurrentUser = (user) => localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));

// Clear current user from local storage
export const clearCurrentUser = () => localStorage.removeItem(CURRENT_USER_KEY);

// Get items from local storage
export const getItems = () => JSON.parse(localStorage.getItem(ITEMS_KEY)) || [];

// Save items to local storage
export const saveItems = (items) => localStorage.setItem(ITEMS_KEY, JSON.stringify(items));
