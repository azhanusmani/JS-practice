function isAngram(first, second) {
  if (typeof(first) && typeof second === "number") {
    first = first.toString();
    second = second.toString();
  }
  let firstStr = first.toLowerCase();
  let secondStr = second.toLowerCase();

  firstStr = firstStr.split("").sort().join("");
  secondStr = secondStr.split("").sort().join("");
  return firstStr === secondStr;
}

isAngram(12,12)?console.log("String is anagram"):console.log("not an angram")
