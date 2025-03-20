// getting elements
const happy = document.getElementById("happy");
const ok = document.getElementById("ok");
const sad = document.getElementById("sad");
const angry = document.getElementById("angry");
const cool = document.getElementById("cool");

// setting data in local storage and getting it in the mood history
let data;

cool.addEventListener("click", function () {
    localStorage.setItem("mood", "cool");
    data = localStorage.getItem("mood");
    moodList.innerHTML = ` ${new Date().toLocaleDateString()} : You are feeling ${data}.`;
});

happy.addEventListener("click", function () {
    localStorage.setItem("mood", "happy");
    data = localStorage.getItem("mood");
    moodList.innerHTML = ` ${new Date().toLocaleDateString()} : You are feeling ${data}.`;
});

ok.addEventListener("click", function () {
    localStorage.setItem("mood", "ok");
    data = localStorage.getItem("mood");
    moodList.innerHTML = ` ${new Date().toLocaleDateString()} : You are feeling ${data}.`;
});

sad.addEventListener("click", function () {
    localStorage.setItem("mood", "sad");
    data = localStorage.getItem("mood");
    moodList.innerHTML = ` ${new Date().toLocaleDateString()} : You are feeling ${data}.`;
});

angry.addEventListener("click", function () {
    localStorage.setItem("mood", "angry");
    data = localStorage.getItem("mood");
    moodList.innerHTML = ` ${new Date().toLocaleDateString()} : You are feeling ${data}.`;
});
