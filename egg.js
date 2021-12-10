async function gethp(){
    try {
        let cap = await axios.get('https://jsonplaceholder.typicode.com/users')
        document.getElementById("name").innerHTML = "NAME: " + cap.data[0].name;
        document.getElementById("username").innerHTML ="USERNAME:  " + cap.data[0].username;
        document.getElementById("email").innerHTML ="EMAIL:  " + cap.data[0].email;
        document.getElementById("address").innerHTML ="ADDRESS:  " + cap.data[0].address.street; 
        document.getElementById("address1").innerHTML ="SUITE: " + cap.data[0].address.suite;
        document.getElementById("address2").innerHTML ="CITY: " + cap.data[0].address.city;
        document.getElementById("address3").innerHTML ="ZIPCODE: " + cap.data[0].address.zipcode;
        document.getElementById("address4").innerHTML ="LAT:" + cap.data[0].address.geo.lat;
        document.getElementById("address5").innerHTML = "LNG:" +  cap.data[0].address.geo.lng;
        document.getElementById("phone").innerHTML = "PHONE:" +  cap.data[0].phone;
        document.getElementById("website").innerHTML ="WEBSITE: " +  cap.data[0].website;
        document.getElementById("company").innerHTML = "COMPANY:" +  cap.data[0].company.name;
        document.getElementById("company1").innerHTML = "CATCHPHRASE:" +  cap.data[0].company.catchPhrase;
        document.getElementById("company2").innerHTML ="BS:" +cap.data[0].company.bs;
        
        
        document.getElementById("1name").innerHTML = "NAME: " + cap.data[1].name;
        document.getElementById("1username").innerHTML ="USERNAME:  " + cap.data[1].username;
        document.getElementById("1email").innerHTML ="EMAIL:  " + cap.data[1].email;
        document.getElementById("1address").innerHTML ="ADDRESS:  " + cap.data[1].address.street; 
        document.getElementById("1address1").innerHTML ="SUITE: " + cap.data[1].address.suite;
        document.getElementById("1address2").innerHTML ="CITY: " + cap.data[1].address.city;
        document.getElementById("1address3").innerHTML ="ZIPCODE: " + cap.data[1].address.zipcode;
        document.getElementById("1address4").innerHTML ="LAT:" + cap.data[1].address.geo.lat;
        document.getElementById("1address5").innerHTML = "LNG:" +  cap.data[1].address.geo.lng;
        document.getElementById("1phone").innerHTML = "PHONE:" +  cap.data[1].phone;
        document.getElementById("1website").innerHTML ="WEBSITE: " +  cap.data[1].website;
        document.getElementById("1company").innerHTML = "COMPANY:" +  cap.data[1].company.name;
        document.getElementById("1company1").innerHTML = "CATCHPHRASE:" +  cap.data[1].company.catchPhrase;
        document.getElementById("1company2").innerHTML ="BS:" +cap.data[1].company.bs;
        

        document.getElementById("2name").innerHTML = "NAME: " + cap.data[2].name;
        document.getElementById("2username").innerHTML ="USERNAME:  " + cap.data[2].username;
        document.getElementById("2email").innerHTML ="EMAIL:  " + cap.data[2].email;
        document.getElementById("2address").innerHTML ="ADDRESS:  " + cap.data[2].address.street; 
        document.getElementById("2address1").innerHTML ="SUITE: " + cap.data[2].address.suite;
        document.getElementById("2address2").innerHTML ="CITY: " + cap.data[2].address.city;
        document.getElementById("2address3").innerHTML ="ZIPCODE: " + cap.data[2].address.zipcode;
        document.getElementById("2address4").innerHTML ="LAT:" + cap.data[2].address.geo.lat;
        document.getElementById("2address5").innerHTML = "LNG:" +  cap.data[2].address.geo.lng;
        document.getElementById("2phone").innerHTML = "PHONE:" +  cap.data[2].phone;
        document.getElementById("2website").innerHTML ="WEBSITE: " +  cap.data[2].website;
        document.getElementById("2company").innerHTML = "COMPANY:" +  cap.data[2].company.name;
        document.getElementById("2company1").innerHTML = "CATCHPHRASE:" +  cap.data[2].company.catchPhrase;
        document.getElementById("2company2").innerHTML ="BS:" +cap.data[2].company.bs;
        

        document.getElementById("3name").innerHTML = "NAME: " + cap.data[3].name;
        document.getElementById("3username").innerHTML ="USERNAME:  " + cap.data[3].username;
        document.getElementById("3email").innerHTML ="EMAIL:  " + cap.data[3].email;
        document.getElementById("3address").innerHTML ="ADDRESS:  " + cap.data[3].address.street; 
        document.getElementById("3address1").innerHTML ="SUITE: " + cap.data[3].address.suite;
        document.getElementById("3address2").innerHTML ="CITY: " + cap.data[3].address.city;
        document.getElementById("3address3").innerHTML ="ZIPCODE: " + cap.data[3].address.zipcode;
        document.getElementById("3address4").innerHTML ="LAT:" + cap.data[3].address.geo.lat;
        document.getElementById("3address5").innerHTML = "LNG:" +  cap.data[3].address.geo.lng;
        document.getElementById("3phone").innerHTML = "PHONE:" +  cap.data[3].phone;
        document.getElementById("3website").innerHTML ="WEBSITE: " +  cap.data[3].website;
        document.getElementById("3company").innerHTML = "COMPANY:" +  cap.data[3].company.name;
        document.getElementById("3company1").innerHTML = "CATCHPHRASE:" +  cap.data[3].company.catchPhrase;
        document.getElementById("3company2").innerHTML ="BS:" +cap.data[3].company.bs;
        

        document.getElementById("4name").innerHTML = "NAME: " + cap.data[4].name;
        document.getElementById("4username").innerHTML ="USERNAME:  " + cap.data[4].username;
        document.getElementById("4email").innerHTML ="EMAIL:  " + cap.data[4].email;
        document.getElementById("4address").innerHTML ="ADDRESS:  " + cap.data[4].address.street; 
        document.getElementById("4address1").innerHTML ="SUITE: " + cap.data[4].address.suite;
        document.getElementById("4address2").innerHTML ="CITY: " + cap.data[4].address.city;
        document.getElementById("4address3").innerHTML ="ZIPCODE: " + cap.data[4].address.zipcode;
        document.getElementById("4address4").innerHTML ="LAT:" + cap.data[4].address.geo.lat;
        document.getElementById("4address5").innerHTML = "LNG:" +  cap.data[4].address.geo.lng;
        document.getElementById("4phone").innerHTML = "PHONE:" +  cap.data[4].phone;
        document.getElementById("4website").innerHTML ="WEBSITE: " +  cap.data[4].website;
        document.getElementById("4company").innerHTML = "COMPANY:" +  cap.data[4].company.name;
        document.getElementById("4company1").innerHTML = "CATCHPHRASE:" +  cap.data[4].company.catchPhrase;
        document.getElementById("4company2").innerHTML ="BS:" +cap.data[4].company.bs;
        

        document.getElementById("5name").innerHTML = "NAME: " + cap.data[5].name;
        document.getElementById("5username").innerHTML ="USERNAME:  " + cap.data[5].username;
        document.getElementById("5email").innerHTML ="EMAIL:  " + cap.data[5].email;
        document.getElementById("5address").innerHTML ="ADDRESS:  " + cap.data[5].address.street; 
        document.getElementById("5address1").innerHTML ="SUITE: " + cap.data[5].address.suite;
        document.getElementById("5address2").innerHTML ="CITY: " + cap.data[5].address.city;
        document.getElementById("5address3").innerHTML ="ZIPCODE: " + cap.data[5].address.zipcode;
        document.getElementById("5address4").innerHTML ="LAT:" + cap.data[5].address.geo.lat;
        document.getElementById("5address5").innerHTML = "LNG:" +  cap.data[5].address.geo.lng;
        document.getElementById("5phone").innerHTML = "PHONE:" +  cap.data[5].phone;
        document.getElementById("5website").innerHTML ="WEBSITE: " +  cap.data[5].website;
        document.getElementById("5company").innerHTML = "COMPANY:" +  cap.data[5].company.name;
        document.getElementById("5company1").innerHTML = "CATCHPHRASE:" +  cap.data[5].company.catchPhrase;
        document.getElementById("5company2").innerHTML ="BS:" +cap.data[5].company.bs;
        
        
    } 
    catch (err) {
        console.error(err)
    } }
gethp()