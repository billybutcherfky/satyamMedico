/* ========================================= 
   MEDICARE PHARMACY 
   Frontend MVP 
========================================= */ 
 
 
/* ========================================= 
   PRODUCT DATABASE 
========================================= */ 
 
const products = [ 
 
    { 
        id: 1, 
        name: "BAMBAM GEL Ointment", 
        category: "Personal Care", 
        price: 95, 
        unit: "Tube",
        icon: "🧴", 
        image: "products/bambamge.jpeg", 
        description: "Diclofenac Diethylamine Oleum Lini, Methyl Salicylate, Menthol & Gel" 
    }, 
 
    { 
        id: 2, 
        name: "ZENOQUEN OZ Ointment", 
        category: "Personal Care", 
        price: 80, 
        unit: "Tube",
        icon: "💊", 
        image: "products/zenoqun_oz_.jpeg", 
        description: "Itraconazole, clobetasol propionate, ofloxacin & ornidazole ointment" 
    }, 
 
    { 
        id: 3, 
        name: "RDFIX CV 625 Tablets", 
        category: "Antibiotics", 
        price: 117, 
        unit: "strip",
        icon: "💊", 
        image: "products/RDFIXCV625.jpeg", 
        description: "Amoxicillin 500mg + Potassium 125mg Tablets" 
    }, 
 
    { 
        id: 4, 
        name: "MUNISU-L Tablets", 
        category: "Analgesics", 
        price: 90, 
        unit: "strip",
        icon: "🧴", 
        image: "products/Munisul.jpeg", 
        description: "Monteleukast 10mg + Levocetirizine 5mg Dihydrocholoride Tablets" 
    }, 
 
    { 
        id: 5, 
        name: "AJISAT 500 Tablets", 
        category: "Antibiotics", 
        price: 75, 
        unit: "strip",
        icon: "🧴", 
        image: "products/ajisat500.jpeg", 
        description: "Azithromycin 500mg Tablets" 
    }, 
 
    { 
        id: 6, 
        name: "RDFIX 200 mg Tablets", 
        category: "Antibiotics", 
        price: 105, 
        unit: "strip",
        icon: "🫙", 
        image: "products/Rdfix200dt.jpeg", 
        description: "Cefixime Dispersible Tablets 200mg"
    }, 
 
    { 
        id: 7, 
        name: "PANDEAP DSR Tablets", 
        category: "Gastrointestinal", 
        price: 103, 
        unit: "strip",
        icon: "🫙", 
        image: "products/panmon.jpeg", 
        description: "Enteric Coated Pantoprazole 40mg + Domperidone 30mg Tablets"
    }, 
 
    { 
        id: 8, 
        name: "NURODIP GOLD Tablets", 
        category: "Nutritional", 
        price: 150, 
        unit: "strip",
        icon: "🫙", 
        image: "products/nurodipgold2.jpeg", 
        description: "Methylcobalamin Folic Acid Vitamin B1 Vitamin B6 & Alpha Lipoic Acid Tablets" 
    }, 
 
    { 
        id: 9, 
        name: "UDMOX 500 Tablets", 
        category: "Antibiotics", 
        price: 120, 
        unit: "strip",
        icon: "🫙", 
        image: "products/udmox.jpeg", 
        description: "Amoxicillin 500mg & Dicloxacillin Tablets" 
    }, 
 
    { 
        id: 10, 
        name: "RDFIX O Tablets", 
        category: "Antibiotics", 
        price: 200, 
        unit: "strip",
        icon: "🫙", 
        image: "products/rdfixo.jpeg", 
        description: "Cefixime & Ofloxacin Tablets" 
    }, 

     { 
        id: 11, 
        name: "ACIDEV P", 
        category: "Analgesics", 
        price: 112,
        unit: "strip", 
        icon: "🌡️", 
        image: "products/acidev.p.jpeg", 
        description: "Acelofenacem 100mg + Paracetamol 325mg Tablets"
    }, 

     { 
        id: 12, 
        name: "ACIDEV MR tablets", 
        category: "Analgesics", 
        price: 70, 
        unit: "strip",
        icon: "🫙", 
        image: "products/acidevmr.jpeg", 
        description: "Aceclofenac Paracetamol & Cholrzoxazone Tablets"
    }, 

     { 
        id: 13, 
         name: "MONOSAT 50 Oral Suspension", 
        category: "Antibiotics", 
        price: 89, 
        unit: "piece",
        icon: "🫙", 
        image: "products/monosat50.jpeg", 
        description: "Cefpodoxime Proxetil Oral Suspension 50mg" 
    }, 

     { 
        id: 14, 
        name: "RDFIX CV Dry Syrup", 
        category: "Antibiotics", 
        price: 80, 
        unit: "piece",
        icon: "🫙", 
        image: "products/rdfixcvdry.jpeg", 
        description: "Amoxicillin & Potassium Clavulate Oral Suspension" 
    }, 

      { 
        id: 15, 
        name: "OFLOSIL OM Syrup", 
        category: "Antibiotics", 
        price: 80, 
        unit: "Bottle",
        icon: "🫙", 
        image: "products/oflosil.jpeg", 
        description: "Ofloxacin Metronidazole & Simethicone Oral Suspension" 
    }, 

      { 
        id: 16, 
        name: "MUNISU-L Syrup", 
        category: "Analgesics", 
        price: 80, 
        unit: "Bottle",
        icon: "🫙", 
        image: "products/syrupmunisl.jpeg", 
        description: "Monteleukast 4mg + Levocetirizine 2.5mg Dihydrocholoride Syrup"  
    }, 

      { 
        id: 17, 
        name: "DRISUN DX Syrup", 
        category: "cold & Cough", 
        price: 70, 
        unit: "Bottle",
        icon: "🫙", 
        image: "products/Drisun.jpeg", 
        description: "Dextromethorphan Hydrobrmide Phenylephrine Hydrochloride & Chlorpheniramine Maleate Syrup"  
    }, 

      { 
        id: 18, 
        name: "NEPKY PADS", 
        category: "Personal Care", 
        price: 99, 
        unit: " Packet",
        icon: "🫙", 
        image: "products/nepky.jpeg", 
        description: "Your everyday comfort companion for menstrual care" 
    }, 

      { 
        id: 19, 
        name: "OXIDAI 100ml Syrup", 
        category: "Nutritional", 
        price: 90, 
        unit: " Bottle",
        icon: "💊", 
        image: "products/oxidai z.jpeg", 
        description: "Daily multivitamin supplement with minerals and antioxidants"
    },

     { 
        id: 20, 
        name: "IRODEV 200ml Syrup", 
        category: "Nutritional", 
        price: 150, 
        unit: "Bottle",
        icon: "🫙", 
        image: "products/irodevxt.jpeg", 
        description: "Ferric Ammonium Citrate 200mg + Folic Acid syrup" 
    },
    
]; 
 
 
/* ========================================= 
   STATE 
========================================= */ 
 
