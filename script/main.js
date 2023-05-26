function openTab(evt, cityName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("services_tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("services_tab_tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "flex";
    evt.currentTarget.className += " active";
  }

  $(document).ready(function(){
    $('.slider-services').slick({
        arrows: true,
        dots: false,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        fade: false,
        swipe: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [
          {
            breakpoint: 1700,
            settings: {
              slidesToShow: 3,
              arrows: false,
            }
          },
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 2,
              arrows: false,
            }
          },
          {
          breakpoint: 780,
          settings: {
              slidesToShow: 1,
              centerMode: true,
              arrows: false,
              variableWidth: true,
          }
          }
          ]
    });
  });
  $('.part_of_iconik_content').slick({
    dots: false,
    infinite: false,
    arrows: false,
    swipe: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: $('.prev-icon'),
    nextArrow: $('.next-icon'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          swipe: true,
          arrows: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          swipe: true,
          arrows: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          swipe: true,
          arrows: true,
        }
      }
    ]
  });
  $('.iconik_managers-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: $('.manager-prev'),
    nextArrow: $('.manager-next'),
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          arrows: false,
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
          variableWidth: true
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
          variableWidth: true
        }
      }
    ]
  });