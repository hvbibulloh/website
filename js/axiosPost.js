document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector("#requestButton")
    .addEventListener("click", submitForm);
});

function submitForm() {
  const fullName = document.getElementById("fullName").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const fileInput = document.getElementById("fileInput");

  if (!fullName || !phoneNumber) {
    alert("Please fill in all the required fields.");
    return;
  }

  const formData = new FormData();
  formData.append("ism", fullName);
  formData.append("tel_nomer", phoneNumber);

  if (fileInput.files.length > 0) {
    formData.append("tex_zadacha", fileInput.files[0]);
  }

  axios({
    method: "post",
    url: "http://37.1.198.166/api/client/",
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((response) => {
      console.log(fullName);
      console.log(phoneNumber);
      alert("Muvaffaqiyatli yuborildi!");
    })
    .catch((error) => {
      alert("Xatolik yuz berdi!");
      console.log(fullName);
      console.log(phoneNumber);
      console.error("Error occurred:", error);
    });
}

// https://magnat.netlify.app/
// http://company.mognat.uz/
