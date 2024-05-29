const mathPhiChem = (marks) => {
  if (marks >= 70 && marks <= 100) return "A";
  else if (marks >= 60 && marks <= 69) return "B";
  else if (marks >= 50 && marks <= 59) return "C";
  else if (marks >= 40 && marks <= 49) return "Pass";
  else if (marks < 40) return "Sup";
};

const religious_Studies = (marks) => {
  if (marks >= 80 && marks <= 100) return "A";
  else if (marks >= 70 && marks <= 79) return "B";
  else if (marks >= 60 && marks <= 69) return "C";
  else if (marks >= 50 && marks <= 59) return "Pass";
  else if (marks < 50) return "Sup";
};

const eng_kis_comp = (marks) => {
  if (marks == undefined) return "undefined";
  else if (marks >= 75 && marks <= 100) return "A";
  else if (marks >= 65 && marks <= 74) return "B";
  else if (marks >= 55 && marks <= 64) return "C";
  else if (marks >= 45 && marks <= 54) return "Pass";
  else return "Sup";
};
const StudentMarks = {
  name: "Dennis Doe",
  math: 80,
  eng: 65,
  kis: 48,
  phy: 67,
  che: 56,
  re: 89,
  comp: 82,
};

const averagePoints = () => {
  let result =
    (StudentMarks.math +
      StudentMarks.eng +
      StudentMarks.kis +
      StudentMarks.phy +
      StudentMarks.che +
      StudentMarks.re +
      StudentMarks.comp) /
    7;
  return Math.floor(result);
};

const calculateGradesAndAverage = (StudentMarks) => {
  const output = {
    name: StudentMarks.name,
    math: mathPhiChem(StudentMarks.math),
    eng: eng_kis_comp(StudentMarks.eng),
    kis: eng_kis_comp(StudentMarks.kis),
    phy: mathPhiChem(StudentMarks.phy),
    che: mathPhiChem(StudentMarks.che),
    re: religious_Studies(StudentMarks.re),
    comp: eng_kis_comp(StudentMarks.comp),
    avgPts: averagePoints(),
  };
  return output;
};

let output = calculateGradesAndAverage(StudentMarks);
console.log(output);
module.exports = {
  calculateGradesAndAverage,
  mathPhiChem,
  eng_kis_comp,
  religious_Studies,
};
