import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super();
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
        
        `;
    }
}