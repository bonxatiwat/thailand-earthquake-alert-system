import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import React from "react";
import { IoIosColorPalette } from "react-icons/io";

const ColorEarhquakeSeverity = () => {
  const colors = [
    {
      title: "ระดับความรุนแรงมหันตภัย",
      color: "bg-red-500",
      description: "มหันตภัย 8.0 ขึ้นไป",
    },
    {
      title: "ระดับความรุนแรงรุนแรงมาก",
      color: "bg-red-500/40",
      description: "รุนแรงมาก 7.0 - 7.9",
    },
    {
      title: "ระดับความรุนแรงรุนแรง",
      color: "bg-orange-500/40",
      description: "รุนแรง 6.0 - 6.9",
    },
    {
      title: "ระดับความรุนแรงปานกลาง",
      color: "bg-yellow-500/40",
      description: "ปานกลาง 5.0 - 5.9",
    },
    {
      title: "ระดับความรุนแรงเล็ก",
      color: "bg-green-500/40",
      description: "เล็ก 4.0 - 4.9",
    },
    {
      title: "ระดับความรุนแรงเล็กมาก",
      color: "bg-green-500",
      description: "เล็กมาก 3.0 - 3.9",
    },
    {
      title: "ระดับความรุนแรงเล็กมาก",
      color: "bg-white",
      description: "เล็กมาก 2.0 - 2.9",
    },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <IoIosColorPalette size={30} />
          ข้อมูลสี
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>ความหมายของสี</DialogTitle>
        </DialogHeader>
        <div>
          <div className="text-sm bg-accent p-4 rounded-md">
            <blockquote>หลักเกณฑ์การให้ความรุนแรงคือ</blockquote>
            <ul className="pl-2">
              {colors.map((color, index) => (
                <li key={index} className="flex items-center">
                  <div className={`${color.color} mr-1 w-5 h-5`} />
                  {color.title} ({color.description})
                </li>
              ))}
            </ul>
          </div>
          <p className="text-sm mt-1">
            **หมายเหตุ***:
            สีผู้จัดทำจะสื่อให้เห็นถึงระดับความรุนแรงของแผ่นดินไหวตามหลักเกณฑ์ข้างต้นเท่านั้นไม่ได้มีเจตนาให้เกิดความตื่นตระหนกแต่อย่างใด
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ColorEarhquakeSeverity;
