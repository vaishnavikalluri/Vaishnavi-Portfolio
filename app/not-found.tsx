import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f3ef]">
      <div className="text-center p-8">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-[#537d9a] mb-4">404</h1>
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">Page Not Found</h2>
          <p className="text-gray-600 text-lg mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-block px-8 py-4 bg-[#537d9a] text-white rounded-lg hover:bg-[#537d9a]/90 transition-colors font-semibold"
          >
            Go Back Home
          </Link>
          
          <div className="flex justify-center gap-6 mt-8">
            <Link href="/#about" className="text-[#537d9a] hover:underline">About</Link>
            <Link href="/#projects" className="text-[#537d9a] hover:underline">Projects</Link>
            <Link href="/#contact" className="text-[#537d9a] hover:underline">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}