let phrases = [
    { text: 'собрать детей в школу', image: 'https://code.s3.yandex.net/web-code/procrastinate/1.gif' },
    { text: 'Уьраься-собраться', image: 'https://code.s3.yandex.net/web-code/procrastinate/2.png' },
    { text: 'написть код', image: 'https://code.s3.yandex.net/web-code/procrastinate/3.png' },
    { text: 'пирготовить обед', image: 'https://code.s3.yandex.net/web-code/procrastinate/4.png' },
    { text: 'продожить написание кода', image: 'https://code.s3.yandex.net/web-code/procrastinate/5.png' },
    { text: 'забрать детей со школы и отвести на кружки', image: 'https://code.s3.yandex.net/web-code/procrastinate/6.png' },
    { text: 'прочитать новости и ужаснуться в комментариях', image: 'https://code.s3.yandex.net/web-code/procrastinate/7.png' },
    { text: 'забратьс кружков детей и делатьза нихвесьвечер уроки', image: 'https://code.s3.yandex.net/web-code/procrastinate/8.png' },
    { text: 'помыть, постирать, приготовить', image: 'https://code.s3.yandex.net/web-code/procrastinate/9.png' },
    { text: 'поймать таки вредных гномов к двенадцити ночи и уложить спать,отобрав телефоны', image: 'https://code.s3.yandex.net/web-code/procrastinate/10.png' }
  ];
  
  function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  }
  
  let button = document.querySelector('.button');
  let phrase = document.querySelector('.phrase');
  let advice = document.querySelector('.advice');
  let image = document.querySelector('.image');
  
  button.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases);
    smoothly(phrase, 'textContent', randomElement.text);
    smoothly(image, 'src', randomElement.image);
  
    if (randomElement.text.length > 40) {
      advice.style.fontSize = '33px';
    } else {
      advice.style.fontSize = '42px';
    }
  });
    for  (let i = 0; i <= 2; i = i +1){
    smoothly(phrase, 'textContent', phrases[i].text);
    smoothly(image, 'src', phrases[i].image);
  }