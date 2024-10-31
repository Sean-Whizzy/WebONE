function hh() {
    
document.body.innerHTML = `
        <div class="NAV">
        <h1 style="margin:0 2%;font-family: 'Lemon'">Donuts</h1>
        <h2>About Us</h2>
        <h2>Contact Us</h2>
        <h2>Our Offers</h2>
        <img src="/images/shopping-cart.png" alt="" style="width: 5vw;height: 5vh;margin-right:2%;">
    </div>
            <div class='icons'>
            <img src="/images/sprinkles4.png" alt="" style="max-width:55%;height: 75vh;position:absolute;right:-5%;top:-40%;rotate: 35deg">
            <img src="/images/sprinkles3.png" alt="" style="max-width: 50vw;height: 50vh;position:absolute;right:10%;top:-5%;">
            <img src="/images/sprinkles6.png" alt="" style="width: 10vw;height: 15vh;position:absolute;left:10%;top:5%;">

            <img src="/images/sprinkle2.png" alt="" style="width: 30vw;height: 20vh;position:absolute;right:20%;top:35%;">

            <img src="/images/sprinkles1.png" alt="" style="width: 15vw;height: 30vh;position:absolute;left:0%;top:50%;rotate: 45deg;padding:0;margin:0;">
            <img src="/images/sprinkles4.png" alt="" style="height: 60vh;position:absolute;left:10%;top:25%;rotate: -25deg;padding:0;margin:0;max-width:55%;">
            
           <img src="/images/sprinkles3.png" alt="" style="max-width: 50vw;height: 50vh;position:absolute;left:10%;top:75%;">
            <img src="/images/sprinkles5.png" alt="" style="width: 50vw;height: 30vh;position:absolute;left:25%;top:77%;padding:0;margin:0;rotate: 0deg;max-width:25%;">
            </div>


    <div class="heroSection">
        <h1 id='letterD' style="font-family: 'Nosifer';font-size: 200px;padding:0;margin:0;">D</h1>
        <h1 id="DonutHero"><img class="donut-image" src="/images/donought2.png" alt="Donut Image">NUTS</h1>
    </div>
      
  
       <header class="container2">
       
      <h3 class="text">Yes, you can increase the font size beyond 128 in Figma! While the default size options only go up to 128, you can manually input any font size you want.
        Here’s how you can increase the font size beyond 128:
        Select the text you want to adjust.</h3>
    </header>
    <button id='button'>SHOP NOW</button>
`
};

document.body.addEventListener('click', hh);


function page3() {
    console.log('gg')
};
const button = document.getElementById('button');

button.addEventListener('click', page3);
