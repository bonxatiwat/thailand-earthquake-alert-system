export type EarthquakeSeverity = {
  level: string;
  description: string;
  color: string; // สำหรับใช้ใน UI เช่น สีพื้นหลังหรือแถบ
};

export function getEarthquakeSeverity(mag: number): EarthquakeSeverity {
  if (mag < 2.0) {
    return {
      level: "เล็กมาก",
      description: "มนุษย์แทบไม่รู้สึก",
      color: "gray",
    };
  } else if (mag < 3.0) {
    return {
      level: "เล็กมาก",
      description: "รู้สึกได้บ้างเฉพาะในบางพื้นที่",
      color: "green",
    };
  } else if (mag < 4.0) {
    return {
      level: "เล็ก",
      description: "รู้สึกได้ในอาคาร แต่ไม่มีความเสียหาย",
      color: "limegreen",
    };
  } else if (mag < 5.0) {
    return {
      level: "ปานกลาง",
      description: "ของใช้สั่นไหว แต่ไม่เสียหาย",
      color: "yellow",
    };
  } else if (mag < 6.0) {
    return {
      level: "ค่อนข้างแรง",
      description: "อาคารบางแห่งอาจแตกร้าว",
      color: "orange",
    };
  } else if (mag < 7.0) {
    return {
      level: "รุนแรง",
      description: "ความเสียหายระดับกลางถึงหนัก",
      color: "orangered",
    };
  } else if (mag < 8.0) {
    return {
      level: "รุนแรงมาก",
      description: "มีความเสียหายรุนแรงในวงกว้าง",
      color: "red",
    };
  } else {
    return {
      level: "มหันตภัย",
      description: "ทำลายล้างรุนแรงระดับภูมิภาค",
      color: "darkred",
    };
  }
}
