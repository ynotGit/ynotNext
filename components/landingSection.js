import Image from 'next/image'
import CTAButton from './ctaButton'

export default function Landing() {
    return (
        <section>
            <div className="relative mb-8">
                <video autoPlay loop muted className="rotate-180 max-h-90">
                    <source src="/video/landing-vid.mp4" />
                </video>
                <Image
                    src="/images/landing-bg.png"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
                <div className="absolute top-[50%] left-1.5 pl-4 max-w-xs text-black">
                    <h1>
                        <span>Y Not Innovate</span>
                    </h1>
                    <p>Design • Develop • Innovate</p>
                    <CTAButton />
                </div>
            </div>
        </section>
    )
}