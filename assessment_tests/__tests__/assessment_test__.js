const {
  calculateGradesAndAverage,
  mathPhiChem,
  eng_kis_comp,
  religious_Studies,
} = require("../assessment_tests");

describe("Tests for Physics, Math and Chemistry", () => {
  it("Test for the range marks between 100 and 70", () => {
    expect(mathPhiChem(89)).toEqual("A");
    expect(mathPhiChem(100)).toEqual("A");
  });

  it("Test for the range marks between 69 and 60", () => {
    expect(mathPhiChem(65)).toEqual("B");
    expect(mathPhiChem(61)).toEqual("B");
  });

  it("Test for the range marks between 59 and 50", () => {
    expect(mathPhiChem(54)).toEqual("C");
    expect(mathPhiChem(52)).toEqual("C");
  });

  it("Test for the range marks between 49 and 40", () => {
    expect(mathPhiChem(44)).toEqual("Pass");
    expect(mathPhiChem(45)).toEqual("Pass");
  });

  it("Test for the range marks of values below 40.", () => {
    expect(mathPhiChem(39)).toEqual("Sup");
    expect(mathPhiChem(20)).toEqual("Sup");
  });
});

describe("Tests for Religious Education", () => {
  it("Test for the range marks between 100 and 80", () => {
    expect(religious_Studies(93)).toEqual("A");
    expect(religious_Studies(84)).toEqual("A");
  });

  it("Test for the range marks between 79 and 70", () => {
    expect(religious_Studies(76)).toEqual("B");
    expect(religious_Studies(77)).toEqual("B");
  });

  it("Test for the range marks between 69 and 60", () => {
    expect(religious_Studies(68)).toEqual("C");
    expect(religious_Studies(63)).toEqual("C");
  });

  it("Test for the range marks between 59 and 50", () => {
    expect(religious_Studies(57)).toEqual("Pass");
    expect(religious_Studies(51)).toEqual("Pass");
  });

  it("Test for the range of marks below 50", () => {
    expect(religious_Studies(44)).toEqual("Sup");
    expect(religious_Studies(20)).toEqual("Sup");
  });
});

describe("Tests for English, Kiswahili and Computer studies", () => {
  it("Test for undefined, or undeclared values.", () => {
    expect(eng_kis_comp()).toEqual("undefined");
    expect(eng_kis_comp()).toEqual("undefined");
  });

  it("Test for the range marks between 100 and 75", () => {
    expect(eng_kis_comp(77)).toEqual("A");
    expect(eng_kis_comp(99)).toEqual("A");
  });

  it("Test for the range marks between 65 and 74", () => {
    expect(eng_kis_comp(65)).toEqual("B");
    expect(eng_kis_comp(73)).toEqual("B");
  });

  it("Test for the range marks between 64 and 55", () => {
    expect(eng_kis_comp(56)).toEqual("C");
    expect(eng_kis_comp(62)).toEqual("C");
  });

  it("Test for the range marks between 54 and 45", () => {
    expect(eng_kis_comp(47)).toEqual("Pass");
    expect(eng_kis_comp(50)).toEqual("Pass");
  });

  it("Test for the range marks of values below 45.", () => {
    expect(eng_kis_comp(44)).toEqual("Sup");
    expect(eng_kis_comp(43)).toEqual("Sup");
  });
});
