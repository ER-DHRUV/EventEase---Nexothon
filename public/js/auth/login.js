let roleInput = document.getElementById("role");
roleInput.value = "public";
let public = document.getElementById("public-btn");
let org = document.getElementById("organizer-btn");

public.addEventListener("click", () => {
    roleInput.value = "public";
    console.log(roleInput.value);
});
org.addEventListener("click", () => {
    roleInput.value = "organizer";
    console.log(roleInput.value);
});

