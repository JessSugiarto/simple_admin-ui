import Image from 'next/image';
import BackButton from "@/components/BackButton";

export default function Page() {
  return (
    <>
      <BackButton text='Go Back' link="/" />
      <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-white-200 dark:bg-black-900">
        <div className="w-full max-w-md p-6 rounded-lg border border-gray-300 dark:border-gray dark:bg-black dark:bg-opacity-10 dark:border-opacity-20 dark:shadow-lg flex flex-col items-center">
          <div className="relative flex justify-center">
            <Image
              src="/RT.webp"
              alt="Profile Picture"
              width={150}
              height={150}
              className="rounded-full shadow-2xl dark:shadow-black"
            />
          </div>
          <div className="mt-6 w-full p-6 rounded-lg">
            <p className="text-center text-xl font-semibold dark:text-white">Ryan Tedder</p>
            <p className="mt-4 text-center dark:text-gray-300">Date of Birth: June 26, 1979</p>
            <p className="mt-2 text-center dark:text-gray-300">Address: Main Street</p>
            <p className="mt-2 text-center dark:text-gray-300">Phone Number: (+1) (555) 555-1234</p>
          </div>
        </div>
      </main>
    </>
  );
}
