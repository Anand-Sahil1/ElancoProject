fetch("/raw")
.then(function(response){
    return response.json();
})

.then(function(products){
    let placeholder = document.querySelector("#application-data-output");
    let out = "";
    let arr = [];
    for(let product of products){
        check = arr.includes(product.ResourceGroup);
        if (check == false){
            arr.push(product.ResourceGroup);
        }
    }

    for (let item of arr){
        out+=`
            <tr>
                <td>${item}</td>
            </tr>
        `;
    }

    placeholder.innerHTML = out;

})

function applicationButton(){
    document.getElementById('application-data').style.display="block"
    document.getElementById('applicationButton').style.display="visible"
}

function hideApplicationScroller(){
    document.getElementById('application-data').style.display="none"
    document.getElementById('applicationButton').style.display="inline"
}
////////////////////////////////////////////////////////////////////////////////
fetch("/raw")
.then(function(response){
    return response.json();
})

.then(function(products){
    let servicePlaceholder = document.querySelector("#service-data-output");
    let out = "";
    let serviceArray = [];
    for(let product of products){
        check = serviceArray.includes(product.ServiceName);
        if (check == false){
            serviceArray.push(product.ServiceName);
        }
    }

    for (let item of serviceArray){
        out+=`
            <tr>
                <td>${item}</td>
            </tr>
        `;
    }

    servicePlaceholder.innerHTML = out;

})

function serviceButton(){
    document.getElementById('service-data').style.display="block"
    document.getElementById('serviceButton').style.display="visible"
}

function hideServiceScroller(){
    document.getElementById('service-data').style.display="none"
    document.getElementById('serviceButton').style.display="inline"
}
////////////////////////////////////////////////////////////////////////////////
async function getapi(url){
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    
    
    search(data);
}


function search(jsondata){
    let placeholder = document.querySelector("#application-data-search-output");
    let app = document.getElementById("appname");
    let out = "";
    let users = 0;
    let userPlaceholder = document.querySelector("#applicationUsers");

    for(let product of jsondata){
        if (product.ResourceGroup == app.value){
            users += 1;            
            out+=`
            <tr>
                
                <td>${product.ConsumedQuantity}</td>
                <td>${product.Cost}</td>
                <td>${product.Date}</td>
                <td>${product.InstanceId}</td>
                <td>${product.ResourceGroup}</td>
                <td>${product.ResourceLocation}</td>
                <td>${product.UnitOfMeasure}</td>
                <td>${product.Location}</td>
                <td>${product.ServiceName}</td>
             
            </tr>
            `;
        }
    }

    placeholder.innerHTML = out;
    userPlaceholder.innerHTML = users;

}

function searchApplicationButton(){
    document.getElementById('application-data-search').style.display="block"
    document.getElementById('searchApplicationButton').style.display="visible"
    getapi("/raw");
}

function hideSearchApplicationButton(){
    document.getElementById('application-data-search').style.display="none"
    document.getElementById('searchApplicationButton').style.display="inline"
}

//////////////////////////////////////////////////////////////////////////////////////////
async function getApiService(url){
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var servicedata = await response.json();
    
    
    searchService(servicedata);
}

function searchService(jsondata){
    let placeholder = document.querySelector("#service-data-search-output");
    let service = document.getElementById("servicename");
    let out = "";
    let serviceUsers = 0;
    let userPlaceholder = document.querySelector("#serviceUsers");

    for(let product of jsondata){
        if (product.ServiceName == service.value){
            serviceUsers += 1;            
            out+=`
            <tr>
                
                <td>${product.ConsumedQuantity}</td>
                <td>${product.Cost}</td>
                <td>${product.Date}</td>
                <td>${product.InstanceId}</td>
                <td>${product.ResourceGroup}</td>
                <td>${product.ResourceLocation}</td>
                <td>${product.UnitOfMeasure}</td>
                <td>${product.Location}</td>
                <td>${product.ServiceName}</td>
             
            </tr>
            `;
        }
    }

    placeholder.innerHTML = out;
    userPlaceholder.innerHTML = serviceUsers;

}

function searchServiceButton(){
    document.getElementById('service-data-search').style.display="block"
    document.getElementById('searchServiceButton').style.display="visible"
    getApiService("/raw");
}

function hideSearchServiceButton(){
    document.getElementById('service-data-search').style.display="none"
    document.getElementById('hideSearchServiceButton').style.display="inline"
}

///////////////////////////////////////////////////////////////////////////////////////////////

fetch("/raw")
.then(function(response){
    return response.json();
})

.then(function(products){
    let arrayLabelX = [];
    let arrayLabelY = [];
    let resAr = [];
    let Counter = [];
              
    for(product of products)(
        resAr.push(product.ResourceGroup)
    )
    resAr.sort()

    for (element of resAr.flat()) {
        if (Counter[element]) {
            Counter[element] += 1;
        } else {
            Counter[element] = 1;
        }
    };  

    for (let value of Object.values(Counter)) {
        arrayLabelY.push(value)
    }

    for (let value of Object.keys(Counter)) {
        arrayLabelX.push(value)
    }

    xy = [arrayLabelX, arrayLabelY];

    const ctx = document.getElementById('myChart');
              
    new Chart(ctx, {
      type: 'bar',
      data: {
        
        labels: xy[0],
        datasets: [{
          label: 'Number Of Each Application Users',
          data: xy[1],
          borderWidth: 1,
          backgroundColor: '#F39C12', borderColor:'black',
          hoverBackgroundColor:'black', hoverBorderColor:'white'
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    
});

function ApplicationBarChart(){
    document.getElementById('myChart').style.display="block"
    document.getElementById('ApplicationBarChart').style.display="visible"
}

function hideApplicationBarChart(){
    document.getElementById('myChart').style.display="none"
    document.getElementById('hideApplicationBarChart').style.display="inline"
}


///////////////////////////////////////////////////////////////////////////////////////////////

fetch("/raw")
.then(function(response){
    return response.json();
})

.then(function(products){
    let arrayLabelA = [];
    let arrayLabelB = [];
    let resAr = [];
    let Counter = [];
              
    for(product of products)(
        resAr.push(product.ServiceName)
    )
    resAr.sort()

    for (element of resAr.flat()) {
        if (Counter[element]) {
            Counter[element] += 1;
        } else {
            Counter[element] = 1;
        }
    };  

    for (let value of Object.values(Counter)) {
        arrayLabelB.push(value)
    }

    for (let value of Object.keys(Counter)) {
        arrayLabelA.push(value)
    }

    ab = [arrayLabelA, arrayLabelB];

    const linegraph = document.getElementById('barChart');
              
    new Chart(linegraph, {
      type: 'bar',
      data: {
        
        labels: ab[0],
        datasets: [{
          label: 'Number Of Each Service Users',
          data: ab[1],
          borderWidth: 2, 
          backgroundColor: '#F39C12', borderColor:'black',
          hoverBackgroundColor:'black', hoverBorderColor:'white'
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    
});

function ServiceBarChart(){
    document.getElementById('barChart').style.display="block"
    document.getElementById('ServiceBarChart').style.display="visible"
}

function hideServiceBarChart(){
    document.getElementById('barChart').style.display="none"
    document.getElementById('hideServiceBarChart').style.display="inline"
}