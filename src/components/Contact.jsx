const Contact = () => {
  return (
    <div className="bg-[#fdf3e6] px-6 md:px-16 py-20">

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <p className="text-gray-600 mt-2">
          We’d love to hear from you. Send us a message!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-start">

        <div className="space-y-6">

          <div>
            <h3 className="text-xl font-semibold">📍 Address</h3>
            <p className="text-gray-600">
              123 Bakery Street, Bangalore, India
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">📞 Phone</h3>
            <p className="text-gray-600">+91 98765 43210</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">✉️ Email</h3>
            <p className="text-gray-600">hello@foodie.com</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">🕒 Opening Hours</h3>
            <p className="text-gray-600">
              Mon - Sun: 8:00 AM - 10:00 PM
            </p>
          </div>

        </div>

        <form className="bg-white p-6 rounded-2xl shadow-lg space-y-4">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-pink-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-pink-400"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-pink-400"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-full hover:scale-105 transition"
          >
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
};

export default Contact;