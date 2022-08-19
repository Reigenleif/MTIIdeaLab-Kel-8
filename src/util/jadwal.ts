import { useEffect, useState } from "react";

type NumPair = [number,number]

interface Jadwal {
  [key: string]: [NumPair,NumPair,NumPair];
}

export const useGetJadwal = () => {
  const [jadwal, setJadwal] = useState<Jadwal>({});

  useEffect(() => {
    const jadwalDataGross = localStorage.getItem("jadwal") || "";
    let jadwalData: Jadwal;
    try {
      jadwalData = JSON.parse(jadwalDataGross);
    } catch {
      jadwalData = {};
    }
    console.log(jadwalData);
    setJadwal(jadwalData);
  }, [setJadwal]);

  const setJadwalHandler = (day: string, time:number, hour: number,min: number) => {
    setJadwal((s) => {
      let tmp = { ...s };
      if (day in tmp) {
        tmp[day][time] = [hour,min];
      } else {
        tmp[day] = [[0,0],[0,0],[0,0]]
        tmp[day][time] = [hour,min]
      }
      
      localStorage.setItem("jadwal", JSON.stringify(tmp));
      return tmp;
    });
  };

  const delJadwalHandler = (day: string, time: number) => {
    setJadwal((s) => {
        let tmp = { ...s };
        if (day in tmp) {
          tmp[day][time] = [0,0];
        } 
        localStorage.setItem("jadwal", JSON.stringify(tmp));
        return tmp;
      });
  }

  return { jadwal, setJadwalHandler, delJadwalHandler };
};
