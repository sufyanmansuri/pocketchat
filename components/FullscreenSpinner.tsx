import { Spinner } from './ui/spinner'

function FullscreenSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-20 bg-background/80 backdrop-blur-sm transition-opacity animate-in fade-in animate-out fade-out">
      <Spinner className="h-8 w-8" />
    </div>
  )
}
export default FullscreenSpinner
