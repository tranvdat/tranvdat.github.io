$(document).ready(function () {
    /* ======= Chart ========= */

    $(".chart-primary").easyPieChart({
        barColor: '#00d1b2',
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
        barColor: '#ff3860',
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
        barColor: '#ffdd57',
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
