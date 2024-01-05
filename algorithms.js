var circleObjects = {} ;//çizgilerimizin nereden nereye gittiğinin bilgisini id lerine // saklamıştık bu methodu tersine çevirerek bu obje içinde hangi daireden hangi daireye // yollar olduğunu bu obje içersine tanımlayacağız
let visited  = [] ;
a = 0 ;
function calc_(){

  const node_start = document.getElementById("input_1").value ; 
  const node_end = document.getElementById("input_2").value ; 
  if(a != 0) 
    res_calc() ;
    circleObjects = {} ;
    visited =  [] ;
      a++ ; 
  object_definiers(); //komşuları öğreniyoruz bununla beraber fonksiyon aşağıda
  
            for (let i = 0 ; i < circleCount_global  ; i++){
              visited[i] = 0 ;
            }
                visited[node_start - 1 ] = 1 ;
        let temper_node = node_start ; 
        let ticker = 1 ;
        console.log(circleObjects);
        while (1){
          ticker++;
          if(ticker == circleCount_global + 2 ) break ; 
          temp_current =  find_closest_neighbors(temper_node) ;
          temper_node = temp_current ; 

         if (temp_current == node_end){
          break ; 
         }
              console.log(temp_current);
              console.log(visited);

        }

}

// START NODUNDAKİ YOLLARI VERDİĞİMİZ lineID ' lerden çekeceğiz
// ID LERE HANGİ NODLARA BAĞLANDIĞINI *100 YOLUYLA SAKLAMIŞ İDİM ŞİMDİ BUNU
// GERİYE ÇÖZECEĞİZ

function object_definiers(){
    circleObjects = {} ;
  for(let i = 1 ; i <   circleCount_global + 1 ; i++ ){
    circleObjects[`Circle${i}`] = {}  ;
  }
for ( let i = 1 ; i < lineIDtrack.length + 1 ; i++) {

                  let x = Math.floor(parseInt(lineIDtrack[i-1].replace("line",""))/100);
                  let y = parseInt(lineIDtrack[i-1].replace("line","")) % 100;
                  if(x == y) continue ;
                  circleObjects[`Circle${x}`][y] = document.getElementById(`${lineIDtrack[i-1]}`).style.width; // burada yaptığımız şey lineID lerden hangi nod'un
                  circleObjects[`Circle${y}`][x] = document.getElementById(`${lineIDtrack[i-1]}`).style.width;    // hangi noda bağlı olduğunu çözmek ve 
                                                                                                                // objelerin içine dizmek        
}
                  for (let i = 1 ; i < circleCount_global + 1 ; i++){
                for (let k = 1 ; k < circleCount_global + 1 ; k++){
                  if(!circleObjects[`Circle${i}`][k]) circleObjects[`Circle${i}`][k] = Infinity ;
                }
                k = 1 ;
}
};

function find_closest_neighbors(index_){
  let tempdistance = Infinity ;
    let closest = null ;
    visited[index_-1] = 1 ; 
    
    
    let i = 1 ;
        for (  i = 1 ; i < circleCount_global + 1 ; i++){
                  
                    if (circleObjects[`Circle${index_}`][i] != Infinity) {
                                          
                          if (parseFloat(circleObjects[`Circle${index_}`][i]) <= tempdistance &&   visited[i-1] != 1  ) {
                            tempdistance = parseFloat(circleObjects[`Circle${index_}`][i]) ;
                            closest = i ;                      
                          }
                    }

        }
        console.log("index" , index_  ,"tempdistance" , tempdistance , "closest" , closest) ;
        if(document.getElementById(`line${(index_*100) + closest}`) != null){
          document.getElementById(`line${(index_*100) + closest}`).style.borderColor = "black" ; 
          document.getElementById(`line${(index_*100) + closest}`).style.backgroundColor = "black" ; 
          document.getElementById(`line${(index_*100) + closest}`).style.zIndex = 3 ;  

        }
        else { 
          document.getElementById(`line${(closest*100) + index_}`).style.borderColor = "black" ; 
          document.getElementById(`line${(closest*100) + index_}`).style.backgroundColor = "black" ; 
          document.getElementById(`line${(closest*100) + index_}`).style.zIndex = 3 ; 
   
        }
        return closest ; 

}

function res_calc(){
 
  for (let i = 1 ; i < circleCount_global + 1 ; i++){

    for (let index = 1 ; index < circleCount_global +1 ; index++){

                    if(circleObjects[`Circle${i}`][index] != Infinity ){
            if (document.getElementById(`line${(i*100) + index }`) != null){
        document.getElementById(`line${(i*100) + index }`).style.borderColor = "white" ; 
        document.getElementById(`line${(i*100) + index }`).style.backgroundColor = "white" ; 
        document.getElementById(`line${(i*100) + index }`).style.zIndex = 2;  
            }
            else {
              document.getElementById(`line${(index*100) + i }`).style.borderColor = "white" ; 
              document.getElementById(`line${(index*100) + i }`).style.backgroundColor = "white" ; 
              document.getElementById(`line${(index*100) + i }`).style.zIndex = 2;  

            }
      }

    }

  }
  visited = [] ; 
  circleObjects = {} ;
}

