import React, { useState } from "react";
import { useDataStore } from "../../contexts/DataStoreContext";
import toast from "react-hot-toast";
import { useUser } from "../../contexts/UserContext";

const Credentials = () => {
  const [UID, setUID] = useState("");

  const { setUser } = useUser();
  const { students } = useDataStore();

  const handleClick = () => {
    if (!UID) {
      toast.error("All Fields required");
      return;
    }
    let foundStudent = null;
    for (const batch in students) {
      for (const course in students[batch]) {
        for (let student of students[batch][course].students) {
          if (student.uid.toLowerCase() === UID.toLocaleLowerCase()) {
            foundStudent = student;
            break;
          }
        }
      }
    }
    if (foundStudent) {
      setUser(foundStudent);
      console.log(foundStudent);
      return;
    }
    toast.error("UID Not Found");
  };

  return (
    <div className="h-full flex justify-center items-center">
      <div className="w-full h-full  flex flex-col justify-center items-center space-y-4 px-52">
        <div className="w-full">
          <span className="text-xs text-[#5f5f5f] font-medium">Your UID</span>
          <input
            value={UID}
            onChange={(e) => {
              setUID(e.target.value);
            }}
            className="w-full bg-[#131313] py-3 px-4 rounded-md border-2 border-[#1d1d1d] outline-none text-base"
          />
        </div>

        <div>
          <button
            onClick={handleClick}
            className="text-sm text-white bg-jhc-blue-primary py-2 px-4 rounded-md mb-4"
          >
            Take me in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Credentials;
