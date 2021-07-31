function validateForm() {
  var name = document.myForm.fname.value;
  let x = document.forms["myForm"]["fname"].value;
  const rbs = document.querySelectorAll('input[name="gender"]');
  let selectedValue;

  if (x == "") {
    alert("Full Name is missing");
    return false;
  } else {
    alert((document.getElementById("fname").innerHTML = x));
  }

  for (const rb of rbs) {
    if (rb.checked) {
      selectedValue = rb.value;
      break;
    }
  }
  alert(selectedValue);
  return false;
}
