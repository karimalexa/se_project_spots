const editProfileButton = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseButton = editProfileModal.querySelector(
  ".modal__close-button"
);
const addProfileButton = document.querySelector(".profile__add-button");
const addProfileModal = document.querySelector("#new-post-modal");
const addProfileCloseButton = addProfileModal.querySelector(
  ".modal__close-button"
);

editProfileButton.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
});

editProfileCloseButton.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

addProfileButton.addEventListener("click", function () {
  addProfileModal.classList.add("modal_is-opened");
});

addProfileCloseButton.addEventListener("click", function () {
  addProfileModal.classList.remove("modal_is-opened");
});
