import EarthQuaskes from "@/components/EarthQuaskes";

export default async function Home() {
  return (
    <>
      <h1 className="text-2xl font-bol text-center">
        Thailand Earthquake Alert System
      </h1>
      <EarthQuaskes />
    </>
  );
}
