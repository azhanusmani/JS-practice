function checkPalindrome(string){
if(typeof(string)==="number"){
    string= string.toString()
}

    let revesrsedString=string.split("").reverse().join("")
    if(revesrsedString===string){
        return true
    }
    return false
}

checkPalindrome("121")?console.log("Palendrome"):console.log("not a palendrome")