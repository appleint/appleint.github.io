export default function Home() {
  return (
    <div className="flex size-full min-h-screen flex-col items-center bg-gray-100">
      <div className="h-10 w-full bg-blue-500 p-2">
        <h1 className="mb-6 text-4xl font-bold text-black">
          Welcome to My Next.js App
        </h1>
      </div>
      <div className="w-full flex-1 bg-blue-100">
        <p className="mt-4 text-lg text-gray-700">
          This is a simple example of a Next.js application using Tailwind CSS
          for styling.
        </p>
      </div>

      <div className="h-10 w-full bg-blue-500">
        <footer className="text-black">Welcome!</footer>
      </div>
    </div>
  );
}
