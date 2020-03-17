"use strict";

import {
    gsap
} from "gsap";

gsap.to(".ball", {
    y: -400,
    stagger: 0.2,
    duration: 1,
    yoyo: true,
    repeat: 3
});