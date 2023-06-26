var emotes = [];

function getRandomEmote(emotes) {
  var randomIndex = Math.floor(Math.random() * emotes.length);
  return emotes[randomIndex];
}

function displayRandomEmote(emotes) {
    var randomEmote = getRandomEmote(emotes);
  
    var emoteContainer = document.getElementById("emoteContainer");
    emoteContainer.style.display = "block";
    emoteContainer.innerHTML = "<img src='" + randomEmote.link + "' alt='" + randomEmote.name + "'>";
  
    var emoteName = document.getElementById("emoteName");
    emoteName.style.display = "block";
    emoteName.textContent = randomEmote.name;
}

fetch("src/emote.txt")
  .then((response) => response.text())
  .then((data) => {
    var emoteLines = data.split("\n");

    for (var i = 0; i < emoteLines.length; i++) {
      var line = emoteLines[i].trim();
      if (line !== "") {
        var parts = line.split(" ");
        var link = parts[0];
        var name = parts.slice(1).join(" ");
        emotes.push({ link: link, name: name });
      }
    }
  })
  .catch((error) => console.log(error));
