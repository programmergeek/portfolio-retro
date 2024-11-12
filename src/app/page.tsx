import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="">
       <h1>Header 1</h1>
        <h2>Header 2</h2>
        <h3>Header 3</h3>
        <p>paragraph</p>
        <p className="text-small">small</p>
        <p className="copyright">copyright</p>
      </main>
    </HydrateClient>
  );
}
