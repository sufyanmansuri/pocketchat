import { Skeleton } from '@/components/ui/skeleton'

export function ConversationsSkeleton() {
  return (
    <div className="container my-3 space-y-3">
      {Array.from(Array(10).keys()).map((i) => (
        <div className="flex items-center space-x-4 w-full" key={i}>
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      ))}
    </div>
  )
}
