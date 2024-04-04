import { useTheme } from "next-themes"

export default function Home() {
  const { theme, setTheme } = useTheme()
  return (
    <div id="animated-background" className="transform-gpu bg-center bg-no-repeat" >
      <header className="header relative px-4 py-24 sm:px-6 md:grid md:min-h-screen md:place-items-center lg:px-8">
        <div className="absolute right-4 top-5 space-x-4 text-gray-300 dark:text-gray-600">
          <button className={`p-1 ${theme === "light" ? "text-yellow-500" : ""}`} title="Light" onClick={() => setTheme("light")}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"></path></svg>
            <span className="sr-only">Light</span>
          </button>
          <button className={`p-1 ${theme === "dark" ? "text-yellow-500" : ""}`} title="Dark" onClick={() => setTheme("dark")}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"></path></svg>
            <span className="sr-only">Dark</span></button>
          <button className={`p-1 ${theme === "system" ? "text-yellow-500" : ""}`} title="System" onClick={() => setTheme("system")}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"></path></svg>
            <span className="sr-only">System</span></button></div><div className="mx-auto max-w-max">
          <div data-test-id="website-name" className="w-full">
            <span className="text-5xl font-extrabold tracking-tighter text-gray-900 dark:text-white sm:text-8xl">frontend</span>
            <span className="text-3xl font-semibold tracking-tight text-yellow-500 sm:text-5xl">.stack</span>
          </div>
          <div className="mt-14 flex justify-end"><div className="border-yellow-500 sm:w-2/3 sm:border-l-4">
            <h1 data-test-id="website-slogan" className="py-3 pl-8 text-2xl font-normal text-gray-800 dark:text-gray-200">Everything you need to know about Frontend, and the tools to build them.</h1>
            <p className="text-right text-s italic text-gray-500">-
              <a href="https://www.linkedin.com/in/codepur/" target="_blank" title="Nrwl - Monorepo expertise">Made with love by Neeraj</a>
              <span>🌼</span>
            </p>
          </div>
          </div>
        </div>
        <a title="Go to Understanding Monorepos" href="#understanding-monorepos" aria-hidden="true" className="absolute left-1/2 bottom-2 -ml-4 hidden lg:block">
          <svg className="h-14 w-14 animate-pulse text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </a>
      </header>
    </div>
  );
}
