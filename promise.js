
// Fetches the resource located in the URL
fetch('https://woltahnemesis.github.io/Lab4JavaScript/onlineStore.json')
// Then returns the response type as a JSON file
.then(function(response){
    return response.json();
})
// Then object from json is retrieved
.then(function(json){
    let products = json;
    console.log(products);
    return products;
})
// Displays the object
.then(function(jsonObj){
    
    //Retrieves object's properties
    products = jsonObj.products;
    
    let container = document.getElementById('container');
    let main_area = document.getElementById('main-area');
    
    for(let i = 0; i < products.length; i++){
        
        let img = document.createElement('img');
        let div = document.createElement('div');
        
        div.setAttribute('id', 'box');
        
        img.setAttribute('src', 'https://woltahnemesis.github.io/Lab4JavaScript/Images/' + products[i].image);
        img.setAttribute('alt', products[i].image);
        img.setAttribute('width', 400);
        
        div.innerHTML = 
            '<p>Name: ' + products[i].name + '</p>' +
            '<p>Price: ' + products[i].price + '</p>' + 
            '<p>' + products[i].details + '</p>';
        
        div.appendChild(img);
        main_area.appendChild(div);
        
        console.log(i); 
        
    }
})
// To catch the error and display the error message
.catch(function(err){
    console.log('Fetch problem: ' + err.message);
});

