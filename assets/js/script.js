
$(document).ready(function () {

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('#navbarWrapper').addClass('is-sticky');
        } else {
            $('#navbarWrapper').removeClass('is-sticky');
        }
    });

    // Typed.js (Typer effect in Hero)
    var typed = new Typed('#typed-text', {
        strings: ['Exporters', 'Manufacturers', 'Global Sellers'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        backDelay: 2000
    });



    // CounterUp Plugin
    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });

    // jQuery Filter Logic for Events
    $('.filter-btn').click(function () {
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');

        var filterValue = $(this).attr('data-filter');
        if (filterValue == 'all') {
            $('.filter-item').show(400);
        } else {
            $('.filter-item').not('.' + filterValue).hide(400);
            $('.filter-item').filter('.' + filterValue).show(400);
        }
    });

    // Scroll Animations
    setTimeout(() => {
        $('.hero-section .anim-element').addClass('is-visible');
    }, 100);

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $(entry.target).addClass('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    $('.anim-element:not(.hero-section .anim-element)').each(function () {
        observer.observe(this);
    });

});
function generateFadingBlocks(containerId, numBlocks) {
    const container = document.getElementById(containerId);

    for (let i = 0; i < numBlocks; i++) {
        const block = document.createElement('div');
        block.className = 'block small-block';

        // Calculate opacity: starts near 1 and fades out to ~0.2
        // We use an easing factor so it doesn't disappear completely
        const opacity = 1 - (i / numBlocks) * 1;
        block.style.opacity = opacity;

        container.appendChild(block);
    }
}

// Generate35 small blocks for the red row
generateFadingBlocks('redRow', 35);

// Generate 35 slightly wider small blocks for the orange row
generateFadingBlocks('orangeRow', 35);

// Generate 35 small blocks for the red row
generateFadingBlocks('redRow2', 35);

// Generate 35 slightly wider small blocks for the orange row
generateFadingBlocks('orangeRow2', 35);

// Generate 35 small blocks for the red row for why alibaba.com

generateFadingBlocks('redRow3', 35);

// Generate 35 slightly wider small blocks for the orange row for why alibaba.com
generateFadingBlocks('orangeRow3', 35);

// Generate 35 small blocks for the red row for taining

generateFadingBlocks('redRow4', 35);

// Generate 35 slightly wider small blocks for the orange row for training
generateFadingBlocks('orangeRow4', 35);

// Generate 35 small blocks for the red row for event

generateFadingBlocks('redRow5', 35);

// Generate 35 slightly wider small blocks for the orange row for event
generateFadingBlocks('orangeRow5', 35);
// Generate 35 small blocks for the red row for news

generateFadingBlocks('redRow6', 35);

// Generate 35 slightly wider small blocks for the orange row for news
generateFadingBlocks('orangeRow6', 35);

function whoContent() {
    const moreText = document.getElementById("who-more-content");
    const btnText = document.getElementById("who-read-more-btn");

    if (moreText.classList.contains("hidden")) {
        // Show content
        moreText.classList.remove("hidden");
        moreText.classList.add("expanded-text");
        btnText.innerHTML = 'Read Less<i class= "fa-solid fa-chevron-up ms-1" style="font-size: 0.7em;"></i>';
    } else {
        // Hide content
        moreText.classList.add("hidden");
        moreText.classList.remove("expanded-text");
        btnText.innerHTML = 'Read More<i class= "fa-solid fa-chevron-down ms-1" style="font-size: 0.7em;"></i>';
    }
}
function whatContent() {
    const moreText = document.getElementById("what-more-content");
    const btnText = document.getElementById("what-read-more-btn");

    if (moreText.classList.contains("hidden")) {
        // Show content
        moreText.classList.remove("hidden");
        moreText.classList.add("expanded-text");
        btnText.innerHTML = 'Read Less<i class= "fa-solid fa-chevron-up ms-1" style="font-size: 0.7em;"></i>';
    } else {
        // Hide content
        moreText.classList.add("hidden");
        moreText.classList.remove("expanded-text");
        btnText.innerHTML = 'Read More<i class= "fa-solid fa-chevron-down ms-1" style="font-size: 0.7em;"></i>';
    }
}
function storyContent() {
    const moreText = document.getElementById("story-more-content");
    const btnText = document.getElementById("story-read-more-btn");

    if (moreText.classList.contains("hidden")) {
        // Show content
        moreText.classList.remove("hidden");
        moreText.classList.add("expanded-text");
        btnText.innerHTML = 'Read Less<i class= "fa-solid fa-chevron-up ms-1" style="font-size: 0.7em;"></i>';
    } else {
        // Hide content
        moreText.classList.add("hidden");
        moreText.classList.remove("expanded-text");
        btnText.innerHTML = 'Read More<i class= "fa-solid fa-chevron-down ms-1" style="font-size: 0.7em;"></i>';
    }
}

