const searchInput = document.getElementById('searchInput');
const resultsList = document.getElementById('results');

let debounceTimer;

searchInput.addEventListener('input', function () {
  clearTimeout(debounceTimer);

  debounceTimer = setTimeout(() => {
    const searchTerm = searchInput.value;

    callDummyAPI(searchTerm)
      .then(results => {
       
        resultsList.innerHTML = '';

       if(searchTerm.length>0){
        results.forEach(result => {
            const li = document.createElement('li');
            li.textContent = result;
            resultsList.appendChild(li);
          });
       }
      })
      .catch(error => {
        console.log(error);
      });
  }, 500);
});


function callDummyAPI(searchTerm) {
  return new Promise((resolve, reject) => {
   
    setTimeout(() => {
      const results = [
        `${searchTerm} result 1`,
        `${searchTerm} result 2`,
        `${searchTerm} result 3`
      ];
      resolve(results);
    }, 1000);
  });
}
