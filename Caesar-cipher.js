  let act = +prompt('Выберите действие: 1.Шифровка 2.Дешифровка');
  var userText = prompt("Сообщение для обработки");
  let move = +prompt("Введите сдвиг (число)");
  if ((act!==1 && act!==2) || !userText) {
      alert('Введены недопустимые данные');
      return;
  }
  
  if (act===2) move = -move;
  var symbols = [
                    [' ',',','.',':',';','!','?','-','_','=','+','(',')','[',']','@','`',"'",'"','<','>','|','/','%','$','^','&','*','~'],
                    ['0','1','2','3','4','5','6','7','8','9'],
                    ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'],
                    ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'],
                    ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
                    ['a','b','c','d','e','f','g','h','i','j','k','l','m','m','o','p','q','r','s','t','u','v','w','x','y','z']
                ]
  let resultArr = [];
  
  for (let i=0; i<userText.length; i++){
      let itemIsAdded = false;
      for (let array of symbols){
          let indexInSymArr = array.indexOf(userText[i]);
          if (indexInSymArr !== -1){
              while(true) {
                if (indexInSymArr + move >= array.length)
                    move = move-array.length;
                else break;
              }
              resultArr[i] = array[indexInSymArr + move];
          }
      }
  }
  alert(resultArr)
