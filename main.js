function createGame(player1, hour, player2) {
    return `
      <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
          <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
      </li>
    `
  }
  
  let delay = -0.2
  function createCard(date, day, games) {
    delay = delay + 0.2
    return `
      <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
          <ul>
          ${games}
        </ul>
      </div>
    `
  }
  
  document.querySelector("#cards").innerHTML =
    createCard("28/11", "segunda", createGame("brazil", "10:00", "switzerland")+ createGame("south-korea", "10:00", "ghana"))+
    createCard("24/11", "Quinta", createGame("brazil", "16:00", "serbia")+ createGame("uruguay", "10:00", "south-korea")) +
    createCard(
      "22/11",
      "terça",
      createGame("tunisia", "10:00", "denmark") +
        createGame("portugal", "16:00", "uruguay")
    ) +
    createCard("02/12", "sexta", createGame("brazil", "16:00", "cameroon") + createGame("portugal", "12:00", "south-korea"))