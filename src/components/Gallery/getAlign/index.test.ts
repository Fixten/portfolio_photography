import { getAlign } from ".";

describe("getAlign", () => {
  it('возвращает "end" если индекс четный', () => {
    expect.assertions(1);
    expect(getAlign(2)).toBe("end");
  });

  it('возвращает "start" если индекс не четный', () => {
    expect.assertions(1);
    expect(getAlign(1)).toBe("start");
  });

  it('возвращает "end" если индекс равен 0', () => {
    expect.assertions(1);
    expect(getAlign(0)).toBe("end");
  });

  it('возвращает "start" если индекс равен Nan', () => {
    expect.assertions(1);
    expect(getAlign(NaN)).toBe("start");
  });
});
