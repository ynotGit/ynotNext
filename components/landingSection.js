import Image from 'next/image'

export default function Landing() {
    return (
        <>
            <div className="relative mb-8">
                <video autoPlay loop muted className="rotate-180 max-h-90">
                    <source src="/video/landing-vid.mp4" />
                </video>
                <Image
                    src="/images/landing-bg.png"
                    layout="fill"
                    objectFit="cover"
                />
                <div className="absolute top-[50%] left-1.5 pl-4 max-w-xs text-black">
                    <p>Welcome / Willkommen / Bienvenue / Bienvenido / ようこそ / добро пожаловать / 欢 迎 / أهلا بك</p>
                    <h1>
                        Design • Develop • Innovate
                    </h1>
                </div>
            </div>
        </>
    )
}