import './style.css';

import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from './utils/updateUI';

const usersSelect = document.querySelector('#users-select');

const USERS_API = 'https://dummyjson.com/users';

const users = () => fetch(USERS_API).then((data) => data.json().then((info) => {
  fillUsersSelect(info.users);
  // info.users.forEach((user) => {
  //   const newOption = document.createElement('option');
  //   newOption.innerText = `${user.firstName} ${user.lastName}`;
  //   usersSelect.appendChild(newOption);
  // })
}))
users();

const captureValue = () => {
    const selectedArea = usersSelect.options[usersSelect.selectedIndex];
    return selectedArea.value;
};

usersSelect.addEventListener('change', () => {
  clearPageData();
  fetch(`https://dummyjson.com/posts/user/${captureValue()}`).then((data) => data.json().then((user) => {
    fillPosts(user.posts);
    fetch(`https://dummyjson.com/posts/${user.posts[0].id}/comments`).then((data) => data.json().then((coment) => {
      fillFeaturedPostComments(coment.comments);
    })).catch((erro) => fillErrorMessage(error.message))
  }))
});
