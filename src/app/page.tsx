import { HydrateClient } from "~/trpc/server";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./_components/card";
import { Button } from "./_components/button";

export default async function Home() {

  return (
    <HydrateClient>
      <main className="h-screen w-screen p-3 bg-rouge-100">
        <Card>
          <CardHeader>
            <CardTitle>Workplace 1</CardTitle>
            <CardDescription>Start Date - End Date</CardDescription>
          </CardHeader>
          <CardContent>
            This is a test
          </CardContent>
          <CardFooter className="flex gap-3 justify-end">
            <Button variant={'primary'}>Button 1</Button>
            <Button variant={'secondary'}>Button 2</Button>
          </CardFooter>
        </Card>
      </main>
    </HydrateClient>
  );
}
