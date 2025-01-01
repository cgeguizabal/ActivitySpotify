import "./css/musicLibrary.css";

function MusicLibrary() {
  return (
    <>
      <div className="music-container">
        <h1 className="music-tittle">Billboard Topchart</h1>

        <div>
          <ul className="billboard-List">
            <Artist
              artistPhoto="./src/assets/Artists/Metallica.png"
              artistName="Metallica"
              artistAlbum="Master"
              time="3:22"
            />
            <Artist
              artistPhoto="./src/assets/Artists/AJR.png"
              artistName="AJR"
              artistAlbum="Weak"
              time="3:22"
            />
            <Artist
              artistPhoto="./src/assets/Artists/Maclemore.png"
              artistName="Maclemore & Ryan Lewis"
              artistAlbum="The Heist"
            />
            <Artist
              artistPhoto="./src/assets/Artists/Nirvana.png"
              artistName="Nirvana"
              artistAlbum="Come"
            />
            <Artist
              artistPhoto="./src/assets/Artists/The beatles.png"
              artistName="The Beatle"
              artistAlbum="Let it be"
            />
          </ul>
        </div>
      </div>
      <div className="player">
        <div className="popularsongs">
          <h1>Most Popular</h1>
          <p className="numbersongs">8 Songs</p>
          <ul className="player-List">
            <PlayerList
              number="01"
              PlayerListPhoto="./src/assets/Song/EmptynesMachine.png"
              PlayerListName="Emptynes Machine"
              PlayerListArtist="Linkin Park"
              time="3:22"
            />
            <PlayerList
              number="01"
              PlayerListPhoto="./src/assets/Song/letItBe.png"
              PlayerListName="Let it Be"
              PlayerListArtist="The beatles"
              time="4:23"
            />
            <PlayerList
              number="01"
              PlayerListPhoto="./src/assets/Song/MasterOfPuppets.png"
              PlayerListName="Master of Puppets"
              PlayerListArtist="Metallica"
              time="5:33"
            />
            <PlayerList
              number="01"
              PlayerListPhoto="./src/assets/Song/theHeist.png"
              PlayerListName="The Heist"
              PlayerListArtist="Maclemore"
              time="3:48"
            />
            <PlayerList
              number="01"
              PlayerListPhoto="./src/assets/Song/TheUnforgiven.png"
              PlayerListName="The Unforgiven ll"
              PlayerListArtist="Metallica"
              time="3:48"
            />
          </ul>
        </div>
        <div className="playing">
          <h1>Monthly Top Artists</h1>
          <p className="numbersongs">5 Items on the list</p>
          <ul className="monthlyArtist">
            <Monthly
              artist="./src/assets/Monthly/Brendon-Urie.webp"
              artistName="Bredon Urie"
            />
            <Monthly
              artist="./src/assets/Monthly/Edd.png"
              artistName="Edd Sheeran"
            />
            <Monthly
              artist="./src/assets/Monthly/Eminem.png"
              artistName="Eminem"
            />
            <Monthly
              artist="./src/assets/Monthly/fredy.png"
              artistName="Fredy Mercury"
            />
            <Monthly
              artist="./src/assets/Monthly/pitbull.png"
              artistName="Pitbull"
            />
          </ul>
          <div className="genres">
            <h1>Discover New Genres</h1>
            <p className="numbersongs">6 Items on the list</p>
            <ul className="genresList">
              <Genres
                genreImage="./src/assets/Genres/HipHop.jpg"
                genreName="Hip-Hop"
              />
              <Genres
                genreImage="./src/assets/Genres/pop.jpg"
                genreName="Pop"
              />
              <Genres
                genreImage="./src/assets/Genres/Punk.jpg"
                genreName="Punk"
              />
              <Genres
                genreImage="./src/assets/Genres/reggae.jpg"
                genreName="Reggae"
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

function Artist(props) {
  return (
    <>
      <li>
        <div className="artistContainer">
          <img
            className="artistImage"
            src={props.artistPhoto}
            alt={props.artistName}
          />
        </div>
        <h4 className="artist">{props.artistName}</h4>
        <h5 className="album">{props.artistAlbum}</h5>
      </li>
    </>
  );
}

function PlayerList(props) {
  return (
    <>
      <li>
        <div className="playerList-container">
          <div className="imageNum">
            <h5 className="numberplayerlist">{props.number}</h5>
            <img
              className="playerListImage"
              src={props.PlayerListPhoto}
              alt={props.PlayerListName}
            />
          </div>
          <span className="iconPlayList">
            <ion-icon name="play-outline"></ion-icon>
          </span>
          <div className="iconName">
            <h4 className="playerlistName">{props.PlayerListName}</h4>
          </div>

          <p className="playerListArtist">{props.PlayerListArtist}</p>
          <p className="playerListTime">{props.time}</p>
        </div>
      </li>
    </>
  );
}

function Monthly(props) {
  return (
    <>
      <li>
        <div className="monthlyContainer">
          <img
            className="monthlyImage"
            src={props.artist}
            alt={props.artistName}
          />
          <h5 className="montlyArtist">{props.artistName}</h5>
        </div>
      </li>
    </>
  );
}
function Genres(props) {
  return (
    <>
      <li>
        <div className="genreContainer">
          <img
            className="genreImage"
            src={props.genreImage}
            alt={props.genreName}
          />
          <h5 className="montlyArtist">{props.genreName}</h5>
        </div>
      </li>
    </>
  );
}

export default MusicLibrary;
