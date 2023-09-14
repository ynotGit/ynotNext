export default function Form() {

    return (
        <div className="py-12 relative flex flex-col justify-center overflow-hidden">
            <div
                className="w-full p-6 m-auto rounded-md shadow-md border">
                <p className="mb-8">We're ambitious and enjoy new challenges. Whatever your project size we're happy to help. You can get in contact by filling out our contact form below or directly sending us an email to hello@ynotinnovate.com.</p>
                <form action="#" method="post" className="mt-6">
                    <div className="relative mb-8">
                        <input id="name" name="name" type="text"
                            className="w-full h-6 p-1 text-gray-900 placeholder-transparent border-b-2 border-gray-300 peer focus:outline-none focus:border-green-600"
                            placeholder="Your Name" required />
                        <label htmlFor="name"
                            className="absolute left-0 text-sm transition-all peer-placeholder-shown:text-base peer-focus:text-sm  peer-focus:text-green-600">
                            Name</label>
                    </div>
                    <div className="relative mb-8">
                        <input id="email" name="email" type="text"
                            className="w-full h-6 p-1 text-gray-900 placeholder-transparent border-b-2 border-gray-300 peer focus:outline-none focus:border-green-600"
                            placeholder="john@doe.com" required />
                        <label htmlFor="email"
                            className="absolute left-0 text-sm transition-all peer-placeholder-shown:text-base peer-focus:text-sm  peer-focus:text-green-600">Email
                        </label>
                    </div>
                    <div className="relative mb-8">
                        <textarea id="textarea" name="textarea" type="text"
                            className="w-full h-40 p-1 text-gray-900 placeholder-transparent border-2 rounded-sm border-gray-300 peer focus:outline-none focus:border-green-600"
                            placeholder="Your Message" required />
                        <label htmlFor="textarea"
                            className="absolute -left-2.5 peer-placeholder-shown:left-1 focus: -left-2.5 text-sm transition-all peer-placeholder-shown:text-base peer-focus:text-green-600 peer-focus:text-sm">Your Message
                        </label>
                    </div>
                    <div className="mt-6">
                        <button type="submit"
                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transhtmlForm bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
