! function (t) {
    t.fn.extend({
        smoothproducts: function () {
            function e() {
                t(".sp-selected").removeClass("sp-selected"), t(".sp-lightbox").fadeOut(function () {
                    t(this).remove()
                })
            }

            function n(t) {
                return t.match(/url\([\"\']{0,1}(.+)[\"\']{0,1}\)+/i)[1]
            }
            t(".sp-loading").hide(), t(".sp-wrap").each(function () {
                if (t(this).addClass("sp-touch"), t("a", this).length > 1) {
                    var e, n, s = !!t("a.sp-default", this)[0];
                    t(this).append('<div class="sp-large"></div><div class="sp-thumbs sp-tb-active"></div>'), t("a", this).each(function (a) {
                        var i = t("img", this).attr("src"),
                            o = t(this).attr("href"),
                            r = "";
                        (0 === a && !s || t(this).hasClass("sp-default")) && (r = ' class="sp-current"', e = o, n = t("img", this)[0].src), t(this).parents(".sp-wrap").find(".sp-thumbs").append('<a href="' + o + '" style="background-image:url(' + i + ')"' + r + "></a>"), t(this).remove()
                    }), t(".sp-large", this).append('<a href="' + e + '" class="sp-current-big"><img src="' + n + '" alt="" /></a>'), t(".sp-wrap").css("display", "inline-block")
                } else t(this).append('<div class="sp-large"></div>'), t("a", this).appendTo(t(".sp-large", this)).addClass(".sp-current-big"), t(".sp-wrap").css("display", "inline-block")
            }), t(document.body).on("click", ".sp-thumbs", function (t) {
                t.preventDefault()
            }), t(document.body).on("mouseover", function (e) {
                t(".sp-wrap").removeClass("sp-touch").addClass("sp-non-touch"), e.preventDefault()
            }), t(document.body).on("touchstart", function () {
                t(".sp-wrap").removeClass("sp-non-touch").addClass("sp-touch")
            }), t(document.body).on("click", ".sp-tb-active a", function (e) {
                e.preventDefault(), t(this).parent().find(".sp-current").removeClass(), t(this).addClass("sp-current"), t(this).parents(".sp-wrap").find(".sp-thumbs").removeClass("sp-tb-active"), t(this).parents(".sp-wrap").find(".sp-zoom").remove();
                var s = t(this).parents(".sp-wrap").find(".sp-large").height(),
                    a = t(this).parents(".sp-wrap").find(".sp-large").width();
                t(this).parents(".sp-wrap").find(".sp-large").css({
                    overflow: "hidden",
                    height: s + "px",
                    width: a + "px"
                }), t(this).addClass("sp-current").parents(".sp-wrap").find(".sp-large a").remove();
                var i = t(this).parent().find(".sp-current").attr("href"),
                    o = n(t(this).parent().find(".sp-current").css("backgroundImage"));
                t(this).parents(".sp-wrap").find(".sp-large").html('<a href="' + i + '" class="sp-current-big"><img src="' + o + '"/></a>'), t(this).parents(".sp-wrap").find(".sp-large").hide().fadeIn(250, function () {
                    var e = t(this).parents(".sp-wrap").find(".sp-large img").height();
                    t(this).parents(".sp-wrap").find(".sp-large").animate({
                        height: e
                    }, "fast", function () {
                        t(".sp-large").css({
                            height: "auto",
                            width: "auto"
                        })
                    }), t(this).parents(".sp-wrap").find(".sp-thumbs").addClass("sp-tb-active")
                })
            }), t(document.body).on("mouseenter", ".sp-non-touch .sp-large", function (e) {
                var n = t("a", this).attr("href");
                t(this).append('<div class="sp-zoom"><img src="' + n + '"/></div>'), t(this).find(".sp-zoom").fadeIn(250), e.preventDefault()
            }), t(document.body).on("mouseleave", ".sp-non-touch .sp-large", function (e) {
                t(this).find(".sp-zoom").fadeOut(250, function () {
                    t(this).remove()
                }), e.preventDefault()
            }), t(document.body).on("click", ".sp-non-touch .sp-zoom", function (e) {
                var n = t(this).html(),
                    s = t(this).parents(".sp-wrap").find(".sp-thumbs a").length,
                    a = t(this).parents(".sp-wrap").find(".sp-thumbs .sp-current").index() + 1;
                t(this).parents(".sp-wrap").addClass("sp-selected"), t("body").append("<div class='sp-lightbox' data-currenteq='" + a + "'>" + n + "</div>"), s > 1 && (t(".sp-lightbox").append("<a href='#' id='sp-prev'></a><a href='#' id='sp-next'></a>"), 1 == a ? t("#sp-prev").css("opacity", ".1") : a == s && t("#sp-next").css("opacity", ".1")), t(".sp-lightbox").fadeIn(), e.preventDefault()
            }), t(document.body).on("click", ".sp-large a", function (e) {
                var n = t(this).attr("href"),
                    s = t(this).parents(".sp-wrap").find(".sp-thumbs a").length,
                    a = t(this).parents(".sp-wrap").find(".sp-thumbs .sp-current").index() + 1;
                t(this).parents(".sp-wrap").addClass("sp-selected"), t("body").append('<div class="sp-lightbox" data-currenteq="' + a + '"><img src="' + n + '"/></div>'), s > 1 && (t(".sp-lightbox").append("<a href='#' id='sp-prev'></a><a href='#' id='sp-next'></a>"), 1 == a ? t("#sp-prev").css("opacity", ".1") : a == s && t("#sp-next").css("opacity", ".1")), t(".sp-lightbox").fadeIn(), e.preventDefault()
            }), t(document.body).on("click", "#sp-next", function (e) {
                e.stopPropagation();
                var s = t(".sp-lightbox").data("currenteq"),
                    a = t(".sp-selected .sp-thumbs a").length;
                if (s >= a);
                else {
                    var i = s + 1,
                        o = t(".sp-selected .sp-thumbs").find("a:eq(" + s + ")").attr("href"),
                        r = n(t(".sp-selected .sp-thumbs").find("a:eq(" + s + ")").css("backgroundImage"));
                    s == a - 1 && t("#sp-next").css("opacity", ".1"), t("#sp-prev").css("opacity", "1"), t(".sp-selected .sp-current").removeClass(), t(".sp-selected .sp-thumbs a:eq(" + s + ")").addClass("sp-current"), t(".sp-selected .sp-large").empty().append("<a href=" + o + '><img src="' + r + '"/></a>'), t(".sp-lightbox img").fadeOut(250, function () {
                        t(this).remove(), t(".sp-lightbox").data("currenteq", i).append('<img src="' + o + '"/>'), t(".sp-lightbox img").hide().fadeIn(250)
                    })
                }
                e.preventDefault()
            }), t(document.body).on("click", "#sp-prev", function (e) {
                e.stopPropagation();
                var s = t(".sp-lightbox").data("currenteq"),
                    s = s - 1;
                if (0 >= s);
                else {
                    1 == s && t("#sp-prev").css("opacity", ".1");
                    var a = s - 1,
                        i = t(".sp-selected .sp-thumbs").find("a:eq(" + a + ")").attr("href"),
                        o = n(t(".sp-selected .sp-thumbs").find("a:eq(" + a + ")").css("backgroundImage"));
                    t("#sp-next").css("opacity", "1"), t(".sp-selected .sp-current").removeClass(), t(".sp-selected .sp-thumbs a:eq(" + a + ")").addClass("sp-current"), t(".sp-selected .sp-large").empty().append("<a href=" + i + '><img src="' + o + '"/></a>'), t(".sp-lightbox img").fadeOut(250, function () {
                        t(this).remove(), t(".sp-lightbox").data("currenteq", s).append('<img src="' + i + '"/>'), t(".sp-lightbox img").hide().fadeIn(250)
                    })
                }
                e.preventDefault()
            }), t(document.body).on("click", ".sp-lightbox", function () {
                e()
            }), t(document).keydown(function (t) {
                return 27 == t.keyCode ? (e(), !1) : void 0
            }), t(".sp-large").mousemove(function (e) {
                var n = t(this).width(),
                    s = t(this).height(),
                    a = t(this).find(".sp-zoom").width(),
                    i = t(this).find(".sp-zoom").height(),
                    o = t(this).parent().offset(),
                    r = e.pageX - o.left,
                    l = e.pageY - o.top,
                    c = Math.floor(r * (n - a) / n),
                    u = Math.floor(l * (s - i) / s);
                t(this).find(".sp-zoom").css({
                    left: c,
                    top: u
                })
            })
        }
    })
}(jQuery),
function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.baguetteBox = e()
}(this, function () {
    "use strict";

    function t(t, n) {
        j.transforms = w(), j.svg = x(), a(), s(t), e(t, n)
    }

    function e(t, e) {
        var n = document.querySelectorAll(t),
            s = {
                galleries: [],
                nodeList: n
            };
        V[t] = s, [].forEach.call(n, function (t) {
            e && e.filter && ($ = e.filter);
            var n = [];
            if (n = "A" === t.tagName ? [t] : t.getElementsByTagName("a"), n = [].filter.call(n, function (t) {
                    return $.test(t.href)
                }), 0 !== n.length) {
                var a = [];
                [].forEach.call(n, function (t, n) {
                    var s = function (t) {
                            t.preventDefault ? t.preventDefault() : t.returnValue = !1, l(a, e), u(n)
                        },
                        i = {
                            eventHandler: s,
                            imageElement: t
                        };
                    B(t, "click", s), a.push(i)
                }), s.galleries.push(a)
            }
        })
    }

    function n() {
        for (var t in V) V.hasOwnProperty(t) && s(t)
    }

    function s(t) {
        if (V.hasOwnProperty(t)) {
            var e = V[t].galleries;
            [].forEach.call(e, function (t) {
                [].forEach.call(t, function (t) {
                    E(t.imageElement, "click", t.eventHandler)
                }), M === t && (M = [])
            }), delete V[t]
        }
    }

    function a() {
        return (I = T("baguetteBox-overlay")) ? (A = T("baguetteBox-slider"), P = T("previous-button"), S = T("next-button"), void(D = T("close-button"))) : (I = q("div"), I.setAttribute("role", "dialog"), I.id = "baguetteBox-overlay", document.getElementsByTagName("body")[0].appendChild(I), A = q("div"), A.id = "baguetteBox-slider", I.appendChild(A), P = q("button"), P.setAttribute("type", "button"), P.id = "previous-button", P.setAttribute("aria-label", "Previous"), P.innerHTML = j.svg ? z : "&lt;", I.appendChild(P), S = q("button"), S.setAttribute("type", "button"), S.id = "next-button", S.setAttribute("aria-label", "Next"), S.innerHTML = j.svg ? F : "&gt;", I.appendChild(S), D = q("button"), D.setAttribute("type", "button"), D.id = "close-button", D.setAttribute("aria-label", "Close"), D.innerHTML = j.svg ? H : "&times;", I.appendChild(D), P.className = S.className = D.className = "baguetteBox-button", void o())
    }

    function i(t) {
        switch (t.keyCode) {
            case 37:
                v();
                break;
            case 39:
                b();
                break;
            case 27:
                h()
        }
    }

    function o() {
        B(I, "click", W), B(P, "click", G), B(S, "click", J), B(D, "click", K), B(I, "touchstart", Z), B(I, "touchmove", _), B(I, "touchend", tt), B(document, "focus", et, !0)
    }

    function r() {
        E(I, "click", W), E(P, "click", G), E(S, "click", J), E(D, "click", K), E(I, "touchstart", Z), E(I, "touchmove", _), E(I, "touchend", tt), E(document, "focus", et, !0)
    }

    function l(t, e) {
        if (M !== t) {
            for (M = t, c(e); A.firstChild;) A.removeChild(A.firstChild);
            Q.length = 0;
            for (var n, s = [], a = [], i = 0; i < t.length; i++) n = q("div"), n.className = "full-image", n.id = "baguette-img-" + i, Q.push(n), s.push("baguetteBox-figure-" + i), a.push("baguetteBox-figcaption-" + i), A.appendChild(Q[i]);
            I.setAttribute("aria-labelledby", s.join(" ")), I.setAttribute("aria-describedby", a.join(" "))
        }
    }

    function c(t) {
        t || (t = {});
        for (var e in Y) L[e] = Y[e], void 0 !== t[e] && (L[e] = t[e]);
        A.style.transition = A.style.webkitTransition = "fadeIn" === L.animation ? "opacity .4s ease" : "slideIn" === L.animation ? "" : "none", "auto" === L.buttons && ("ontouchstart" in window || 1 === M.length) && (L.buttons = !1), P.style.display = S.style.display = L.buttons ? "" : "none";
        try {
            I.style.backgroundColor = L.overlayBackgroundColor
        } catch (t) {}
    }

    function u(t) {
        L.noScrollbars && (document.documentElement.style.overflowY = "hidden", document.body.style.overflowY = "scroll"), "block" !== I.style.display && (B(document, "keydown", i), O = t, X = {
            count: 0,
            startX: null,
            startY: null
        }, g(O, function () {
            k(O), C(O)
        }), y(), I.style.display = "block", L.fullScreen && d(), setTimeout(function () {
            I.className = "visible", L.afterShow && L.afterShow()
        }, 50), L.onChange && L.onChange(O, Q.length), U = document.activeElement, p())
    }

    function p() {
        L.buttons ? P.focus() : D.focus()
    }

    function d() {
        I.requestFullscreen ? I.requestFullscreen() : I.webkitRequestFullscreen ? I.webkitRequestFullscreen() : I.mozRequestFullScreen && I.mozRequestFullScreen()
    }

    function f() {
        document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
    }

    function h() {
        L.noScrollbars && (document.documentElement.style.overflowY = "auto", document.body.style.overflowY = "auto"), "none" !== I.style.display && (E(document, "keydown", i), I.className = "", setTimeout(function () {
            I.style.display = "none", f(), L.afterHide && L.afterHide()
        }, 500), U.focus())
    }

    function g(t, e) {
        var n = Q[t];
        if (void 0 !== n) {
            if (n.getElementsByTagName("img")[0]) return void(e && e());
            var s = M[t].imageElement,
                a = s.getElementsByTagName("img")[0],
                i = "function" == typeof L.captions ? L.captions.call(M, s) : s.getAttribute("data-caption") || s.title,
                o = m(s),
                r = q("figure");
            if (r.id = "baguetteBox-figure-" + t, r.innerHTML = '<div class="baguetteBox-spinner"><div class="baguetteBox-double-bounce1"></div><div class="baguetteBox-double-bounce2"></div></div>', L.captions && i) {
                var l = q("figcaption");
                l.id = "baguetteBox-figcaption-" + t, l.innerHTML = i, r.appendChild(l)
            }
            n.appendChild(r);
            var c = q("img");
            c.onload = function () {
                var n = document.querySelector("#baguette-img-" + t + " .baguetteBox-spinner");
                r.removeChild(n), !L.async && e && e()
            }, c.setAttribute("src", o), c.alt = a ? a.alt || "" : "", L.titleTag && i && (c.title = i), r.appendChild(c), L.async && e && e()
        }
    }

    function m(t) {
        var e = t.href;
        if (t.dataset) {
            var n = [];
            for (var s in t.dataset) "at-" !== s.substring(0, 3) || isNaN(s.substring(3)) || (n[s.replace("at-", "")] = t.dataset[s]);
            for (var a = Object.keys(n).sort(function (t, e) {
                    return parseInt(t, 10) < parseInt(e, 10) ? -1 : 1
                }), i = window.innerWidth * window.devicePixelRatio, o = 0; o < a.length - 1 && a[o] < i;) o++;
            e = n[a[o]] || e
        }
        return e
    }

    function b() {
        var t;
        return O <= Q.length - 2 ? (O++, y(), k(O), t = !0) : L.animation && (A.className = "bounce-from-right", setTimeout(function () {
            A.className = ""
        }, 400), t = !1), L.onChange && L.onChange(O, Q.length), t
    }

    function v() {
        var t;
        return O >= 1 ? (O--, y(), C(O), t = !0) : L.animation && (A.className = "bounce-from-left", setTimeout(function () {
            A.className = ""
        }, 400), t = !1), L.onChange && L.onChange(O, Q.length), t
    }

    function y() {
        var t = 100 * -O + "%";
        "fadeIn" === L.animation ? (A.style.opacity = 0, setTimeout(function () {
            j.transforms ? A.style.transform = A.style.webkitTransform = "translate3d(" + t + ",0,0)" : A.style.left = t, A.style.opacity = 1
        }, 400)) : j.transforms ? A.style.transform = A.style.webkitTransform = "translate3d(" + t + ",0,0)" : A.style.left = t
    }

    function w() {
        var t = q("div");
        return void 0 !== t.style.perspective || void 0 !== t.style.webkitPerspective
    }

    function x() {
        var t = q("div");
        return t.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" === (t.firstChild && t.firstChild.namespaceURI)
    }

    function k(t) {
        t - O >= L.preload || g(t + 1, function () {
            k(t + 1)
        })
    }

    function C(t) {
        O - t >= L.preload || g(t - 1, function () {
            C(t - 1)
        })
    }

    function B(t, e, n, s) {
        t.addEventListener ? t.addEventListener(e, n, s) : t.attachEvent("on" + e, n)
    }

    function E(t, e, n, s) {
        t.removeEventListener ? t.removeEventListener(e, n, s) : t.detachEvent("on" + e, n)
    }

    function T(t) {
        return document.getElementById(t)
    }

    function q(t) {
        return document.createElement(t)
    }

    function N() {
        r(), n(), E(document, "keydown", i), document.getElementsByTagName("body")[0].removeChild(document.getElementById("baguetteBox-overlay")), V = {}, M = [], O = 0
    }
    var I, A, P, S, D, z = '<svg width="44" height="60"><polyline points="30 10 10 30 30 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>',
        F = '<svg width="44" height="60"><polyline points="14 10 34 30 14 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>',
        H = '<svg width="30" height="30"><g stroke="rgb(160,160,160)" stroke-width="4"><line x1="5" y1="5" x2="25" y2="25"/><line x1="5" y1="25" x2="25" y2="5"/></g></svg>',
        L = {},
        Y = {
            captions: !0,
            fullScreen: !1,                   
            noScrollbars: !1,
            titleTag: !1,
            buttons: "auto",
            async: !1,
            preload: 2,
            animation: "slideIn",
            afterShow: null,
            afterHide: null,
            onChange: null,
            overlayBackgroundColor: "rgba(0,0,0,.8)"
        },
        j = {},
        M = [],
        O = 0,
        X = {},
        R = !1,
        $ = /.+\.(gif|jpe?g|png|webp)/i,
        V = {},
        Q = [],
        U = null,
        W = function (t) {
            -1 !== t.target.id.indexOf("baguette-img") && h()
        },
        G = function (t) {
            t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, v()
        },
        J = function (t) {
            t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, b()
        },
        K = function (t) {
            t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, h()
        },
        Z = function (t) {
            X.count++, X.count > 1 && (X.multitouch = !0), X.startX = t.changedTouches[0].pageX, X.startY = t.changedTouches[0].pageY
        },
        _ = function (t) {
            if (!R && !X.multitouch) {
                t.preventDefault ? t.preventDefault() : t.returnValue = !1;
                var e = t.touches[0] || t.changedTouches[0];
                e.pageX - X.startX > 40 ? (R = !0, v()) : e.pageX - X.startX < -40 ? (R = !0, b()) : X.startY - e.pageY > 100 && h()
            }
        },
        tt = function () {
            X.count--, X.count <= 0 && (X.multitouch = !1), R = !1
        },
        et = function (t) {
            "block" !== I.style.display || I.contains(t.target) || (t.stopPropagation(), p())
        };
    return [].forEach || (Array.prototype.forEach = function (t, e) {
        for (var n = 0; n < this.length; n++) t.call(e, this[n], n, this)
    }), [].filter || (Array.prototype.filter = function (t, e, n, s, a) {
        for (n = this, s = [], a = 0; a < n.length; a++) t.call(e, n[a], a, n) && s.push(n[a]);
        return s
    }), {
        run: t,
        destroy: N,
        showNext: b,
        showPrevious: v
    }
}), $(".clean-gallery").length > 0 && baguetteBox.run(".clean-gallery", {
    animation: "slideIn"
}), $(".clean-product").length > 0 && $(window).on("load", function () {
    $(".sp-wrap").smoothproducts()
});