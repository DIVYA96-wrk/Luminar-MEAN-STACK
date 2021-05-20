var text="hello hai hello hai good";
console.log(text);
var words=text.split(" ");
var result={};
console.log(words);
for(let word of words)
{

        if (word in result)
        {
            result[word]+=1;
        }
        else{
            result[word]=1;
        }
    }
    
console.log(result);
