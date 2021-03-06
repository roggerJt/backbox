! function(o) { "use strict"; var t = function() { this.$body = o("body"), this.$realData = [] };
    t.prototype.createPlotGraph = function(t, a, e, r, i, l, s) { o.plot(o(t), [{ data: a, label: r[0], color: i[0] }, { data: e, label: r[1], color: i[1] }], { series: { lines: { show: !0, fill: !0, lineWidth: 2, fillColor: { colors: [{ opacity: .5 }, { opacity: .5 }, { opacity: .8 }] } }, points: { show: !0 }, shadowSize: 0 }, grid: { hoverable: !0, clickable: !0, borderColor: l, tickColor: "#f9f9f9", borderWidth: 1, labelMargin: 30, backgroundColor: s }, legend: { position: "ne", margin: [0, -32], noColumns: 0, labelBoxBorderColor: null, labelFormatter: function(o, t) { return o + "&nbsp;&nbsp;" }, width: 30, height: 2 }, yaxis: { axisLabel: "Daily Visits", tickColor: "#f5f5f5", font: { color: "#bdbdbd" } }, xaxis: { axisLabel: "Last Days", tickColor: "#f5f5f5", font: { color: "#bdbdbd" } }, tooltip: !0, tooltipOpts: { content: "%s: Value of %x is %y", shifts: { x: -60, y: 25 }, defaultTheme: !1 }, splines: { show: !0, tension: .1, lineWidth: 1 } }) }, t.prototype.createPlotDotGraph = function(t, a, e, r, i, l, s) { o.plot(o(t), [{ data: a, label: r[0], color: i[0] }, { data: e, label: r[1], color: i[1] }], { series: { lines: { show: !0, fill: !1, lineWidth: 3, fillColor: { colors: [{ opacity: .3 }, { opacity: .3 }] } }, curvedLines: { apply: !0, active: !0, monotonicFit: !0 }, splines: { show: !0, tension: .4, lineWidth: 5, fill: .4 } }, grid: { hoverable: !0, clickable: !0, borderColor: l, tickColor: "#f9f9f9", borderWidth: 1, labelMargin: 10, backgroundColor: s }, legend: { position: "ne", margin: [0, -32], noColumns: 0, labelBoxBorderColor: null, labelFormatter: function(o, t) { return o + "&nbsp;&nbsp;" }, width: 30, height: 2 }, yaxis: { axisLabel: "Gold Price(USD)", tickColor: "#f5f5f5", font: { color: "#bdbdbd" } }, xaxis: { axisLabel: "Numbers", tickColor: "#f5f5f5", font: { color: "#bdbdbd" } }, tooltip: !1 }) }, t.prototype.createPieGraph = function(t, a, e, r) { var i = [{ label: a[0], data: e[0] }, { label: a[1], data: e[1] }, { label: a[2], data: e[2] }, { label: a[3], data: e[3] }, { label: a[4], data: e[4] }],
            l = { series: { pie: { show: !0, radius: 1, label: { show: !0, radius: 1, background: { opacity: .2 } } } }, legend: { show: !1 }, grid: { hoverable: !0, clickable: !0 }, colors: r, tooltip: !0, tooltipOpts: { content: "%s, %p.0%" } };
        o.plot(o(t), i, l) }, t.prototype.randomData = function() { for (this.$realData.length > 0 && (this.$realData = this.$realData.slice(1)); this.$realData.length < 300;) { var o = (this.$realData.length > 0 ? this.$realData[this.$realData.length - 1] : 50) + 10 * Math.random() - 5;
            o < 0 ? o = 0 : o > 100 && (o = 100), this.$realData.push(o) } for (var t = [], a = 0; a < this.$realData.length; ++a) t.push([a, this.$realData[a]]); return t }, t.prototype.createRealTimeGraph = function(t, a, e) { return o.plot(t, [a], { colors: e, series: { grow: { active: !1 }, shadowSize: 0, lines: { show: !0, fill: !0, lineWidth: 2, steps: !1 } }, grid: { show: !0, aboveData: !1, color: "#dcdcdc", labelMargin: 15, axisMargin: 0, borderWidth: 0, borderColor: null, minBorderMargin: 5, clickable: !0, hoverable: !0, autoHighlight: !1, mouseActiveRadius: 20 }, tooltip: !0, tooltipOpts: { content: "Value is : %y.0%", shifts: { x: -30, y: -50 } }, yaxis: { axisLabel: "Response Time (ms)", min: 0, max: 100, tickColor: "#f5f5f5", color: "rgba(0,0,0,0.1)" }, xaxis: { axisLabel: "Point Value (1000)", show: !0, tickColor: "#f5f5f5" } }) }, t.prototype.createDonutGraph = function(t, a, e, r) { var i = [{ label: a[0], data: e[0] }, { label: a[1], data: e[1] }, { label: a[2], data: e[2] }, { label: a[3], data: e[3] }, { label: a[4], data: e[4] }],
            l = { series: { pie: { show: !0, innerRadius: .7 } }, legend: { show: !0, labelFormatter: function(o, t) { return '<div style="font-size:14px;">&nbsp;' + o + "</div>" }, labelBoxBorderColor: null, margin: 50, width: 20 }, grid: { hoverable: !0, clickable: !0 }, colors: r, tooltip: !0, tooltipOpts: { content: "%s, %p.0%" } };
        o.plot(o(t), i, l) }, t.prototype.createStackBarGraph = function(t, a, e, r) { var i = { bars: { show: !0, barWidth: .2, fill: 1 }, grid: { show: !0, aboveData: !1, labelMargin: 5, axisMargin: 0, borderWidth: 1, minBorderMargin: 5, clickable: !0, hoverable: !0, autoHighlight: !1, mouseActiveRadius: 20, borderColor: "#f5f5f5" }, series: { stack: 0 }, legend: { position: "ne", margin: [0, -32], noColumns: 0, labelBoxBorderColor: null, labelFormatter: function(o, t) { return o + "&nbsp;&nbsp;" }, width: 30, height: 2 }, yaxis: a.y, xaxis: a.x, colors: e, tooltip: !0, tooltipOpts: { content: "%s : %y.0", shifts: { x: -30, y: -50 } } };
        o.plot(o(t), r, i) }, t.prototype.createLineGraph = function(t, a, e, r) { var i = { series: { lines: { show: !0 }, points: { show: !0 } }, legend: { position: "ne", margin: [0, -32], noColumns: 0, labelBoxBorderColor: null, labelFormatter: function(o, t) { return o + "&nbsp;&nbsp;" }, width: 30, height: 2 }, yaxis: a.y, xaxis: a.x, colors: e, grid: { hoverable: !0, borderColor: "#f5f5f5", borderWidth: 1, backgroundColor: "#fff" }, tooltip: !0, tooltipOpts: { content: "%s : %y.0", shifts: { x: -30, y: -50 } } }; return o.plot(o(t), r, i) }, t.prototype.createCombineGraph = function(t, a, e, r) { var i = [{ label: e[0], data: r[0], lines: { show: !0, fill: !0 }, points: { show: !0 } }, { label: e[1], data: r[1], lines: { show: !0 }, points: { show: !0 } }, { label: e[2], data: r[2], bars: { show: !0 } }],
            l = { series: { shadowSize: 0 }, grid: { hoverable: !0, clickable: !0, tickColor: "#f9f9f9", borderWidth: 1, borderColor: "#eeeeee" }, colors: ["#e3eaef", "#f1556c", "#1abc9c"], tooltip: !0, tooltipOpts: { defaultTheme: !1 }, legend: { position: "ne", margin: [0, -32], noColumns: 0, labelBoxBorderColor: null, labelFormatter: function(o, t) { return o + "&nbsp;&nbsp;" }, width: 30, height: 2 }, yaxis: { axisLabel: "Point Value (1000)", tickColor: "#f5f5f5", font: { color: "#bdbdbd" } }, xaxis: { axisLabel: "Daily Hours", ticks: a, tickColor: "#f5f5f5", font: { color: "#bdbdbd" } } };
        o.plot(o(t), i, l) }, t.prototype.init = function() { this.createPlotGraph("#website-stats", [
            [0, 13],
            [1, 22],
            [2, 27],
            [3, 36],
            [4, 40],
            [5, 25],
            [6, 36],
            [7, 20],
            [8, 12],
            [9, 20],
            [10, 48],
            [11, 16],
            [12, 14]
        ], [
            [0, 28],
            [1, 56],
            [2, 26],
            [3, 20],
            [4, 21],
            [5, 25],
            [6, 19],
            [7, 22],
            [8, 35],
            [9, 28],
            [10, 36],
            [11, 19],
            [12, 11]
        ], ["Bitcoin", "Ethereum", "Litecoin"], ["#4fc6e1", "#0691d6"], "#f5f5f5", "#fff");
        this.createPlotDotGraph("#website-stats1", [
            [0, 2],
            [1, 4],
            [2, 7],
            [3, 9],
            [4, 6],
            [5, 3],
            [6, 10],
            [7, 8],
            [8, 5],
            [9, 14],
            [10, 10],
            [11, 10],
            [12, 8]
        ], [
            [0, 1],
            [1, 3],
            [2, 6],
            [3, 7],
            [4, 4],
            [5, 2],
            [6, 8],
            [7, 6],
            [8, 4],
            [9, 10],
            [10, 8],
            [11, 14],
            [12, 5]
        ], ["Bitcoin", "Ethereum"], ["#0691d6", "#f1556c"], "#f5f5f5", "#fff");
        this.createPieGraph("#pie-chart #pie-chart-container", ["Bitcoin", "Ethereum", "Litecoin", "Bitcoin Cash", "Cardano"], [48, 30, 15, 32, 26], ["#4a81d4", "#f672a7", "#f7b84b", "#4fc6e1", "#1abc9c"]); var t = this.createRealTimeGraph("#flotRealTime", this.randomData(), ["#4a81d4"]);
        t.draw(); var a = this;! function e() { t.setData([a.randomData()]), t.draw(), setTimeout(e, (o("html").hasClass("mobile-device"), 500)) }();
        this.createDonutGraph("#donut-chart #donut-chart-container", ["Bitcoin", "Ethereum", "Litecoin", "Bitcoin Cash", "Cardano"], [48, 30, 15, 32, 26], ["#4a81d4", "#f672a7", "#f7b84b", "#4fc6e1", "#1abc9c"]); var e = [
            [
                [0, 201],
                [1, 520],
                [2, 337],
                [3, 261],
                [4, 157],
                [5, 95],
                [6, 200],
                [7, 250],
                [8, 320],
                [9, 500],
                [10, 152],
                [11, 214],
                [12, 364],
                [13, 449],
                [14, 558],
                [15, 282],
                [16, 379],
                [17, 429],
                [18, 518],
                [19, 470],
                [20, 330],
                [21, 245],
                [22, 358],
                [23, 74]
            ],
            [
                [0, 311],
                [1, 630],
                [2, 447],
                [3, 371],
                [4, 267],
                [5, 205],
                [6, 310],
                [7, 360],
                [8, 430],
                [9, 610],
                [10, 262],
                [11, 324],
                [12, 474],
                [13, 559],
                [14, 668],
                [15, 392],
                [16, 489],
                [17, 539],
                [18, 628],
                [19, 580],
                [20, 440],
                [21, 355],
                [22, 468],
                [23, 184]
            ],
            [
                [23, 727],
                [22, 128],
                [21, 110],
                [20, 92],
                [19, 172],
                [18, 63],
                [17, 150],
                [16, 592],
                [15, 12],
                [14, 246],
                [13, 52],
                [12, 149],
                [11, 123],
                [10, 2],
                [9, 325],
                [8, 10],
                [7, 15],
                [6, 89],
                [5, 65],
                [4, 77],
                [3, 600],
                [2, 200],
                [1, 385],
                [0, 200]
            ]
        ];
        this.createCombineGraph("#combine-chart #combine-chart-container", [
            [0, "22h"],
            [1, ""],
            [2, "00h"],
            [3, ""],
            [4, "02h"],
            [5, ""],
            [6, "04h"],
            [7, ""],
            [8, "06h"],
            [9, ""],
            [10, "08h"],
            [11, ""],
            [12, "10h"],
            [13, ""],
            [14, "12h"],
            [15, ""],
            [16, "14h"],
            [17, ""],
            [18, "16h"],
            [19, ""],
            [20, "18h"],
            [21, ""],
            [22, "20h"],
            [23, ""]
        ], ["Last 24 Hours", "Last 48 Hours", "Difference"], e); for (var r = [], i = 0; i <= 10; i += 1) r.push([i, parseInt(30 * Math.random())]); var l = []; for (i = 0; i <= 10; i += 1) l.push([i, parseInt(30 * Math.random())]); var s = []; for (i = 0; i <= 10; i += 1) s.push([i, parseInt(30 * Math.random())]); var n = new Array;
        n.push({ label: "Series One", data: r, bars: { order: 1 } }), n.push({ label: "Series Two", data: l, bars: { order: 2 } }), n.push({ label: "Series Three", data: s, bars: { order: 3 } }), this.createStackBarGraph("#ordered-bars-chart", { y: { axisLabel: "Sales Value (USD)", tickColor: "#f5f5f5", font: { color: "#bdbdbd" } }, x: { axisLabel: "Last 10 Days", tickColor: "#f5f5f5", font: { color: "#bdbdbd" } } }, ["#4fc6e1", "#f7b84b", "#4a81d4"], n); var h = [],
            c = []; for (i = 0; i < 12; i += .2) h.push([i, Math.sin(i + 0)]), c.push([i, Math.cos(i + 0)]); var d = [{ data: h, label: "Google" }, { data: c, label: "Yahoo" }];
        this.createLineGraph("#line-chart-alt", { y: { min: -1.2, max: 1.2, tickColor: "#f5f5f5", font: { color: "#bdbdbd" } }, x: { tickColor: "#f5f5f5", font: { color: "#bdbdbd" } } }, ["#6c757d", "#f1556c"], d) }, o.FlotChart = new t, o.FlotChart.Constructor = t }(window.jQuery),
function(o) { "use strict";
    o.FlotChart.init() }(window.jQuery);