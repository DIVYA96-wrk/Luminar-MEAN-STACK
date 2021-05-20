var temp=[{distname:"tvm",temp:25},
          {distname:"ekm",temp:26},
          {distname:"tsr",temp:27},
          {distname:"apy",temp:22},
          {distname:"ktm",temp:27},
          {distname:"pkd",temp:30},
          {distname:"knr",temp:28},
          {distname:"tvm",temp:24},
          {distname:"ekm",temp:25},
          {distname:"tsr",temp:29},
          {distname:"apy",temp:25},
          {distname:"ktm",temp:26},
          {distname:"pkd",temp:28},
          {distname:"knr",temp:29}]
 var temprature={};
 for (let district of temp)
 {
     if( district.distname in temprature)
     {
      if(temprature[district.distname]<district["temp"])
      {
        temprature[district.distname]=district["temp"]
      }
     }
     else
     {
         
         temprature[district.distname]=district["temp"];
     }
 }
 console.log(temprature);



    



            








                                   