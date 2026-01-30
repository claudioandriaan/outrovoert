import Header from "../components/Header";

export default function Home() {
  return (
    <div>
        <Header />
        <main>
            <div className="flex justify-center items-center w-full h-[600px] mt-[100px]">
                <img src="/src/assets/logo.svg" className="item-center p-[50px] md:p-[150px]" alt="Homepage Image"  />
            </div>

            {/* Releases */}
            <div id="releases" className="w-[90%] mx-auto h-auto md:h-screen md:mt-[50px] mb-[50px] md:pt-[150px] pt-[120px] ">
                <h2 className="flex justify-center items-center uppercase text-[24px] font-bold mb-[30px]">Releases</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 ">
                    <div className="bg-white p-4 rounded shadow hover:cursor-pointer hover:shadow-lg">
                        <img src="/src/assets/logo.svg" alt="Release 1" className="w-full h-auto rounded mb-2  hover:opacity-[0.5]" />
                        <h3 className="text-lg font-semibold">Release Title 1</h3>
                        <p className="text-gray-600">Artist Name 1</p>
                        <p className="text-gray-600">Release Date 1</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow hover:cursor-pointer hover:shadow-lg">
                        <img src="/src/assets/logo.svg" alt="Release 1" className="w-full h-auto rounded mb-2  hover:opacity-[0.5]" />
                        <h3 className="text-lg font-semibold">Release Title 1</h3>
                        <p className="text-gray-600">Artist Name 1</p>
                        <p className="text-gray-600">Release Date 1</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow hover:cursor-pointer hover:shadow-lg">
                        <img src="/src/assets/logo.svg" alt="Release 1" className="w-full h-auto rounded mb-2  hover:opacity-[0.5]" />
                        <h3 className="text-lg font-semibold">Release Title 1</h3>
                        <p className="text-gray-600">Artist Name 1</p>
                        <p className="text-gray-600">Release Date 1</p>
                    </div>
                </div>
            </div>

            {/* Contact Section */ }
            <div id="contact" className="w-full md:h-[580px] h-auto mx-auto md:px-[100px] px-[30px] pt-[60px]">
                {/* Header */}
                <div className="text-start mb-12">
                    <h2 className="text-2xl md:text-6xl font-bold text-white pl-4 mb-4">
                    Contact Us
                    </h2>
                    <p className="text-start text-white/80  mx-auto pl-4">
                    Please feel free to contact us and we will get back to you as soon as possible.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-2 items-start md:w-full w-[90%] mx-auto">
                    {/* Form */}
                    <form className="flex flex-col gap-2 md:p-6">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="p-3 rounded bg-white text-black outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="p-3 rounded bg-white text-black outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows="5"
                            className="p-3  bg-white text-black outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="bg-white text-black p-3 rounded font-semibold hover:bg-gray-200 transition"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Contact Info */}
                    <div className="text-white space-y-4 text-sm md:text-lg pt-5 md:pb-2 pb-6">
                        <p><strong>Visit us:</strong> 310 G 224 Amptana Antsirabe</p>
                        <p><strong>Call us:</strong> +261 34 55 504 44</p>
                        <p><strong>Email:</strong> claudio.andriaan@gmail.com</p>
                    </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center text-[#000] bg-gray-200 py-5">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Outrovaert. All rights reserved, Website created by <span className="text-[#0d4b4f]">Claudio Andriniaina</span>.</p>
                </div>

        </main>
    </div>
  );
}