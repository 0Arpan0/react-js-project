import React, { useState } from "react";
import "./Home.css"
function Home() {
  const [count, setCount] = useState(0);
  <>
  <link href="https://fonts.gstatic.com" rel="preconnect"/>
        
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100display=swap" rel="stylesheet"/>
  <script src="https://kit.fontawesome.com/7f4e6c1410.js" crossorigin="anonymous"/>
  </>
  return (
  
    <div className="App">
       <nav>
            <div>
                <ul>
                   <a> <li>Sell</li> </a>
                   <a> <li>Marketplace</li></a>
                   <a> <li>Community</li></a>
                   <a> <li>Develop</li></a>
                   <a> <li class="resource">Resources</li></a>
  
                   <a> <li class="login">Log In</li></a>
                   <a> <li class="get-started">Get Started</li></a>
              </ul>
            </div>
        </nav>
      {/* <button onClick={() => setCount(count + 1)}>Count {count}</button> */}
               <img src="data:image/jpeg;base64,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" class="laugh" />


        <img src="https://wassupkicks.com/wp-content/uploads/2018/06/adidas-Prophere-2-681x472.png" class="shoes-1"/>
 
        <div class="container">
            <br/><br/> 
           
            <h7 class="kk">SHOES &nbsp <span class="zz">Addidas Originals</span></h7>
            <h2 class="gg">Adidas Originals <br/>OG Sneakers</h2>
            <div class="size">
                <div class="vv"><p class="ko">7</p></div>
                <div class="vv"><p class="ko-1">7.5</p></div>
                <div class="vv"><p class="ko">8</p></div>
                <div class="vv"><p class="ko-1">8.5</p></div>
                <div class="vv"><p class="ko">9</p></div>
            </div>
            <p class="money">$344</p>
            <p class="cut-price">$560</p>
            <div class="container-4">
                
                <button class = "decrease" id="btn-4" onclick="{handleDecrement}">-</button>
               
           
            <input value="0" id="quantity"/>

           <button class="increase" id="btn-3" onclick="{handleIncrement}">+</button>
                
            </div>
            <div>
                <button class="cart">Add to cart</button>
            </div>
        </div>
        <div class="container-1">
            <div class="payments">
                
                
                <label class="switch">
                    <input type="checkbox" class="slide"/>
                    <span class="slider round"></span>
                  </label>
                  <i class="fab fa-stripe fa-3x"/>
                <p class="p-1">Stripe gateway</p>
                
            </div>
            <div class="payments">
             
                
               <label class="switch">
                <input type="checkbox" class="slide"/>
                <span class="slider round"></span>
              </label> 
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAAhCAMAAAAs0D+lAAAAw1BMVEX///8AL4YAnN4BIGlPb6sAKXsvVZxPu+ilttQLoN8DMYckquOHncYEnt8vruT5/f719/o6XqLP2OgfSJXn6/Rng7edr9DC5/cKN4sVQJBif7XR7fnr9/wXpeGPpMpoxOt9lcF3yu214vWq3vRAtebh8/uT1fEBMXworONGaKcnT5m+yuDj6PLt8PYQPI4zUI2ywNoBPIcAb7aI0fB+lsIASpQAfMJyjLwBMHsBRpAAYaoAk9af2vPF0OMAUqMAh81OntHccMZiAAADkklEQVRYhe1X2WLaMBAUimtz+uA2MRiDDYEAzVnalB7//1XV7kpGsmlC8kBfOg9YlhSNtDs7chgTCCo56mGwv2UXRLtSQLC5HHm1SF7pbC9GPi2RV/YXI7fK5LuLkdtl8kr3UuRD4vuU44LkG8l9peHzdWGO3GBluO61z1l01uKEmptkp8ZhSDzvTpAvawNjbl/LSL1/BnnCjyislY+PxbNJa+rcV/d87Olz97oehmfYgKORF9bKx1PxHJ0gf+B8rs/FgrCDdR2nTt4mbwBp6jaIvXx0V/TGLDdXg1wMPepz13Bgsf9NeJ4LeEDpisYAc38ojddE70I0duWUi4PzRJvrw4ntPARP2NntlqOpcM3lySgEGEUvi/LxTMajW9bbM5f7UkD3HzEVpipjt5bQ/9Bqj2zbnrCe+B3R1KZoBv6Bq9iNoSVqZ56KGNTiLHVdd4Zi52IvtyXy51Ke0P2bsAtM+sbrKSeE9ynJBksQV7NI7DPxPkfBsShV2qNAPEqx9wspX36h+tBj+oSZrvb3mKKV0qhElShhc9uOaIRdEvtifogx5Ynn6uIXgYil2GUVXX1dLpf3316+ywmxnkLD/ett3O9w3292KvLIoMOAycq5Y+zGqLQIAzFODgnojLe8XOwrWvGXsTfeMixOd3/hMaD9EIp9C6R1nzFIQ31L6ekJbbW0pWqDCF5dkNs1tBqMKbHT7kOT29B67v4Y8zbJj2wOSDvi+QO7NpCVtS/FLk/hZOwgRScAuXdI7EISPq350+Q2gk7uHzYnk8kdXDgTeKXPjRFKQB7BWmFSlMxuHheLxQzOG0t5MTKXhA1gPMu/oV506puZwU3uPzXlh9eeD2FHy8n9F2SHYtYs0snJMwj7gS04XSvyG+qBaBuOEy8KN5p0/2r+iicHSt/KE6C+A4OcjR+XidVeIvcodvA/+Q1FemtF7BSOZcyORMG0R3L5gZ1rbO82eXBbx1rFnHMniVHswlxSmVlZRVRh7klutDXQtMJKrzyZfcyFCo/UtII3NiqPbA/8j6poR/3OafKd1LTCho5c6cCuQurD9EmLzYprDejIHG+5lEUqDXVd7MZNdsTIsqyq3rGd2sNd0Nz2xQDVXBekp764I0fAEG0WN2rj9OAlOOCL3xgiubcAv4ncuMPfBayyD/6rExN5SefnYmIW4/tAl07r7xf062iDBdof/ev0Nb29DXDZ8Kyv2v/49/gDggM98lgyTiEAAAAASUVORK5CYII=" class="paypal"/>
               <p class="p-2">paypal payments</p>
                </div>
                <div class="payments-1">
                    
                     
                <label class="switch-1">
                    <input type="checkbox" class="slide-1"/>
                    <span class="slider round-1"></span>
                  </label>
                  <p class="p-3">Bank Transfers</p>
                </div>
        </div>
        <h1>Building exactly the <br/>eCommerce website<br/>you want.</h1>
        <p class="p">WooCommerce is a customize, open-source eCommerce platform built on WordPress.<br/>Get started and make your way.</p>
        <h4><button class="store">Start a New Store</button> &nbsp or <a href="#" class="customize">Customize & Extend</a></h4>
        <br/>
        <br/>
        <h2 class="oo">Your eCommerce <br/><div class="span-2">made simple</div></h2>
       <div class="bj">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8o827PF-mUz9fikErIwfdGsqIsiyIZgEEsrzZozRTniVROxlOFcBE6nWQwe-C33KefKU&usqp=CAU" class="nj"/>
        </div>

<img src="https://woocommerce.com/wp-content/uploads/2018/07/Screenshot-2018-06-21-19.22.55.png" class="ab"/>
<div class="mh"><img src="data:image/jpeg;base64,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" class="cx"/></div>
<div class="ooo"><img src="https://farsighttechnologies.com/wp-content/uploads/2021/03/WhyFarsight_2.png" class="ty"/></div>
<div class="ooo-1"><img src="https://farsighttechnologies.com/wp-content/uploads/2021/03/WhyFarsight_3.png" class="ql"/></div> 
<script src="app.js" async defer></script>
<h3 class="loop-9">All You Need to Start</h3>
<p class="p-9">Add WooCommerce plugin to any WordPress site and <br/> set up a new store in minutes.</p>
<a href="#" class="customize-9">Economics for WordPressc </a>
<div class="ooooo">
<h3 class="loop-1">Customize and Extend</h3>
<p class="p-a">From subscription to gym classes to luxury cars,<br/>WooCommerce is fully customize.</p>
<a href="#" class="customize-2">Browse Extensions </a>
</div>
<div class="lllll">
<h3 class="loop-2">Active Community</h3>
<p class="p-c">WooCommerce is one of the fastest-growing<br/>eCommerce communities</p>
<a href="#" class="customize-3">Check our Forums</a>
</div>
      
    </div>
    
    
  );
}

export default Home;
