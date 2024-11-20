import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./_components/card";
import { Button } from "./_components/button";

export default async function Home() {

  return (
    <main className="min-h-screen w-full p-3 bg-rouge-100 px-20">
      <div className="grid grid-cols-2 pt-5 pb-10">
        <div></div>
        <div className="place-self-end">
          <Button variant={'primary'}>My Resume</Button>
        </div>
      </div>
      <section id="banner" className="grid grid-cols-[45%_auto]">
        <div className="pt-12">
          <h1 className="text-6xl">Hey! I&apos;m Will</h1>
          <h1>A Web Developer</h1>
        </div>
        <Card className="p-10">
          <CardHeader>
            <CardTitle>
              I like starwberry milk.
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>I also like making useful tools and amazing experiences on the web.</p>
          </CardContent>
          <CardFooter className="flex gap-5">
            <Button variant={'primary'}>My Resume</Button>
            <Button variant={'secondary'}>Contact Me</Button>
          </CardFooter>
        </Card>
      </section>
          </main>
  );
}
