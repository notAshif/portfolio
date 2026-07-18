import Image from "next/image";
import SideHeader from "./component/ui/side-header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[url('/hero-lines-group.svg')] bg-cover bg-no-repeat bg-center">
      <SideHeader />
    </main>
  );
}
