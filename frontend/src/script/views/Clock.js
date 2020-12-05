import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Clock");
    }

    async getHtml() {
        return `
            <h1 class="clock-app-title">Clock</h1>
            <div class="clock-app">
                <div class="clockUpper"></div>
                <div class="clockBotton"></div>
                <div class="hour hand"></div>
                <div class="minute hand"></div>
                <div class="second hand"></div>
            </div>
            <script type="module"  src="/src/script/clock-script.js"></script>
        `;
    }
}