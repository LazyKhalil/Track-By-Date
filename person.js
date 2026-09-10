function checkName() {
  const nameInput = document.querySelector(".js-name-input");
  const name = nameInput.value.trim();
  if (name === "") {
    alert("Please enter your birthday.");
    return;
  } else if (
    name === "07/01" ||
    name === "01/07" ||
    name === "1/07" ||
    name === "7/01" ||
    name === "7/1" ||
    name === "1/7"
  ) {
    const html = `<div class="player-left">
                          <img src="Images/Iris.jfif" alt="Music Album" class="song-img" />
                        </div>
                        <div class="player-middel">
                          <div class="song-info">
                            <p class="song-name">Iris</p>
                            <p class="artist-name">Goo Goo Dolls</p>
                          </div>
                          <div class="line"></div>
                        </div>
                        <audio controls autoplay loop>
                          <source src="audios/Iris.m4a" type="audio/mpeg" />
                        </audio>
                      `;
    document.querySelector(".music-player").innerHTML = html;
  } else if (
    name === "25/05" ||
    name === "05/25" ||
    name === "25/5" ||
    name === "5/25"
  ) {
    const html = `<div class="player-left">
                          <img src="Images/500miles.jfif" alt="Music Album" class="song-img" />
                        </div>
                        <div class="player-middel">
                          <div class="song-info">
                            <p class="song-name">500 Miles</p>
                            <p class="artist-name">Peter, Paul and Mary</p>
                          </div>
                          <div class="line"></div>
                        </div>
                        <audio controls autoplay loop>
                          <source src="audios/500miles.m4a" type="audio/mpeg" />
                        </audio>
                      `;
    document.querySelector(".music-player").innerHTML = html;
  } else if (
    name === "02/10" ||
    name === "10/02" ||
    name === "2/10" ||
    name === "10/2"
  ) {
    const html = `<div class="player-left">
                          <img src="Images/gone.jpg" alt="Music Album" class="song-img" />
                        </div>
                        <div class="player-middel">
                          <div class="song-info">
                            <p class="song-name">Already Gone</p>
                            <p class="artist-name">Kelly Clarkson</p>
                          </div>
                          <div class="line"></div>
                        </div>
                        <audio controls autoplay loop>
                          <source src="audios/gone.m4a" type="audio/mpeg" />
                        </audio>
                      `;
    document.querySelector(".music-player").innerHTML = html;
  } else if (
    name === "06/07" ||
    name === "07/06" ||
    name === "6/7" ||
    name === "7/6" ||
    name === "06/7" ||
    name === "07/6"
  ) {
    const html = `<div class="player-left">
                          <img src="Images/gone.jpg" alt="Music Album" class="song-img" />
                        </div>
                        <div class="player-middel">
                          <div class="song-info">
                            <p class="song-name">Already Gone</p>
                            <p class="artist-name">Kelly Clarkson</p>
                          </div>
                          <div class="line"></div>
                        </div>
                        <audio controls autoplay loop>
                          <source src="audios/gone.m4a" type="audio/mpeg" />
                        </audio>
                      `;
    document.querySelector(".music-player").innerHTML = html;
  } else if (
    name === "08/05" ||
    name === "05/08" ||
    name === "5/8" ||
    name === "8/5" ||
    name === "08/5" ||
    name === "05/8" ||
    name === "15/02" ||
    name === "02/15" ||
    name === "2/15" ||
    name === "15/2"
  ) {
    const html = `<div class="player-left">
                          <img src="Images/seeYouAgain.jfif" alt="Music Album" class="song-img" />
                        </div>
                        <div class="player-middel">
                          <div class="song-info">
                            <p class="song-name">See you again</p>
                            <p class="artist-name">Wiz Khalifa & Charlie Puth</p>
                          </div>
                          <div class="line"></div>
                        </div>
                        <audio controls autoplay loop>
                          <source src="audios/seeYouAgain.m4a" type="audio/mpeg" />
                        </audio>
                      `;
    document.querySelector(".music-player").innerHTML = html;
  } else {
    const html = `<div class="player-left">
                          <img src="Images/iLoveYou.jpg" alt="Music Album" class="song-img" />
                        </div>
                        <div class="player-middel">
                          <div class="song-info">
                            <p class="song-name">I Love You</p>
                            <p class="artist-name">YouNes</p>
                          </div>
                          <div class="line"></div>
                        </div>
                        <audio controls autoplay loop>
                          <source src="audios/iLoveYou.m4a" type="audio/mpeg" />
                        </audio>
                      `;
    document.querySelector(".music-player").innerHTML = html;
  }
}
