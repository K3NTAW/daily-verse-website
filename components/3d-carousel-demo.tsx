import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel"

export function ThreeDPhotoCarouselDemo() {
  return (
    <div className="w-full max-w-4xl relative mx-auto">
      <div className="min-h-[500px] flex flex-col justify-center border border-dashed rounded-lg space-y-4">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <ThreeDPhotoCarousel />
        </div>
      </div>
    </div>
  )
} 