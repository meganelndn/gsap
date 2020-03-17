"use strict";

import {
    gsap
} from "gsap";

const timeline = gsap.timeline();

timeline.to(".ball", {
        x: 400,
        duration: 2,
        rotation: 200,
    })
    .to(".ball", {
        scale: 0,
        x: 1000,
        y: -2000,
        duration: 2
    });