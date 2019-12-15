AOS.init(), document.addEventListener("DOMContentLoaded", function() {
    OverlayScrollbars(document.querySelectorAll("body"), {
        className: "os-theme-light"
    })
});
var $hamburger = $(".hamburger");
$hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active")
});

function CopyPaste() {
    new ClipboardJS("#CTC"), tippy("#CTC", {
        content: "DigiDuncan#4979"
    }), new Noty({
        theme: "sunset",
        text: "Copied to clipboard",
        progressBar: !0,
        layout: "bottomRight",
        timeout: "7000",
        animation: {
            open: function(e) {
                var t = this,
                    n = new mojs.Timeline,
                    o = new mojs.Html({
                        el: t.barDom,
                        x: {
                            500: 0,
                            delay: 0,
                            duration: 500,
                            easing: "elastic.out"
                        },
                        isForce3d: !0,
                        onComplete: function() {
                            e(function(e) {
                                e()
                            })
                        }
                    }),
                    i = new mojs.Shape({
                        parent: t.barDom,
                        width: 200,
                        height: t.barDom.getBoundingClientRect().height,
                        radius: 0,
                        x: {
                            150: -150
                        },
                        duration: 600,
                        isShowStart: !0
                    });
                t.barDom.style.overflow = "visible", i.el.style.overflow = "hidden";
                var a = new mojs.Burst({
                        parent: i.el,
                        count: 10,
                        top: t.barDom.getBoundingClientRect().height + 75,
                        degree: 90,
                        radius: 75,
                        angle: {
                            [-90]: 40
                        },
                        children: {
                            fill: "#002b4f",
                            delay: "stagger(500, -50)",
                            radius: "rand(8, 25)",
                            direction: -1,
                            isSwirl: !0
                        }
                    }),
                    r = new mojs.Burst({
                        parent: i.el,
                        count: 2,
                        degree: 0,
                        angle: 75,
                        radius: {
                            0: 100
                        },
                        top: "90%",
                        children: {
                            fill: "#002b4f",
                            pathScale: [.65, 1],
                            radius: "rand(12, 15)",
                            direction: [-1, 1],
                            delay: 400,
                            isSwirl: !0
                        }
                    });
                n.add(o, a, r, i), n.play()
            },
            close: function(e) {
                new mojs.Html({
                    el: this.barDom,
                    x: {
                        0: 500,
                        delay: 10,
                        duration: 500,
                        easing: "cubic.out"
                    },
                    skewY: {
                        0: 10,
                        delay: 10,
                        duration: 500,
                        easing: "cubic.out"
                    },
                    isForce3d: !0,
                    onComplete: function() {
                        e(function(e) {
                            e()
                        })
                    }
                }).play()
            }
        }
    }).show()
}