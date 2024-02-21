import React from "react";
import { useUser } from "../../contexts/UserContext";

const Marksheet = () => {
  const { user } = useUser();
  const localUser = { ...user };
  delete user.email;
  delete user.name;
  delete user.uid;

  return (
    <div className="pb-5">
      {Object.entries(localUser).map(([semester, subjects]) => (
        <GradeTable key={semester} semester={semester} subjects={subjects} />
      ))}
    </div>
  );
};

const calculatePercentage = (totalMarks) => {
  const maxMarks = 140; // Total marks for CA1 + CA2 + PR + SEE
  return ((totalMarks / maxMarks) * 100).toFixed(2);
};

const calculateGrade = (percentage) => {
  if (percentage >= 90) return "O";
  if (percentage >= 80) return "A+";
  if (percentage >= 70) return "A";
  if (percentage >= 60) return "B+";
  if (percentage >= 50) return "B";
  if (percentage >= 33) return "C";
  return "F";
};

const GradeTable = ({ semester, subjects }) => {
  return (
    <div className="mb-8 px-20">
      <h2 className="text-2xl font-bold mb-4">{semester}</h2>
      <table
        className="w-full border-collapse border border-jhc-blue-primary"
        border="1"
      >
        <thead>
          <tr className="bg-jhc-blue-primary">
            <th className="py-2 px-4 border border-jhc-blue-primary">
              Subject
            </th>
            <th className="py-2 px-4 border border-jhc-blue-primary">CA1</th>
            <th className="py-2 px-4 border border-jhc-blue-primary">CA2</th>
            <th className="py-2 px-4 border border-jhc-blue-primary">PR</th>
            <th className="py-2 px-4 border border-jhc-blue-primary">SEE</th>
            <th className="py-2 px-4 border border-jhc-blue-primary">
              Total (%)
            </th>
            <th className="py-2 px-4 border border-jhc-blue-primary ">Grade</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(subjects).map(([subject, grades]) => {
            const totalMarks = grades.ca1 + grades.ca2 + grades.pr + grades.see;
            const percentage = calculatePercentage(totalMarks);
            const grade = calculateGrade(percentage);

            return (
              <tr key={subject} className="text-center">
                <td className="py-2 px-4 border border-jhc-blue-primary">
                  {subject}
                </td>
                <td className="py-2 px-4 border border-jhc-blue-primary">
                  {grades.ca1}
                </td>
                <td className="py-2 px-4 border border-jhc-blue-primary">
                  {grades.ca2}
                </td>
                <td className="py-2 px-4 border border-jhc-blue-primary">
                  {grades.pr}
                </td>
                <td className="py-2 px-4 border border-jhc-blue-primary">
                  {grades.see}
                </td>
                <td className="py-2 px-4 border border-jhc-blue-primary">
                  {`${totalMarks} (${percentage}%)`}
                </td>
                <td className="py-2 px-4 border border-jhc-blue-primary text-jhc-blue-primary">
                  {grade}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Marksheet;