let cart = JSON.parse( 
    localStorage.getItem("medicalCart") 
) || []; 
 
let user = JSON.parse( 
    localStorage.getItem("medicalUser") 
) || null; 
 
let currentProducts = [...products]; 
 
 
/* ========================================= 
   DOM READY 
========================================= */ 
 
document.addEventListener("DOMContentLoaded", () => { 
 
    renderProducts(currentProducts); 
 
    updateCartCount(); 
 
    updateAccountButton(); 
 
    loadSavedCustomer(); 
 
}); 
 
 
/* ========================================= 
   PRODUCT RENDER 
========================================= */ 
 
function renderProducts(items) { 
 
    const grid = document.getElementById("productGrid"); 
 
    if (!grid) return; 
 
    if (items.length === 0) { 
 
        grid.innerHTML = ` 
            <div class="no-products"> 
                <h3>No products found</h3> 
                <p>Try another search.</p> 
            </div> 
        `; 
 
        return; 
    } 
 
    grid.innerHTML = items.map(product => ` 
 
        <article class="product-card" onclick="openProductDetails(${product.id})"> 
 
            <div class="product-image"> 
 
                ${ 
                    product.image 
                    ? 
                    ` 
                    <img 
                        src="${product.image}" 
                        alt="" 
                        loading="lazy" 
                        decoding="async" 
                        onerror=" 
                            this.onerror=null; 
                            this.style.display='none'; 
                            this.parentElement.innerHTML='<div class=\\'product-image-fallback\\'>${product.icon || "💊"}</div>'; 
                        " 
                    > 
                    ` 
                    : 
                    ` 
                    <div class="product-image-fallback"> 
                        ${product.icon || "💊"} 
                    </div> 
                    ` 
                } 
 
            </div> 
 
            <div class="product-info"> 
 
                <span class="product-category"> 
                    ${product.category} 
                </span> 
 
                <h3 class="product-name"> 
                    ${product.name} 
                </h3> 
 
                <p class="product-description"> 
                    ${product.description} 
                </p> 
 
                <div class="product-bottom"> 
 
                    <span class="price">
                         ₹${product.price}
                         <span class="price-unit">/ ${product.unit}</span>
                       </span>
 
                    <button 
                        type="button" 
                        class="add-btn" 
                        onclick="event.stopPropagation(); addToCart(${product.id})" 
                    > 
                        Add + 
                    </button> 
 
                </div> 
 
            </div> 
 
        </article> 
 
    `).join(""); 
 
} 
 
 
/* ========================================= 
   SEARCH 
========================================= */ 
 
