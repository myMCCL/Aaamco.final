(function(){const g=document.createElement("link").relList;if(g&&g.supports&&g.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))b(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const p of e.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&b(p)}).observe(document,{childList:!0,subtree:!0});function y(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function b(t){if(t.ep)return;t.ep=!0;const e=y(t);fetch(t.href,e)}})();function B(){const o=document.createElement("nav");o.className="fixed top-0 left-0 right-0 z-50 transition-all duration-300";const g=`
    <div class="px-4 py-0 navbar-transparent transition-all duration-300">
      <div class="container mx-auto flex justify-between items-center">
        <div class="flex items-center transition-all duration-300">
          <img 
            src="images/{hero,products,services,clients}/aamco.png" 
            alt="AAMCO Logo" 
            class="nav-logo transition-all duration-300 -mt-1"
            style="height: 60px; filter: brightness(0) saturate(100%) invert(23%) sepia(90%) saturate(2299%) hue-rotate(201deg) brightness(95%) contrast(106%);"
          />
        </div>
        
        <div id="navbar-links" class="hidden md:flex items-center space-x-8">
          <a href="#hero" class="nav-link text-gray-800 font-medium hover:text-blue-600 transition-colors">Home</a>
          <a href="#products" class="nav-link text-gray-800 font-medium hover:text-blue-600 transition-colors">Products</a>
          <a href="#services" class="nav-link text-gray-800 font-medium hover:text-blue-600 transition-colors">Services</a>
          <a href="#clients" class="nav-link text-gray-800 font-medium hover:text-blue-600 transition-colors">Clients</a>
          <a href="#contact" class="nav-link text-gray-800 font-medium hover:text-blue-600 transition-colors">Contact</a>
        </div>
        
        <div class="md:hidden">
          <button id="menu-toggle" class="text-gray-800 focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <div id="mobile-menu" class="md:hidden hidden bg-white absolute top-full left-0 w-full border-b border-gray-200">
      <div class="container mx-auto px-4 py-2">
        <a href="#hero" class="nav-link block py-2 text-gray-800 font-medium hover:text-blue-600 transition-colors">Home</a>
        <a href="#products" class="nav-link block py-2 text-gray-800 font-medium hover:text-blue-600 transition-colors">Products</a>
        <a href="#services" class="nav-link block py-2 text-gray-800 font-medium hover:text-blue-600 transition-colors">Services</a>
        <a href="#clients" class="nav-link block py-2 text-gray-800 font-medium hover:text-blue-600 transition-colors">Clients</a>
        <a href="#contact" class="nav-link block py-2 text-gray-800 font-medium hover:text-blue-600 transition-colors">Contact</a>
      </div>
    </div>
  `;o.innerHTML=g;const y=document.createElement("style");y.textContent=`
    .navbar-transparent {
      background-color: transparent;
    }
    
    .navbar-scrolled {
      background-color: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(8px);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    
    .nav-logo {
      transition: all 0.3s ease;
    }
    
    .nav-link {
      position: relative;
    }
    
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: #0066CC;
      transition: width 0.3s ease;
    }
    
    .nav-link:hover::after {
      width: 100%;
    }
  `,document.head.appendChild(y);const b=()=>{const t=window.pageYOffset,e=document.querySelector("nav"),p=e.querySelector(".navbar-transparent"),s=e.querySelector(".nav-logo");t>100?(p.classList.add("navbar-scrolled"),s.style.height="40px",e.style.padding="0"):(p.classList.remove("navbar-scrolled"),s.style.height="60px",e.style.padding="0")};return window.addEventListener("scroll",b,{passive:!0}),setTimeout(()=>{const t=document.getElementById("menu-toggle"),e=document.getElementById("mobile-menu");t&&e&&t.addEventListener("click",()=>{e.classList.toggle("hidden")})},0),setTimeout(()=>{const t=document.getElementById("navbar-links"),e=document.createElement("button");e.id="lang-toggle",e.className="ml-4 px-4 py-2 rounded bg-blue-900 text-white text-sm font-bold hover:bg-blue-700 transition-colors";function p(){const i=localStorage.getItem("lang")||"en";e.textContent=i==="ar"?"EN":"AR"}p(),e.onclick=()=>{const a=(localStorage.getItem("lang")||"en")==="en"?"ar":"en";localStorage.setItem("lang",a),p(),window.dispatchEvent(new CustomEvent("languageChange"))},t?t.appendChild(e):o.appendChild(e);const s=document.querySelector("#mobile-menu .container");if(s){const i=e.cloneNode(!0);i.onclick=e.onclick,s.appendChild(i)}},0),o}function A(){const o=document.createElement("section");o.id="hero",o.className="relative min-h-screen flex items-start justify-center pt-20";const g=document.createElement("style");g.textContent=`
    .iso-badge {
      width: 130px;
      height: 55px;
      border: 1px solid rgba(0, 102, 204, 0.3);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 400;
      font-size: 1rem;
      white-space: pre-line;
      text-align: center;
      transition: all 0.3s ease;
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .iso-badge:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
      background: rgba(255, 255, 255, 0.25);
    }

    .iso-badges-container {
      display: flex;
      flex-direction: row;
      gap: 0.75rem;
      margin-top: 2rem;
      padding: 10px;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
    }

    @media (max-width: 768px) {
      .iso-badges-container {
        flex-direction: row;
        justify-content: center;
        width: 100%;
      }
    }
  `,document.head.appendChild(g),o.innerHTML=`
    <div class="absolute inset-0 bg-cover bg-center z-0 hero-bg" style="background-image: url('images/{hero,products,services,clients}/Landingpage bg.jpg'); background-size: 110%;">
    </div>
    
    <div class="container mx-auto pl-0 z-10 mt-24">
      <div class="flex flex-col items-start justify-center h-full max-w-3xl pl-4 md:pl-8">
        <img 
          src="images/{hero,products,services,clients}/logo.png" 
          alt="AAMCO Logo" 
          class="w-auto max-w-md mb-6 fade-in -ml-4 md:-ml-8"
          style="height: 200px; filter: brightness(0) saturate(100%) invert(23%) sepia(90%) saturate(2299%) hue-rotate(201deg) brightness(95%) contrast(106%);"
        />
        <p class="text-xl mb-50 text-center fade-in delay-200 -mt-20 ml-96" style="color: #0066CC; margin-left: 8rem;">Piping Perfection, Flowing Solutions</p>
        
        <div class="iso-badges-container fade-in delay-400 mr-12">
          <div class="iso-badge" style="color: #0066CC;">ISO-9001:2015</div>
          <div class="iso-badge" style="color: #0066CC;">ISO-45001:2018</div>
          <div class="iso-badge" style="color: #0066CC;">ISO-14001:2015</div>
        </div>

        <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 fade-in delay-300 mt-8 mr-12">
          <a href="#contact" class="btn-primary px-6 py-3 rounded-md text-center" style="background-color: #0066CC; color: white;">
            Get a Quote
          </a>
          <a href="./files/brochure.pdf" download class="btn-outline px-6 py-3 rounded-md text-center" style="border: 2px solid #0066CC; color: #0066CC;">
            Download Brochure
          </a>
        </div>
      </div>
    </div>
  `;function y(){const b=document.documentElement.getAttribute("dir")==="rtl",t=document.getElementById("hero");if(!t)return;const e=t.querySelector(".hero-bg");e&&(e.style.backgroundImage=b?"url('images/{hero,products,services,clients}/ARLandingpage bg.jpg')":"url('images/{hero,products,services,clients}/Landingpage bg.jpg')")}return setTimeout(y,100),window.addEventListener("languageChange",()=>setTimeout(y,100)),o}function j(){const o=document.createElement("section");o.id="products",o.className="py-16 relative";const g=document.createElement("style");g.textContent=`
    #products {
      position: relative;
      overflow: hidden;
      z-index: 1;
    }
    
    .products-bg-top,
    .products-bg-bottom {
      position: absolute;
      left: 0;
      right: 0;
      height: 60%;
      background-size: 110% auto;
      background-repeat: no-repeat;
      will-change: transform;
      transition: transform 0.1s linear;
    }
    
    .products-bg-top {
      top: 0;
      background-image: linear-gradient(to bottom,
          rgba(255,255,255,0) 0%,
          rgba(255,255,255,0.5) 2%,
          rgba(255,255,255,0) 5%
        ),
        url('images/{hero,products,services,clients}/Product bg.jpg');
      background-position: center top;
      z-index: -2;
    }
    
    .products-bg-bottom {
      bottom: 0;
      background-image: url('images/{hero,products,services,clients}/product1.jpg');
      background-position: center bottom;
      z-index: -1;
    }

    .products-bg-middle {
      position: absolute;
      left: 0;
      right: 0;
      top: 33%;
      height: 34%;
      background-image: url('images/{hero,products,services,clients}/product bg2.jpg');
      background-size: 110% auto;
      background-repeat: no-repeat;
      background-position: center;
      z-index: -1;
      transition: opacity 0.3s, display 0.3s;
    }
  `,document.head.appendChild(g);const y=document.createElement("style");y.textContent=`
    .rtl-flip {
      transform: scaleX(-1);
    }
    .rtl-flip > * {
      transform: scaleX(-1);
    }
  `,document.head.appendChild(y),o.innerHTML=`
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-12 text-center text-blue-900">Our Products</h2>
      
      <div class="flex flex-col md:flex-row">
        <!-- Product Categories Sidebar -->
        <div class="w-full md:w-1/4 mb-6 md:mb-0">
          <div class="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg shadow-md p-4">
            <div class="product-categories">
              <!-- All Products -->
              <div class="product-category mb-4">
                <div class="product-category-header cursor-pointer flex justify-between items-center p-4 bg-blue-50 rounded-md transition-all duration-300 hover:bg-blue-100 focus:bg-blue-200 focus:outline-none" data-category="all" tabindex="0" aria-expanded="false" aria-controls="all-products">
                  <h3 class="font-medium">All Products</h3>
                </div>
              </div>
              <!-- HDPE Products -->
              <div class="product-category mb-4">
                <div class="product-category-header cursor-pointer flex justify-between items-center p-4 bg-gray-50 rounded-md transition-all duration-300 hover:bg-blue-50 focus:bg-blue-100 focus:outline-none" data-category="hdpe" tabindex="0" aria-expanded="false" aria-controls="hdpe-products">
                  <h3 class="font-medium">HDPE Products
                  <span class="category-toggle transition-transform duration-300">
                    <svg class="chevron w-5 h-5 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                  </span>
                </div>
                <div class="product-items hidden transition-all duration-300 ease-in-out opacity-0 max-h-0 overflow-hidden" id="hdpe-products" style="margin-left: 1.5rem;">
                  <div class="product-item py-2 px-4 cursor-pointer hover:bg-blue-100 rounded transition-colors" data-product="hdpe-fittings">Fittings</div>
                  <div class="product-item py-2 px-4 cursor-pointer hover:bg-blue-100 rounded transition-colors" data-product="hdpe-bends">Bends</div>
                  <div class="product-item py-2 px-4 cursor-pointer hover:bg-blue-100 rounded transition-colors" data-product="hdpe-tees">Tees</div>
                </div>
              </div>
              
              <!-- Metal Products -->
              <div class="product-category mb-4">
                <div class="product-category-header cursor-pointer flex justify-between items-center p-4 bg-gray-50 rounded-md transition-all duration-300 hover:bg-blue-50 focus:bg-blue-100 focus:outline-none" data-category="metal" tabindex="0" aria-expanded="false" aria-controls="metal-products">
                  <h3 class="font-medium">Metal Products
                  <span class="category-toggle transition-transform duration-300">
                    <svg class="chevron w-5 h-5 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                  </span>
                </div>
                <div class="product-items hidden transition-all duration-300 ease-in-out opacity-0 max-h-0 overflow-hidden" id="metal-products" style="margin-left: 1.5rem;">
                  <div class="product-item py-2 px-4 cursor-pointer hover:bg-blue-100 rounded transition-colors" data-product="metal-flanges">Flanges</div>
                  <div class="product-item py-2 px-4 cursor-pointer hover:bg-blue-100 rounded transition-colors" data-product="metal-fittings">Fittings</div>
                </div>
              </div>
              
              <!-- PVC Products -->
              <div class="product-category mb-4">
                <div class="product-category-header cursor-pointer flex justify-between items-center p-4 bg-gray-50 rounded-md transition-all duration-300 hover:bg-blue-50 focus:bg-blue-100 focus:outline-none" data-category="upvc" tabindex="0" aria-expanded="false" aria-controls="upvc-products">
                  <h3 class="font-medium">PVC Products
                  <span class="category-toggle transition-transform duration-300">
                    <svg class="chevron w-5 h-5 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                  </span>
                </div>
                <div class="product-items hidden transition-all duration-300 ease-in-out opacity-0 max-h-0 overflow-hidden" id="upvc-products" style="margin-left: 1.5rem;">
                  <div class="product-item py-2 px-4 cursor-pointer hover:bg-blue-100 rounded transition-colors" data-product="upvc-belle-end">Belle end</div>
                  <div class="product-item py-2 px-4 cursor-pointer hover:bg-blue-100 rounded transition-colors" data-product="upvc-coupler">Coupler</div>
                  <div class="product-item py-2 px-4 cursor-pointer hover:bg-blue-100 rounded transition-colors" data-product="upvc-pipes">pipes</div>
                  <div class="product-item py-2 px-4 cursor-pointer hover:bg-blue-100 rounded transition-colors" data-product="upvc-puddle-flange">puddle flange</div>
                  <div class="product-item py-2 px-4 cursor-pointer hover:bg-blue-100 rounded transition-colors" data-product="upvc-wye-branch">Wye branch</div>
                  <div class="product-item py-2 px-4 cursor-pointer hover:bg-blue-100 rounded transition-colors" data-product="upvc-l-bend">L bend</div>
                  <div class="product-item py-2 px-4 cursor-pointer hover:bg-blue-100 rounded transition-colors" data-product="upvc-grease-trap">Grease trap</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Product Details & Contact Form -->
        <div class="w-full md:w-3/4 md:pl-6">
          <!-- Products Grid View (Initial View) -->
          <div id="products-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Product grid items will be populated here -->
          </div>
          
          <!-- Product Detail View (Hidden Initially) -->
          <div id="product-detail-view" class="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hidden">
            <div class="flex flex-col md:flex-row">
              <!-- Product Details -->
              <div class="w-full md:w-1/2 mb-6 md:mb-0 md:pr-6" id="product-details">
                <!-- Product details will be populated here -->
              </div>
              
              <!-- Contact Form -->
              <div class="w-full md:w-1/2 p-8 bg-white">
                <h3 class="text-2xl font-semibold mb-6 text-blue-900">Request a Quote</h3>
                <form id="product-quote-form" class="space-y-6">
                  <div class="form-group">
                    <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                    <input type="text" id="name" name="name" class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" required>
                  </div>
                  
                  <div class="form-group">
                    <label for="company" class="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
                    <input type="text" id="company" name="company" class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" required>
                  </div>
                  
                  <div class="form-group">
                    <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Company Email *</label>
                    <input type="email" id="email" name="email" class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" required>
                  </div>
                  
                  <div class="form-group">
                    <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Contact Number *</label>
                    <input type="tel" id="phone" name="phone" class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" required>
                  </div>
                  
                  <div class="form-group">
                    <label for="product-interest" class="block text-sm font-medium text-gray-700 mb-1">Product of Interest</label>
                    <input type="text" id="product-interest" name="product-interest" class="w-full px-4 py-3 border border-gray-300 rounded-md bg-gray-100" readonly>
                  </div>
                  
                  <div class="form-group">
                    <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea id="message" name="message" rows="3" class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"></textarea>
                  </div>
                  
                  <div class="form-group">
                    <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="privacy-policy" name="privacy-policy" type="checkbox" class="h-4 w-4 text-blue-900 border-gray-300 rounded focus:ring-blue-500" required>
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="privacy-policy" class="font-medium text-gray-700">I agree to the Privacy Policy *</label>
                      </div>
                    </div>
                  </div>
                  
                  <button type="submit" class="w-full bg-blue-900 text-white px-6 py-4 rounded-md hover:bg-blue-800 transition-colors duration-300 flex items-center justify-center">
                    <span>Submit</span>
                    <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                  
                  <button type="button" id="back-to-products" class="w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors duration-300">
                    Back to Products
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,setTimeout(()=>{const s=document.createElement("div");s.className="products-bg-top";const i=document.createElement("div");i.className="products-bg-middle",i.style.display="none";const a=document.createElement("div");a.className="products-bg-bottom",o.insertBefore(a,o.firstChild),o.insertBefore(i,o.firstChild),o.insertBefore(s,o.firstChild);const d=()=>{const r=document.getElementById("products");if(r){const m=r.getBoundingClientRect(),w=window.innerHeight,x=1-(m.top+m.height)/(w+m.height);if(m.top<w&&m.bottom>0){const k=r.querySelector(".products-bg-top"),c=r.querySelector(".products-bg-middle"),l=r.querySelector(".products-bg-bottom");if(k&&l){const u=x*100;k.style.transform=`translateY(${u*.3}px)`,c&&(c.style.transform=`translateY(${u*.4}px)`),l.style.transform=`translateY(${-u*.5}px)`}}}};window.addEventListener("scroll",d,{passive:!0}),d()},0);const b={"hdpe-fittings":{name:"HDPE Fittings",images:["images/{hero,products,services,clients}/products/hdpe producta/fittings/hdpe0.jpg","images/{hero,products,services,clients}/products/hdpe producta/fittings/hdpe1.jpg","images/{hero,products,services,clients}/products/hdpe producta/fittings/hdpe2.jpg"],description:"Premium polyethylene fittings for various applications. Durable and chemical resistant."},"hdpe-bends":{name:"HDPE Bends",images:["images/{hero,products,services,clients}/products/hdpe producta/bends/hdpe0.jpg","images/{hero,products,services,clients}/products/hdpe producta/bends/hdpe1.jpg","images/{hero,products,services,clients}/products/hdpe producta/bends/hdpe2.jpg"],description:"Custom HDPE bends manufactured to precise specifications. Available in various angles and radii."},"hdpe-tees":{name:"HDPE Tees",images:["images/{hero,products,services,clients}/products/hdpe producta/tees/hdpe0.jpg","images/{hero,products,services,clients}/products/hdpe producta/tees/hdpe1.jpg","images/{hero,products,services,clients}/products/hdpe producta/tees/hdpe2.jpg"],description:"High-quality HDPE tee fittings for efficient flow distribution. Suitable for various industrial applications."},"metal-flanges":{name:"Metal Flanges",images:["images/{hero,products,services,clients}/products/metal products/flanges/metal0.jpg","images/{hero,products,services,clients}/products/metal products/flanges/metal1.jpg","images/{hero,products,services,clients}/products/metal products/flanges/metal2.jpg"],description:"Precision-engineered metal flanges for industrial applications. Available in various materials and specifications."},"metal-fittings":{name:"Metal Fittings",images:["images/{hero,products,services,clients}/products/metal products/fittings/metal0.jpg","images/{hero,products,services,clients}/products/metal products/fittings/metal1.jpg","images/{hero,products,services,clients}/products/metal products/fittings/metal2.jpg"],description:"Custom metal fittings for specialized industrial applications. Made from high-grade materials for durability."},"upvc-belle-end":{name:"Belle End",images:["images/{hero,products,services,clients}/products/upvc products/belle end/belle end.png","images/{hero,products,services,clients}/products/upvc products/belle end/belle end1.Jpg"],description:"High-quality uPVC Belle end for secure pipe connections."},"upvc-coupler":{name:"Coupler",images:["images/{hero,products,services,clients}/products/upvc products/COUPLER/coupler1.jpg","images/{hero,products,services,clients}/products/upvc products/COUPLER/coupler2.png"],description:"Durable uPVC Coupler for joining pipes."},"upvc-bend-45":{name:"Fabricated Bend 45-degree",images:["images/{hero,products,services,clients}/products/upvc products/Fabricated bend 45 deg/bend45.jpg"],description:"Precision-engineered uPVC fabricated bend 45-degree for directional changes."},"upvc-bend-90":{name:"Fabricated Bend 90-degree",images:["images/{hero,products,services,clients}/products/upvc products/Fabricated bend 90deg/bend90.jpg","images/{hero,products,services,clients}/products/upvc products/Fabricated bend 90deg/bend901.jpg","images/{hero,products,services,clients}/products/upvc products/Fabricated bend 90deg/bend902.jpg","images/{hero,products,services,clients}/products/upvc products/Fabricated bend 90deg/bend903.jpg","images/{hero,products,services,clients}/products/upvc products/Fabricated bend 90deg/bend904.jpg","images/{hero,products,services,clients}/products/upvc products/Fabricated bend 90deg/bend905.jpg","images/{hero,products,services,clients}/products/upvc products/Fabricated bend 90deg/bend906.jpg"],description:"Precision-engineered uPVC fabricated bend 90-degree for right-angle turns."},"upvc-l-bend":{name:"L bend",images:{"fabricated bend 45-degree":["images/{hero,products,services,clients}/products/upvc products/L bend 45deg/Lbend45.jpg"],"fabricated bend 90-degree":["images/{hero,products,services,clients}/products/upvc products/Fabricated bend 90deg/bend90.jpg"],"L bend 45-degree":["images/{hero,products,services,clients}/products/upvc products/L bend 45deg/Lbend451.jpg"],"L bend 90-degree":["images/{hero,products,services,clients}/products/upvc products/L Bend 90deg/Lbend90.webp"],default:["images/{hero,products,services,clients}/products/upvc products/L bend/lbend.jpg"]},description:"uPVC L bend for custom directional changes in piping."},"upvc-pipes":{name:"uPVC Pipes",images:["images/{hero,products,services,clients}/products/upvc products/pipe/pipe.jpg","images/{hero,products,services,clients}/products/upvc products/pipe/pipe1.webp","images/{hero,products,services,clients}/products/upvc products/pipe/pipe2.webp","images/{hero,products,services,clients}/products/upvc products/pipe/pipe3.webp"],description:"High-quality uPVC pipes for various applications. Available in different sizes and pressure ratings."},"upvc-puddle-flange":{name:"Puddle Flange",images:["images/{hero,products,services,clients}/products/upvc products/puddle flange/Puddle-Collar-3.png"],description:"uPVC puddle flange for watertight pipe penetrations."},"upvc-wye-branch":{name:"Wye Branch",images:["images/{hero,products,services,clients}/products/upvc products/Wye Branch/wye0.jpg","images/{hero,products,services,clients}/products/upvc products/Wye Branch/wye1.jpg","images/{hero,products,services,clients}/products/upvc products/Wye Branch/wye2.jpg","images/{hero,products,services,clients}/products/upvc products/Wye Branch/wye3.jpg"],description:"uPVC Wye branch for efficient pipe branching."},"upvc-grease-trap":{name:"Grease trap",images:["images/{hero,products,services,clients}/products/upvc products/grease trap/greasetrap1.jpg","images/{hero,products,services,clients}/products/upvc products/grease trap/greasetrap2.jpg"],description:"uPVC Grease trap for effective separation and removal of grease and oils from wastewater."}};let t="";setTimeout(()=>{const s=document.getElementById("product-quote-form");s&&(t=s.innerHTML)},0),setTimeout(()=>{const s=document.getElementById("products-grid"),i=document.getElementById("product-detail-view");s&&(Object.entries(b).forEach(([c,l])=>{const u=document.createElement("div");u.className="product-card bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1",u.setAttribute("data-product",c),u.innerHTML=`
          <div class="relative h-48 product-image-carousel" data-product-id="${c}">
            <img src="${l.images[0]}" alt="${l.name}" class="w-full h-full object-contain product-image-slide" style="max-height: 180px; background: #f8fafc;">
            ${l.images.length>1?`
              <button class="carousel-arrow left-2 absolute top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-1 z-10" data-dir="prev">&#8592;</button>
              <button class="carousel-arrow right-2 absolute top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-1 z-10" data-dir="next">&#8594;</button>
            `:""}
          </div>
          <div class="p-4">
            <h3 class="text-lg font-semibold mb-2 text-blue-900">${l.name}</h3>
            <p class="text-gray-600 text-sm line-clamp-2">${l.description}</p>
            <button class="mt-3 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600 transition-colors view-product-btn">View Details</button>
          </div>
        `,s.appendChild(u),e()}),document.querySelectorAll(".view-product-btn").forEach(c=>{c.addEventListener("click",l=>{l.stopPropagation();const n=l.target.closest(".product-card").getAttribute("data-product");r(n)})}),document.querySelectorAll(".product-card").forEach(c=>{c.addEventListener("click",l=>{const u=c.getAttribute("data-product");r(u)})}));const a=document.querySelectorAll(".product-category-header");a&&a.forEach(c=>{c.addEventListener("click",()=>{const l=c.getAttribute("data-category"),u=document.getElementById(`${l}-products`),n=c.querySelector(".category-toggle .chevron");document.querySelectorAll(".product-items").forEach(v=>{if(v!==u&&!v.classList.contains("hidden")){v.classList.add("hidden"),v.classList.remove("opacity-100","max-h-96"),v.classList.add("opacity-0","max-h-0");const f=v.parentElement.querySelector(".product-category-header");if(f){f.classList.remove("active","border-l-4","border-blue-700"),f.setAttribute("aria-expanded","false");const h=f.querySelector(".chevron");h&&(h.style.transform="")}}}),u.classList.contains("hidden")?(u.classList.remove("hidden","opacity-0","max-h-0"),u.classList.add("opacity-100","max-h-96"),c.classList.add("active","border-l-4","border-blue-700"),c.setAttribute("aria-expanded","true"),n&&(n.style.transform="rotate(180deg)")):(u.classList.add("opacity-0","max-h-0"),u.classList.remove("opacity-100","max-h-96"),setTimeout(()=>u.classList.add("hidden"),300),c.classList.remove("active","border-l-4","border-blue-700"),c.setAttribute("aria-expanded","false"),n&&(n.style.transform="")),l!=="all"&&(s.classList.remove("hidden"),i.classList.add("hidden"),s.innerHTML="",Object.entries(b).forEach(([v,f])=>{if(v.startsWith(l+"-")){const h=document.createElement("div");h.className="product-card bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1",h.setAttribute("data-product",v),h.innerHTML=`
                  <div class="relative h-48 product-image-carousel" data-product-id="${v}">
                    <img src="${f.images[0]}" alt="${f.name}" class="w-full h-full object-contain product-image-slide" style="max-height: 180px; background: #f8fafc;">
                    ${f.images.length>1?`
                      <button class="carousel-arrow left-2 absolute top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-1 z-10" data-dir="prev">&#8592;</button>
                      <button class="carousel-arrow right-2 absolute top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-1 z-10" data-dir="next">&#8594;</button>
                    `:""}
                  </div>
                  <div class="p-4">
                    <h3 class="text-lg font-semibold mb-2 text-blue-900">${f.name}</h3>
                    <p class="text-gray-600 text-sm line-clamp-2">${f.description}</p>
                    <button class="mt-3 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600 transition-colors view-product-btn">View Details</button>
                  </div>
                `,s.appendChild(h)}}),document.querySelectorAll(".view-product-btn").forEach(v=>{v.addEventListener("click",f=>{f.stopPropagation();const C=f.target.closest(".product-card").getAttribute("data-product");r(C)})}),document.querySelectorAll(".product-card").forEach(v=>{v.addEventListener("click",f=>{const h=v.getAttribute("data-product");r(h)})}),e())}),c.addEventListener("keydown",l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),c.click())})});const d=document.querySelectorAll(".product-item");d&&d.forEach(c=>{c.addEventListener("click",()=>{const l=c.getAttribute("data-product");r(l)})});function r(c){const l=b[c];if(l){s.classList.add("hidden"),i.classList.remove("hidden");const u=document.getElementById("product-details");let n=[];if(c==="upvc-l-bend"){const h=document.getElementById("l-bend-type");let C=h?h.value:"default",E=l.images[C]||l.images.default;n=Array.isArray(E)?E:[E]}else n=Array.isArray(l.images)?l.images:[];let v="";n.length>1&&(v=`
            <button class="carousel-arrow left-2 absolute top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-1 z-10" data-dir="prev">&#8592;</button>
            <button class="carousel-arrow right-2 absolute top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-1 z-10" data-dir="next">&#8594;</button>
          `),u.innerHTML=`
          <div class="p-8">
            <div class="flex items-start mb-4">
              <a href="#" id="back-to-grid" class="inline-flex items-center text-blue-700 mb-4 hover:underline">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                Back to Products
              </a>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-blue-700">${l.name}</h3>
            <div class="mb-6 rounded-lg overflow-hidden shadow-md relative product-image-carousel" data-product-id="${c}">
              <img id="l-bend-image" src="${n[0]}" alt="${l.name}" class="w-full h-auto product-image-slide">
              ${v}
            </div>
            <div class="mb-4">
              <h4 class="font-semibold mb-2">Description</h4>
              <p class="text-gray-700">${l.description}</p>
            </div>
            <div class="mb-4">
              <h4 class="font-semibold mb-2">Features</h4>
              <ul class="list-disc pl-5 text-gray-700">
                <li>High durability</li>
                <li>Corrosion resistance</li>
                <li>Custom manufacturing available</li>
                <li>Meets international standards</li>
              </ul>
            </div>
          </div>
        `;const f=document.getElementById("product-quote-form");if((c==="upvc-belle-end"||c==="upvc-coupler")&&f){f.innerHTML=t;const h=f.querySelector(".form-group");h&&h.insertAdjacentHTML("beforebegin",`
              <div class="flex flex-col md:flex-row gap-4 mb-4">
                <div class="form-group w-full md:w-1/4">
                  <label for="belle-coupler-size" class="block text-sm font-medium text-gray-700 mb-1">Size</label>
                  <select id="belle-coupler-size" name="belle-coupler-size" class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" required>
                    <option value="3/4"">3/4"</option>
                    <option value="1"">1"</option>
                    <option value="1-1/2"">1-1/2"</option>
                    <option value="2"">2"</option>
                    <option value="2-1/2"">2-1/2"</option>
                    <option value="3"">3"</option>
                    <option value="4"">4"</option>
                    <option value="6"">6"</option>
                    <option value="8"">8"</option>
                  </select>
                </div>
                <div class="form-group w-full md:w-2/5">
                  <label for="belle-coupler-standard" class="block text-sm font-medium text-gray-700 mb-1">Standard</label>
                  <select id="belle-coupler-standard" name="belle-coupler-standard" class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" required>
                    <option value="TC8 DB120">TC8 DB120</option>
                    <option value="TC8 EB35">TC8 EB35</option>
                    <option value="TC2 EPC40">TC2 EPC40</option>
                    <option value="TC2 EPC80">TC2 EPC80</option>
                  </select>
                </div>
                <div class="form-group w-full md:w-1/4">
                  <label for="belle-coupler-length" class="block text-sm font-medium text-gray-700 mb-1">Length</label>
                  <select id="belle-coupler-length" name="belle-coupler-length" class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" required>
                    <option value="150mm">150mm</option>
                    <option value="200mm">200mm</option>
                    <option value="250mm">250mm</option>
                    <option value="300mm">300mm</option>
                    <option value="350mm">350mm</option>
                    <option value="400mm">400mm</option>
                  </select>
                </div>
              </div>
            `);const C=document.getElementById("product-interest");C&&(C.value=l.name);const E=document.getElementById("back-to-products");E&&E.addEventListener("click",()=>{m()})}else if(f){f.innerHTML=t;const h=document.getElementById("product-interest");h&&(h.value=l.name);const C=document.getElementById("back-to-products");C&&C.addEventListener("click",()=>{m()})}if(c!=="upvc-l-bend"&&e(),n.length>1){let h=0;const C=document.getElementById("l-bend-image"),E=u.querySelector('.carousel-arrow[data-dir="prev"]'),S=u.querySelector('.carousel-arrow[data-dir="next"]');E&&E.addEventListener("click",L=>{L.stopPropagation(),h=(h-1+n.length)%n.length,C.src=n[h]}),S&&S.addEventListener("click",L=>{L.stopPropagation(),h=(h+1)%n.length,C.src=n[h]})}}}function m(){s.classList.remove("hidden"),i.classList.add("hidden")}const w=document.getElementById("product-quote-form");w&&w.addEventListener("submit",function(c){c.preventDefault();const l=new FormData(w),u={};l.forEach((v,f)=>{u[f]=v}),console.log("Product Quote Form Submission:",u);const n=document.createElement("div");n.className="fixed bottom-5 right-5 bg-green-600 text-white p-4 rounded-lg shadow-lg z-50 flex items-center",n.innerHTML=`
          <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <div>
            <h4 class="font-bold">Success!</h4>
            <p>Thank you for your inquiry. We will get back to you shortly.</p>
          </div>
        `,document.body.appendChild(n),setTimeout(()=>{n.classList.add("opacity-0"),setTimeout(()=>{n.remove()},300)},5e3),w.reset(),m()});const x=document.querySelector(".product-category-header");x&&setTimeout(()=>{x.click()},500);const k=document.querySelector('.product-category-header[data-category="all"]');k&&k.addEventListener("click",()=>{document.querySelectorAll(".product-items").forEach(n=>{n.classList.add("hidden"),n.classList.remove("opacity-100","max-h-96"),n.classList.add("opacity-0","max-h-0")}),document.querySelectorAll(".product-category-header").forEach(n=>{n.classList.remove("active","border-l-4","border-blue-700"),n.setAttribute("aria-expanded","false");const v=n.querySelector(".chevron");v&&(v.style.transform="")}),k.classList.add("active","border-l-4","border-blue-700");const c=document.getElementById("products-grid"),l=document.getElementById("product-detail-view");c&&l&&(c.classList.remove("hidden"),l.classList.add("hidden"),c.innerHTML="",Object.entries(b).forEach(([n,v])=>{const f=document.createElement("div");f.className="product-card bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1",f.setAttribute("data-product",n),f.innerHTML=`
              <div class="relative h-48 product-image-carousel" data-product-id="${n}">
                <img src="${v.images[0]}" alt="${v.name}" class="w-full h-full object-contain product-image-slide" style="max-height: 180px; background: #f8fafc;">
                ${v.images.length>1?`
                  <button class="carousel-arrow left-2 absolute top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-1 z-10" data-dir="prev">&#8592;</button>
                  <button class="carousel-arrow right-2 absolute top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-1 z-10" data-dir="next">&#8594;</button>
                `:""}
              </div>
              <div class="p-4">
                <h3 class="text-lg font-semibold mb-2 text-blue-900">${v.name}</h3>
                <p class="text-gray-600 text-sm line-clamp-2">${v.description}</p>
                <button class="mt-3 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600 transition-colors view-product-btn">View Details</button>
              </div>
            `,c.appendChild(f)}),document.querySelectorAll(".view-product-btn").forEach(n=>{n.addEventListener("click",v=>{v.stopPropagation();const h=v.target.closest(".product-card").getAttribute("data-product");r(h)})}),document.querySelectorAll(".product-card").forEach(n=>{n.addEventListener("click",v=>{const f=n.getAttribute("data-product");r(f)})})),e();const u=document.getElementById("products");if(u){const n=u.querySelector(".products-bg-middle");n&&(n.style.display="")}}),a.forEach(c=>{c.addEventListener("click",()=>{if(c.getAttribute("data-category")!=="all"){const u=document.getElementById("products");if(u){const n=u.querySelector(".products-bg-middle");n&&(n.style.display="none")}}})})},0);function e(){document.querySelectorAll(".product-image-carousel").forEach(s=>{const i=s.getAttribute("data-product-id"),a=b[i];if(!a||!a.images||a.images.length<2)return;let d=0;const r=s.querySelector(".product-image-slide"),m=s.querySelector('.carousel-arrow[data-dir="prev"]'),w=s.querySelector('.carousel-arrow[data-dir="next"]');m&&m.addEventListener("click",x=>{x.stopPropagation(),d=(d-1+a.images.length)%a.images.length,r.src=a.images[d]}),w&&w.addEventListener("click",x=>{x.stopPropagation(),d=(d+1)%a.images.length,r.src=a.images[d]})})}function p(){const s=document.documentElement.getAttribute("dir")==="rtl",i=document.getElementById("products");if(!i)return;const a=i.querySelector(".products-bg-top"),d=i.querySelector(".products-bg-middle"),r=i.querySelector(".products-bg-bottom");a&&(a.style.backgroundImage=s?"linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 2%, rgba(255,255,255,0) 5%), url('images/{hero,products,services,clients}/ARProduct bg.jpg')":"linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 2%, rgba(255,255,255,0) 5%), url('images/{hero,products,services,clients}/Product bg.jpg')"),d&&(d.style.backgroundImage=s?"url('images/{hero,products,services,clients}/ARproduct bg2.jpg')":"url('images/{hero,products,services,clients}/product bg2.jpg')"),r&&(r.style.backgroundImage=s?"url('images/{hero,products,services,clients}/ARproduct1.jpg')":"url('images/{hero,products,services,clients}/product1.jpg')")}return setTimeout(p,100),window.addEventListener("languageChange",()=>setTimeout(p,100)),o}function P(){return localStorage.getItem("lang")||"en"}window.addEventListener("languageChange",()=>{const o=document.getElementById("products");o&&o.replaceWith(j());const g=P();document.documentElement.setAttribute("lang",g),document.documentElement.setAttribute("dir",g==="ar"?"rtl":"ltr")});function q(){const o=document.createElement("section");o.id="services",o.className="pt-0 pb-16 relative -mt-20";const g=document.createElement("style");g.textContent=`
    #services {
      background: transparent;
      position: relative;
      overflow: hidden;
      z-index: 1;
    }
    
    .services-bg-top,
    .services-bg-bottom,
    .services-bg-middle {
      position: absolute;
      left: 0;
      right: 0;
      background-size: cover;
      background-repeat: no-repeat;
      will-change: transform;
      transition: transform 0.1s linear;
    }
    
    .services-bg-top {
      top: 0;
      height: 50%;
      background-image: url('images/{hero,products,services,clients}/service bg.jpg');
      background-position: center top;
      z-index: -3;
    }
    
    .services-bg-bottom {
      bottom: 0;
      height: 50%;
      background-image: url('images/{hero,products,services,clients}/service bg1.jpg');
      background-position: center bottom;
      z-index: -1;
      background-repeat: no-repeat;
      background-size: cover;
    }
  `,document.head.appendChild(g);const y=document.createElement("style");y.textContent=`
    .rtl-flip {
      transform: scaleX(-1);
    }
  `,document.head.appendChild(y),o.innerHTML=`
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-12 text-center mt-8">Our Services</h2>
      
      <!-- Services Grid View -->
      <div id="services-grid" class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Post Fabrication Service -->
        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden" data-service="post-fabrication">
          <div class="relative h-48">
            <img src="images/{hero,products,services,clients}/services/GRP Fabrication Services.jpg" alt="Post Fabrication Service" class="w-full h-full object-cover">
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-3 text-blue-600">Post Fabrication Service</h3>
            <p class="text-gray-700">
              After the fabrication of any product, we offer a comprehensive range of post-fabrication services. This includes any kind of coating such as GRP/FRP coatings, as well as quality assurance and third-party inspections as required. Our team ensures that every product meets the highest standards before delivery.
            </p>
            <button class="inline-block mt-4 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600 transition-colors view-service-btn">See Details</button>
          </div>
        </div>
        <!-- Site Installation & Welding -->
        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden" data-service="site-installation-welding">
          <div class="relative h-48">
            <img src="images/{hero,products,services,clients}/services/HDPE Fabrication Services.jpg" alt="Site Installation & Welding" class="w-full h-full object-cover">
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-3 text-blue-600">Site Installation & Welding</h3>
            <p class="text-gray-700">
              We provide extended support for the installation of items at your required location. This includes all types of on-site welding and assembly. Our experienced technicians ensure that every installation is performed safely, efficiently, and in compliance with all relevant standards.
            </p>
            <button class="inline-block mt-4 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600 transition-colors view-service-btn">See Details</button>
          </div>
        </div>
        <!-- After Sales -->
        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden" data-service="after-sales">
          <div class="relative h-48">
            <img src="images/{hero,products,services,clients}/services/Metal Fabrication Services.jpg" alt="After Sales" class="w-full h-full object-cover">
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-3 text-blue-600">After Sales</h3>
            <p class="text-gray-700">
              AAMCO provides an enduring commitment to our clients with ongoing customer support. This commitment extends beyond the initial transaction and builds a lasting relationship. We cover any query, technical need, advice, training, or service issue encountered. Whenever you need further assistance, our qualified representatives are ready to help.
            </p>
            <button class="inline-block mt-4 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600 transition-colors view-service-btn">See Details</button>
          </div>
        </div>
        <!-- On Time Delivery & Assistance -->
        <div class="service-card bg-white rounded-lg shadow-md overflow-hidden" data-service="on-time-delivery-assistance">
          <div class="relative h-48">
            <img src="images/{hero,products,services,clients}/services/uPVC Fabrication Services.jpg" alt="On Time Delivery & Assistance" class="w-full h-full object-cover">
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-3 text-blue-600">On Time Delivery & Assistance</h3>
            <p class="text-gray-700">
              We understand the importance of timely delivery and reliable assistance. Our logistics and support teams work closely with clients to ensure products are delivered on schedule and any required assistance is provided promptly, minimizing downtime and maximizing satisfaction.
            </p>
            <button class="inline-block mt-4 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600 transition-colors view-service-btn">See Details</button>
          </div>
        </div>
      </div>
      
      <!-- Service Detail View with Description Only (Hidden initially) -->
      <div id="service-detail-view" class="bg-white rounded-lg shadow-lg overflow-hidden hidden">
        <div class="flex flex-col md:flex-row">
          <!-- Service Details -->
          <div class="w-full p-8" id="service-details">
            <!-- Service details will be populated here -->
          </div>
          <div class="w-full flex items-center justify-center p-8">
            <button type="button" id="back-to-services" class="bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-colors duration-300">Back to Services</button>
          </div>
        </div>
      </div>
    </div>
  `,setTimeout(()=>{const e=document.createElement("div");e.className="services-bg-top";const p=document.createElement("div");p.className="services-bg-bottom",o.insertBefore(p,o.firstChild),o.insertBefore(e,o.firstChild);const s=()=>{const i=document.getElementById("services");if(i){const a=i.getBoundingClientRect(),d=window.innerHeight,r=1-(a.top+a.height)/(d+a.height);if(a.top<d&&a.bottom>0){const m=i.querySelector(".services-bg-top"),w=i.querySelector(".services-bg-bottom");if(m&&w){const x=r*100;m.style.transform=`translateY(${x*.3}px)`,w.style.transform=`translateY(${-x*.5}px)`}}}};window.addEventListener("scroll",s,{passive:!0}),s()},0);const b={"post-fabrication":{name:"Post Fabrication Service",image:"images/{hero,products,services,clients}/services/GRP Fabrication Services.jpg",description:"After the fabrication of any product, we offer a comprehensive range of post-fabrication services. This includes any kind of coating such as GRP/FRP coatings, as well as quality assurance and third-party inspections as required. Our team ensures that every product meets the highest standards before delivery.",benefits:["Comprehensive range of post-fabrication services","Quality assurance and third-party inspections","Ensures highest standards before delivery","Expert team for efficient service delivery","Flexible and adaptable to various needs"]},"site-installation-welding":{name:"Site Installation & Welding",image:"images/{hero,products,services,clients}/services/HDPE Fabrication Services.jpg",description:"We provide extended support for the installation of items at your required location. This includes all types of on-site welding and assembly. Our experienced technicians ensure that every installation is performed safely, efficiently, and in compliance with all relevant standards.",benefits:["HDPE site works","Metal site installation","Safe and efficient on-site welding","Metal site installation services","Compliance with all relevant standards","Experienced technicians for quality assurance"]},"after-sales":{name:"After Sales",image:"images/{hero,products,services,clients}/services/Metal Fabrication Services.jpg",description:"AAMCO provides an enduring commitment to our clients with ongoing customer support. This commitment extends beyond the initial transaction and builds a lasting relationship. We cover any query, technical need, advice, training, or service issue encountered. Whenever you need further assistance, our qualified representatives are ready to help.",benefits:["Ongoing customer support","Builds lasting relationships","Covers a wide range of queries and needs","Qualified representatives for assistance","Ensures continuous service and satisfaction"]},"on-time-delivery-assistance":{name:"On Time Delivery & Assistance",image:"images/{hero,products,services,clients}/services/uPVC Fabrication Services.jpg",description:"We understand the importance of timely delivery and reliable assistance. Our logistics and support teams work closely with clients to ensure products are delivered on schedule and any required assistance is provided promptly, minimizing downtime and maximizing satisfaction.",benefits:["Timely delivery of products","Reliable assistance and support","Minimizes downtime","Maximizes satisfaction","Close collaboration with clients"]}};setTimeout(()=>{const e=document.getElementById("services-grid"),p=document.getElementById("service-detail-view");if(e&&p){let a=function(r){const m=b[r];if(m){e.classList.add("hidden"),p.classList.remove("hidden");const w=document.getElementById("service-details");w.innerHTML=`
            <div class="p-8">
              <div class="flex items-start mb-4">
                <a href="#" id="back-to-grid" class="inline-flex items-center text-blue-700 mb-4 hover:underline">
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                  </svg>
                  Back to Services
                </a>
              </div>
              <h3 class="text-2xl font-bold mb-4 text-blue-700">${m.name}</h3>
              <div class="mb-6 rounded-lg overflow-hidden shadow-md">
                <img src="${m.image}" alt="${m.name}" class="w-full h-auto">
              </div>
              <div class="mb-4">
                <h4 class="font-semibold mb-2">Description</h4>
                <p class="text-gray-700">${m.description}</p>
              </div>
              <div class="mb-4">
                <h4 class="font-semibold mb-2">Benefits</h4>
                <ul class="list-disc pl-5 text-gray-700">
                  ${m.benefits.map(k=>`<li>${k}</li>`).join("")}
                </ul>
              </div>
            </div>
          `;const x=document.getElementById("service-interest");x&&(x.value=m.name),document.getElementById("back-to-grid").addEventListener("click",k=>{k.preventDefault(),d()}),document.getElementById("back-to-services").addEventListener("click",()=>{d()})}},d=function(){e.classList.remove("hidden"),p.classList.add("hidden")};var s=a,i=d;document.querySelectorAll(".view-service-btn").forEach(r=>{r.addEventListener("click",m=>{m.stopPropagation();const x=m.target.closest(".service-card").getAttribute("data-service");a(x)})}),document.querySelectorAll(".service-card").forEach(r=>{r.addEventListener("click",()=>{const m=r.getAttribute("data-service");a(m)})})}},0);function t(){const e=document.documentElement.getAttribute("dir")==="rtl",p=document.getElementById("services");if(!p)return;const s=p.querySelector(".services-bg-top"),i=p.querySelector(".services-bg-bottom");s&&(s.style.backgroundImage=e?"url('images/{hero,products,services,clients}/ARservice bg.jpg')":"url('images/{hero,products,services,clients}/service bg.jpg')"),i&&(i.style.backgroundImage=e?"url('images/{hero,products,services,clients}/ARservice bg1.jpg')":"url('images/{hero,products,services,clients}/service bg1.jpg')")}return setTimeout(t,100),window.addEventListener("languageChange",()=>setTimeout(t,100)),o}function I(){const o=document.createElement("section");o.id="clients",o.className="py-32 flex flex-col justify-center relative";const g=document.createElement("style");g.textContent=`
    #clients {
      position: relative;
      overflow: hidden;
      margin-top: -3rem;
      padding-top: 3rem;
      min-height: 800px;
      background: none;
      z-index: 1;
    }

    .clients-bg {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 100%;
      background-image: linear-gradient(to bottom,
          rgba(255,255,255,0) 0%,
          rgba(255,255,255,0.8) 2%,
          rgba(255,255,255,0.7) 5%,
          rgba(255,255,255,0.6) 8%,
          rgba(255,255,255,0.5) 12%,
          rgba(255,255,255,0.4) 16%,
          rgba(255,255,255,0.3) 20%,
          rgba(255,255,255,0.2) 25%,
          rgba(255,255,255,0.1) 30%,
          rgba(255,255,255,0) 35%
        ),
        url('images/{hero,products,services,clients}/client bg.jpg');
      background-size: 110% auto;
      background-position: center top;
      background-repeat: no-repeat;
      will-change: transform;
      transition: transform 0.1s linear;
      z-index: -1;
    }
    
    .clients-carousel-container {
      background: rgba(255, 255, 255, 0.1) !important;
      position: relative;
      z-index: 2;
    }
    .overlay-left {
      background: linear-gradient(to right, rgba(255, 255, 255, 0.2), transparent) !important;
    }
    .overlay-right {
      background: linear-gradient(to left, rgba(255, 255, 255, 0.2), transparent) !important;
    }
    .client-logo {
      filter: none !important;
      -webkit-filter: none !important;
    }
    .client-logo-box {
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(5px);
      transition: transform 0.3s ease;
    }
    .client-logo-box:hover {
      transform: scale(1.05);
    }
  `,document.head.appendChild(g),o.innerHTML=`
    <div class="flex flex-col items-center justify-center">
      <div class="container mx-auto px-4 mb-16">
        <h2 class="text-4xl font-bold text-center text-gray-800">Our Clients</h2>
      </div>
      
      <div class="clients-carousel-container relative overflow-hidden w-full">
        <div class="overlay-left absolute left-0 top-0 w-32 h-full z-10 flex items-center">
          <div class="clients-carousel-arrow clients-carousel-arrow-left absolute left-4" id="clients-carousel-prev">
            <svg class="w-8 h-8 text-gray-600 cursor-pointer hover:text-gray-800 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </div>
        </div>
        
        <div class="overlay-right absolute right-0 top-0 w-32 h-full z-10 flex items-center justify-end">
          <div class="clients-carousel-arrow clients-carousel-arrow-right absolute right-4" id="clients-carousel-next">
            <svg class="w-8 h-8 text-gray-600 cursor-pointer hover:text-gray-800 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>
        
        <div id="clients-carousel" class="clients-track flex items-center gap-8 px-32">
          <!-- Client logos will be populated here via JavaScript -->
        </div>
      </div>
    </div>
  `;const y=["images/{hero,products,services,clients}/Clients/Petra.png","images/{hero,products,services,clients}/Clients/maaden.jpg","images/{hero,products,services,clients}/Clients/Tamimi.jpeg","images/{hero,products,services,clients}/Clients/Voltas.jpeg","images/{hero,products,services,clients}/Clients/alfanar.jpeg","images/{hero,products,services,clients}/Clients/Saipem1.jpeg","images/{hero,products,services,clients}/Clients/NESTO_LOGO.jpg","images/{hero,products,services,clients}/Clients/Shade-Logo1.png","images/{hero,products,services,clients}/Clients/Lulu Hypermarket.png","images/{hero,products,services,clients}/Clients/gas-arabian-services.png","images/{hero,products,services,clients}/Clients/Watania-Plastics.jpeg"];setTimeout(()=>{const t=document.createElement("div");t.className="clients-bg",o.insertBefore(t,o.firstChild);const e=()=>{const p=document.getElementById("clients");if(p){const s=p.getBoundingClientRect(),i=window.innerHeight,a=1-(s.top+s.height)/(i+s.height);if(s.top<i&&s.bottom>0){const d=p.querySelector(".clients-bg");if(d){const r=a*80;d.style.transform=`translateY(${r*.4}px)`}}}};window.addEventListener("scroll",e,{passive:!0}),e()},0),setTimeout(()=>{const t=document.getElementById("clients-carousel"),e=document.querySelector(".clients-carousel-container");if(t){let k=function(){x||(r-=w,r<-(m*y.length)&&(r=0),t.style.transform=`translateX(${r}px)`),requestAnimationFrame(k)};var p=k;(()=>{y.forEach((c,l)=>{const u=document.createElement("div");u.className="client-logo-container flex-shrink-0",u.innerHTML=`
            <div class="bg-white p-4 rounded-lg shadow-md border border-gray-200 client-logo-box w-64 h-64 flex items-center justify-center">
              <img src="${c}" alt="Client ${l+1}" class="client-logo max-w-full max-h-full object-contain transition-all duration-300" style="width: 100%; height: 100%; object-fit: contain;" loading="lazy">
            </div>
          `,t.appendChild(u)})})(),(()=>{Array.from(t.querySelectorAll(".client-logo-container")).slice(0,4).forEach(l=>{const u=l.cloneNode(!0);t.appendChild(u)})})();const a=document.getElementById("clients-carousel-prev"),d=document.getElementById("clients-carousel-next");let r=0;const m=288,w=1;let x=!1;a&&d&&(a.addEventListener("click",()=>{r+=m,r>0&&(r=-(m*(y.length-3))),t.style.transform=`translateX(${r}px)`}),d.addEventListener("click",()=>{r-=m,r<-(m*(y.length-3))&&(r=0),t.style.transform=`translateX(${r}px)`})),e.addEventListener("mouseenter",()=>{x=!0}),e.addEventListener("mouseleave",()=>{x=!1}),k()}},0);function b(){const t=document.documentElement.getAttribute("dir")==="rtl",e=document.getElementById("clients");if(!e)return;const p=e.querySelector(".clients-bg");p&&(p.style.backgroundImage=t?"url('images/{hero,products,services,clients}/ARclient bg.jpg')":"url('images/{hero,products,services,clients}/client bg.jpg')")}return setTimeout(b,100),window.addEventListener("languageChange",()=>setTimeout(b,100)),o}function T(){const o=document.createElement("section");o.id="contact",o.className="py-16 relative";const g=document.createElement("style");g.textContent=`
    #contact {
      position: relative;
      overflow: hidden;
      z-index: 1;
      background: none;
    }

    .contact-bg {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url('images/{hero,products,services,clients}/contact bg.jpg');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-attachment: fixed;
      will-change: transform;
      transition: transform 0.1s linear;
      z-index: -1;
    }

    .contact-content {
      position: relative;
      z-index: 2;
    }

    .contact-card {
      backdrop-filter: blur(10px);
      background: rgba(255, 255, 255, 0.95);
      border: 1px solid rgba(0, 102, 204, 0.1);
      box-shadow: 0 8px 32px rgba(0, 102, 204, 0.1);
    }

    .contact-info-icon {
      background: linear-gradient(135deg, #0066CC 0%, #004999 100%);
      transition: all 0.3s ease;
    }

    .contact-info-item:hover .contact-info-icon {
      transform: scale(1.1);
      box-shadow: 0 4px 12px rgba(0, 102, 204, 0.2);
    }

    .contact-form input,
    .contact-form textarea {
      transition: all 0.3s ease;
      border: 2px solid transparent;
      background: #f8fafc;
    }

    .contact-form input:hover,
    .contact-form textarea:hover {
      border-color: #0066CC;
      background: #ffffff;
    }

    .contact-form input:focus,
    .contact-form textarea:focus {
      border-color: #0066CC;
      background: #ffffff;
      box-shadow: 0 0 0 4px rgba(0, 102, 204, 0.1);
    }

    .social-icon {
      transition: all 0.3s ease;
    }

    .social-icon:hover {
      transform: translateY(-3px);
      box-shadow: 0 4px 12px rgba(0, 102, 204, 0.2);
    }

    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
    }

    .floating-element {
      animation: float 3s ease-in-out infinite;
    }
  `,document.head.appendChild(g),o.innerHTML=`
    <div class="contact-bg"></div>
    <div class="contact-content container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold mb-4 text-blue-900">Get in Touch</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">Have a question or need assistance? We're here to help. Reach out to us through any of the following channels or fill out the form below.</p>
      </div>
      
      <div class="flex flex-col lg:flex-row contact-card rounded-2xl overflow-hidden max-w-6xl mx-auto">
        <!-- Map and Contact Information -->
        <div class="w-full lg:w-1/2 flex flex-col">
          <div class="h-64 lg:h-96 w-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.3223357799386!2d50.208889!3d26.339444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e75f2fe272a9%3A0x76aa9af8bd7394df!2sIbn%20Sina%2C%20Al%20Khobar%2034627%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1621234567890!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy"
              class="rounded-t-2xl lg:rounded-tr-none">
            </iframe>
          </div>
          <div class="p-8 bg-gradient-to-br from-blue-900 to-blue-800 text-white flex-1 flex flex-col justify-between">
            <div>
              <h3 class="text-2xl font-semibold mb-8">Contact Information</h3>
              <div class="space-y-6">
                <div class="flex items-center contact-info-item">
                  <div class="contact-info-icon w-12 h-12 rounded-full flex items-center justify-center mr-5">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="text-blue-200 mb-1">Phone</p>
                    <a href="tel:+966 3456 7890" class="text-xl hover:text-blue-200 transition-colors">+966 3456 7890</a>
                  </div>
                </div>
                
                <div class="flex items-center contact-info-item">
                  <div class="contact-info-icon w-12 h-12 rounded-full flex items-center justify-center mr-5">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="text-blue-200 mb-1">Email</p>
                    <a href="mailto:info@aamcoksa.com" class="text-xl hover:text-blue-200 transition-colors">info@aamcoksa.com</a>
                  </div>
                </div>
                
                <div class="flex items-center contact-info-item">
                  <div class="contact-info-icon w-12 h-12 rounded-full flex items-center justify-center mr-5">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="text-blue-200 mb-1">Location</p>
                    <p class="text-xl">شارع 5, Ibn Sina, Al Khobar 34627, Saudi Arabia</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="mt-12">
              <h4 class="text-xl mb-6">Connect With Us</h4>
              <div class="flex space-x-4">
                <a href="#" class="social-icon w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-white hover:text-blue-900 transition-colors duration-300">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                  </svg>
                </a>
                <a href="#" class="social-icon w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-white hover:text-blue-900 transition-colors duration-300">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                  </svg>
                </a>
                <a href="#" class="social-icon w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-white hover:text-blue-900 transition-colors duration-300">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" class="social-icon w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-white hover:text-blue-900 transition-colors duration-300">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.7 3H4.3C3.582 3 3 3.582 3 4.3v15.4c0 .718.582 1.3 1.3 1.3h15.4c.718 0 1.3-.582 1.3-1.3V4.3c0-.718-.582-1.3-1.3-1.3zM8.339 18.338H5.667v-8.59h2.672v8.59zM7.004 8.574a1.548 1.548 0 11-.002-3.096 1.548 1.548 0 01.002 3.096zm11.335 9.764H15.67v-4.177c0-.996-.017-2.278-1.387-2.278-1.389 0-1.601 1.086-1.601 2.206v4.249h-2.667v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.779 3.203 4.092v4.711z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Contact Form -->
        <div class="w-full lg:w-1/2 p-8 lg:p-12 bg-white contact-form">
          <h3 class="text-2xl font-semibold mb-8 text-blue-900">Send Us a Message</h3>
          <form id="contact-form" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="form-group">
                <label for="contact-name" class="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                <input type="text" id="contact-name" name="name" class="w-full px-4 py-3 rounded-lg focus:outline-none" required>
              </div>
              
              <div class="form-group">
                <label for="contact-company" class="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                <input type="text" id="contact-company" name="company" class="w-full px-4 py-3 rounded-lg focus:outline-none" required>
              </div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="form-group">
                <label for="contact-email" class="block text-sm font-medium text-gray-700 mb-2">Company Email *</label>
                <input type="email" id="contact-email" name="email" class="w-full px-4 py-3 rounded-lg focus:outline-none" required>
              </div>
              
              <div class="form-group">
                <label for="contact-phone" class="block text-sm font-medium text-gray-700 mb-2">Contact Number *</label>
                <input type="tel" id="contact-phone" name="phone" class="w-full px-4 py-3 rounded-lg focus:outline-none" required>
              </div>
            </div>
            
            <div class="form-group">
              <label for="contact-location" class="block text-sm font-medium text-gray-700 mb-2">Company Location *</label>
              <input type="text" id="contact-location" name="location" class="w-full px-4 py-3 rounded-lg focus:outline-none" required>
            </div>
            
            <div class="form-group">
              <label for="contact-message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea id="contact-message" name="message" rows="5" class="w-full px-4 py-3 rounded-lg focus:outline-none resize-none"></textarea>
            </div>
            
            <div class="form-group">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input id="privacy-policy" name="privacy-policy" type="checkbox" class="h-4 w-4 text-blue-900 rounded focus:ring-blue-500" required>
                </div>
                <div class="ml-3 text-sm">
                  <label for="privacy-policy" class="font-medium text-gray-700">I agree to the <a href="#" class="text-blue-900 hover:underline">Privacy Policy</a> *</label>
                </div>
              </div>
            </div>
            
            <button type="submit" class="w-full bg-gradient-to-r from-blue-900 to-blue-800 text-white px-6 py-4 rounded-lg hover:from-blue-800 hover:to-blue-700 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center group">
              <span>Send Message</span>
              <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  `,setTimeout(()=>{const b=document.getElementById("contact-form");if(b){const t=b.querySelectorAll("input, textarea");t.forEach(e=>{e.addEventListener("focus",()=>{e.parentElement.classList.add("input-focused")}),e.addEventListener("blur",()=>{e.value||e.parentElement.classList.remove("input-focused")})}),b.addEventListener("submit",function(e){e.preventDefault();let p=!0;if(b.querySelectorAll("[required]").forEach(i=>{if(i.value.trim()){i.classList.remove("border-red-500");const a=i.parentElement.querySelector(".error-message");a&&a.remove()}else if(p=!1,i.classList.add("border-red-500"),!i.parentElement.querySelector(".error-message")){const d=document.createElement("p");d.className="error-message text-red-500 text-sm mt-1 floating-element",d.textContent="This field is required",i.parentElement.appendChild(d)}}),p){const i=new FormData(b),a={};i.forEach((r,m)=>{a[m]=r}),console.log("Contact Form Submission:",a);const d=document.createElement("div");d.className="fixed bottom-5 right-5 bg-gradient-to-r from-green-600 to-green-500 text-white p-6 rounded-lg shadow-xl z-50 flex items-center transform transition-all duration-300 floating-element",d.innerHTML=`
            <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <div>
              <h4 class="font-bold text-lg">Message Sent Successfully!</h4>
              <p class="text-green-100">Thank you for reaching out. We'll get back to you shortly.</p>
            </div>
          `,document.body.appendChild(d),setTimeout(()=>{d.classList.add("opacity-0","translate-y-2"),setTimeout(()=>{d.remove()},300)},5e3),b.reset(),t.forEach(r=>{r.parentElement.classList.remove("input-focused")})}})}},0),setTimeout(()=>{const b=()=>{const t=document.getElementById("contact");if(t){const e=t.getBoundingClientRect(),p=window.innerHeight,s=1-(e.top+e.height)/(p+e.height);if(e.top<p&&e.bottom>0){const i=t.querySelector(".contact-bg");if(i){const a=s*30;i.style.transform=`translateY(${a*.3}px)`}}}};window.addEventListener("scroll",b,{passive:!0}),b()},0);function y(){const b=document.documentElement.getAttribute("dir")==="rtl",t=document.getElementById("contact");if(!t)return;const e=t.querySelector(".contact-bg");e&&(e.style.backgroundImage=b?"url('images/{hero,products,services,clients}/ARcontact bg.jpg')":"url('images/{hero,products,services,clients}/contact bg.jpg')")}return setTimeout(y,100),window.addEventListener("languageChange",()=>setTimeout(y,100)),o}function M(){const o=document.createElement("footer");return o.className="bg-blue-900 py-8",o.innerHTML=`
    <div class="container mx-auto px-4">
      <div class="text-center text-white">
        <p>© 2025 AAMCO - Aigscent Arabia Manufacturing Co. Ltd. All Rights Reserved.</p>
      </div>
    </div>
  `,o}document.addEventListener("DOMContentLoaded",function(){const o=document.getElementById("root"),g=document.createElement("div");g.className="relative";const y=B();g.appendChild(y),g.appendChild(A()),g.appendChild(j()),g.appendChild(q()),g.appendChild(I()),g.appendChild(T()),g.appendChild(M()),o.appendChild(g),z()});function z(){document.querySelectorAll('a[href^="#"]').forEach(o=>{o.addEventListener("click",function(g){g.preventDefault();const y=this.getAttribute("href");if(y==="#")return;const b=document.querySelector(y);if(b){const t=document.querySelector("nav").offsetHeight,e=b.getBoundingClientRect().top+window.pageYOffset-t;window.scrollTo({top:e,behavior:"smooth"})}})})}
