document.getElementById("calculateButton").addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const startingBid = document.getElementById("startingBid").value;

  if (!name || !startingBid) {
      alert("Don't forget entering name and starting bid.");
      return;
  }
  let price = parseFloat(startingBid);
  if (isNaN(price)) {
      alert("Starting bid must be a valid number.");
      return;
  }

  const education = parseFloat(document.getElementById("education").value);
  price *= education;
  const netWorth = parseFloat(document.getElementById("netWorth").value);
  price *= netWorth;
  const caste = parseFloat(document.getElementById("caste").value);
  price += caste;
  const skills = Array.from(document.getElementsByClassName("skills"));
  price += skills
      .filter(skill => skill.checked)
      .reduce((sum, skill) => sum + parseFloat(skill.value), 0);
  const ages = Array.from(document.getElementsByClassName("age"));
  ages.forEach(age => {
      if (age.checked) price *= parseFloat(age.value);
  });
  const reputations = Array.from(document.getElementsByClassName("reputation"));
  reputations.forEach(rep => {
      if (rep.checked) price *= parseFloat(rep.value);
  });
  const reputationNegatives = Array.from(document.getElementsByClassName("reputationNegative"));
  reputationNegatives.forEach(repNeg => {
      if (repNeg.checked) price += parseFloat(repNeg.value);
  });
  const loveLetter = document.getElementById("loveLetter").value;
  const person = {
      bride_name: name,
      bride_price: price.toFixed(2),
      letter_to_bride: loveLetter
  };

  const resultText = document.getElementById("resultText");
  resultText.innerHTML = `Your price for ${person.bride_name} is $${person.bride_price}. 
  <br> Love Letter: ${person.letter_to_bride}`;
  document.getElementById("hidden").style.display = "block";
}); 