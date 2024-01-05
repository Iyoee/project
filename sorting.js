let index = 0 ;
let temp_index = 0 ;
function sort_location_Data()
{
 // kontrol console.log(circleXvelocity);

        if (checker == 0){
          a = 0 ;
          lineIDtrack.length = 0 ; 
   const bandwithCountinput = document.getElementById('input_bandwith') ;
   let bandwithCount = parseInt(bandwithCountinput.value,10);
  // console.log(bandwithCount);
   if(bandwithCount == 10) bandwithCount = 1 ;
   else if (bandwithCount == 40) bandwithCount = 2 ;
   else if (bandwithCount == 80) bandwithCount = 3 ;
   else bandwithCount == 4;
   let i = 0 ;
   let j = 0 ;
                for( i ; i < circleCount_global ; i++){
                    j = 0 ;
                    for ( j ; j < circleCount_global - 1 ; j++){
                      if ( circleXvelocity[j] > circleXvelocity[j+1] )
                      {
                        let temp = circleXvelocity[j];
                        circleXvelocity[j] = circleXvelocity[j+1];
                        circleXvelocity[j+1] = temp ; 
                        temp = circleYvelocity[j] ; 
                        circleYvelocity[j] = circleYvelocity[j+1];
                        circleYvelocity[j+1] = temp ;
                       }
                    }
                }
         //   console.log(circleXvelocity);

                   
      
           // burada ise ekrana poplanan divlerin id sini sağdan sola şekilde sort etmek için konumları kullanıyorum
      for(j = 1 ; j <= circleCount_global ; j++){
        for(i = 0 ; i < circleCount_global ; i++){
          if (document.getElementById(`circle${j}`).style.marginLeft ==`${circleXvelocity[i]}px` && document.getElementById(`circle${j}`).style.marginTop ==`${circleYvelocity[i]}px` ) {
              circleIDtrack[i] = j ;
          }
        }
         }
      //           console.log(circleIDtrack);
        //         console.log( Math.floor(Math.random()*3 + 1));
              //////////////////////////////////// divler arası çizgileri çektirme --
              //////////////////////////////////////////////////////////////////////////
              /////////////////////////////////////////////////////////////////////////////

              i = 0 ;
              j = 0 ;
              
                      for(i ;i<circleCount_global  ; i++){

                        j = 0 ;
                            for(j ; j < bandwithCount ; j++ ){      
                              if(circleIDtrack[j] !=null){
                const line = document.createElement("div");
                let link = Math.floor(Math.random()*circleCount_global);
                const lineID = `line${circleIDtrack[i] * 100 + circleIDtrack[link]}`;
                if (link == i ) {
                  if (link == 0) link +=1;
                            else link -=1;
                }
               
                lineIDtrack[index] = lineID ;  // --> bu dizimiz ve circleIDtrack sayesinde dijkstra vb diğer algoritmaları
                //çalıştırmak için gerekli bilgiye sahip olacağız //
                index++;
                let a = 8 ; // centerizer 
                line.className = "my_line"
                line.id = lineID;
                line.style.borderColor = "white" ; 
                line.style.zIndex = 2 ;
                line.style.backgroundColor = "white"

                    
                // konumları çekme
                
              const x1 = parseInt (document.getElementById(`circle${circleIDtrack[i]}`).style.marginLeft)+a ;
              const y1 = parseInt (document.getElementById(`circle${circleIDtrack[i]}`).style.marginTop)+a ;    
              const x2 =  parseInt (document.getElementById(`circle${circleIDtrack[link]}`).style.marginLeft)+a;
              const y2 = parseInt (document.getElementById(`circle${circleIDtrack[link]}`).style.marginTop)+a;
                
                
                
              const angle = Math.atan2(y2 - y1, x2 - x1);
              let temp_angle = angle ; //margin işlemlerinin hesaplanmasına kullanılcak 
              //geçici derece değişkenimiz
              const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
              line.style.width = `${distance}px`;
                
                  // hocam sanırım projemde en sıkıldığım ve kafa yorduğum yer bu çizgileri çektirmek oldu 
                  // burdaki açılara göre teker teker margin hesaplatmak zorunda olduğumu 3 saat sonra fark ettim
                  // neyse onuda halledicez 24.12.2023 - 06:09 -lyoe- bitiriş 10:46 24.12.2023
                  
                    var pi = Math.PI ;
                    temp_angle = temp_angle*180 / pi; // dereceye döndürme
                          //radyan işlemi yapmaya kafam yetmediği için burada dereceye döndürüp
                          // derece üstünden çalıştım sonrasında tekrar radyana döndürdüm
                    if ( temp_angle > 90 && temp_angle <180) temp_angle = 180-temp_angle;
                    else if (temp_angle < 0 && temp_angle > -90) temp_angle = -temp_angle ;
                    else if (temp_angle < -90 && temp_angle > -180) temp_angle = 180+temp_angle ;    
                      temp_angle = temp_angle * pi / 180 ; 
                          ////////////////////////////////////////////////////////////////////////
              document.getElementById("general_ineer_div").appendChild(line);
              line.style.transform = `rotate(${angle}rad)`;
            
              if(x1<x2)line.style.marginLeft = `${x1-((1-Math.cos(temp_angle))*distance/2)}px`;
              else line.style.marginLeft = `${x2-((1-Math.cos(temp_angle))*distance/2)}px`;

              if(y1 < y2 )line.style.marginTop = `${y1+((y2-y1)/2)+3}px`;
              else line.style.marginTop = `${y2+((y1-y2)/2)+3}px`;
        //      kontroller
        //      console.log("bura",x1 , document.getElementById("circle1").style.left,line.style.left , ((1-Math.cos(temp_angle))*distance) ) ;
        //     console.log(y1 , document.getElementById("circle1").style.top,line.style.marginTop); 
      }      
      else continue;
                            }
    }  
    checker++;
    temp_index = index ; 
    index = 0 ;
      }
else {
  let x = 0 ; 
  for (x ; x < temp_index ; x++){
  document.getElementById(lineIDtrack[x]).remove();
  checker = 0 ;
  }
    lineIDtrack.length = 0 ; 
  temp_index = 0 ;
  lineIDtrack = [] ; 
}
  }

