axios.get('https://tbhpwebdevapi.azurewebsites.net/api/Bonsai')

.then(res => {
    console.log(res.data); 
    document.getElementById("title").innerHTML = res.data[0].productTitle; 
    document.getElementById("price").innerHTML = "Price: N" + res.data[0].productPrice;
    document.getElementById("description").innerHTML = res.data[0].productDescription;
    document.getElementById("image").src = "https://project1-bonsai-jacobtimms.vercel.app/" + res.data[0].productImage;

    
    document.getElementById("title2").innerHTML = res.data[1].productTitle; 
    document.getElementById("price2").innerHTML = "Price: N" + res.data[1].productPrice;
    document.getElementById("description2").innerHTML = res.data[1].productDescription;
    document.getElementById("image2").src = "https://project1-bonsai-jacobtimms.vercel.app/" + res.data[1].productImage;


    document.getElementById("title3").innerHTML = res.data[2].productTitle; 
    document.getElementById("price3").innerHTML = "Price: N" + res.data[2].productPrice;
    document.getElementById("description3").innerHTML = res.data[2].productDescription;
    document.getElementById("image3").src = "https://project1-bonsai-jacobtimms.vercel.app/" + res.data[2].productImage;


    document.getElementById("title4").innerHTML = res.data[3].productTitle; 
    document.getElementById("price4").innerHTML = "Price: N" + res.data[3].productPrice;
    document.getElementById("description4").innerHTML = res.data[3].productDescription;
    document.getElementById("image4").src = "https://project1-bonsai-jacobtimms.vercel.app/" + res.data[3].productImage;


    document.getElementById("title5").innerHTML = res.data[4].productTitle; 
    document.getElementById("price5").innerHTML = "Price: N" + res.data[4].productPrice;
    document.getElementById("description5").innerHTML = res.data[4].productDescription;
    document.getElementById("image5").src = "https://project1-bonsai-jacobtimms.vercel.app/" + res.data[4].productImage;


    document.getElementById("title6").innerHTML = res.data[5].productTitle; 
    document.getElementById("price6").innerHTML = "Price: N" + res.data[5].productPrice;
    document.getElementById("description6").innerHTML = res.data[5].productDescription;
    document.getElementById("image6").src = "https://project1-bonsai-jacobtimms.vercel.app/" + res.data[5].productImage;


    document.getElementById("title7").innerHTML = res.data[6].productTitle; 
    document.getElementById("price7").innerHTML = "Price: N" + res.data[6].productPrice;
    document.getElementById("description7").innerHTML = res.data[6].productDescription;
    document.getElementById("image7").src = "https://project1-bonsai-jacobtimms.vercel.app/" + res.data[6].productImage;


    document.getElementById("title8").innerHTML = res.data[7].productTitle; 
    document.getElementById("price8").innerHTML = "Price: N" + res.data[7].productPrice;
    document.getElementById("description8").innerHTML = res.data[7].productDescription;
    document.getElementById("image8").src = "https://project1-bonsai-jacobtimms.vercel.app/" + res.data[7].productImage;


    document.getElementById("title9").innerHTML = res.data[8].productTitle; 
    document.getElementById("price9").innerHTML = "Price: N" + res.data[8].productPrice;
    document.getElementById("description9").innerHTML = res.data[8].productDescription;
    document.getElementById("image9").src = "https://project1-bonsai-jacobtimms.vercel.app/" + res.data[8].productImage;
        })
.then(err => console.log(err))
