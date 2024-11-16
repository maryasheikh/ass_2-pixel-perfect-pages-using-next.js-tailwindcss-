export default function Contact(){
    return (
        <div>
            <section className="h-svh bg-purple-50">
                <div className="container mx-auto p-8  min-h-screen items-center w-full max-w-lg rounded-lg" >
                    <div className="contact-card max-w-md max-auto bg-gray-50 p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold font-serif text-pink-400 mb-6 text-center">Contact Us</h2>
                        <form>   
                            <div className="form-group mb-5">
                                <label htmlFor="name" className="block text-sm text-gray-700 mb-2">Your Name :</label>
                                <input 
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                className="w-full p-3 bg-gray-200 rounded-md border-none focus:outline focus:ring-2 focus:ring-pink-400"
                                />
                        </div>
                        <div  className="form-group mb-5">
                                <label htmlFor="email" className="block text-sm text-gray-700 mb-2">Your Email :</label>
                                <input 
                                type="email"
                                id="name"
                                placeholder="Enter your email"
                                className="w-full p-3 bg-gray-200 rounded-md border-none focus:outline focus:ring-2 focus:ring-pink-400"
                                />
                        </div>
                        <div  className="form-group mb-5">
                                <label htmlFor="email" className="block text-sm text-gray-700 mb-2">Your Number :</label>
                                <input 
                                type="tel"
                                id="phone"
                                placeholder="Enter your number"
                                className="w-full p-3 bg-gray-200 rounded-md border-none focus:outline focus:ring-2 focus:ring-pink-400"
                                />
                        </div>
                        <div  className="form-group mb-5">
                                <label htmlFor="message" className="block text-sm text-gray-700 mb-2">Your Message :</label>
                                <textarea 
                                id="message"
                                rows={3}
                                placeholder="Enter your message"
                                className="w-full p-3 bg-gray-200 rounded-md border-none focus:outline focus:ring-2 focus:ring-pink-400"></textarea>
                        </div>
                        <button
                            type="submit"
                            className=" w-full bg-pink-400 py-4 rounded-md hover:bg-gray-400 transition-colors font-mono">Send Message
                        </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

