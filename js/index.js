//* 1
{
  const inputElement = document.querySelector(".task1-input");
  const buttonElement = document.querySelector(".task1-btn");
  inputElement.value = "Press the button";
  buttonElement.textContent = inputElement.value;
}
//* 2
{
  const imgElement = document.querySelector(".task2-img");
  imgElement.src = "https://www.pdsa.org.uk/media/8020/hamster-og-min.jpg";
}
//* 3
{
  const linkElement = document.querySelector(".task3-link");
  const imgElement = document.querySelector(".task3-img");
  linkElement.src = "https://kahoot.com/";
  imgElement.alt = "Kahoot";
}
//* 4
{
  const listElement = document.querySelector(".task4-list");
  listElement.firstElementChild.textContent = "The best item )";
}
