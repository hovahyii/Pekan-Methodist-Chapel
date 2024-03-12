import Link from "next/link";

export default function About() {
  return (
    <div id="service" className="bg-white py-8 lg:py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4">
        <div className="lg:w-1/2">
          <div className="space-y-4">
            <h1 className="text-3xl lg:text-5xl font-bold tracking-tighter">
            北根卫理布道所

            </h1>
            <p className="max-w-[700px] text-gray-500 text-base lg:text-lg">
            欢迎加入我们的敬拜和团契，共同领受上帝的爱。 🙏❤️
            </p>
          </div>
          <div className="mt-8 space-y-4">
            <div className="grid gap-1">
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tighter">崇拜时间</h2>
              <p className="text-gray-500 dark:text-gray-400">每周日下午 1：30 </p>
            </div>
            <div className="grid gap-1">
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tighter">地点</h2>
              <p className="text-gray-500 dark:text-gray-400">No 21 Tingkat Bawah, Jalan Tok Muda Haji Idris, Kampung Pancur, 26600 Pekan, Pahang</p>
            </div>
            <div className="grid gap-1">
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tighter">堂会负责人</h2>
              <p className="text-gray-500 dark:text-gray-400">
                <Link className="text-orange-500" href="https://whas.me/tNSeh0VXpx">
                戴光顺传道 
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-8 lg:mt-0 lg:w-1/2 h-96 lg:h-auto">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d704.0002131341809!2d103.39459922657608!3d3.488196846919058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cf5079ed3621e5%3A0x1b3d6b1c28f97d0b!2sMethodist%20House%20Pekan!5e0!3m2!1sen!2smy!4v1710230022304!5m2!1sen!2smy" 
            width="100%" 
            height="400" 
            loading="lazy" 
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
