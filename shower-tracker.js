document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("shower-form");
  const resultDiv = document.getElementById("result");
  const mascotSpeech = document.getElementById("mascot-speech");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const duration = parseFloat(document.getElementById("duration").value);
    const flowRate = parseFloat(document.getElementById("flow-rate").value);

    if (isNaN(duration) || isNaN(flowRate) || duration < 1 || flowRate < 1) {
      resultDiv.style.display = "block";
      resultDiv.textContent = "Please enter valid numbers for both fields.";
      if (mascotSpeech) mascotSpeech.textContent = "Oops! Enter valid numbers!";
      return;
    }

    const waterUsed = duration * flowRate;
    resultDiv.style.display = "block";
    resultDiv.textContent = `You used approximately ${waterUsed.toFixed(
      1
    )} liters of water.`;

    // Mascot speech feedback
    if (mascotSpeech) {
      if (waterUsed < 40) {
        mascotSpeech.textContent = "Nice! That's a quick shower! 🚿";
      } else if (waterUsed < 100) {
        mascotSpeech.textContent = "Good job! Try to save even more!";
      } else {
        mascotSpeech.textContent = "Whoa! That's a lot of water!";
      }
    }
  });
});