const searchInput = 
    document.getElementById("searchInput"); 
 
if (searchInput) { 
 
    searchInput.addEventListener("input", function () { 
 
        const query = this.value 
            .toLowerCase() 
            .trim(); 
 
        currentProducts = products.filter(product => 
 
            product.name 
                .toLowerCase() 
                .includes(query) 
 
            || 
 
            product.category 
                .toLowerCase() 
                .includes(query) 
 
        ); 
 
        renderProducts(currentProducts); 
 
    }); 
 
} 
 
 
/* ========================================= 
   CATEGORY FILTER 
========================================= */ 
 
function filterProducts(category) { 
 
    if (category === "All") { 
 
        currentProducts = [...products]; 
 
    } 
 
    else { 
 
        currentProducts = products.filter( 
            product => product.category === category 
        ); 
 
    } 
 
    renderProducts(currentProducts); 
 
    scrollToProducts(); 
 
} 
 
 
/* ========================================= 
   SORT 
========================================= */ 
 
function sortProducts() { 
 
    const select = 
        document.getElementById("sortSelect"); 
 
    if (!select) return; 
 
    const value = select.value; 
 
    if (value === "low") { 
 
        currentProducts.sort( 
            (a, b) => a.price - b.price 
        ); 
 
    } 
 
    else if (value === "high") { 
 
        currentProducts.sort( 
            (a, b) => b.price - a.price 
        ); 
 
    } 
 
    else { 
 
        currentProducts = [...products]; 
 
    } 
 
    renderProducts(currentProducts); 
 
} 
 
 
/* ========================================= 
   CART 
========================================= */ 
 
function addToCart(productId) { 
 
    const product = 
        products.find(p => p.id === productId); 
 
    if (!product) return; 
 
    const existing = 
        cart.find(item => item.id === productId); 
 
    if (existing) { 
 
        existing.quantity++; 
 
    } 
 
    else { 
 
        cart.push({ 
 
            id: product.id, 
 
            name: product.name, 
 
            price: product.price, 
 
            quantity: 1 
 
        }); 
 
    } 
 
    saveCart(); 
 
    updateCartCount(); 
 
    showToast(`${product.name} added to cart`); 
 
} 
 
 
/* ========================================= 
   REMOVE FROM CART 
========================================= */ 
 
function removeFromCart(productId) { 
 
    cart = 
        cart.filter(item => item.id !== productId); 
 
    saveCart(); 
 
    renderCart(); 
 
    updateCartCount(); 
 
} 
 
 
/* ========================================= 
   CHANGE QUANTITY 
========================================= */ 
 
function changeQuantity(productId, change) { 
 
    const item = 
        cart.find(item => item.id === productId); 
 
    if (!item) return; 
 
    item.quantity += change; 
 
    if (item.quantity <= 0) { 
 
        removeFromCart(productId); 
 
        return; 
 
    } 
 
    saveCart(); 
 
    renderCart(); 
 
    updateCartCount(); 
 
} 
 
 
/* ========================================= 
   SAVE CART 
========================================= */ 
 
function saveCart() { 
 
    localStorage.setItem( 
        "medicalCart", 
        JSON.stringify(cart) 
    ); 
 
} 
 
 
/* ========================================= 
   CART COUNT 
========================================= */ 
 
function updateCartCount() { 
 
    const count = 
        cart.reduce( 
            (total, item) => 
                total + item.quantity, 
            0 
        ); 
 
    const element = 
        document.getElementById("cartCount"); 
 
    if (element) { 
 
        element.textContent = count; 
 
    } 
 
} 
 
 
/* ========================================= 
   CART TOTAL 
========================================= */ 
 
function getCartTotal() { 
 
    return cart.reduce( 
 
        (total, item) => 
            total + item.price * item.quantity, 
 
        0 
 
    ); 
 
} 
 
 
/* ========================================= 
   CART UI 
========================================= */ 
 
