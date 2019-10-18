export default {
  getUserInfo: async (name) => {      
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(require('./userData.json'));
      }, 300);
    });
  }
}