import Image from 'next/image'
import CTAButton from './ctaButton'

export default function MissionStatement() {
    return (
        <section className="text-center py-12">
            <div className="capitalize">
                <h2>We build bespoke websites that get you noticed online</h2>
                <p>Orientated towards your goals, Fast and SEO friendly, our websites use the latest tech to deliver a great experience for your user.</p>
            </div>

            <CTAButton />
        </section>
    )
}