function openCart() { 
 
    renderCart(); 
 
    document 
        .getElementById("cartModal") 
        .classList.add("active"); 
 
} 
 
 
function renderCart() { 
 
    const container = 
        document.getElementById("cartItems"); 
 
    const totalElement = 
        document.getElementById("cartTotal"); 
 
    if (!container || !totalElement) return; 
 
    if (cart.length === 0) { 
 
        container.innerHTML = ` 
 
            <div style=" 
                text-align:center; 
                padding:40px 0; 
                color:#6b7773; 
            "> 
 
                <div style="font-size:50px;"> 
                    🛒 
                </div> 
 
                <h3>Your cart is empty</h3> 
 
                <p>Add some products to continue.</p> 
 
            </div> 
 
        `; 
 
    } 
 
    else { 
 
        container.innerHTML = 
 
            cart.map(item => ` 
 
                <div class="cart-item"> 
 
                    <div class="cart-item-info"> 
 
                        <strong> 
                            ${item.name} 
                        </strong> 
 
                        <small> 
                            ₹${item.price} × ${item.quantity} 
                        </small> 
 
                    </div> 
 
                    <div class="quantity"> 
 
                        <button 
                            onclick="changeQuantity(${item.id}, -1)" 
                        > 
                            − 
                        </button> 
 
                        <strong> 
                            ${item.quantity} 
                        </strong> 
 
                        <button 
                            onclick="changeQuantity(${item.id}, 1)" 
                        > 
                            + 
                        </button> 
 
                        <button 
                            onclick="removeFromCart(${item.id})" 
                            style="color:#e74c3c;" 
                        > 
                            × 
                        </button> 
 
                    </div> 
 
                </div> 
 
            `).join(""); 
 
    } 
 
    totalElement.textContent = 
        `₹${getCartTotal()}`; 
 
} 
 
 
/* ========================================= 
   ACCOUNT 
========================================= */ 
 
function openAccount() { 
 
    const area = 
        document.getElementById("accountArea"); 
 
    if (!area) return; 
 
    if (user) { 
 
        area.innerHTML = ` 
 
            <h2>My Account</h2> 
 
            <p class="modal-subtitle"> 
                Your saved customer information 
            </p> 
 
            <div style=" 
                background:#f3faf8; 
                padding:18px; 
                border-radius:12px; 
                margin-bottom:20px; 
            "> 
 
                <p> 
                    <strong>Name:</strong> 
                    ${escapeHTML(user.name)} 
                </p> 
 
                <p style="margin-top:8px;"> 
                    <strong>Mobile:</strong> 
                    ${escapeHTML(user.phone)} 
                </p> 
 
                <p style="margin-top:8px;"> 
                    <strong>Address:</strong> 
                    ${escapeHTML(user.address)} 
                </p> 
 
            </div> 
 
            <button 
                class="primary-btn full-btn" 
                onclick="logout()" 
            > 
                Logout 
            </button> 
 
        `; 
 
    } 
 
    else { 
 
        area.innerHTML = ` 
 
            <h2>Create Account</h2> 
 
            <p class="modal-subtitle"> 
                Save your details for faster future orders. 
            </p> 
 
            <form id="registerForm"> 
 
                <label>Full Name</label> 
 
                <input 
                    type="text" 
                    id="registerName" 
                    required 
                > 
 
                <label>Mobile Number</label> 
 
                <input 
                    type="tel" 
                    id="registerPhone" 
                    pattern="[0-9]{10}" 
                    placeholder="10 digit mobile number" 
                    required 
                > 
 
                <label>Delivery Address</label> 
 
                <textarea 
                    id="registerAddress" 
                    rows="4" 
                    required 
                ></textarea> 
 
                <button 
                    class="primary-btn full-btn" 
                    type="submit" 
                > 
                    Create Account 
                </button> 
 
            </form> 
 
        `; 
 
        const registerForm = 
            document.getElementById("registerForm"); 
 
        if (registerForm) { 
 
            registerForm.addEventListener( 
                "submit", 
                registerUser 
            ); 
 
        } 
 
    } 
 
    document 
        .getElementById("accountModal") 
        .classList.add("active"); 
 
} 
 
 
/* ========================================= 
   REGISTER USER 
========================================= */ 
 
function registerUser(event) { 
 
    event.preventDefault(); 
 
    user = { 
 
        name: 
            document 
                .getElementById("registerName") 
                .value 
                .trim(), 
 
        phone: 
            document 
                .getElementById("registerPhone") 
                .value 
                .trim(), 
 
        address: 
            document 
                .getElementById("registerAddress") 
                .value 
                .trim() 
 
    }; 
 
    localStorage.setItem( 
        "medicalUser", 
        JSON.stringify(user) 
    ); 
 
    updateAccountButton(); 
 
    closeModal("accountModal"); 
 
    showToast("Account created successfully"); 
 
} 
 
 
/* ========================================= 
   LOGOUT 
========================================= */ 
 
function logout() { 
 
    user = null; 
 
    localStorage.removeItem("medicalUser"); 
 
    updateAccountButton(); 
 
    closeModal("accountModal"); 
 
    showToast("Logged out"); 
 
} 
 
 
/* ========================================= 
   ACCOUNT BUTTON 
========================================= */ 
 
