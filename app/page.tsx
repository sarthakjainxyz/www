import { FaCode, FaDiscord, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-mono)] whitespace-nowrap">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="font-bold text-5xl">Sarthak Jain</h1>
        <div className="list-inside list-decimal text-sm/6 text-center sm:text-left">
          <p className="mb-2 tracking-[-.01em]">
            Passionate Full Stack Developer from India.
          </p>
          <p className="tracking-[-.01em]">
            I like to <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold hover:underline hover:underline-offset-4">create</code> and <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold hover:underline hover:underline-offset-4">break</code> softwares ^-^
          </p>
        </div>
        <div className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://discord.com/users/877064899065446461"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord
              width={16}
              height={16}
            />
            Discord
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://github.com/sarthakjainxyz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              width={16}
              height={16}
            />
            Github
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://wakatime.com/@sarthakjainxyz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCode
              width={16}
              height={16}
            />
            Wakatime
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="mailto:mail@sarthakjain.xyz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdEmail
              width={16}
              height={16}
            />
            Email
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-sm">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/sarthakjainxyz/www"
          target="_blank"
          rel="noopener noreferrer"
        >
          v0.0.1
        </a>
        &#x2022;
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://sarthakjain.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          &copy; Sarthak
        </a>
      </footer>
    </div>
  );
}
