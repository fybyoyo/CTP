async function updatePrices(url) {
   // const url='../prices.json';
    const response = await fetch(url);
    const data=await response.json();
    //console.log(data[0].prices);
  
    /* document.getElementById(`${data[0].prices[0].id}`).textContent=data[0].prices[0].price;
  
    document.getElementById(`${data[0].prices[1].id}`).textContent=data[0].prices[1].price; */
  
    data.forEach(element => {
      
       element.prices.forEach(price => {
        //console.log(price);
        document.getElementById(`${price.id}`).textContent=price.price;
      }); 
    });
  
  
  }

  async function updatePricesTest(url) {
    const response = await fetch(url);
    const data=await response.json();
console.log(data[0].prices[0].id);
    document.getElementById(`${data[0].prices[0].id}`).textContent=data[0].prices[0].price;
  }