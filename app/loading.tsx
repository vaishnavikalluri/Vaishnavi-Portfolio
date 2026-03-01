export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f3ef]">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-[#537d9a]/20 border-t-[#537d9a] rounded-full animate-spin"></div>
        </div>
        <p className="text-[#537d9a] font-medium">Loading portfolio...</p>
      </div>
    </div>
  );
}