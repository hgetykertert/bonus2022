$(document).ready(function () {
    const owl = $('.owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 4
            }
        }
    });

    setupOwnCarouselListeners();

    function setupOwnCarouselListeners() {
        $('i.fa-arrow-left').click(function () {
            owl.trigger('prev.owl.carousel');
        })

        $('i.fa-arrow-right').click(function () {
            owl.trigger('next.owl.carousel');
        })
    }
});