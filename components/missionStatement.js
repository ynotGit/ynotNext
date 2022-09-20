import Image from 'next/image'

export default function MissionStatement() {
    return (
        <>
            <div className="text-center capitalize">
                <h2>Technologically driven digital experiences that your users will love</h2>
            </div>
            <button type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transhtmlForm bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
                Send Message
            </button>
        </>
    )
}