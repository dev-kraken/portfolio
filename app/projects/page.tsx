import {Settings} from "lucide-react";

const Page = () => {
  return (
    <main className="flex min-h-[88vh] items-center justify-center gap-2">
      <h1 className="text-2xl">Under maintenance</h1>
        <Settings className="size-8 animate-spin" />
    </main>
  );
};

export default Page;