function updateAccountButton() { 
 
    const text = 
        document.getElementById("accountText"); 
 
    if (!text) return; 
 
    text.textContent = 
        user 
            ? user.name.split(" ")[0] 
            : "Login"; 
 
} 
 
 
/* ========================================= 
   CHECKOUT 
========================================= */ 
 
function openCheckout() { 
 
    if (cart.length === 0) { 
 
        showToast("Your cart is empty"); 
 
        return; 
 
    } 
 
    if (!user) { 
 
        closeModal("cartModal"); 
 
        openAccount(); 
 
        showToast( 
            "Create an account before placing an order" 
        ); 
 
        return; 
 
    } 
 
    closeModal("cartModal"); 
 
    const name = 
        document.getElementById("customerName"); 
 
    const phone = 
        document.getElementById("customerPhone"); 
 
    const address = 
        document.getElementById("customerAddress"); 
 
    const total = 
        document.getElementById("checkoutTotal"); 
 
    if (name) { 
        name.value = user.name; 
    } 
 
    if (phone) { 
        phone.value = user.phone; 
    } 
 
    if (address) { 
        address.value = user.address; 
    } 
 
    if (total) { 
        total.textContent = 
            `₹${getCartTotal()}`; 
    } 
 
    document 
        .getElementById("checkoutModal") 
        .classList.add("active"); 
 
} 
/* =========================================
   PHONEPE QR PAYMENT
========================================= */

const paymentMethod =
    document.getElementById("paymentMethod");

const phonePeQrBox =
    document.getElementById("phonePeQrBox");

if (paymentMethod && phonePeQrBox) {

    paymentMethod.addEventListener(
        "change",
        function () {

            if (this.value === "phonepe") {

                phonePeQrBox.style.display = "block";

            } else {

                phonePeQrBox.style.display = "none";

            }

        }
    );

}
 
 
/* ========================================= 
   CHECKOUT SUBMIT 
========================================= */ 
 
const checkoutForm = 
    document.getElementById("checkoutForm"); 
 
if (checkoutForm) { 
 
    checkoutForm.addEventListener( 
        "submit", 
        async function(event) { 
 
            event.preventDefault(); 
 
            const name = 
                document 
                    .getElementById("customerName") 
                    .value 
                    .trim(); 
 
            const phone = 
                document 
                    .getElementById("customerPhone") 
                    .value 
                    .trim(); 
 
            const address = 
                document 
                    .getElementById("customerAddress") 
                    .value 
                    .trim(); 
 
 
            /* Update saved customer information */ 
 
            user.name = name; 
 
            user.phone = phone; 
 
            user.address = address; 
 
            localStorage.setItem( 
                "medicalUser", 
                JSON.stringify(user) 
            ); 
 
 
            /* Generate order */ 
 
            const orderId = 
                "ORD-" + 
                Date.now() 
                    .toString() 
                    .slice(-8); 
 
            const order = { 
 
                id: orderId, 
 
                customer: { 
 
                    name, 
 
                    phone, 
 
                    address 
 
                }, 
 
                items: [...cart], 
 
                total: getCartTotal(), 
 
                paymentMethod: 
                    document 
                        .getElementById("paymentMethod") 
                        .value, 
 
                status: "Pending", 
 
                date: 
                    new Date().toISOString() 
 
            }; 
 
 
            /* ========================================= 
               SAVE ORDER 
            ========================================= */ 
 
            const orders = 
                JSON.parse( 
                    localStorage.getItem( 
                        "medicalOrders" 
                    ) 
                ) || []; 
 
            orders.push(order); 
 
            localStorage.setItem( 
                "medicalOrders", 
                JSON.stringify(orders) 
            ); 
 
/* =========================================
   SEND ORDER TO EMAIL VIA FORMSPREE
========================================= */

try {

    const orderItems = order.items
        .map(item =>
            `${item.name} × ${item.quantity} = ₹${item.price * item.quantity}`
        )
        .join("\n");

    const response = await fetch(
        "https://formspree.io/f/xwleqnze",
        {
            method: "POST",

            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                _subject: `New Order - ${orderId}`,

                "Order ID": orderId,

                "Customer Name": name,

                "Mobile Number": phone,

                "Delivery Address": address,

                "Products": orderItems,

                "Total Amount": `₹${order.total}`,

                "Payment Method": order.paymentMethod,

                "Order Status": order.status,

                "Order Date":
                    new Date().toLocaleString("en-IN")

            })
        }
    );


    const result = await response.json();


    if (!response.ok) {

        console.error(
            "Formspree Error:",
            result
        );

        throw new Error(
            result?.errors?.[0]?.message ||
            "Formspree submission failed"
        );

    }


    console.log(
        "ORDER EMAIL SENT:",
        result
    );


}
catch (error) {

    console.error(
        "Formspree Error:",
        error
    );

    showToast(
        "Order saved, but email could not be sent."
    );

}
 
            /* ========================================= 
               CLEAR CART 
            ========================================= */ 
 
            cart = []; 
 
            saveCart(); 
 
            updateCartCount(); 
 
 
            /* ========================================= 
               CLOSE CHECKOUT 
            ========================================= */ 
 
            closeModal("checkoutModal"); 
 
 
            /* ========================================= 
               SHOW SUCCESS 
            ========================================= */ 
 
            const orderNumber = 
                document.getElementById("orderNumber"); 
 
            if (orderNumber) { 
 
                orderNumber.textContent = 
                    orderId; 
 
            } 
 
            document 
                .getElementById("successModal") 
                .classList.add("active"); 
 
            console.log( 
                "NEW ORDER:", 
                order 
            ); 
 
        } 
    ); 
 
} 
 
 
/* ========================================= 
   SAVED CUSTOMER DATA 
========================================= */ 
 
