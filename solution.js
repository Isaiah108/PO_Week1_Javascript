let theSentence = "how much wood could a wood chuck chuck";
takeIn(theSentence);

function threeLargestWords(sentence) {
  let arraySentence = sentence.split(" ");
  const asc = arraySentence.sort((a, b) => b.length - a.length);
  console.log("#" + asc[0] + ", #" + asc[1] + ", #" + asc[1]);
}
