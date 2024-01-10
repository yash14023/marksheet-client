import React, { createContext, useContext, useEffect, useState } from "react";
import { courseData } from "../data/BaseStates/course";
import { studentsData } from "../data/BaseStates/students";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import app from "../firebase/firebase";
import toast from "react-hot-toast";

const DataStoreContext = createContext();

export const useDataStore = () => {
  const context = useContext(DataStoreContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const DataStoreProvider = ({ children }) => {
  const [course, setCourse] = useState(courseData);
  const [students, setStudents] = useState(studentsData);
  const [isFetching, setIsFetching] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);

  const firestore = getFirestore(app);

  useEffect(() => {
    async function fetchCourse() {
      const docRef = doc(firestore, "course", "Qh1Imi2W0JqXjdLA6tns");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        throw new Error("Error Fetching Course");
      }
    }

    async function fetchStudents() {
      const docRef = doc(firestore, "students", "8m0PDPcH1zKA6pelAkly");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        throw new Error("Error Fetching Students");
      }
    }

    try {
      Promise.all([fetchCourse(), fetchStudents()]).then(
        ([courseData, studentsData]) => {
          setCourse(courseData);
          setStudents(studentsData);
          setIsFetching(false);
        }
      );
    } catch (e) {
      toast.error("Some error occurred");
      console.log(e);
      setIsFetching(false);
    }
  }, [firestore]);

  const value = {
    course,
    setCourse,
    students,
    setStudents,

    isFetching,
    setIsFetching,
    isUpdating,
    setIsUpdating,
  };
  return (
    <DataStoreContext.Provider value={value}>
      {children}
    </DataStoreContext.Provider>
  );
};
