import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to My Next.js App</h1>
      <Image
        src="/images/hero-image.jpg"
        alt="Hero Image"
        width={600}
        height={400}
        className="rounded-lg shadow-lg"
      />
      <p className="mt-4 text-lg text-gray-700">
        This is a simple example of a Next.js application using Tailwind CSS for
        styling.
      </p>
    </div>
  );
}
