import { shuffleCards } from "./shuffleCards";
import { it, expect, describe } from "@jest/globals";

describe("Не пропадают ли значения", () => {
    it("shuffles and checks array length", () => {
        const strings = ["1", "2", "3", "4"];
        shuffleCards(strings);
        expect(strings).toHaveLength(4);
        expect(strings).not.toHaveLength(6);
    });
    it("additionaly", () => {
        const strings = ["1", "2", "3", "4", "5"];
        shuffleCards(strings);
        expect(strings).not.toHaveLength(2);
    });
});
