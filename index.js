function counter() {
  const content = document.getElementById("jasoseol").value;
  const count = document.getElementById("count");

  if (content.length > 200) {
    content = content.substring(0, 200);
    content = content;
  }

  count.textContent = "(" + content.length + "/200)";
}

counter();
