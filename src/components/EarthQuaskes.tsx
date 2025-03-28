"use client";

import {
  EarthquakeSeverity,
  getEarthquakeSeverity,
} from "@/lib/getEarthquakeSeverity";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import React, { useEffect, useState } from "react";
import { FaLevelDownAlt } from "react-icons/fa";
import { GiRadarSweep } from "react-icons/gi";
import { MdLocationPin } from "react-icons/md";
import { WiEarthquake, WiTime3 } from "react-icons/wi";

interface Earthquake {
  OriginThai: string;
  DateTimeUTC: string;
  DateTimeThai: string;
  Depth: { _: string; $: { unit: string } };
  Magnitude: string;
  Latitude: string;
  Longitude: string;
  TitleThai: string;
  EarthquakeSeverity: EarthquakeSeverity;
}

const EarthQuaskes = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [quakes, setQuakes] = useState<Earthquake[]>([]);
  const [lastUpdate, setLastUpdate] = useState<string>("xx:xx:xx");
  // const [countdown, setCountdown] = useState(30);

  const fetchData = async () => {
    setIsLoading(true);
    // setCountdown(30); // รีเซ็ต countdown ทุกครั้งที่ดึงข้อมูลใหม่
    const res = await fetch("/api/earthquake", {
      method: "GET",
      headers: {
        "Content-Type": "application/xml",
      },
    });
    const { data } = await res.json();

    if (data) {
      const convertedData = data.map((quake: Earthquake) => ({
        ...quake,
        DateTimeThai: new Date(quake.DateTimeThai).toLocaleString("th-TH", {
          timeZone: "Asia/Bangkok",
        }),
        Depth: {
          _: quake.Depth._,
          $: { unit: quake.Depth.$.unit },
        },
        EarthquakeSeverity: getEarthquakeSeverity(parseFloat(quake.Magnitude)),
      }));
      setQuakes(convertedData);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // ดึงทันทีรอบแรก
    setLastUpdate(
      new Date().toLocaleTimeString("th-TH", {
        timeZone: "Asia/Bangkok",
      })
    );

    // Countdown timer: นับถอยหลังทุกวินาที
    // const countdownTimer = setInterval(() => {
    //   setCountdown((prev) => (prev === 1 ? 30 : prev - 1));
    // }, 1000);

    // Auto refresh เมื่อ countdown = 0
    // const autoRefresh = setInterval(() => {
    //   fetchData();
    // }, 30000); // 30 วิ

    // Clear ทั้งสอง timer เมื่อ component ออกจากหน้าจอ
    return () => {
      // clearInterval(countdownTimer);
      // clearInterval(autoRefresh);
    };
  }, []);
  return (
    <div className="m-2">
      <p className="text-sm text-gray-500 text-right">
        อัปเดตล่าสุด: {lastUpdate} ข้อมูลจาก{" "}
        <a
          href="https://data.tmd.go.th/api/DailySeismicEvent/v1/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          กรมอุตุนิยมวิทยา
        </a>
      </p>
      <ScrollArea className="h-[calc(100vh-80px)] rounded-md border p-4 overflow-auto">
        <div className=" mx-auto">
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              กำลังโหลดข้อมูล...
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
              {quakes.map((quake, index) => (
                <div
                  key={index}
                  className={cn(
                    "p-4 border rounded-lg shadow-md bg-white m-2",
                    quake.EarthquakeSeverity.color === "gray" && "bg-gray-100",
                    quake.EarthquakeSeverity.color === "green" &&
                      "bg-green-100",
                    quake.EarthquakeSeverity.color === "limegreen" &&
                      "bg-limegreen-100",
                    quake.EarthquakeSeverity.color === "yellow" &&
                      "bg-yellow-100",
                    quake.EarthquakeSeverity.color === "orange" &&
                      "bg-orange-100",
                    quake.EarthquakeSeverity.color === "orangered" &&
                      "bg-orangered-100",
                    quake.EarthquakeSeverity.color === "red" && "bg-red-100",
                    quake.EarthquakeSeverity.color === "darkred" &&
                      "bg-darkred-100"
                  )}
                >
                  <h2 className="text-xl font-semibold">{quake.TitleThai}</h2>
                  <p className="flex items-center">
                    <WiTime3 size={20} className="mr-2" />
                    วันที่: {quake.DateTimeThai}
                  </p>
                  <p className="flex items-center">
                    <FaLevelDownAlt size={20} className="mr-2" />
                    ระดับความลึก: {quake.Depth._} {quake.Depth.$.unit}
                  </p>
                  <p className="flex items-center">
                    <WiEarthquake size={20} className="mr-2" />
                    ระดับความรุนแรง: {quake.EarthquakeSeverity.level},{" "}
                    {quake.EarthquakeSeverity.description}
                  </p>
                  <p className="flex items-center">
                    <GiRadarSweep size={20} className="mr-2" />
                    ขนาด: {quake.Magnitude}
                  </p>
                  <p className="flex items-center">
                    <MdLocationPin size={20} className="mr-2" />
                    พิกัด Location: {quake.Latitude},Longitude:{" "}
                    {quake.Longitude}
                  </p>
                  <p></p>
                </div>
              ))}
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default EarthQuaskes;
