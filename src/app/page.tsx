import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./_components/card";
import { Button } from "./_components/button";

export default async function Home() {

  return (
    <main className="min-h-screen w-full p-3 bg-rouge-100 px-5 lg:px-20 2xl:px-72">
      <div className="grid grid-cols-2 pt-5 pb-10">
        <div>
          <h2 className="relative top-2.5">{'<J/>'}</h2>
        </div>
        <div className="place-self-end">
          <Button variant={'primary'}>My Resume</Button>
        </div>
      </div>
      <section id="banner" className="flex flex-col md:grid md:grid-cols-[45%_auto]">
        <div className="px-1 pb-3 md:pt-12">
          <h1 className="text-5xl text-center md:text-left lg:text-6xl px-1">Hey! I&apos;m Will</h1>
          <h1 className="text-center md:text-left">A Web Developer</h1>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-center md:text-left">
              Working to fund my cheese cake addiction.
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center md:text-left">
            <p>I also like making useful tools and amazing experiences on the web.</p>
          </CardContent>
          <CardFooter className="flex gap-5 md:justify-end">
            <Button variant={'primary'} className="w-full md:w-fit">My Resume</Button>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}
