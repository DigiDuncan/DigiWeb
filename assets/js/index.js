// Animate on scroll
AOS.init(), document.addEventListener("DOMContentLoaded", function() {
    // OverlayScrollbars
    OverlayScrollbars(document.querySelectorAll("body"), {
        className: "os-theme-light"
    })
});
// Hamburgers
var $hamburger = $(".hamburger");
$hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active")
});

// Theme switcher
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    }
    else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
    }
}
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
toggleSwitch.addEventListener("change", switchTheme, false);

const currentTheme = localStorage.getItem("theme") || null;
if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    if (currentTheme === "dark") {
        toggleSwitch.checked = true;
    }
} 

// Copy and paste for DigiDuncan#4979
function CopyPaste() {
    // clipboard.js
    new ClipboardJS("#CTC");

    // Tippy.js
    tippy("#CTC", {
        content: "DigiDuncan#4979"
    });

    // NOTY
    new Noty({
        theme: "sunset",
        text: "Copied to clipboard",
        progressBar: true,
        layout: "bottomRight",
        timeout: "7000",
        animation: {
            open: function(e) {
                // mo · js
                var t = this;
                var n = new mojs.Timeline;
                var o = new mojs.Html({
                    el: t.barDom,
                    x: {
                        500: 0,
                        delay: 0,
                        duration: 500,
                        easing: "elastic.out"
                    },
                    isForce3d: true,
                    onComplete: function() {
                        e(function(e) {
                            e()
                        })
                    }
                });
                var i = new mojs.Shape({
                    parent: t.barDom,
                    width: 200,
                    height: t.barDom.getBoundingClientRect().height,
                    radius: 0,
                    x: {
                        150: -150
                    },
                    duration: 600,
                    isShowStart: true
                });
                t.barDom.style.overflow = "visible";
                i.el.style.overflow = "hidden";
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
                        isSwirl: true
                    }
                });
                var r = new mojs.Burst({
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
                        isSwirl: true
                    }
                });
                n.add(o, a, r, i);
                n.play();
            },
            close: function(e) {
                // mo · js
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
                    isForce3d: true,
                    onComplete: function() {
                        e(function(e) {
                            e();
                        })
                    }
                }).play()
            }
        }
    }).show();
}
