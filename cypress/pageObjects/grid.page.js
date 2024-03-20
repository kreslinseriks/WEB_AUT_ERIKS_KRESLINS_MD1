class GridPages {
    static get url() {
        return "https://demoqa.com/selectable";
    }

    static visit() {
        cy.visit(this.url);
    }

    static get gridTab() {
        return cy.get("#demo-tab-grid");
    }

    static get OneTab() {
        return cy.get(".list-group-item-action").contains("One");
    }

    static get TwoTab() {
        return cy.get(".list-group-item-action").contains("Two");
    }

    static get ThreeTab() {
        return cy.get(".list-group-item-action").contains("Three");
    }

    static get FourTab() {
        return cy.get(".list-group-item-action").contains("Four");
    }

    static get FiveTab() {
        return cy.get(".list-group-item-action").contains("Five");
    }

    static get SixTab() {
        return cy.get(".list-group-item-action").contains("Six");
    }

    static get SevenTab() {
        return cy.get(".list-group-item-action").contains("Seven");
    }

    static get EightTab() {
        return cy.get(".list-group-item-action").contains("Eight");
    }

    static get NineTab() {
        return cy.get(".list-group-item-action").contains("Nine");
    }
}

export default GridPages;