function loadSavedCustomer() { 
 
    if (!user) return; 
 
    const name = 
        document.getElementById("customerName"); 
 
    const phone = 
        document.getElementById("customerPhone"); 
 
    const address = 
        document.getElementById("customerAddress"); 
 
    if (name) { 
 
        name.value = user.name; 
 
    } 
 
    if (phone) { 
 
        phone.value = user.phone; 
 
    } 
 
    if (address) { 
 
        address.value = user.address; 
 
    } 
 
} 
 
 
/* ========================================= 
   MODALS 
========================================= */ 
 
function closeModal(id) { 
 
    const modal = 
        document.getElementById(id); 
 
    if (!modal) return; 
 
    modal.classList.remove("active"); 
 
} 
 
 
/* ========================================= 
   CLOSE MODAL ON OUTSIDE CLICK 
========================================= */ 
 
window.addEventListener( 
    "click", 
    function(event) { 
 
        if ( 
            event.target.classList.contains("modal") 
        ) { 
 
            event.target.classList.remove( 
                "active" 
            ); 
 
        } 
 
    } 
); 
 
 
/* ========================================= 
   UTILITIES 
========================================= */ 
 
function scrollToProducts() { 
 
    const productsSection = 
        document.getElementById("products"); 
 
    if (!productsSection) return; 
 
    productsSection.scrollIntoView({ 
 
        behavior: "smooth" 
 
    }); 
 
} 
 
 
/* ========================================= 
   TOAST 
========================================= */ 
 
function showToast(message) { 
 
    const toast = 
        document.createElement("div"); 
 
    toast.textContent = message; 
 
    toast.style.cssText = ` 
 
        position:fixed; 
 
        bottom:25px; 
 
        right:25px; 
 
        z-index:9999; 
 
        background:#11231f; 
 
        color:white; 
 
        padding:14px 18px; 
 
        border-radius:10px; 
 
        font-size:13px; 
 
        font-weight:600; 
 
        box-shadow: 
            0 10px 30px rgba(0,0,0,.2); 
 
    `; 
 
    document.body.appendChild(toast); 
 
    setTimeout(() => { 
 
        toast.remove(); 
 
    }, 2500); 
 
} 
 
 
/* ========================================= 
   ESCAPE HTML 
========================================= */ 
 
function escapeHTML(value) { 
 
    return String(value) 
        .replaceAll("&", "&amp;") 
        .replaceAll("<", "&lt;") 
        .replaceAll(">", "&gt;") 
        .replaceAll('"', "&quot;") 
        .replaceAll("'", "&#039;"); 
 
} 
 
 
/* =========================================
   PRODUCT DETAILS
========================================= */

