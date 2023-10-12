function submitForm() {
  // Get form values
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const dob = document.getElementById("dob").value;
  const country = document.getElementById("country").value;
  const gender = document.querySelectorAll('input[name="gender"]:checked');
  const profession = document.getElementById("profession").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;

  if (
    firstName &&
    lastName &&
    dob &&
    country &&
    gender.length > 0 &&
    profession &&
    email &&
    mobile
  ) {
    const popupContent = `
            First Name: ${firstName}<br>
            Last Name: ${lastName}<br>
            Date of Birth: ${dob}<br>
            Country: ${country}<br>
            Gender: ${Array.from(gender)
              .map((g) => g.value)
              .join(", ")}<br>
            Profession: ${profession}<br>
            Email: ${email}<br>
            Mobile Number: ${mobile}
        `;
    document.getElementById("popupContent").innerHTML = popupContent;

    document.getElementById("popup").style.display = "block";

    document.getElementById("surveyForm").reset();
  } else {
    alert("Please fill in all fields.");
  }
}

function resetForm() {
  document.getElementById("surveyForm").reset();
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
