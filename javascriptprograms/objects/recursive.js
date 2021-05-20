var text="ABABCC";

var result={};


for(ch of text)
{
    
    if ( ch in result)
    {
       console.log(ch +" " + "is the first recursive");
       break;
    }
    else{
        result[ch]=1
    }

}

