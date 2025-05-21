import React, { createContext, useContext, useState, useEffect } from "react";
import { collection, doc, setDoc } from "firebase/firestore";
import { getData, setData } from "../utils";
import { db } from "../lib/firebase";

const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

function generateRandomNickname() {
  const adjectives = ["Happy", "Swift", "Bright", "Clever", "Brave", "Lucky"];
  const animals = ["Tiger", "Falcon", "Panda", "Wolf", "Otter", "Eagle"];

  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const animal = animals[Math.floor(Math.random() * animals.length)];
  const number = Math.floor(Math.random() * 1000);

  return `${adj}${animal}${number}`; 
}

export default function DataProvider({ children }) {
  const [uid, setUID] = useState(null);
  const [nickname, setNickname] = useState(null);

  
  useEffect(() => {
    async function getUserData() {
      const storedUID = await getData("uid");
      const storedNickname = await getData("nickname");


      if (!storedUID) {
        const usersCollection = collection(db, "users");
        const newDocRef = doc(usersCollection);
        
        // Generate random nickname
        const randomNickname = generateRandomNickname();
        
        // Save UID and nickname locally
        await setData("uid", newDocRef.id);
        await setData("nickname", randomNickname);

        // Save to Firestore
        await setDoc(newDocRef, {
          createdAt: new Date().toISOString(),
          name: randomNickname,
        });

        setUID(newDocRef.id);
        setNickname(randomNickname);
      } else {
        setUID(storedUID);
        setNickname(storedNickname);
      }
    }

    getUserData();
  }, []);

  return (
    <DataContext.Provider value={{ uid, nickname, setUID, setNickname }}>
      {children}
    </DataContext.Provider>
  );
}