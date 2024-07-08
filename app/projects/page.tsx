import { Settings } from "lucide-react";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "Dev Kraken's Projects",
  description:
    "Explore a showcase of my projects, where I apply my full stack development skills to create innovative and effective solutions. Discover how I turn ideas into reality.",
});
const Page = () => {
  return (
    <main className="flex min-h-[88vh] items-center justify-center gap-2">
      <h1 className="text-2xl">Under maintenance</h1>
      <Settings className="size-8 animate-spin" />
    </main>
  );
};

export default Page;
