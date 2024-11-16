import Link from "next/link";
import { api, HydrateClient } from "~/trpc/server";
import { Button } from "./_components/button";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="p-10 flex gap-1">
        <Button variant={'primary'} size={'default'} className="">Primary Button</Button>
        <br />
        <Button variant={'secondary'} size={'default'} className="z-50 focus:z-20 hover:z-20">Secondary Button</Button>
      </main>
    </HydrateClient>
  );
}
