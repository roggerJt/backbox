function randomNumber(a, e) { return Math.random() * (e - a) + a }

function randomBar(a, e) {
    var t = randomNumber(.95 * e, 1.05 * e),
        r = randomNumber(.95 * t, 1.05 * t);
    return { t: a.valueOf(), y: r }
}! function(a) {
    "use strict";
    var e = function() { this.$body = a("body"), this.charts = [] };
    e.prototype.respChart = function(e, t, r, o) {
        var n = e.get(0).getContext("2d"),
            i = a(e).parent();
        return function() {
            var l;
            switch (e.attr("width", a(i).width()), t) {
                case "Line":
                    l = new Chart(n, { type: "line", data: r, options: o });
                    break;
                case "Doughnut":
                    l = new Chart(n, { type: "doughnut", data: r, options: o });
                    break;
                case "Pie":
                    l = new Chart(n, { type: "pie", data: r, options: o });
                    break;
                case "Bar":
                    l = new Chart(n, { type: "bar", data: r, options: o });
                    break;
                case "Radar":
                    l = new Chart(n, { type: "radar", data: r, options: o });
                    break;
                case "PolarArea":
                    l = new Chart(n, { data: r, type: "polarArea", options: o })
            }
            return l
        }()
    }, e.prototype.initCharts = function() { var e = []; if (a("#line-chart-example").length > 0) { e.push(this.respChart(a("#line-chart-example"), "Line", { labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], datasets: [{ label: "Current Week", backgroundColor: "rgba(26, 128, 156, 0.3)", borderColor: "#1abc9c", data: [32, 42, 42, 62, 52, 75, 62] }, { label: "Previous Week", fill: !0, backgroundColor: "transparent", borderColor: "#f1556c", borderDash: [5, 5], data: [42, 58, 66, 93, 82, 105, 92] }] }, { maintainAspectRatio: !1, legend: { display: !1 }, tooltips: { intersect: !1 }, hover: { intersect: !0 }, plugins: { filler: { propagate: !1 } }, scales: { xAxes: [{ reverse: !0, gridLines: { color: "rgba(0,0,0,0.05)" } }], yAxes: [{ ticks: { stepSize: 20 }, display: !0, borderDash: [5, 5], gridLines: { color: "rgba(0,0,0,0)", fontColor: "#fff" } }] } })) } if (a("#bar-chart-example").length > 0) { e.push(this.respChart(a("#bar-chart-example"), "Bar", { labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], datasets: [{ label: "Sales Analytics", backgroundColor: "#4a81d4", borderColor: "#4a81d4", hoverBackgroundColor: "#4a81d4", hoverBorderColor: "#4a81d4", data: [65, 59, 80, 81, 56, 89, 40, 32, 65, 59, 80, 81] }, { label: "Dollar Rate", backgroundColor: "#e3eaef", borderColor: "#e3eaef", hoverBackgroundColor: "#e3eaef", hoverBorderColor: "#e3eaef", data: [89, 40, 32, 65, 59, 80, 81, 56, 89, 40, 65, 59] }] }, { maintainAspectRatio: !1, legend: { display: !1 }, scales: { yAxes: [{ gridLines: { display: !1 }, stacked: !1, ticks: { stepSize: 20 } }], xAxes: [{ barPercentage: .7, categoryPercentage: .5, stacked: !1, gridLines: { color: "rgba(0,0,0,0.01)" } }] } })) } if (a("#pie-chart-example").length > 0) { e.push(this.respChart(a("#pie-chart-example"), "Pie", { labels: ["Direct", "Affilliate", "Sponsored", "E-mail"], datasets: [{ data: [300, 135, 48, 154], backgroundColor: ["#19811b", "#fa5c7c", "#4fc6e1", "#ebeff2"], borderColor: "transparent" }] }, { maintainAspectRatio: !1, legend: { display: !1 } })) } if (a("#donut-chart-example").length > 0) { e.push(this.respChart(a("#donut-chart-example"), "Doughnut", { labels: ["Direct", "Affilliate", "Sponsored"], datasets: [{ data: [128, 78, 48], backgroundColor: ["#6c757d", "#1abc9c", "#ebeff2"], borderColor: "transparent", borderWidth: "3" }] }, { maintainAspectRatio: !1, cutoutPercentage: 60, legend: { display: !1 } })) } if (a("#polar-chart-example").length > 0) { e.push(this.respChart(a("#polar-chart-example"), "PolarArea", { labels: ["Direct", "Affilliate", "Sponsored", "E-mail"], datasets: [{ data: [251, 135, 48, 154], backgroundColor: ["#4a81d4", "#fa5c7c", "#4fc6e1", "#ebeff2"], borderColor: "transparent" }] })) } if (a("#radar-chart-example").length > 0) { e.push(this.respChart(a("#radar-chart-example"), "Radar", { labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"], datasets: [{ label: "Desktops", backgroundColor: "rgba(57,175,209,0.2)", borderColor: "#39afd1", pointBackgroundColor: "#39afd1", pointBorderColor: "#fff", pointHoverBackgroundColor: "#fff", pointHoverBorderColor: "#39afd1", data: [65, 59, 90, 81, 56, 55, 40] }, { label: "Tablets", backgroundColor: "rgba(161, 127, 224,0.2)", borderColor: "#a17fe0", pointBackgroundColor: "#a17fe0", pointBorderColor: "#fff", pointHoverBackgroundColor: "#fff", pointHoverBorderColor: "#a17fe0", data: [28, 48, 40, 19, 96, 27, 100] }] }, { maintainAspectRatio: !1 })) } return e }, e.prototype.init = function() {
        var e = this;
        Chart.defaults.global.defaultFontFamily = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif', e.charts = this.initCharts(), a(window).on("resize", function(t) { a.each(e.charts, function(a, e) { try { e.destroy() } catch (a) {} }), e.charts = e.initCharts() })
    }, a.ChartJs = new e, a.ChartJs.Constructor = e
}(window.jQuery),
function(a) {
    "use strict";
    a.ChartJs.init()
}(window.jQuery);
/* for (var dateFormat = "MMMM DD YYYY", date = moment("April 01 2017", dateFormat), data = [randomBar(date, 30)], labels = [date]; data.length < 24;)(date = date.clone().add(1, "d")).isoWeekday() <= 5 && (data.push(randomBar(date, data[data.length - 1].y)), labels.push(date));
var ctx = document.getElementById("financial-report").getContext("2d");
ctx.canvas.width = 1e3, ctx.canvas.height = 300;
var cfg = { type: "bar", data: { labels: labels, datasets: [{ label: "Consultas", data: data, type: "bar", pointRadius: 0, fill: !1, lineTension: 0, borderWidth: 2 }] }, options: { scales: { xAxes: [{ type: "time", distribution: "series", ticks: { source: "labels" } }], yAxes: [{ scaleLabel: { display: !0, labelString: "# consultas" } }] } } },
    chart = new Chart(ctx, cfg);
document.getElementById("update").addEventListener("click", function() {
    var a = document.getElementById("type").value;
    chart.config.data.datasets[0].type = a, chart.update()
}); */