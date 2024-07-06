import Image from "next/image";
import Form from "./_components/form";

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-sm font">ZOD | React Hook Form | Shadcn UI</h1>
      <main className="max-w-2xl m-auto h-40 mt-20">
        <Form />
      </main>
    </main>
  );
}
