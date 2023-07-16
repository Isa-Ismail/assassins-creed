const cardContainer = document.getElementById('cardContainer');

// Fetch the JSON data from the file
fetch('assassinsCreed.json')
  .then(response => response.json())
  .then(data => {
    // Render the cards using the JSON data
      console.log(data)
    data.forEach(card => {
      const cardElement = createCard(card);
      cardContainer.appendChild(cardElement);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

// Helper function to create a card element
function createCard(cardData) {
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');

  const imageElement = document.createElement('img');
  imageElement.src = cardData.poster;
  cardElement.appendChild(imageElement);

  const titleElement = document.createElement('h3');
  titleElement.textContent = cardData.genre;
  cardElement.appendChild(titleElement);

  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = cardData.description;
  cardElement.appendChild(descriptionElement);

  return cardElement;
}