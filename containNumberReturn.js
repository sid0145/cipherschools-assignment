const checkString = (arr)=>{
    const stringConNumner=arr.filter((str)=>{
        for(let i=0; i<str.length; i++){
            if(str[i].charCodeAt()>=48 && str[i].charCodeAt()<=57){
                return true;
            }
        }
    });
    return stringConNumner;
}

console.log(checkString(["1a", "3dv", "sdsd"]));