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

const $skillsScroll = $skills.offsetTop - 180;
const $workExpScroll = $workExp.offsetTop - 180;

const listTagLis = {
    about: document.querySelector('#aside .menu a[href="#about"]')
        .parentElement,
    skills: document.querySelector('#aside .menu a[href="#skills"]')
        .parentElement,
    workExp: document.querySelector('#aside .menu a[href="#work-experience"]')
        .parentElement,
    contact: document.querySelector('#aside .menu a[href="#contact"]')
        .parentElement,
};

$(window).on("scroll resize load", function () {
    var scrollTop = $(this).scrollTop();
    if (scrollTop < $skillsScroll) {
        addClassActive("about", listTagLis);
    } else if (scrollTop >= $skillsScroll && scrollTop < $workExpScroll) {
        addClassActive("skills", listTagLis);
    } else if (scrollTop >= $workExpScroll) {
        addClassActive("workExp", listTagLis);
    } 
    if(scrollTop + $(window).height() == $(document).height()) {
        addClassActive("contact", listTagLis);
    }
});

function addClassActive(classEl, listEle) {
    for (const key in listEle) {
        if (key !== classEl) {
            listEle[key].classList.remove("active");
        }
    }
    listEle[classEl].classList.add("active");
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


const listBoxItems = {
    all: document.querySelector('#main #about .box .all'),
    backend: document.querySelector('#main #about .box .backend'),
    frontend: document.querySelector('#main #about .box .frontend'),
};

function showProject(status) {
    addClassActive(status, listBoxItems);
    const $project = document.querySelector('#main #about .project');
    const $items = $project.querySelectorAll('.item');
    $project.classList.remove('d-none');

    switch (status) {
        case 'all':
            $items.forEach(function (item) {
                item.classList.remove('d-none');
            });
            break;
        default:
            $items.forEach(function (item) {
                if (item.classList.contains(status)) {
                    item.classList.remove('d-none');
                }
                else {
                    item.classList.add('d-none');
                }
            });
            break;
    }
}

// Responsive Menu Aside
const $aside = $('#aside');
let $asideToggle = $aside.clone();
$asideToggle = $asideToggle.removeClass('aside').addClass('aside-toggle').addClass('d-none').attr('id', 'aside-toggle');

let html = `<div class="toggle-icon" onclick="closeToggleMenu()"><i class="fas fa-bars"></i></div>`;
$aside.after(html);

$aside.after($asideToggle);
//add onclick function closeToggleMenu to tag <a></a>
let $asideToggleA = document.querySelectorAll('#aside-toggle .menu a.scrollTo');
$asideToggleA.forEach(function(item) {
    item.setAttribute('onclick', 'closeToggleMenu()');
})

function closeToggleMenu() {
    //display
    let $asideToggle = $('#aside-toggle');
    if ($asideToggle.hasClass('d-none')) {
        $asideToggle.removeClass('d-none');
        $('.toggle-icon i').removeClass('fas fa-bars').addClass('fas fa-times');
    } else {
        $asideToggle.addClass('d-none');
        $('.toggle-icon i').removeClass('fas fa-times').addClass('fas fa-bars');
    }
}