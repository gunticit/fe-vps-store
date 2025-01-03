interface WriteProps {
  label: string
  value?: string
}
export default function Write({ label, value }: WriteProps) {
  return (
    <div className="w-full flex flex-col gap-2">
      <span className="text-md">{label}</span>
      <input
        type="text"
        placeholder={value}
        className="text-sm text-gray-500 p-3 border focus-within:ring-1 ring-blue-400 rounded-lg "
      />
    </div>
  )
}
