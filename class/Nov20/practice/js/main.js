$(document).ready(function() {
    $(".rabbit").mouseenter(function() {
        var _index = $(this).index();
        AnimateRotate(_index*2+0, ".ear", 0, -5);
        AnimateRotate(_index*2+1, ".ear", 0, 5);
        AnimateRotate(_index, ".lhand", 20, 25);
        AnimateRotate(_index, ".rhand", -20, -25);
        $(".body").eq(_index).animate({
            top: "+=20px",
            height: "-=10px"
        });

        $(this).children().not($(this).find(".body, .leg, .shadow")).animate({
            top: "+=20px"
        });

        $(".shadow").eq(_index).animate({
            left: "-=5px",
            width: "+=10px"
        });

        $(this).children(".leg").animate({
            top: "+=10px",
            height: "-=10px",
            width: "+=4px",
            left: "-=2px"
        });

    });

    $(".rabbit").mouseleave(function() {
        var _index = $(this).index();

        $(".body").eq(_index).animate({
            top: "-=20px",
            height: "+=10px"
        });

        $(this).children().not($(this).find(".body, .leg, .shadow")).animate({
            top: "-=20px"
        });

        $(".shadow").eq(_index).animate({
            left: "+=5px",
            width: "-=10px"
        });

        $(this).children(".leg").animate({
            top: "-=10px",
            height: "+=10px",
            width: "-=4px",
            left: "+=2px"
        });
    });
});

function AnimateRotate(id, part, ori, angle) {
    var $elem = $(part).eq(id);
    $({deg: ori}).animate({deg: angle}, {
        duration: 500,
        step: function(now) {
            $elem.css({
                transform: 'rotate(' + now + 'deg)'
            });
        }
    });
}
