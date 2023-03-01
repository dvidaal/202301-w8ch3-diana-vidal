import { chipReducer, loadProductsAction } from "./chipsSlice";

describe("Given a loadProducts reducer", () => {
  describe("When it receive a list of two chips", () => {
    test("Then it should return a list of two chips", () => {
      const loadChip = {
        id: 1,
        productName: "Cono",
        price: 1,
        image: "",
        isAvailable: true,
      };

      const chipsBag = {
        id: 2,
        productName: "Fantasmicos",
        price: 2,
        image: "",
        isAvailable: true,
      };

      const chips = [loadChip, chipsBag];

      const loadChipsAction = loadProductsAction(chips);
      const expectedResult = chips;

      const newChips = chipReducer(chips, loadChipsAction);

      expect(newChips).toStrictEqual(expectedResult);
    });
  });
});
