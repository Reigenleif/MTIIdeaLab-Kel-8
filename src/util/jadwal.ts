import { useEffect, useState } from "react";

interface jadwal {
  [key: string]: string[];
}

export const useGetJadwal = () => {
  const [jadwal, setJadwal] = useState<jadwal>({});

  useEffect(() => {
    const jadwalDataGross = localStorage.getItem("jadwal") || "";
    let jadwalData: jadwal;
    try {
      jadwalData = JSON.parse(jadwalDataGross);
    } catch {
      jadwalData = {};
    }
    console.log(jadwalData);
    setJadwal(jadwalData);
  }, [setJadwal]);

  const setJadwalHandler = (day: string, time: string) => {
    setJadwal((s) => {
      let tmp = { ...s };
      if (day in tmp) {
        tmp[day].push(time);
      } else {
        tmp[day] = [time]
      }
      
      localStorage.setItem("jadwal", JSON.stringify(tmp));
      return tmp;
    });
  };

  const delJadwalHandler = (day: string, index: number) => {
    setJadwal((s) => {
        let tmp = { ...s };
        if (day in tmp) {
          tmp[day] = [...tmp[day].splice(0,index),...tmp[day].splice(index+1,tmp[day].length)] ;
        } 
        localStorage.setItem("jadwal", JSON.stringify(tmp));
        return tmp;
      });
  }

  return { jadwal, setJadwalHandler, delJadwalHandler };
};
