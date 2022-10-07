    var splide = new Splide('.splide' ,{
        type    : 'loop',
        perPage : 5,
        perMove : 1,
        autoplay: true,
        breakpoints:{
            1320:{
                perPage: 4,
            },
            1075:{
                perPage: 3,
            },
            812:{
                perPage: 2,
            },
            550:{
                perPage: 1,
            },
        }, 
    });
    splide.mount();


