import React from "react";
import { Coffee, Droplets, Sun, FlaskRound } from "lucide-react"; // icons
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

import imgFarm from "../assets/coffee-cherries_4.png";
import imgLab from "../assets/coffee-cherries_4.png";
import imgMap from "../assets/coffee-cherries_4.png";

function Sourcing() {
  return (
    <>
      {/* ---------- Hero / Intro ---------- */}
      <section className="py-20 bg-gradient-to-r from-[#964304] to-[#773503] text-white text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Sourcing</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-amber-100">
            From Ethiopia’s rich highlands to your cup, discover the journey of
            our beans.
          </p>
        </div>
      </section>

      {/* ---------- Coffee Origins Map ---------- */}
      <section className="py-16 bg-[#FAF6F0]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src={imgMap}
              alt="Coffee Origins Map"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-[#5C2C0C] mb-6">
              Ethiopian Coffee Origins
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Ethiopia is the birthplace of coffee, with regions like Sidamo,
              Yirgacheffe, and Harrar producing beans renowned for their unique
              flavors and aromas. Each region contributes a distinct profile,
              shaped by altitude, climate, and heritage.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We source directly from farmers across these regions, ensuring
              authenticity and sustainability in every batch.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Pre-Processing Steps ---------- */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center mb-12">
          <h2 className="text-4xl font-bold text-[#5C2C0C] mb-4">
            Pre-Processing Journey
          </h2>
          <p className="text-lg text-gray-600">
            From cherry to bean, every step matters in crafting quality coffee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#964304]">
            <Coffee className="w-10 h-10 text-[#964304] mb-4 mx-auto" />
            <h3 className="text-xl font-bold text-[#5C2C0C] mb-2">Harvesting</h3>
            <p className="text-gray-600">
              Handpicked cherries selected at peak ripeness for the best quality.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-[#3C1B02]/70 p-6 rounded-lg shadow-lg text-white">
            <Droplets className="w-10 h-10 text-amber-300 mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Washing</h3>
            <p>
              Cherries are carefully washed to remove impurities and prepare for
              drying.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#964304]">
            <Sun className="w-10 h-10 text-[#964304] mb-4 mx-auto" />
            <h3 className="text-xl font-bold text-[#5C2C0C] mb-2">Drying</h3>
            <p className="text-gray-600">
              Beans are sun-dried on raised beds, enhancing flavor complexity.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Lab & Quality Testing ---------- */}
      <section className="relative py-24 bg-[#3C1B02]">
        <img
          src={imgLab}
          alt="Lab Testing"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative max-w-5xl mx-auto px-6 text-center text-white">
          <FlaskRound className="w-14 h-14 text-amber-300 mb-6 mx-auto" />
          <h2 className="text-4xl font-bold mb-6">Lab & Quality Testing</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Every batch undergoes strict quality control and cupping tests in
            our labs. Our experts ensure consistency, aroma, and flavor standards
            that represent the best of Ethiopia.
          </p>
        </div>
      </section>

      {/* ---------- Farming Area Showcase (Smooth Full-Width Auto-Scroll) ---------- */}
      <section className="py-20 bg-[#FAF6F0]">
        <div className="text-center mb-12 px-6">
          <h2 className="text-4xl font-bold text-[#5C2C0C] mb-4">
            Farming Area Showcase
          </h2>
          <p className="text-lg text-gray-600">
            A glimpse into the regions and farms where our story begins.
          </p>
        </div>

        <div className="w-full">
          <Swiper
            modules={[Autoplay, FreeMode]}
            freeMode={true}
            grabCursor={false}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={6000} // smooth continuous scroll
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 16 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="w-full"
          >
            {Array(7)
              .fill(imgFarm)
              .map((img, idx) => (
                <SwiperSlide key={idx}>
                  <div className="border-2 border-[#5A2802] rounded-lg overflow-hidden shadow-md bg-white">
                    <img
                      src={img}
                      alt={`Farm Area ${idx + 1}`}
                      className="w-full h-80 object-cover"
                    />
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold text-[#964304]">
                        Farm Area {idx + 1}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Region {idx + 1}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Sourcing;
