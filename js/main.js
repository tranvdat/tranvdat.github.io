$(document).ready(function () {
    /* ======= ScrollTo ======= */
    $(".scrollTo").on("click", function (e) {
        //store hash
        var target = this.hash;

        e.preventDefault();

        $("body").scrollTo(target, 800, { offset: -60, axis: "y" });
    });

    /* ======= Fixed page nav when scrolled ======= */

    const $about = document.getElementById("about");
    const $skills = document.getElementById("skills");
    const $workExp = document.getElementById("work-experience");

    const $skillsScroll = $skills.offsetTop - 120;
    const $workExpScroll = $workExp.offsetTop - 120;

    const listTagLis = {
        'about': document.querySelector('#aside .menu a[href="#about"]').parentElement,
        'skills': document.querySelector('#aside .menu a[href="#skills"]').parentElement,
        'workExp': document.querySelector('#aside .menu a[href="#work-experience"]').parentElement,
        'contact': document.querySelector('#aside .menu a[href="#contact"]').parentElement,
    };

    $(window).on("scroll resize load", function () {
        var scrollTop = $(this).scrollTop();

        if (scrollTop < $skillsScroll) {
            addClassActive('about');
        }
        else if (scrollTop >= $skillsScroll && scrollTop < $workExpScroll) {
            addClassActive('skills');
        }
        else if (scrollTop >= $workExpScroll && scrollTop < 2000) {
            addClassActive('workExp');
        }
        else if (scrollTop >= 2000) {
            addClassActive('contact');
        }
    });

    function addClassActive(classEl) {
        for (const key in listTagLis) {
            if(key !== classEl) {
                listTagLis[key].classList.remove('active');
            }
        }
        listTagLis[classEl].className = 'active';
    }

    /* ======= Chart ========= */

    $(".chart-primary").easyPieChart({
        barColor: "#00d1b2",
        trackColor: "#fff",
        scaleColor: false,
        lineWidth: 8,
        animate: 1000,
        size: 180,
        onStep: function (from, to, percent) {
            $(this.el).find("span").text(Math.round(percent));
        },
    });

    $(".chart-danger").easyPieChart({
        barColor: "#ff3860",
        trackColor: "#fff",
        scaleColor: false,
        lineWidth: 8,
        animate: 1000,
        size: 180,
        onStep: function (from, to, percent) {
            $(this.el).find("span").text(Math.round(percent));
        },
    });

    $(".chart-warning").easyPieChart({
        barColor: "#ffdd57",
        trackColor: "#fff",
        scaleColor: false,
        lineWidth: 8,
        animate: 1000,
        size: 180,
        onStep: function (from, to, percent) {
            $(this.el).find("span").text(Math.round(percent));
        },
    });
});
