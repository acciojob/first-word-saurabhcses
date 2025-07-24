function firstWord(s) {
  // your code here
	let s1=""
	let a=[]
	for (let i = 1; i < s.length; i++) {
		if(s[i]!=" "){
			s1=s1+s[i]
		}
		else{
				
			break
		}
		
	}
	return s1
}
 
// Do not change the code below 

const s = prompt("Enter String:");
alert(firstWord(s));
