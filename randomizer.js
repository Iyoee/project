  // koordinat datalarını depolayıp sonrasında küçükten büyüğe
  // dizerek bunlar arasında graph visualize etmek için kullanacağız (aralarındakı çizgileri çizdirirken)
  let circleCount_global ;
  let circleXvelocity = [] ; 
  let circleYvelocity = [] ;
  let circleIDtrack = [] ;
  let lineIDtrack = [] ;
  let checker = 0 ;
  let a = 0 ;
function drawCircles()
{
  checker = 0 ; 
  a = 0 ;
  lineIDtrack =  [] ; 
  const circleCountInput = document.getElementById('input_3');
  const circleCount = parseInt(circleCountInput.value, 10);
  circleCount_global = circleCount ;
    const general_ = document.getElementById("general_ineer_div");
    general_.innerHTML = '';
    const width = 1228 ;
    const height = 590 ; 
    for (let i = 0 ; i < circleCount ; i ++) {
        // daire çapı => (genişlik yükseklik buna göre hesaplancak) >>
          const cap = 15 ;
          
        // random koordinat alma  

          const circleX = Math.round(Math.random() * (width - 2 * cap ) + cap);
          const circleY = Math.round(Math.random() * (height - 2 * cap ) + cap);

        // her oluşturulan daire için uniq bir id tanımlıyoruz
          const circleId = `circle${i + 1}`;
         
        // daireleri için div oluşturma
          const circleDiv = document.createElement('div');
          
        // divi circle classına sokmak
          circleDiv.className = 'circle';
        // dive id atama ve kaydetme
          circleDiv.id = circleId ; 
          
        //divi daire haline getirme  
          circleDiv.style.width = `${cap * 2}px`;
          circleDiv.style.height = `${cap * 2}px`;
        // daire koordinatlarını ayarlama
          circleDiv.style.marginTop = `${circleY - cap}px`;
          circleDiv.style.marginLeft = `${circleX - cap}px`;
        // syntax kolay olsun diye bunları bir diziye aktarıcam
          circleXvelocity[i] = circleX - cap ;
          circleYvelocity[i] = circleY - cap ;
        //  kontroller 
        //  console.log(circleDiv.style.top);
        //  console.log(circleDiv.style.left);


          circleDiv.style.borderRadius = '50%';
          circleDiv.style.background = 'black';

          const text = document.createElement('p');
          text.innerHTML = i + 1 ; 
          circleDiv.appendChild(text);
          general_.appendChild(circleDiv);
    }
};
//div datalarını küçükten büyüğe yani sağdan sola doğru sıralama
//bunun için bubble sorting yapmak istedim
//bunu yapma sebebim ise uzaklıkları küçükten büyüğe sıraladığım zaman aslında poplanan contentin sıralamsını öğrenebilirim
//bunuda aralarında graph arasındaki çizgileri çekmek için kullanacağım -lyoe-

 