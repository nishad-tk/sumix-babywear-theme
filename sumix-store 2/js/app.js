
// ============================================
// SUMIX Babywear & Care — Application Logic
// ============================================

// ─── Demo Product Data ───
const PRODUCTS = [
  { id: 1, name: "Lavender Dream Romper", category: "Rompers", price: 799, mrp: 999, discount: 20, rating: 4.8, reviews: 128, age: "3-6M", color: "Lavender", colorHex: "#C4B5FD", badge: "bestseller", image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=600&fit=crop", hoverImage: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=600&fit=crop", sizes: ["0-3M","3-6M","6-12M","12-18M"], stock: 15, description: "Ultra-soft organic cotton romper in dreamy lavender. Features snap buttons for easy diaper changes and envelope neckline for gentle dressing." },
  { id: 2, name: "Floral Frill Romper", category: "Rompers", price: 899, mrp: 1199, discount: 25, rating: 4.9, reviews: 96, age: "6-12M", color: "Cream", colorHex: "#FEF3C7", badge: "new", image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=600&fit=crop", hoverImage: "https://images.unsplash.com/photo-1519238263496-6361904484f7?w=600&h=600&fit=crop", sizes: ["0-3M","3-6M","6-12M","12-18M","18-24M"], stock: 8, description: "Delicate floral print romper with frill sleeves. Made from 100% GOTS certified organic cotton, perfect for special occasions and everyday wear." },
  { id: 3, name: "Soft Stripe Romper", category: "Rompers", price: 749, mrp: 899, discount: 17, rating: 4.7, reviews: 84, age: "6-12M", color: "Beige", colorHex: "#F5EDE0", badge: "", image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=600&fit=crop", hoverImage: "https://images.unsplash.com/photo-1522771930-78848dc92939?w=600&h=600&fit=crop", sizes: ["0-3M","3-6M","6-12M","12-18M"], stock: 22, description: "Classic stripe pattern in soft beige tones. Breathable fabric keeps baby comfortable all day with natural temperature regulation." },
  { id: 4, name: "Sage Garden Romper", category: "Rompers", price: 849, mrp: 999, discount: 15, rating: 4.8, reviews: 112, age: "6-12M", color: "Sage", colorHex: "#A7F3D0", badge: "bestseller", image: "https://images.unsplash.com/photo-1540479859555-17af45c78602?w=600&h=600&fit=crop", hoverImage: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&h=600&fit=crop", sizes: ["3-6M","6-12M","12-18M","18-24M"], stock: 18, description: "Earthy sage green romper with botanical embroidery details. Sustainably made with love in Kerala from premium organic cotton." },
  { id: 5, name: "Organic Wrap Bodysuit", category: "Onesies", price: 599, mrp: 799, discount: 25, rating: 4.6, reviews: 64, age: "0-3M", color: "White", colorHex: "#FFFFFF", badge: "", image: "https://images.unsplash.com/photo-1584536453494-aa5c0ad8c22d?w=600&h=600&fit=crop", hoverImage: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=600&fit=crop", sizes: ["Newborn","0-3M","3-6M"], stock: 30, description: "Essential wrap-style bodysuit for newborns. Side snaps make dressing gentle and easy for both baby and parent." },
  { id: 6, name: "Everyday Essentials Set", category: "Sets", price: 1299, mrp: 1699, discount: 24, rating: 4.9, reviews: 156, age: "0-12M", color: "Multi", colorHex: "#F3E8FF", badge: "bestseller", image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df4?w=600&h=600&fit=crop", hoverImage: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=600&fit=crop", sizes: ["0-3M","3-6M","6-12M"], stock: 12, description: "Complete 5-piece essentials set including bodysuits, pants, and bib. The perfect starter pack for new parents." },
  { id: 7, name: "Muslin Swaddle Blanket", category: "Accessories", price: 699, mrp: 899, discount: 22, rating: 4.8, reviews: 203, age: "0-12M", color: "Lavender", colorHex: "#C4B5FD", badge: "", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=600&fit=crop", hoverImage: "https://images.unsplash.com/photo-1519238263496-6361904484f7?w=600&h=600&fit=crop", sizes: ["One Size"], stock: 45, description: "Generously sized muslin swaddle in breathable organic cotton. Gets softer with every wash. Perfect for swaddling, nursing cover, or stroller shade." },
  { id: 8, name: "Dreamy Nights Sleep Set", category: "Sleepwear", price: 1099, mrp: 1399, discount: 21, rating: 4.7, reviews: 89, age: "6-24M", color: "Pink", colorHex: "#FBCFE8", badge: "new", image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&h=600&fit=crop", hoverImage: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=600&fit=crop", sizes: ["6-12M","12-18M","18-24M","2-3Y"], stock: 10, description: "Cozy two-piece sleep set with footed pants and long-sleeve top. Designed for uninterrupted sleep with flat seams and tagless labels." },
  { id: 9, name: "Bunny Garden Set", category: "Gift Sets", price: 999, mrp: 1299, discount: 23, rating: 4.9, reviews: 74, age: "0-6M", color: "Cream", colorHex: "#FEF3C7", badge: "bestseller", image: "https://images.unsplash.com/photo-1522771930-78848dc92939?w=600&h=600&fit=crop", hoverImage: "https://images.unsplash.com/photo-1540479859555-17af45c78602?w=600&h=600&fit=crop", sizes: ["Newborn","0-3M","3-6M"], stock: 6, description: "Adorable bunny-themed gift set with romper, hat, and socks. Comes in a premium gift box ready for baby showers." },
  { id: 10, name: "Cloud Knit Set", category: "Sets", price: 1199, mrp: 1499, discount: 20, rating: 4.8, reviews: 52, age: "3-12M", color: "Blue", colorHex: "#BFDBFE", badge: "", image: "https://images.unsplash.com/photo-1519238263496-6361904484f7?w=600&h=600&fit=crop", hoverImage: "https://images.unsplash.com/photo-1584536453494-aa5c0ad8c22d?w=600&h=600&fit=crop", sizes: ["0-3M","3-6M","6-12M"], stock: 14, description: "Luxuriously soft cloud-knit cardigan and pant set. Hand-finished details and coconut buttons for a premium touch." },
  { id: 11, name: "Ruffle Sleeve Dress", category: "Dresses", price: 899, mrp: 1199, discount: 25, rating: 4.7, reviews: 67, age: "6-24M", color: "Peach", colorHex: "#FED7AA", badge: "new", image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=600&fit=crop", hoverImage: "https://images.unsplash.com/photo-1555252333-9f8e92e65df4?w=600&h=600&fit=crop", sizes: ["6-12M","12-18M","18-24M","2-3Y"], stock: 9, description: "Sweet ruffle sleeve dress in peachy coral. Twirl-worthy skirt and soft lining make this perfect for playdates and parties." },
  { id: 12, name: "Printed Bibs (Set of 3)", category: "Accessories", price: 399, mrp: 599, discount: 33, rating: 4.5, reviews: 198, age: "0-24M", color: "Multi", colorHex: "#F3E8FF", badge: "", image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=600&fit=crop", hoverImage: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=600&fit=crop", sizes: ["One Size"], stock: 55, description: "Absorbent triple-layer bibs with snap closures. Fun prints that hide stains and keep outfits clean during mealtime." }
];

// ─── State ───
const Store = {
  cart: JSON.parse(localStorage.getItem('sumix_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('sumix_wishlist') || '[]'),
  user: JSON.parse(localStorage.getItem('sumix_user') || 'null'),

  save() {
    localStorage.setItem('sumix_cart', JSON.stringify(this.cart));
    localStorage.setItem('sumix_wishlist', JSON.stringify(this.wishlist));
    localStorage.setItem('sumix_user', JSON.stringify(this.user));
    this.updateUI();
  },

  addToCart(productId, size, qty = 1) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    const existing = this.cart.find(item => item.id === productId && item.size === size);
    if (existing) {
      existing.qty += qty;
    } else {
      this.cart.push({ id: productId, size, qty, addedAt: Date.now() });
    }
    this.save();
    showToast(`${product.name} added to bag!`, 'success');
    openCartDrawer();
  },

  removeFromCart(productId, size) {
    this.cart = this.cart.filter(item => !(item.id === productId && item.size === size));
    this.save();
  },

  updateQty(productId, size, qty) {
    const item = this.cart.find(i => i.id === productId && i.size === size);
    if (item) {
      if (qty <= 0) this.removeFromCart(productId, size);
      else item.qty = qty;
      this.save();
    }
  },

  toggleWishlist(productId) {
    const idx = this.wishlist.indexOf(productId);
    const product = PRODUCTS.find(p => p.id === productId);
    if (idx > -1) {
      this.wishlist.splice(idx, 1);
      showToast('Removed from wishlist', 'info');
    } else {
      this.wishlist.push(productId);
      showToast(`${product.name} saved to wishlist!`, 'success');
    }
    this.save();
  },

  isWishlisted(productId) {
    return this.wishlist.includes(productId);
  },

  getCartTotal() {
    return this.cart.reduce((sum, item) => {
      const product = PRODUCTS.find(p => p.id === item.id);
      return sum + (product ? product.price * item.qty : 0);
    }, 0);
  },

  getCartCount() {
    return this.cart.reduce((sum, item) => sum + item.qty, 0);
  },

  updateUI() {
    // Update all count badges
    document.querySelectorAll('.cart-count').forEach(el => {
      el.textContent = this.getCartCount();
      el.style.display = this.getCartCount() > 0 ? 'flex' : 'none';
    });
    document.querySelectorAll('.wishlist-count').forEach(el => {
      el.textContent = this.wishlist.length;
      el.style.display = this.wishlist.length > 0 ? 'flex' : 'none';
    });

    // Update wishlist buttons
    document.querySelectorAll('[data-wishlist]').forEach(btn => {
      const pid = parseInt(btn.dataset.wishlist);
      btn.classList.toggle('active', this.isWishlisted(pid));
    });

    // Update cart drawer if open
    renderCartDrawer();

    // Update cart page if on cart
    if (document.getElementById('cart-page')) renderCartPage();
  }
};

// ─── Toast Notifications ───
function showToast(message, type = 'success') {
  const container = document.querySelector('.toast-container') || createToastContainer();
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  const icon = type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ';
  toast.innerHTML = `<span style="font-size:1.25rem">${icon}</span><span style="font-weight:600">${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

function createToastContainer() {
  const div = document.createElement('div');
  div.className = 'toast-container';
  document.body.appendChild(div);
  return div;
}

// ─── Cart Drawer ───
function openCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (drawer) drawer.classList.add('open');
  if (overlay) overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (drawer) drawer.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function renderCartDrawer() {
  const body = document.getElementById('cart-drawer-body');
  const footer = document.getElementById('cart-drawer-footer');
  if (!body) return;

  if (Store.cart.length === 0) {
    body.innerHTML = `
      <div style="text-align:center;padding:var(--space-8) 0">
        <div style="font-size:3rem;margin-bottom:var(--space-2)">🛍️</div>
        <h4 style="font-family:var(--font-heading);font-size:1.25rem;margin-bottom:var(--space-1)">Your bag is empty</h4>
        <p style="color:var(--gray-500);margin-bottom:var(--space-3)">Discover our softest organic cotton pieces for your little one.</p>
        <a href="collection.html" class="btn btn-primary">Start Shopping</a>
      </div>`;
    if (footer) footer.innerHTML = '';
    return;
  }

  let html = '';
  let total = 0;
  Store.cart.forEach(item => {
    const product = PRODUCTS.find(p => p.id === item.id);
    if (!product) return;
    total += product.price * item.qty;
    html += `
      <div class="cart-item">
        <div class="cart-item-image"><img src="${product.image}" alt="${product.name}"></div>
        <div class="cart-item-details">
          <h4>${product.name}</h4>
          <p>${item.size} • ${product.color}</p>
          <div class="cart-item-price">₹${product.price}</div>
          <div class="cart-item-actions">
            <div class="qty-selector">
              <button onclick="Store.updateQty(${item.id}, '${item.size}', ${item.qty - 1})">−</button>
              <span>${item.qty}</span>
              <button onclick="Store.updateQty(${item.id}, '${item.size}', ${item.qty + 1})">+</button>
            </div>
            <button class="remove-btn" onclick="Store.removeFromCart(${item.id}, '${item.size}')">Remove</button>
          </div>
        </div>
      </div>`;
  });
  body.innerHTML = html;

  const freeShippingThreshold = 999;
  const remaining = Math.max(0, freeShippingThreshold - total);
  const progress = Math.min(100, (total / freeShippingThreshold) * 100);

  if (footer) {
    footer.innerHTML = `
      <div class="free-shipping-bar">
        <p>${remaining > 0 ? `Add ₹${remaining} more for FREE shipping!` : '🎉 You unlocked FREE shipping!'}</p>
        <div class="progress-track"><div class="progress-fill" style="width:${progress}%"></div></div>
      </div>
      <div class="cart-summary-row total"><span>Total</span><span>₹${total}</span></div>
      <a href="checkout.html" class="btn btn-primary btn-full" style="margin-top:var(--space-2)">Proceed to Checkout</a>`;
  }
}

// ─── Header Scroll ───
function initHeader() {
  const header = document.querySelector('.header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  });
}

// ─── Scroll Reveal ───
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ─── Mobile Menu ───
function initMobileMenu() {
  const btn = document.querySelector('.mobile-menu-btn');
  const menu = document.querySelector('.mobile-menu');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => {
    menu.classList.toggle('open');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
  });
}

// ─── Tabs ───
function initTabs() {
  document.querySelectorAll('.tabs').forEach(tabContainer => {
    const buttons = tabContainer.querySelectorAll('.tab-btn');
    const contents = tabContainer.parentElement.querySelectorAll('.tab-content');
    buttons.forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        if (contents[idx]) contents[idx].classList.add('active');
      });
    });
  });
}

// ─── Product Gallery ───
function initProductGallery() {
  const mainImg = document.getElementById('gallery-main-img');
  const thumbs = document.querySelectorAll('.gallery-thumb');
  if (!mainImg) return;
  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      mainImg.src = thumb.dataset.img;
    });
  });
}

// ─── Size & Color Selectors ───
function initSelectors() {
  document.querySelectorAll('.size-option').forEach(opt => {
    opt.addEventListener('click', () => {
      if (opt.classList.contains('disabled')) return;
      opt.parentElement.querySelectorAll('.size-option').forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
    });
  });
  document.querySelectorAll('.color-option').forEach(opt => {
    opt.addEventListener('click', () => {
      opt.parentElement.querySelectorAll('.color-option').forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
    });
  });
}

// ─── Pincode Checker ───
function initPincodeChecker() {
  const btn = document.getElementById('check-pincode');
  const input = document.getElementById('pincode-input');
  const result = document.getElementById('pincode-result');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const val = input.value.trim();
    if (val.length !== 6) {
      result.innerHTML = '<span style="color:var(--error)">Please enter a valid 6-digit pincode</span>';
      return;
    }
    result.innerHTML = '<span style="color:var(--gray-500)">Checking...</span>';
    setTimeout(() => {
      const dates = ['Tomorrow, Jun 2', 'Jun 3', 'Jun 4'];
      const date = dates[Math.floor(Math.random() * dates.length)];
      result.innerHTML = `<span style="color:var(--success)"><strong>✓ Deliver by ${date}</strong> | COD Available | Free shipping above ₹999</span>`;
    }, 800);
  });
}

// ─── Initialize ───
document.addEventListener('DOMContentLoaded', () => {
  Store.updateUI();
  initHeader();
  initReveal();
  initMobileMenu();
  initTabs();
  initProductGallery();
  initSelectors();
  initPincodeChecker();

  // Close cart on overlay click
  const overlay = document.getElementById('cart-overlay');
  if (overlay) overlay.addEventListener('click', closeCartDrawer);
});

// ─── Render Helpers ───
function renderProductCard(product, showQuickAdd = true) {
  const isWished = Store.isWishlisted(product.id);
  return `
    <div class="product-card">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <img src="${product.hoverImage}" alt="${product.name}" class="hover-img" loading="lazy">
        ${product.badge ? `<div class="product-badge-wrap"><span class="badge badge-${product.badge}">${product.badge}</span></div>` : ''}
        <button class="wishlist-btn ${isWished ? 'active' : ''}" data-wishlist="${product.id}" onclick="Store.toggleWishlist(${product.id})">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWished ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </button>
        ${showQuickAdd ? `<div class="quick-add"><button class="btn btn-primary btn-sm btn-full" onclick="Store.addToCart(${product.id}, '${product.sizes[1] || product.sizes[0]}')">Quick Add</button></div>` : ''}
      </div>
      <div class="product-info">
        <div class="product-rating">
          <span class="stars">★★★★★</span>
          <span class="count">${product.rating} (${product.reviews})</span>
        </div>
        <h3 class="product-name"><a href="product.html?id=${product.id}">${product.name}</a></h3>
        <p class="product-meta">${product.age} • ${product.color}</p>
        <div class="product-price">
          <span class="price-current">₹${product.price}</span>
          <span class="price-original">₹${product.mrp}</span>
          <span class="price-save">Save ₹${product.mrp - product.price}</span>
        </div>
      </div>
    </div>`;
}

function renderCartPage() {
  const container = document.getElementById('cart-items-container');
  const sidebar = document.getElementById('cart-sidebar');
  if (!container) return;

  if (Store.cart.length === 0) {
    container.innerHTML = `
      <div style="text-align:center;padding:var(--space-10) var(--space-4)">
        <div style="font-size:4rem;margin-bottom:var(--space-3)">🛍️</div>
        <h2 style="font-family:var(--font-heading);font-size:1.75rem;margin-bottom:var(--space-2)">Your bag is empty</h2>
        <p style="color:var(--gray-500);margin-bottom:var(--space-4);max-width:400px;margin-inline:auto">Looks like you haven't added anything yet. Explore our softest organic cotton pieces for your little one.</p>
        <a href="collection.html" class="btn btn-primary btn-lg">Continue Shopping</a>
      </div>`;
    if (sidebar) sidebar.style.display = 'none';
    return;
  }

  let html = '';
  let subtotal = 0;
  let totalDiscount = 0;

  Store.cart.forEach(item => {
    const product = PRODUCTS.find(p => p.id === item.id);
    if (!product) return;
    const itemTotal = product.price * item.qty;
    const itemMrp = product.mrp * item.qty;
    subtotal += itemTotal;
    totalDiscount += (itemMrp - itemTotal);

    html += `
      <div class="cart-item-row">
        <div class="cart-item-main">
          <img src="${product.image}" alt="${product.name}">
          <div class="cart-item-info">
            <h4><a href="product.html?id=${product.id}">${product.name}</a></h4>
            <p>Size: ${item.size} • Color: ${product.color}</p>
            <div class="product-price" style="margin-bottom:0">
              <span class="price-current">₹${product.price}</span>
              <span class="price-original">₹${product.mrp}</span>
            </div>
            <div class="cart-item-actions-row">
              <div class="qty-selector">
                <button onclick="Store.updateQty(${item.id}, '${item.size}', ${item.qty - 1})">−</button>
                <span>${item.qty}</span>
                <button onclick="Store.updateQty(${item.id}, '${item.size}', ${item.qty + 1})">+</button>
              </div>
              <button class="remove-btn" onclick="Store.removeFromCart(${item.id}, '${item.size}')">Remove</button>
              <button class="remove-btn" onclick="Store.toggleWishlist(${product.id})">${Store.isWishlisted(product.id) ? 'Saved' : 'Save for Later'}</button>
            </div>
          </div>
        </div>
        <div style="font-family:var(--font-heading);font-weight:700;font-size:1.125rem">₹${itemTotal}</div>
      </div>`;
  });

  container.innerHTML = html;

  const shipping = subtotal >= 999 ? 0 : 99;
  const total = subtotal + shipping;

  if (sidebar) {
    sidebar.style.display = 'block';
    sidebar.innerHTML = `
      <div class="cart-summary-box">
        <h3>Order Summary</h3>
        <div class="summary-row"><span>Subtotal (${Store.getCartCount()} items)</span><span>₹${subtotal}</span></div>
        <div class="summary-row discount"><span>Discount</span><span>−₹${totalDiscount}</span></div>
        <div class="summary-row"><span>Shipping</span><span>${shipping === 0 ? 'FREE' : '₹' + shipping}</span></div>
        <div class="summary-row total"><span>Total</span><span>₹${total}</span></div>
        <div style="font-size:0.8125rem;color:var(--gray-500);margin-top:var(--space-1)">Inclusive of all taxes</div>
        <a href="checkout.html" class="btn btn-primary btn-full" style="margin-top:var(--space-3)">Proceed to Checkout</a>
        <div class="gift-options" style="margin-top:var(--space-3)">
          <h4>🎁 Gift Options</h4>
          <label class="gift-option"><input type="checkbox"> Premium Gift Wrap (+₹49)</label>
          <label class="gift-option"><input type="checkbox"> Luxury Gift Box (+₹99)</label>
        </div>
      </div>
      <div class="free-shipping-bar" style="margin-top:var(--space-3)">
        <p>${subtotal >= 999 ? '🎉 Free shipping unlocked!' : `Add ₹${999 - subtotal} more for FREE shipping`}</p>
        <div class="progress-track"><div class="progress-fill" style="width:${Math.min(100, (subtotal/999)*100)}%"></div></div>
      </div>`;
  }
}

// ─── Expose to window ───
window.Store = Store;
window.renderProductCard = renderProductCard;
window.renderCartPage = renderCartPage;
window.openCartDrawer = openCartDrawer;
window.closeCartDrawer = closeCartDrawer;
window.showToast = showToast;
window.PRODUCTS = PRODUCTS;
