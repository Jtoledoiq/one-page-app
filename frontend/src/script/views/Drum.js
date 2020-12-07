import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Drum");
    }

    async getHtml() {
        return `
        <div class="drum-app-container">
        <div class="drum-app-key key0" data-key="65"><div class="letter">A</div></div>
        <div class="drum-app-key key1" data-key="83"><div class="letter">S</div></div>
        <div class="drum-app-key key2" data-key="68"><div class="letter">D</div></div>
        <div class="drum-app-key key3" data-key="70"><div class="letter">F</div></div>
        <div class="drum-app-key key4" data-key="71"><div class="letter">G</div></div>
        <div class="drum-app-key key5" data-key="72"><div class="letter">H</div></div>
        <div class="drum-app-key key6" data-key="74"><div class="letter">J</div></div>
        <div class="drum-app-key key7" data-key="75"><div class="letter">K</div></div>
        <div class="drum-app-key key8" data-key="76"><div class="letter">L</div></div>
      </div>
      <audio data-key="65" src="src/sounds/clap.wav"></audio>
      <audio data-key="83" src="src/sounds/hihat.wav"></audio>
      <audio data-key="68" src="src/sounds/kick.wav"></audio>
      <audio data-key="70" src="src/sounds/openhat.wav"></audio>
      <audio data-key="71" src="src/sounds/boom.wav"></audio>
      <audio data-key="72" src="src/sounds/ride.wav"></audio>
      <audio data-key="74" src="src/sounds/snare.wav"></audio>
      <audio data-key="75" src="src/sounds/tom.wav"></audio>
      <audio data-key="76" src="src/sounds/tink.wav"></audio>
        `;
    }
}