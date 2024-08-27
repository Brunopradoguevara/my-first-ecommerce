async function getProducts() {

  try {
    const res = await window.fetch("https://fakestoreapi.com/products")
    const data = await res.json()
    for(let i = 0; i < data.length; i++){
      data[i].quantity = 5;
  }
    return data
  } catch (error) {
    console.log(error)
  }
}

export default getProducts;
