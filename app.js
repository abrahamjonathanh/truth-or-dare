const body = document.querySelector("body");
const dare = document.querySelector("button.dare");
const truth = document.querySelector("button.truth");
const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const img = document.querySelector("img");

const api = async (key) => {
  try {
    const res = await fetch(`https://api.truthordarebot.xyz/api/${key}`);
    return res.json();
  } catch (e) {
    api();
  }
};

dare.addEventListener("click", () => {
  api("dare").then((data) => {
    body.classList.replace("bg-truth", "bg-dare");
    h1.innerHTML = "Dare";
    img.src =
      "https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/purple-heart_1f49c.png";
    p.innerHTML = data.question;
  });
});

truth.addEventListener("click", () => {
  api("truth").then((data) => {
    body.classList.replace("bg-dare", "bg-truth");
    h1.innerHTML = "Truth";
    img.src =
      "https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/hatching-chick_1f423.png";
    // img.src =
    //   "https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/orange-heart_1f9e1.png";
    p.innerHTML = data.question;
  });
});
