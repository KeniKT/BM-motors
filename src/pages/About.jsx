import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Swiper CSS
import "swiper/css";

// Replace with your real images
import img1 from "../assets/coffee-cherries_4.png";
import img2 from "../assets/coffee-cherries_4.png";
import img3 from "../assets/coffee-cherries_4.png";
import img4 from "../assets/coffee-cherries_4.png";
import img5 from "../assets/coffee-cherries_4.png";
import img6 from "../assets/coffee-cherries_4.png";
import img7 from "../assets/coffee-cherries_4.png";
import img8 from "../assets/coffee-cherries_4.png";

function AboutUs() {
  const slides = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <>
      {/* ---------- Hero / Intro ---------- */}
      <section className="py-20 bg-gradient-to-r from-[#5C2C0C] to-[#964304] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-amber-300">BM Coffee</span>
          </h1>
          <blockquote className="text-lg md:text-xl italic leading-relaxed max-w-3xl mx-auto text-amber-100">
            “Experience the finest collection of Ethiopian coffee beans, where
            tradition meets excellence.”
          </blockquote>
        </div>
      </section>

      {/* ---------- Smooth Auto-scrolling Carousel ---------- */}
      <section className="w-full bg-[#FAF6F0] py-12 overflow-hidden">
        <div className="w-full mx-auto">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={12} // small gap between slides
            slidesPerView={4}
            loop={true}
            allowTouchMove={false}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={4000} // continuous smooth scroll
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 8 },
              640: { slidesPerView: 2, spaceBetween: 10 },
              1024: { slidesPerView: 3, spaceBetween: 12 },
              1280: { slidesPerView: 4, spaceBetween: 12 },
            }}
            className="w-full"
          >
            {slides.map((image, idx) => (
              <SwiperSlide key={idx} className="flex justify-center">
                <div className="bg-white rounded-lg shadow-md overflow-hidden w-full">
                  <img
                    src={image}
                    alt={`Slide ${idx + 1}`}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-3">
                    <h3 className="font-bold text-base text-[#5C2C0C]">
                      Coffee Story {idx + 1}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      A short caption describing this image or process.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ---------- Who We Are ---------- */}
      <section className="py-20 bg-white text-black">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={img4}
              alt="Farmers"
              className="rounded-lg shadow-lg object-cover w-full"
            />
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#5C2C0C]">
              Who We Are
            </h2>
            <p className="text-lg mb-6 text-gray-700 leading-relaxed">
              BM Coffee Export is dedicated to bringing the world the finest
              Ethiopian coffee beans. With decades of experience, we work
              directly with farmers to ensure authenticity, quality, and
              sustainability in every bean we export.
            </p>
            <p className="text-lg mb-6 text-gray-700 leading-relaxed">
              We take pride in preserving Ethiopia's coffee heritage while
              innovating for the future. Our beans are carefully sourced,
              processed, and delivered to guarantee a unique taste that
              represents the heart of Ethiopian culture.
            </p>

            <div className="grid grid-cols-3 gap-6 text-center mt-6">
              <div>
                <div className="text-3xl font-bold text-[#D46605]">25+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#D46605]">500+</div>
                <div className="text-gray-600">Partner Farmers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#D46605]">50+</div>
                <div className="text-gray-600">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Mission / Vision / Values ---------- */}
      <section className="py-20 bg-gradient-to-r from-[#773503] to-[#5C2C0C]">
        <div className="max-w-6xl mx-auto px-6 text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Mission, Vision & Values
          </h2>
          <p className="text-lg text-amber-100">
            The principles that guide every decision and every bean we export.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-[#5C2C0C] mb-4">Mission</h3>
            <p className="text-gray-700">
              To share the authentic taste of Ethiopian coffee with the world
              while supporting farmers through fair trade and sustainable
              practices.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-[#5C2C0C] mb-4">Vision</h3>
            <p className="text-gray-700">
              To become a global leader in premium coffee exports,
              representing Ethiopia's legacy of quality and excellence.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-[#5C2C0C] mb-4">Values</h3>
            <p className="text-gray-700">
              Integrity, sustainability, and innovation guide every step of our
              journey, ensuring that every cup tells a story of heritage and
              passion.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
