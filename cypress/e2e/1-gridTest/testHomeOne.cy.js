import GridPages from "../../pageObjects/grid.page";

describe("Scenario Selectable Test", () => {
    beforeEach(() => {
        GridPages.visit();
    });

    it("Testing Grid Tab", () => {
        // Actions
        GridPages.gridTab.click();
        GridPages.TwoTab.click();
        GridPages.FourTab.click();
        GridPages.SixTab.click();
        GridPages.EightTab.click();

        // Validation - positive cases
        GridPages.TwoTab.should("have.class", "active");
        GridPages.FourTab.should("have.class", "active");
        GridPages.SixTab.should("have.class", "active");
        GridPages.EightTab.should("have.class", "active");

        // Validation - negative cases
        GridPages.OneTab.should("not.have.class", "active");
        GridPages.ThreeTab.should("not.have.class", "active");
        GridPages.FiveTab.should("not.have.class", "active");
        GridPages.SevenTab.should("not.have.class", "active");
        GridPages.NineTab.should("not.have.class", "active");
    });
});