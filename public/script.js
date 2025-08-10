// Samsung Homepage Animation Controller
document.addEventListener('DOMContentLoaded', function() {
    
    // Search Functionality
    const searchInput = document.getElementById('searchInput');
    const searchDropdown = document.getElementById('searchDropdown');
    const searchItems = document.querySelectorAll('.search-item');
    
    if (searchInput && searchDropdown) {
        // Show dropdown when input is focused
        searchInput.addEventListener('focus', function() {
            searchDropdown.classList.remove('invisible', 'opacity-0', 'transform', '-translate-y-2');
            searchDropdown.classList.add('opacity-100', 'translate-y-0', 'visible');
        });
        
        // Show dropdown on input click
        searchInput.addEventListener('click', function() {
            searchDropdown.classList.remove('invisible', 'opacity-0', 'transform', '-translate-y-2');
            searchDropdown.classList.add('opacity-100', 'translate-y-0', 'visible');
        });
        
        // Hide dropdown when clicking outside
        document.addEventListener('click', function(event) {
            if (!searchInput.contains(event.target) && !searchDropdown.contains(event.target)) {
                searchDropdown.classList.add('invisible', 'opacity-0', 'transform', '-translate-y-2');
                searchDropdown.classList.remove('opacity-100', 'translate-y-0', 'visible');
            }
        });
        
        // Filter search results as user types
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase().trim();
            
            if (searchTerm === '') {
                // Show all items when search is empty
                searchItems.forEach(item => {
                    item.style.display = 'block';
                });
                return;
            }
            
            searchItems.forEach(item => {
                const itemName = item.getAttribute('data-name');
                if (itemName && itemName.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
    
    // Section elements
    const washingMachineSection = document.querySelector('.washing-machine-section');
    const galaxyWatchSection = document.querySelector('.galaxy-watch-section');
    const galaxyFoldSection = document.querySelector('.galaxy-fold-section');
    const galaxyWatchContent = document.querySelector('.galaxy-watch-content');
    const galaxyWatchTextContainer = document.querySelector('.galaxy-watch-text-container');
    const galaxyWatchTitle = document.querySelector('.galaxy-watch-title');
    const galaxyWatchSubtitle = document.querySelector('.galaxy-watch-subtitle');
    const galaxyWatchButton = document.querySelector('.galaxy-watch-button');
    
    // Galaxy S25 Ultra Section Elements
    const galaxyS25UltraSection = document.querySelector('.galaxy-s25-ultra-section');
    const galaxyS25UltraContent = document.querySelector('.galaxy-s25-ultra-content');
    const galaxyS25UltraImage = document.querySelector('.galaxy-s25-ultra-image');

    // Video pause functionality
    const video = document.getElementById('heroVideo');
    const pauseButton = document.getElementById('pauseButton');
    let isPaused = false;

    if (pauseButton && video) {
        pauseButton.addEventListener('click', function() {
            if (isPaused) {
                video.play();
                pauseButton.innerHTML = `
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                    </svg>
                `;
                isPaused = false;
            } else {
                video.pause();
                pauseButton.innerHTML = `
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                `;
                isPaused = true;
            }
        });
    }

    // Function to trigger washing machine animations
    function triggerWashingMachineAnimation() {
        // First fade in the section
        washingMachineSection.classList.add('animate-in');
        
        // Then add a zoom effect after a delay
        setTimeout(() => {
            washingMachineSection.classList.add('zoom-effect');
        }, 500);
    }

    // Function to reset washing machine animations
    function resetWashingMachineAnimation() {
        washingMachineSection.classList.remove('animate-in');
        washingMachineSection.classList.remove('zoom-effect');
    }

    // Function to trigger galaxy watch animations
    function triggerGalaxyWatchAnimation() {
        // First fade in the section
        galaxyWatchSection.classList.add('animate-in');
        
        // Then animate each element with increasing delays for a cascade effect
        setTimeout(() => galaxyWatchContent.classList.add('animate-in'), 400);
        setTimeout(() => galaxyWatchTextContainer.classList.add('animate-in'), 700);
        
        // Animate the title text letter by letter
        setTimeout(() => {
            // Get the title text
            const titleText = galaxyWatchTitle.textContent;
            // Clear the title
            galaxyWatchTitle.textContent = '';
            
            // Create a span for each letter with animation class
            for (let i = 0; i < titleText.length; i++) {
                const letterSpan = document.createElement('span');
                letterSpan.className = 'letter-animation';
                letterSpan.textContent = titleText[i];
                galaxyWatchTitle.appendChild(letterSpan);
                
                // Animate each letter with staggered delay
                setTimeout(() => {
                    letterSpan.classList.add('animate');
                }, 100 * i);
            }
        }, 1000);
        
        // Animate the subtitle text letter by letter
        setTimeout(() => {
            // Get the subtitle element
            const subtitleElement = galaxyWatchSubtitle.querySelector('h3');
            if (!subtitleElement) return;
            
            // Get the subtitle text
            const subtitleText = subtitleElement.textContent;
            // Clear the subtitle
            subtitleElement.textContent = '';
            
            // Create a span for each letter with animation class
            for (let i = 0; i < subtitleText.length; i++) {
                const letterSpan = document.createElement('span');
                letterSpan.className = 'letter-animation';
                letterSpan.textContent = subtitleText[i];
                subtitleElement.appendChild(letterSpan);
                
                // Animate each letter with staggered delay - faster animation
                setTimeout(() => {
                    letterSpan.classList.add('animate');
                }, 70 * i); // Reduced from 100ms to 70ms for faster animation
            }
        }, 1300);
        
        // Animate the button with special text effect
        setTimeout(() => {
            // Get the button text
            const buttonText = galaxyWatchButton.textContent.trim();
            // Clear the button
            galaxyWatchButton.textContent = '';
            
            // Create a container for the text
            const textContainer = document.createElement('span');
            textContainer.style.position = 'relative';
            textContainer.style.zIndex = '2';
            galaxyWatchButton.appendChild(textContainer);
            
            // Create a span for each letter with animation class
            for (let i = 0; i < buttonText.length; i++) {
                const letterSpan = document.createElement('span');
                letterSpan.className = 'letter-animation';
                letterSpan.textContent = buttonText[i];
                letterSpan.style.transitionDelay = `${0.05 * i}s`;
                textContainer.appendChild(letterSpan);
                
                // Animate each letter with staggered delay - faster animation
                setTimeout(() => {
                    letterSpan.classList.add('animate');
                }, 40 * i); // Reduced from 50ms to 40ms for faster animation
            }
            
            // Add the animate-in class to the button for the shine effect
            galaxyWatchButton.classList.add('animate-in');
        }, 1800);
    }

    // Function to reset Galaxy Watch animations
    function resetGalaxyWatchAnimation() {
        galaxyWatchSection.classList.remove('animate-in');
        galaxyWatchContent.classList.remove('animate-in');
        galaxyWatchTextContainer.classList.remove('animate-in');
        galaxyWatchButton.classList.remove('animate-in');
        
        // Reset the title to original text
        const titleLetters = galaxyWatchTitle.querySelectorAll('.letter-animation');
        if (titleLetters.length > 0) {
            // Remove all letter spans and restore original text
            galaxyWatchTitle.textContent = 'Galaxy Watch8';
        } else {
            // If no letter spans yet, just remove the animate-in class
            galaxyWatchTitle.classList.remove('animate-in');
        }
        
        // Reset the subtitle to original text
        const subtitleElement = galaxyWatchSubtitle.querySelector('h3');
        if (subtitleElement) {
            const subtitleLetters = subtitleElement.querySelectorAll('.letter-animation');
            if (subtitleLetters.length > 0) {
                // Remove all letter spans and restore original text
                subtitleElement.textContent = 'Galaxy AI';
            } else {
                // If no letter spans yet, just remove the animate-in class
                galaxyWatchSubtitle.classList.remove('animate-in');
            }
        }
        
        // Reset the button to original text
        const buttonLetters = galaxyWatchButton.querySelectorAll('.letter-animation');
        if (buttonLetters.length > 0) {
            // Remove all letter spans and restore original text
            galaxyWatchButton.textContent = 'Experience live demo';
        }
    }

    // Function to trigger Galaxy S25 Ultra animations
    function triggerGalaxyS25UltraAnimation() {
        // First fade in the section
        galaxyS25UltraSection.classList.add('animate-in');
        
        // Then animate each element with a cascade effect
        setTimeout(() => {
            galaxyS25UltraContent.style.opacity = '1';
            galaxyS25UltraContent.style.transform = 'translateY(0)';
        }, 300);
        
        setTimeout(() => {
            galaxyS25UltraImage.style.opacity = '1';
            galaxyS25UltraImage.style.transform = 'translateX(0)';
        }, 600);
    }

    // Function to reset Galaxy S25 Ultra animations
    function resetGalaxyS25UltraAnimation() {
        galaxyS25UltraSection.classList.remove('animate-in');
        galaxyS25UltraContent.style.opacity = '0';
        galaxyS25UltraContent.style.transform = 'translateY(10px)';
        galaxyS25UltraImage.style.opacity = '0';
        galaxyS25UltraImage.style.transform = 'translateX(10px)';
    }

    // Function to trigger galaxy fold animations with staggered product animations
    function triggerGalaxyFoldAnimation() {
        // First fade in the section
        galaxyFoldSection.classList.add('animate-in');
    }

    // Function to reset galaxy fold animations
    function resetGalaxyFoldAnimation() {
        galaxyFoldSection.classList.remove('animate-in');
    }

    // Intersection Observer for section animations
    const sections = document.querySelectorAll('.section-animate');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // When section becomes visible
            if (entry.isIntersecting) {
                const section = entry.target;
                
                // Trigger the appropriate animation based on section class
                if (section.classList.contains('galaxy-s-section')) {
                    triggerGalaxyS25UltraAnimation();
                } else if (section.classList.contains('washing-machine-section')) {
                    triggerWashingMachineAnimation();
                } else if (section.classList.contains('galaxy-watch-section')) {
                    triggerGalaxyWatchAnimation();
                } else if (section.classList.contains('galaxy-fold-section')) {
                    triggerGalaxyFoldAnimation();
                }
                
                // Stop observing after animation is triggered
                sectionObserver.unobserve(section);
                
                // Re-observe after a delay to reset animations when scrolled away
                setTimeout(() => {
                    const resetObserver = new IntersectionObserver((resetEntries) => {
                        resetEntries.forEach(resetEntry => {
                            if (!resetEntry.isIntersecting) {
                                // Reset the appropriate animation based on section class
                                if (section.classList.contains('galaxy-s-section')) {
                                    resetGalaxyS25UltraAnimation();
                                } else if (section.classList.contains('washing-machine-section')) {
                                    resetWashingMachineAnimation();
                                } else if (section.classList.contains('galaxy-watch-section')) {
                                    resetGalaxyWatchAnimation();
                                } else if (section.classList.contains('galaxy-fold-section')) {
                                    resetGalaxyFoldAnimation();
                                }
                                
                                // Stop observing after reset
                                resetObserver.unobserve(section);
                                
                                // Re-observe with the main observer
                                setTimeout(() => {
                                    sectionObserver.observe(section);
                                }, 500);
                            }
                        });
                    }, { threshold: 0.2 });
                    
                    resetObserver.observe(section);
                }, 1000);
            }
        });
    }, { threshold: 0.5 });
    
    // Start observing all sections
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    // Shop dropdown enhancement
    const shopLinks = document.querySelectorAll('.shop-link');
    shopLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const dropdown = this.nextElementSibling;
            
            // Toggle active class
            this.classList.toggle('active');
            
            // Toggle dropdown visibility with animation
            if (dropdown.classList.contains('hidden')) {
                dropdown.classList.remove('hidden');
                setTimeout(() => {
                    dropdown.classList.remove('opacity-0', 'translate-y-1');
                    dropdown.classList.add('opacity-100', 'translate-y-0');
                }, 10);
            } else {
                dropdown.classList.remove('opacity-100', 'translate-y-0');
                dropdown.classList.add('opacity-0', 'translate-y-1');
                setTimeout(() => {
                    dropdown.classList.add('hidden');
                }, 300);
            }
        });
    });

    // Enhanced button hover effects
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
            this.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Cart functionality
    const cartLink = document.getElementById('cartLink');
    const cartBadge = document.getElementById('cartBadge');
    let cartItems = JSON.parse(localStorage.getItem('samsungCartItems')) || [];
    
    // Update cart badge count
    function updateCartBadge() {
        if (cartBadge) {
            if (cartItems.length > 0) {
                cartBadge.textContent = cartItems.length;
                cartBadge.classList.remove('hidden');
            } else {
                cartBadge.classList.add('hidden');
            }
        }
    }
    
    // Initialize cart badge
    updateCartBadge();
    
    // Prevent default action for cart link if it's just a placeholder
    if (cartLink) {
        cartLink.addEventListener('click', function(e) {
            // If there are no items, prevent navigation and show a message
            if (cartItems.length === 0) {
                e.preventDefault();
                alert('Your cart is empty. Add some products first!');
            }
        });
    }
    
    // Add to cart functionality for buy buttons
    const buyButtons = document.querySelectorAll('.buy-button');
    buyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get product info from data attributes
            const productId = this.getAttribute('data-product-id');
            const productName = this.getAttribute('data-product-name');
            const productPrice = this.getAttribute('data-product-price');
            const productImage = this.getAttribute('data-product-image');
            
            // Create product object
            const product = {
                id: productId,
                name: productName,
                price: productPrice,
                image: productImage,
                quantity: 1
            };
            
            // Check if product already exists in cart
            const existingProductIndex = cartItems.findIndex(item => item.id === productId);
            
            if (existingProductIndex > -1) {
                // Increment quantity if product already in cart
                cartItems[existingProductIndex].quantity += 1;
            } else {
                // Add new product to cart
                cartItems.push(product);
            }
            
            // Save updated cart to localStorage
            localStorage.setItem('samsungCartItems', JSON.stringify(cartItems));
            
            // Update cart badge
            updateCartBadge();
            
            // Show success message
            alert(`${productName} added to your cart!`);
        });
    });

    // Add click ripple effect to all buttons
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple-effect');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add CSS for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        .ripple-effect {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.4);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});
