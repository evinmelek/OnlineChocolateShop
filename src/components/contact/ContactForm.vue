<template>
  <div>
    <h1 class="contact-header">Contact with Us</h1>
    <div class="contact-form">
        <div class="contact-input-space">
          <h3 class="contact-input-header">Email</h3><input type="text" maxlength="24" id="#contact-input">
        </div>
        <div class="contact-input-space">
           <h3 class="contact-input-header">Adress</h3><input type="text" maxlength="24" id="#contact-input"/>
        </div>
        <div class="contact-input-space">
           <h3 class="contact-input-header">Your Message</h3> <textarea type="text" minlength="128" maxlength="512" id="#contact-message-input"></textarea>
        </div>
        <button class="form-button">Send</button>
    </div>
    <br/>
    <div class="contact-info">
        <h2 class="info-header">Tel:</h2>
        <p class="info">{{telephone}}</p>
        <h2 class="info-header">E-mail:</h2>
        <p class="info">{{email}}</p>
        <h2 class="info-header">Whatsapp:</h2>
        <p class="info">{{whatsapp}}</p>
        <a class="info-a">Working Hours:(every day) 09:00 - 19:00</a>
        <h2 class="info-header">Our Address:</h2>
        <p class="info">{{address}}</p>
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
.contact-header{
    float: center; 
    margin-top: 10%;
    color: brown;
    text-shadow: 1px 2px 4px chocolate;
}

.info-header, .contact-input-header {
    float: left; 
    width: 51%;  
    text-align: left;
}

.info {
    float: left;
    text-align: right;
    margin: 2% ;
    width: 25%;
}

.info-a{
    padding: 1%; 
    font-style: italic;
    font-size: 96%;
}

.contact-input{
    padding: 2%;
    width: 100%; 
    border: 1px solid peru;
    border-radius: 10px; 
}

.contact-message-input {
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

.contact-input-space{
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