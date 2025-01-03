interface ReadonlyProps {
  label: string
  value: string
  className?: string
}
export default function Readonly({ label, value }: ReadonlyProps) {
  return (
    <div className="w-full flex flex-col gap-2">
      <span className="text-md">{label}</span>
      <input
        type="text"
        value={value}
        readOnly
        className="text-sm text-gray-500 p-2 border focus-within:ring-1 ring-blue-400 rounded-lg "
      />
    </div>
  )
}
