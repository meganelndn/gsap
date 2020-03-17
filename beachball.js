"use strict";

import {
    gsap
} from "gsap";

var tl = gsap.timeline();

tl.to(".ball", {
        x: 400,
        duration: 2,
        rotation: 200,
    })
    .to(".spike", {
        y: 20
    })
    .to(".ball", {
        y: 20
    })