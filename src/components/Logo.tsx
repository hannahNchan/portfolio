export default function Logo() {
  return (
    <a href="#" className="flex items-center gap-2">
      <div className="relative">
        <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          HN
        </span>
        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-400 to-pink-400"></span>
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-xs font-semibold text-white">Hannah Narvaez</span>
        <span className="text-[10px] text-gray-400">Portfolio</span>
      </div>
    </a>
  )
}