function openProductDetails(productId) {

    const product = products.find(
        p => p.id === productId
    );

    if (!product) return;

    const existingModal =
        document.getElementById("productDetailsModal");

    if (existingModal) {
        existingModal.remove();
    }

    const modal =
        document.createElement("div");

    modal.id = "productDetailsModal";

    modal.innerHTML = `

        <div class="product-details-overlay">

            <div
                class="product-details-modal"
                onclick="event.stopPropagation()"
            >

                <button
                    class="product-details-close"
                    onclick="closeProductDetails()"
                    type="button"
                >
                    ×
                </button>

                <div class="product-details-image">

                    ${
                        product.image
                        ?
                        `
                        <img
                            src="${product.image}"
                            alt="${escapeHTML(product.name)}"
                            onerror="
                                this.onerror=null;
                                this.style.display='none';
                                this.parentElement.innerHTML='<div class=&quot;product-image-fallback&quot;>${product.icon || "💊"}</div>';
                            "
                        >
                        `
                        :
                        `
                        <div class="product-image-fallback">
                            ${product.icon || "💊"}
                        </div>
                        `
                    }

                </div>

                <div class="product-details-content">

                    <span class="product-details-category">
                        ${escapeHTML(product.category)}
                    </span>

                    <h2>
                        ${escapeHTML(product.name)}
                    </h2>

                    <p class="product-details-description">
                        ${escapeHTML(product.description)}
                    </p>

                    <div class="product-details-price">
                          ₹${product.price}
                            <span class="price-unit">
                               / ${escapeHTML(product.unit || "strip")}
                            </span>
                      </div>

                    <button
                        class="product-details-add"
                        type="button"
                        onclick="
                            addToCart(${product.id});
                            closeProductDetails();
                        "
                    >
                        Add to Cart +
                    </button>

                </div>

            </div>

        </div>

    `;

    document.body.appendChild(modal);

    const overlay =
        modal.querySelector(
            ".product-details-overlay"
        );

    if (overlay) {

        overlay.addEventListener(
            "click",
            function(event) {

                if (event.target === overlay) {
                    closeProductDetails();
                }

            }
        );

    }

    document.body.style.overflow = "hidden";

}
 
/* ========================================= 
   CLOSE PRODUCT DETAILS 
========================================= */ 
 
function closeProductDetails() { 
 
    const modal = 
        document.getElementById( 
            "productDetailsModal" 
        ); 
 
    if (modal) { 
        modal.remove(); 
    } 
 
    document.body.style.overflow = ""; 
 
} 
 
 
/* =========================================
   PRODUCT DETAILS STYLE
========================================= */

if (
    !document.getElementById(
        "productDetailsStyle"
    )
) {

    const style =
        document.createElement("style");

    style.id =
        "productDetailsStyle";

    style.textContent = `

        /* =========================================
           PRODUCT DETAILS OVERLAY
        ========================================= */

        .product-details-overlay {

            position: fixed;

            inset: 0;

            background:
                rgba(0, 0, 0, 0.55);

            backdrop-filter: blur(4px);

            display: flex;

            align-items: center;

            justify-content: center;

            padding: 20px;

            z-index: 10000;
        }


        /* =========================================
           PRODUCT DETAILS MODAL
        ========================================= */

        .product-details-modal {

            position: relative;

            width: 100%;

            max-width: 500px;

            max-height: 90vh;

            overflow-y: auto;

            background: #ffffff;

            color: #17221f;

            border-radius: 20px;

            box-shadow:
                0 25px 70px
                rgba(0, 0, 0, 0.25);

            overflow: hidden;
        }


        /* =========================================
           CLOSE BUTTON
        ========================================= */

        .product-details-close {

            position: absolute;

            top: 15px;

            right: 15px;

            width: 40px;

            height: 40px;

            border: none;

            border-radius: 50%;

            background:
                rgba(255, 255, 255, 0.95);

            color: #17221f;

            font-size: 28px;

            cursor: pointer;

            z-index: 2;

            line-height: 1;

            transition:
                background 0.2s ease,
                color 0.2s ease;
        }


        .product-details-close:hover {

            background: #f1f1f1;

            color: #17221f;
        }


        /* =========================================
           PRODUCT IMAGE
        ========================================= */

        .product-details-image {

            width: 100%;

            height: 320px;

            background: #f7faf9;

            display: flex;

            align-items: center;

            justify-content: center;

            overflow: hidden;
        }


        .product-details-image img {

            width: 100%;

            height: 100%;

            display: block;

            object-fit: contain;

            object-position: center;
        }


        /* =========================================
           PRODUCT DETAILS CONTENT
        ========================================= */

        .product-details-content {

            padding: 25px;

            background: #ffffff;

            color: #17221f;
        }


        /* =========================================
           CATEGORY
        ========================================= */

        .product-details-category {

            display: inline-block;

            color:
                var(--primary, #009879);

            font-size: 11px;

            font-weight: 800;

            text-transform: uppercase;

            letter-spacing: 1px;

            margin-bottom: 8px;
        }


        /* =========================================
           PRODUCT NAME
        ========================================= */

        .product-details-content h2 {

            margin:
                0 0 12px;

            color:
                var(--text, #17221f);

            font-size: 24px;

            line-height: 1.3;
        }


        /* =========================================
           DESCRIPTION
        ========================================= */

        .product-details-description {

            color:
                var(--muted, #6b7773);

            font-size: 14px;

            line-height: 1.6;

            margin:
                0 0 20px;
        }


        /* =========================================
           PRICE
        ========================================= */

        .product-details-price {

            color:
                var(--text, #17221f);

            font-size: 26px;

            font-weight: 800;

            margin-bottom: 20px;
        }


        /* =========================================
           ADD TO CART
        ========================================= */

        .product-details-add {

            width: 100%;

            border: none;

            background:
                var(--primary, #009879);

            color: #ffffff;

            padding: 14px 20px;

            border-radius: 10px;

            font-size: 15px;

            font-weight: 700;

            cursor: pointer;

            transition:
                background 0.2s ease,
                transform 0.2s ease;
        }


        .product-details-add:hover {

            background:
                var(--primary-dark, #06745c);

            transform:
                translateY(-1px);
        }


        /* =========================================
           DARK MODE
        ========================================= */

        body.dark-mode
        .product-details-modal {

            background: #17231f;

            color: #f1f7f5;
        }


        body.dark-mode
        .product-details-content {

            background: #17231f;

            color: #f1f7f5;
        }


        body.dark-mode
        .product-details-image {

            background: #1b2925;
        }


        body.dark-mode
        .product-details-content h2 {

            color: #f1f7f5;
        }


        body.dark-mode
        .product-details-description {

            color: #a8b8b3;
        }


        body.dark-mode
        .product-details-price {

            color: #f1f7f5;
        }


        body.dark-mode
        .product-details-close {

            background: #e9f8f4;

            color: #17231f;
        }


        body.dark-mode
        .product-details-close:hover {

            background: #19b995;

            color: #ffffff;
        }


        body.dark-mode
        .product-details-add {

            background: #19b995;

            color: #ffffff;
        }


        body.dark-mode
        .product-details-add:hover {

            background: #0f9b7d;
        }


        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 600px) {

            .product-details-overlay {

                padding: 15px;
            }


            .product-details-modal {

                max-width: 100%;

                border-radius: 18px;
            }


            .product-details-image {

                height: 260px;
            }


            .product-details-content {

                padding: 20px;
            }


            .product-details-content h2 {

                font-size: 21px;
            }


            .product-details-description {

                font-size: 13px;
            }


            .product-details-price {

                font-size: 24px;
            }

        }

    `;

    document.head.appendChild(style);
}
/* =========================
   LIGHT / DARK MODE
========================= */

