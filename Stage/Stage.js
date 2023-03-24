/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("cenário1", "./Stage/costumes/cenário1.svg", {
        x: 240,
        y: 180
      }),
      new Costume("body parts", "./Stage/costumes/body parts.png", {
        x: 475,
        y: 345
      })
    ];

    this.sounds = [new Sound("saltar", "./Stage/sounds/saltar.wav")];

    this.triggers = [];
  }
}
