const form = document.querySelector("form");
const errorElement = document.querySelector(".errorItem");
const errorLogElement = document.querySelector("#errorLog");
const successElement = document.querySelector(".successItem");
const fileInput = document.querySelector("#audio");

form.addEventListener("submit", event => {
  event.preventDefault();
  const formData = new FormData(form);
  const title = formData.get("title");
  const file = fileInput.files[0];
  formData.append("fileName", file.name);
  formData.append("file_size", file.size);
  const duration = formData.get("duration");
  const summary = formData.get("summary");
  const episode = formData.get("episode");
  if (
    title.trim() &&
    duration.trim() &&
    summary.trim() &&
    file &&
    episode.trim()
  ) {
    errorElement.style.display = "none";

    fetch("/upload", {
      method: "POST",
      body: formData
    })
      .then(response => {
        if (!response.ok) {
          return response.json().then(error => Promise.reject(error));
        }
      })
      .then(() => {
        form.reset();
        successElement.style.display = "block";
      })
      .catch(error => {
        errorElement.textContent = error.message;
        errorLogElement.textContent = error.error;
        errorElement.style.display = "block";
      });
  } else {
    errorElement.textContent = "Name and content are required!";
    errorElement.style.display = "block";
  }
});
