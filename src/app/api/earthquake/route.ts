import { NextResponse } from "next/server";
import { parseStringPromise } from "xml2js";

export async function GET() {
  try {
    const response = await fetch(
      "https://data.tmd.go.th/api/DailySeismicEvent/v1/?uid=api&ukey=api12345"
    );
    const xmlText = await response.text();

    // แปลง XML เป็น JSON ด้วย xml2js
    const json = await parseStringPromise(xmlText, { explicitArray: false });

    return NextResponse.json(
      {
        data: json.DailySeismicEvents?.DailyEarthquakes || [],
        message: "success",
      },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store",
        },
      }
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch or parse XML" },
      { status: 500 }
    );
  }
}
