function hideString(str,done){
    process.nextTick(()=>{
        done( str.replace(/[a-zA-z]/g,'x'))

    })
}
hideString("motasem",(text)=>{
    console.log(text)

})
console.log("asdds")
console.log("asdds")