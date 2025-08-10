// Galaxy Z Flip7 Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Slideshow functionality
    const slides = document.getElementById('slides');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotIndicators = document.querySelectorAll('.dot-indicator');
    let currentSlide = 0;
    const totalSlides = 3; // Total number of slides

    // Function to update the slideshow
    function updateSlideshow() {
        // Update slide position
        slides.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
        
        // Update dot indicators
        dotIndicators.forEach(function(dot, index) {
            if (index === currentSlide) {
                dot.classList.add('bg-blue-600');
                dot.classList.remove('bg-gray-400');
            } else {
                dot.classList.add('bg-gray-400');
                dot.classList.remove('bg-blue-600');
            }
        });
    }

    // Event listeners for navigation buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateSlideshow();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlideshow();
        });
    }

    // Event listeners for dot indicators
    dotIndicators.forEach(function(dot, index) {
        dot.addEventListener('click', function() {
            currentSlide = index;
            updateSlideshow();
        });
    });

    // Initialize slideshow
    updateSlideshow();

    // Color selection functionality
    const colorOptions = {
        blue: document.getElementById('blueOption'),
        shadow: document.getElementById('shadowOption'),
        jetblack: document.getElementById('jetblackOption'),
        coralred: document.getElementById('coralredOption')
    };

    const phoneImages = {
        blue: document.getElementById('bluePhone'),
        shadow: document.getElementById('shadowPhone'),
        jetblack: document.getElementById('jetblackPhone'),
        coralred: document.getElementById('coralredPhone')
    };

    // Create availability message element
    const availabilityMessage = document.createElement('div');
    availabilityMessage.className = 'fixed top-20 right-5 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg shadow-lg z-50 transform transition-all duration-500 hidden';
    document.body.appendChild(availabilityMessage);
    
    // Create unavailable product message element for Shadow color
    const unavailableProductMessage = document.createElement('div');
    unavailableProductMessage.className = 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-100 text-yellow-800 px-6 py-4 rounded-lg shadow-lg text-center font-semibold text-lg hidden';
    unavailableProductMessage.textContent = 'This product isn\'t available in your city';
    document.querySelector('#phoneImages').appendChild(unavailableProductMessage);
    
    // Function to select a color
    window.selectColor = function(color) {
        // Update color options
        for (const key in colorOptions) {
            if (key === color) {
                colorOptions[key].classList.remove('border-gray-300');
                colorOptions[key].classList.add('border-2', 'border-blue-500');
                if (colorOptions[key].querySelector('span')) {
                    colorOptions[key].querySelector('span').classList.add('font-semibold', 'text-gray-900');
                    colorOptions[key].querySelector('span').classList.remove('font-medium', 'text-gray-700');
                }
            } else {
                colorOptions[key].classList.add('border-gray-300');
                colorOptions[key].classList.remove('border-2', 'border-blue-500');
                if (colorOptions[key].querySelector('span')) {
                    colorOptions[key].querySelector('span').classList.remove('font-semibold', 'text-gray-900');
                    colorOptions[key].querySelector('span').classList.add('font-medium', 'text-gray-700');
                }
            }
        }

        // Special handling for Shadow color
        if (color === 'shadow') {
            // Hide all phone images
            for (const key in phoneImages) {
                phoneImages[key].classList.add('opacity-0');
            }
            
            // Show unavailable message in place of the image
            unavailableProductMessage.classList.remove('hidden');
            
            // Show availability message notification
            availabilityMessage.textContent = 'This product isn\'t available in your city';
            availabilityMessage.classList.remove('hidden');
            
            // Hide the notification message after 3 seconds
            setTimeout(function() {
                availabilityMessage.classList.add('hidden');
            }, 3000);
        } else {
            // Normal behavior for other colors
            // Update phone images
            for (const key in phoneImages) {
                if (key === color) {
                    phoneImages[key].classList.remove('opacity-0');
                } else {
                    phoneImages[key].classList.add('opacity-0');
                }
            }
            
            // Hide unavailable message
            unavailableProductMessage.classList.add('hidden');
        }
    };

    // Storage selection functionality
    const storage256 = document.getElementById('storage256');
    const storage512 = document.getElementById('storage512');

    window.selectStorage = function(size) {
        if (size === '256') {
            storage256.classList.remove('border-gray-300');
            storage256.classList.add('border-2', 'border-blue-500');
            if (storage256.querySelector('span:first-child')) {
                storage256.querySelector('span:first-child').classList.add('font-semibold', 'text-gray-900');
                storage256.querySelector('span:first-child').classList.remove('font-medium', 'text-gray-700');
            }
            
            storage512.classList.add('border-gray-300');
            storage512.classList.remove('border-2', 'border-blue-500');
            if (storage512.querySelector('span:first-child')) {
                storage512.querySelector('span:first-child').classList.remove('font-semibold', 'text-gray-900');
                storage512.querySelector('span:first-child').classList.add('font-medium', 'text-gray-700');
            }
        } else if (size === '512') {
            storage512.classList.remove('border-gray-300');
            storage512.classList.add('border-2', 'border-blue-500');
            if (storage512.querySelector('span:first-child')) {
                storage512.querySelector('span:first-child').classList.add('font-semibold', 'text-gray-900');
                storage512.querySelector('span:first-child').classList.remove('font-medium', 'text-gray-700');
            }
            
            storage256.classList.add('border-gray-300');
            storage256.classList.remove('border-2', 'border-blue-500');
            if (storage256.querySelector('span:first-child')) {
                storage256.querySelector('span:first-child').classList.remove('font-semibold', 'text-gray-900');
                storage256.querySelector('span:first-child').classList.add('font-medium', 'text-gray-700');
            }
        }
    };

    // Add to cart functionality
    const addToCartBtn = document.getElementById('addToCartBtn');
    const addToCartColorBtn = document.getElementById('addToCartColorBtn');
    const loginMessage = document.getElementById('loginMessage');
    const loginMessageColor = document.getElementById('loginMessageColor');
    const cartStatus = document.getElementById('cartStatus');
    const cartMessage = document.getElementById('cartMessage');
    const colorCartStatus = document.getElementById('colorCartStatus');
    const colorCartMessage = document.getElementById('colorCartMessage');
    
    // Function to check if user is logged in
    function isUserLoggedIn() {
        const userData = localStorage.getItem('samsungUser');
        return !!userData; // Returns true if userData exists, false otherwise
    }

    // Create cart limit message element
    const cartLimitMessage = document.createElement('div');
    cartLimitMessage.className = 'fixed top-20 right-5 bg-red-100 text-red-800 px-4 py-2 rounded-lg shadow-lg z-50 transform transition-all duration-500 hidden';
    document.body.appendChild(cartLimitMessage);
    
    // Function to add product to cart
    function addToCart() {
        // Check if user is logged in
        if (!isUserLoggedIn()) {
            // Show login message
            if (loginMessage) {
                loginMessage.classList.remove('hidden');
                // Hide login message after 3 seconds
                setTimeout(function() {
                    loginMessage.classList.add('hidden');
                }, 3000);
            }
            if (loginMessageColor) {
                loginMessageColor.classList.remove('hidden');
                // Hide login message after 3 seconds
                setTimeout(function() {
                    loginMessageColor.classList.add('hidden');
                }, 3000);
            }
            return;
        }

        // Get existing cart items
        let cartItems = JSON.parse(localStorage.getItem('samsungCartItems')) || [];
        
        // Check if cart already has 5 items
        if (cartItems.length >= 5) {
            // Show cart limit message
            cartLimitMessage.textContent = 'Your cart is full. Maximum 5 items allowed.';
            cartLimitMessage.classList.remove('hidden');
            
            // Hide the message after 3 seconds
            setTimeout(function() {
                cartLimitMessage.classList.add('hidden');
            }, 3000);
            
            return;
        }

        // Get product info
        const productName = 'Galaxy Z Flip7';
        let productStorage = '512 GB | 12 GB'; // Default storage
        let productPrice = '₹121999.00'; // Default price
        
        // Get storage info
        const storageElement = document.querySelector('.border-2.border-blue-500 span:first-child');
        if (storageElement) {
            productStorage = storageElement.textContent;
        }
        
        // Get the selected color from the color options
        let productColor = 'Blue'; // Default color
        
        // First try to find the selected color option
        const selectedColorOption = document.querySelector('.color-option.border-2.border-blue-500');
        if (selectedColorOption) {
            const colorSpan = selectedColorOption.querySelector('span');
            if (colorSpan) {
                productColor = colorSpan.textContent.trim();
                console.log('Selected color from option:', productColor);
            }
        }
        
        // If that fails, try to get it from the visible phone image
        if (productColor === 'Blue' || !productColor) {
            const visiblePhoneImg = document.querySelector('#phoneImages img:not(.opacity-0)');
            if (visiblePhoneImg) {
                productColor = visiblePhoneImg.alt.split(' ').pop();
                console.log('Selected color from image:', productColor);
            }
        }
        
        // Log the final selected color for debugging
        console.log('Final selected color:', productColor);
        
        // Get price info
        const priceElement = document.querySelector('.border-2.border-blue-500 span:last-child');
        if (priceElement) {
            productPrice = priceElement.textContent.split(' ').pop();
        }
        
        // Check if Shadow color is selected
        if (productColor === 'Shadow') {
            // Show availability message
            availabilityMessage.textContent = 'This product isn\'t available in your city';
            availabilityMessage.classList.remove('hidden');
            
            // Hide the message after 3 seconds
            setTimeout(function() {
                availabilityMessage.classList.add('hidden');
            }, 3000);
            
            return;
        }

        // Create a product object
        // Get the image URL of the selected phone
        let productImage = '';
        const bluePhone = document.getElementById('bluePhone');
        const shadowPhone = document.getElementById('shadowPhone');
        const jetblackPhone = document.getElementById('jetblackPhone');
        const coralredPhone = document.getElementById('coralredPhone');
        
        // Default fallback image URL in case we can't find the specific color image
        const fallbackImageUrl = 'https://images.samsung.com/in/smartphones/galaxy-z-flip7/buy/product_color_blueShadow_Tablet.png?imbypass=true';
        
        // Map color names to their respective image elements
        const colorToImageMap = {
            'Blue': bluePhone,
            'Shadow': shadowPhone,
            'Jet Black': jetblackPhone,
            'Coral Red': coralredPhone
        };
        
        // Try to get the image based on the exact color name
        if (colorToImageMap[productColor] && colorToImageMap[productColor].src) {
            productImage = colorToImageMap[productColor].src;
        } 
        // If not found, try to match with lowercase and without spaces
        else {
            const normalizedColor = productColor.toLowerCase().replace(/\s+/g, '');
            if (normalizedColor === 'blue' && bluePhone) {
                productImage = bluePhone.src;
            } else if (normalizedColor === 'shadow' && shadowPhone) {
                productImage = shadowPhone.src;
            } else if ((normalizedColor === 'jetblack' || normalizedColor === 'jet black') && jetblackPhone) {
                productImage = jetblackPhone.src;
            } else if ((normalizedColor === 'coralred' || normalizedColor === 'coral red') && coralredPhone) {
                productImage = coralredPhone.src;
            }
        }
        
        // If we couldn't get a product image, use the fallback
        if (!productImage) {
            productImage = fallbackImageUrl;
        }
        
        const product = {
            id: Date.now(),
            name: productName + ' (' + productStorage + ', ' + productColor + ')',
            price: productPrice,
            quantity: 1,
            storage: productStorage,
            color: productColor,
            image: productImage
        };

        // Log the product object for debugging
        console.log('Adding product to cart:', product);
        console.log('Product image URL:', product.image);
        
        // Test image loading
        if (product.image) {
            const testImg = new Image();
            testImg.onload = () => console.log(`Image loaded successfully: ${product.name} image`);
            testImg.onerror = () => console.error(`Failed to load image for: ${product.name}`);
            testImg.src = product.image;
        }
        
        // Add to cart
        cartItems.push(product);
        localStorage.setItem('samsungCartItems', JSON.stringify(cartItems));
        
        // Log the updated cart
        console.log('Updated cart items:', cartItems);

        // Update cart badge
        const cartBadge = document.getElementById('cartBadge');
        if (cartBadge) {
            cartBadge.textContent = cartItems.length;
            cartBadge.classList.remove('hidden');
        }

        // Show confirmation
        if (cartStatus) {
            cartStatus.classList.remove('hidden');
            cartMessage.textContent = 'Added ' + productName + ' (' + productStorage + ', ' + productColor + ') to your cart!';
        }

        if (colorCartStatus) {
            colorCartStatus.classList.remove('hidden');
            colorCartMessage.textContent = 'Added ' + productName + ' (' + productStorage + ', ' + productColor + ') to your cart!';
        }

        // Hide confirmation after 3 seconds
        setTimeout(function() {
            if (cartStatus) cartStatus.classList.add('hidden');
            if (colorCartStatus) colorCartStatus.classList.add('hidden');
        }, 3000);
    }

    // Add event listeners to add to cart buttons
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', addToCart);
    }

    if (addToCartColorBtn) {
        addToCartColorBtn.addEventListener('click', addToCart);
    }
});