function toggleTheme() {

    const body = document.body;
    const themeToggle = document.getElementById("themeToggle");

    body.classList.toggle("dark-mode");

    const isDark = body.classList.contains("dark-mode");

    // Save theme
    localStorage.setItem("satyamTheme", isDark ? "dark" : "light");

    // Change icon
    themeToggle.textContent = isDark ? "☀️" : "🌙";

    themeToggle.setAttribute(
        "aria-label",
        isDark ? "Switch to light mode" : "Switch to dark mode"
    );
}


/* =========================
   LOAD SAVED THEME
========================= */

document.addEventListener("DOMContentLoaded", function () {

    const savedTheme = localStorage.getItem("satyamTheme");
    const themeToggle = document.getElementById("themeToggle");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

        if (themeToggle) {
            themeToggle.textContent = "☀️";

            themeToggle.setAttribute(
                "aria-label",
                "Switch to light mode"
            );
        }

    } else {

        if (themeToggle) {
            themeToggle.textContent = "🌙";
        }

    }

});
/* =========================================================
   CART DISCOUNT
========================================================= */

let currentCartDiscount = 0;

function applyCartDiscount() {

    const input = document.getElementById("cartDiscount");

    if (!input) return;

    let discount = Number(input.value) || 0;

    // Never allow more than 50%
    discount = Math.max(0, Math.min(50, discount));

    input.value = discount;

    currentCartDiscount = discount;

    updateCartDiscountTotal();
}


function updateCartDiscountTotal() {

    const subtotal = cart.reduce(
        (total, item) => {

            return total + (
                Number(item.price) * Number(item.quantity)
            );

        },
        0
    );

    const discountAmount =
        subtotal * (currentCartDiscount / 100);

    const finalTotal =
        subtotal - discountAmount;


    const subtotalElement =
        document.getElementById("cartSubtotal");

    const discountElement =
        document.getElementById("cartDiscountAmount");

    const totalElement =
        document.getElementById("cartTotal");


    if (subtotalElement) {
        subtotalElement.textContent =
            `₹${subtotal.toFixed(0)}`;
    }


    if (discountElement) {
        discountElement.textContent =
            `− ₹${discountAmount.toFixed(0)}`;
    }


    if (totalElement) {
        totalElement.textContent =
            `₹${finalTotal.toFixed(0)}`;
    }


    // Checkout total
    const checkoutTotal =
        document.getElementById("checkoutTotal");

    if (checkoutTotal) {
        checkoutTotal.textContent =
            `₹${finalTotal.toFixed(0)}`;
    }
}
