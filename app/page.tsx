import GenerateVideoButton from "./components/GenerateVideoButton";
import ListTiktok from "./components/ListTiktok";
import TiktokButton from "./components/TiktokButton";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center h-dvh px-4">
      <h1 className="text-2xl">Tiktok POST API</h1>
      <ListTiktok />
      <div className="absolute bottom-4 right-12 flex gap-4">
        <TiktokButton />
        <GenerateVideoButton />
      </div>
    </div>
  );
}
