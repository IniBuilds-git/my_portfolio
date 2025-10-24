import { TechStackProps } from '@/types'

export default function TechStack({ tags, className = '' }: TechStackProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}