import Image from "next/image";

export default function Routine() {
    return (
      <section id="routine" className="flex flex-col items-center justify-center w-full  py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">3月 - 6月事奉人员表</h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                “各人要照所得的恩赐彼此服事，作神百般恩赐的好管家。” <br/> 彼得前书 4:10

            </p>
          </div>
          <div className="divide-y rounded-lg border">
            {/* Embed the PDF file using an iframe */}
            <Image src="/routine.png" alt="Hero" className="object-cover w-full h-full" width={1440} height={400} />
          </div>
        </div>
      </section>
    );
  }
  