$('#frmae_slider').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    smartSpeed: 1500,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});


// dash_shorts
$('#dash_shorts').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 2500,
    center: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        }
    }
});

// dash_shorts
$('#testi_slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: false,
    smartSpeed: 2500,
    center: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        }
    }
});