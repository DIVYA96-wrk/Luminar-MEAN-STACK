var ipl=[
    {team_name:"rcb",mp:2,won:2,los:0,pts:4},
    {team_name:"mi",mp:2,won:1,los:1,pts:2},
    {team_name:"pb",mp:1,won:1,los:0,pts:2},
    {team_name:"dc",mp:2,won:1,los:1,pts:2},
    {team_name:"rr",mp:2,won:1,los:1,pts:2},
    {team_name:"kkr",mp:2,won:1,los:1,pts:1},
    {team_name:"srh",mp:2,won:0,los:2,pts:0},
    {team_name:"csk",mp:1,won:0,los:1,pts:0}]


for(let team of ipl)
{

    if(team["team_name"]=="rcb")
    for(let name in team)
    {
    
        console.log(name);
        console.log(team[name]);
    }
}

var x=0, temp,y;
 for(let team of ipl)
{
   /* for(let name in team)
   /*
 /*   {
        
        if(name=="pts") 
        { */ 
            
            temp=team["pts"];
            if(temp>x){
                x=temp;
                y=team["team_name"]
               
            }
            

        }
     
     
     


     console.log("highest point is" +" " +x+ " " + "and the team is" + " " +y );