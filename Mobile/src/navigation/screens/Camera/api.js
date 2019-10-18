const config = {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  // body: JSON.stringify({
  //   firstParam: 'yourValue',
  //   secondParam: 'yourOtherValue',
  // }),
};

const getUserInfo = async (name) => {
  try{    
    let response = await fetch(`https://api.github.com/users/${name}`, config);

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
  getUserInfo
}