    const carArray = [];
    const prijsArray = [];
    const prijsTotaal = [];

    function addCar() {
        const car = document.getElementById("auto").value;
        const prijs = document.getElementById("prijs").value;
        

        carArray.push(car);
        prijsArray.push(prijs);
         
        displayCars();
        displayTotaalPrijs()
    }

    function displayCars() {
        const outputDiv = document.getElementById("output");
        outputDiv.innerHTML = ""; // Clear previous content

        for (let i = 0; i < carArray.length; i++) {
            const car = carArray[i];
            const prijs = prijsArray[i];

            outputDiv.innerHTML += car + " " + prijs + "<br>";
        }      
          
    }
    function displayTotaalPrijs() {     
        let prijsTotaal = 0; // Initialize prijsTotaal outside the loop
    
        for (let i = 0; i < prijsArray.length; i++) {
            prijsTotaal += parseInt(prijsArray[i]); // Accumulate the total price
        }
        document.getElementById("totaalprijs").innerHTML = "De totaalprijs is: " + prijsTotaal;
    }
    