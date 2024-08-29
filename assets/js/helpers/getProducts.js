
import randomNumber from "./randomNumber.js";

async function getProducts() {

  try {
    const res = await window.fetch("https://fakestoreapi.com/products")
    const data = await res.json()
    const arrQuantity = randomNumber(data)
    for(let i = 0; i < data.length; i++){
      data[i].quantity = arrQuantity[i]
  }
    return data
  } catch (error) {
    console.log(error)
  }
}

export default getProducts;
