export const buzzOut = `
/* Buzz Out */
@-webkit-keyframes hvr-buzz-out {
  10% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }
  20% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }
  30% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }
  40% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }
  50% {
    -webkit-transform: translateX(2px) rotate(1deg);
    transform: translateX(2px) rotate(1deg);
  }
  60% {
    -webkit-transform: translateX(-2px) rotate(-1deg);
    transform: translateX(-2px) rotate(-1deg);
  }
  70% {
    -webkit-transform: translateX(2px) rotate(1deg);
    transform: translateX(2px) rotate(1deg);
  }
  80% {
    -webkit-transform: translateX(-2px) rotate(-1deg);
    transform: translateX(-2px) rotate(-1deg);
  }
  90% {
    -webkit-transform: translateX(1px) rotate(0);
    transform: translateX(1px) rotate(0);
  }
  100% {
    -webkit-transform: translateX(-1px) rotate(0);
    transform: translateX(-1px) rotate(0);
  }
}
@keyframes hvr-buzz-out {
  10% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }
  20% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }
  30% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }
  40% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }
  50% {
    -webkit-transform: translateX(2px) rotate(1deg);
    transform: translateX(2px) rotate(1deg);
  }
  60% {
    -webkit-transform: translateX(-2px) rotate(-1deg);
    transform: translateX(-2px) rotate(-1deg);
  }
  70% {
    -webkit-transform: translateX(2px) rotate(1deg);
    transform: translateX(2px) rotate(1deg);
  }
  80% {
    -webkit-transform: translateX(-2px) rotate(-1deg);
    transform: translateX(-2px) rotate(-1deg);
  }
  90% {
    -webkit-transform: translateX(1px) rotate(0);
    transform: translateX(1px) rotate(0);
  }
  100% {
    -webkit-transform: translateX(-1px) rotate(0);
    transform: translateX(-1px) rotate(0);
  }
}

.github:hover, .hvr-buzz-out:focus, .hvr-buzz-out:active {
  -webkit-animation-name: hvr-buzz-out;
  animation-name: hvr-buzz-out;
  -webkit-animation-duration: 0.75s;
  animation-duration: 0.75s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}
`

export const wobbleToTopRight = `
/* Wobble To Top Right */
@-webkit-keyframes hvr-wobble-to-top-right {
  16.65% {
    -webkit-transform: translate(8px, -8px);
    transform: translate(8px, -8px);
  }
  33.3% {
    -webkit-transform: translate(-6px, 6px);
    transform: translate(-6px, 6px);
  }
  49.95% {
    -webkit-transform: translate(4px, -4px);
    transform: translate(4px, -4px);
  }
  66.6% {
    -webkit-transform: translate(-2px, 2px);
    transform: translate(-2px, 2px);
  }
  83.25% {
    -webkit-transform: translate(1px, -1px);
    transform: translate(1px, -1px);
  }
  100% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
}
@keyframes hvr-wobble-to-top-right {
  16.65% {
    -webkit-transform: translate(8px, -8px);
    transform: translate(8px, -8px);
  }
  33.3% {
    -webkit-transform: translate(-6px, 6px);
    transform: translate(-6px, 6px);
  }
  49.95% {
    -webkit-transform: translate(4px, -4px);
    transform: translate(4px, -4px);
  }
  66.6% {
    -webkit-transform: translate(-2px, 2px);
    transform: translate(-2px, 2px);
  }
  83.25% {
    -webkit-transform: translate(1px, -1px);
    transform: translate(1px, -1px);
  }
  100% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
}
.leetcode:hover, .hvr-wobble-to-top-right:focus, .hvr-wobble-to-top-right:active {
  -webkit-animation-name: hvr-wobble-to-top-right;
  animation-name: hvr-wobble-to-top-right;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}
`

export const hang = `
/* Hang */
@-webkit-keyframes hvr-hang {
  0% {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
  }
  50% {
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
  }
  100% {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
  }
}
@keyframes hvr-hang {
  0% {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
  }
  50% {
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
  }
  100% {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
  }
}
@-webkit-keyframes hvr-hang-sink {
  100% {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
  }
}
@keyframes hvr-hang-sink {
  100% {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
  }
}
.linkedin:hover, .hvr-hang:focus, .hvr-hang:active {
  -webkit-animation-name: hvr-hang-sink, hvr-hang;
  animation-name: hvr-hang-sink, hvr-hang;
  -webkit-animation-duration: .3s, 1.5s;
  animation-duration: .3s, 1.5s;
  -webkit-animation-delay: 0s, .3s;
  animation-delay: 0s, .3s;
  -webkit-animation-timing-function: ease-out, ease-in-out;
  animation-timing-function: ease-out, ease-in-out;
  -webkit-animation-iteration-count: 1, infinite;
  animation-iteration-count: 1, infinite;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-direction: normal, alternate;
  animation-direction: normal, alternate;
}
`

export const pulseShrink = `
/* Pulse Shrink */
@-webkit-keyframes hvr-pulse-shrink {
  to {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
}
@keyframes hvr-pulse-shrink {
  to {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
}
.hvr-pulse-shrink {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
}
.unsplash:hover, .hvr-pulse-shrink:focus, .hvr-pulse-shrink:active {
  -webkit-animation-name: hvr-pulse-shrink;
  animation-name: hvr-pulse-shrink;
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-direction: alternate;
  animation-direction: alternate;
}
`
