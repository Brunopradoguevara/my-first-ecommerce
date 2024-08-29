
function  randomNumber(data){
    const arrQuantity = []
    for(let i=0; i < data.length; i++){
      let number = Math.floor(Math.random() * 10)
      if(number <= 1){
        number = 1
      }

      arrQuantity.push(number)

    }

    return arrQuantity
}

export default randomNumber;