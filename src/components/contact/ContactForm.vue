<template>
  <div>
    <h1>Contact with Us</h1>
    <div class="contact-form">
        <div class="input-space">
          <h3>Email</h3><input type="text" maxlength="24">
        </div>
        <div class="input-space">
           <h3>Adress</h3><input type="text" maxlength="24"/>
        </div>
        <div class="input-space">
           <h3>Your Message</h3> <textarea type="text" minlength="128" maxlength="512"></textarea>
        </div>
        <button class="form-button">Send</button>
    </div>
    <br/>
    <div class="contact-info">
        <h2>Tel:</h2>
        <p>{{telephone}}</p>
        <h2>E-mail:</h2>
        <p>{{email}}</p>
        <h2>Whatsapp:</h2>
        <p>{{whatsapp}}</p>
        <a>Working Hours:(every day) 09:00 - 19:00</a>
        <h2>Our Address:</h2>
        <p>{{address}}</p>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            telephone: "0(212) 999 98 89",
            email: "info@regler.com.tr",
            whatsapp: "+90 552 555 55 55",
            address: "22 Street 33/77"
        }
    }

}
</script>

<style> 
h1{
    float: center; 
    margin-top: 10%;
    color: brown;
    text-shadow: 1px 2px 4px chocolate;
}

h3, h2 {
    float: left; 
    width: 51%;  
    text-align: left;
}

p {
    float: left;
    text-align: right;
    margin: 2% ;
    width: 25%;
}

a{
    padding: 1%; 
    font-style: italic;
    font-size: 96%;
}

input{
    padding: 2%;
    width: 100%; 
    border: 1px solid peru;
    border-radius: 10px; 
}

textarea {
    width: 100%;
    min-height: 100px;
    border: 1px solid peru;
    border-radius: 10px; 
}

.contact-info, .contact-form{
    border: 1px solid silver; 
    width: 40%;
    float: left;
    margin-right: 3%;
    margin-left: 3%;
    padding: 1%;
    box-shadow: 2px 2px 7px grey;
    background-color: whitesmoke;
}

.input-space{
    float: center;
    margin: 1%;
    height: 30%;
    width: 50%;  
} 

.form-button{
    background-color: peru;
    margin: 1%;
    float: left;
    border: 1px solid peru;
    padding: 1%;
    border-radius: 10px;
    font-size: 99%;
}
</style>