import Image from 'next/image'

export default function MissionStatement() {
    return (
        <section className="text-center">
            <div className="capitalize">
                <h2>We build bespoke websites that get you noticed online</h2>
                <p>Orientated towards your goals, Fast and SEO friendly, our websites use the latest tech to deliver a great experience for your user. Happy users = more sales!</p>
            </div>
            <button type="submit"
                className="w-36 mt-4 px-4 py-2 tracking-wide text-white transition-colors duration-200 transhtmlForm bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
                Get Started
            </button>
        </section>
    )
}