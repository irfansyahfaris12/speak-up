import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import { getCollectionName } from "../firestore";
import { formatDate } from "../../utils";

async function addReport(reportData, unit) {
  try {
    const reportRef = collection(db, getCollectionName("reports"));
    const report = await addDoc(reportRef, {
      ...reportData,
      unit: unit,
      created_at: serverTimestamp(),
      updated_at: serverTimestamp(),
    });

    const statusCollection = collection(db, getCollectionName("report_status"));
    const statusDocRef = doc(statusCollection, report.id);
    await setDoc(statusDocRef, {
      id: report.id,
      unit: unit,
      status: "waiting",
      created_at: serverTimestamp(),
      updated_at: serverTimestamp(),
    });

    return {
      success: true,
      message: "Report berhasil ditambahkan",
      data: {
        id: report.id,
      },
    };
  } catch (error) {
    return {
      success: true,
      message: error.message,
    };
  }
}

async function getReporsByUnit(unit, user) {
  try {
    const reportQuery = query(
      collection(db, getCollectionName("reports")),
      where("unit", "==", unit),
      where("user", "==", user)
    );

    const querySnapshot = await getDocs(reportQuery);

    if (querySnapshot.empty) {
      throw new Error("No report found for the specified unit!");
    }

    const result = await Promise.all(
      querySnapshot.docs.map(async (docSnap) => {
        const reportData = docSnap.data();
        const reportId = docSnap.id;

        let reportStatus = "unknown";
        try {
          const statusDoc = await getDoc(doc(db, "report_status", reportId));
          if (statusDoc.exists()) {
            reportStatus = statusDoc.data().status ?? "unknown";
          }
        } catch (e) {
          console.warn(`Failed to fetch report_status for ${reportId}:`, e.message);
        }

        return {
          ...reportData,
          id: reportId,
          report_status: reportStatus,
          created_at: formatDate(
            new Date((reportData?.created_at?.seconds ?? 0) * 1000)
          ),
          updated_at: formatDate(
            new Date((reportData?.updated?.seconds ?? 0) * 1000)
          ),
        };
      })
    );

    return {
      success: true,
      message: "",
      result,
    };
  } catch (error) {
    console.log(error.message);
    return {
      success: false,
      message: error.message,
    };
  }
}

export { addReport, getReporsByUnit };
