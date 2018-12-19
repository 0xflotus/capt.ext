document
  .querySelector("input[type='password']")
  .addEventListener("keydown", evt => {
    if (evt.key === "Enter")
      console.log(document.querySelector("input[type='password']").value);
  });
