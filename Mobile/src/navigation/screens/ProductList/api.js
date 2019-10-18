const getProductsByImage = async (data) => {
  try{    
    let response = await fetch(`http://47630327.ngrok.io/api/item`, 
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if(response.ok) {
      let data = await response.json();
      return data;
    } else {
      throw new Error("Network response was not ok.");
    }    
  }catch(error){
    return error;
  }
};



export default {
  getProductsByImage
}