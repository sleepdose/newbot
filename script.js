document.addEventListener('DOMContentLoaded', () => {
  const characters = [
    {
      name: 'Орк',
      image: 'img/ork.png',
      energy: 100
    },
    {
      name: 'Гном',
      image: 'img/gnom.png',
      energy: 100
    },
    {
      name: 'Эльф',
      image: 'img/elf.png',
      energy: 100
    }
  ];

  let currentCharacter = 0;

  function updateCharacterDisplay() {
    const character = characters[currentCharacter];
    document.getElementById('characterImage').src = character.image;
    document.getElementById('characterName').textContent = character.name;
    document.getElementById('characterStats').innerHTML = `Энергия: ${character.energy}`;
  }

  document.querySelector('.left-arrow').addEventListener('click', () => {
    currentCharacter = (currentCharacter - 1 + characters.length) % characters.length;
    updateCharacterDisplay();
  });

  document.querySelector('.right-arrow').addEventListener('click', () => {
    currentCharacter = (currentCharacter + 1) % characters.length;
    updateCharacterDisplay();
  });

  document.getElementById('selectButton').addEventListener('click', () => {
    const character = characters[currentCharacter];
    document.getElementById('characterSelect').classList.add('hidden');
    document.getElementById('mainScreen').classList.remove('hidden');

    document.getElementById('selectedCharacterImage').src = character.image;
    document.getElementById('selectedCharacterStats').innerHTML = `Энергия: ${character.energy}`;
  });

  updateCharacterDisplay();
});
