import IconArrowRight from "../components/Icons/ArrowRight";
import PizzaImage from "../assets/Images/pizza2.png";
import CookingImage from "../assets/Images/cooking1.png";
import IconPatchCheck from "../components/Icons/IconPatchCheck";
import OrderFood from "../assets/Images/orderFood.png";
import Pickup from "../assets/Images/pickup.png";
import Enjoy from "../assets/Images/enjoy.png";
import Layout from "../Layouts/Layout";

function Home() {
  return (
    <Layout>
    <div>
      {/* Hero section */}
      <section
        className="flex flex-col-reverse items-center justify-center py-5 md:flex-row md:gap-7 bg-gradient-to-r from-amber-50 to-orange-300
                "
      >
        <div className="w-4/6 ml-4 text-center md:w-2/6 md:text-left">
          <div className="flex justify-center text-4xl md:justify-normal">
            <h1 className="pb-5 font-bold text-transparent bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text">
              Enjoy the Slice{" "}
            </h1>
            <h1>😋</h1>
          </div>

          <p className="pb-4 text-[#6B7280]">
            The Pizza App lets you order your favorite pizza from the comfort of
            your home. Enjoy the best pizza in town with just a few clicks.
          </p>

          <button className="flex items-center px-4 py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-600 group">
            Order Now
            <span className="inline-block ml-3 transition-transform ease-in-out group-hover:translate-x-2">
              <IconArrowRight />
            </span>
          </button>
        </div>
        <div>
          <img src={PizzaImage} alt="Pizza" width={550} height={550} />
        </div>
      </section>

      {/* Services section */}
      <section className="py-4 mt-6 bg-gradient-to-r from-amber-50 to-orange-300">
        <div className="container flex flex-col md:flex-row">
          <div className="flex flex-col items-center justify-center rounded-lg lg:w-1/2">
            <img
              src={CookingImage}
              width={500}
              className="rounded-lg"
              alt="Cooking"
            />
          </div>
          <div className="flex flex-col flex-wrap text-center lg:py-6 lg:w-1/2 lg:pl-12 lg:text-left">
            <div className="flex flex-col items-center lg:items-start">
              <div>
                <h2 className="mb-2 text-5xl font-extrabold text-transparent title-font bg-gradient-to-r from-orange-600 to-orange-300 bg-clip-text">
                  Cooked by the best <br /> chefs in the world
                </h2>
                <p className="text-base leading-relaxed text-[#6B7280]">
                  There are many benefits regarding to that but the main ones
                  are:
                </p>
              </div>
            </div>

            <div className="w-full p-1">
              <div className="flex items-center h-full p-2 text-2xl rounded">
                <IconPatchCheck className="text-[#F38339] w-10 h-10 mr-4" />
                <span className="font-bold title-font">Perfect taste</span>
              </div>
            </div>
            <div className="w-full p-1">
              <div className="flex items-center h-full p-2 text-2xl rounded">
                <IconPatchCheck className="text-[#F38339] w-10 h-10 mr-4" />
                <span className="font-bold title-font">Prepared quickly</span>
              </div>
            </div>
            <div className="w-full p-1">
              <div className="flex items-center h-full p-2 text-2xl rounded">
                <IconPatchCheck className="text-[#F38339] w-10 h-10 mr-4" />
                <span className="font-bold title-font">
                  Food hygeine guaranteed
                </span>
              </div>
            </div>

            <div className="px-5 py-4 mx-auto">
              <div className="flex justify-center py-4">
                <div className="inline-flex w-16 h-1 bg-yellow-500 rounded-full"></div>
              </div>

              <div className="flex flex-wrap space-y-6 md:space-y-0">
                <div className="flex flex-col items-center text-center p-4 md:w-1/3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 bg-yellow-100 rounded-full">
                    <img src={OrderFood} />
                  </div>
                  <div className="flex-grow">
                    <h2 className="mb-3 text-lg font-bold text-gray-900 title-font">
                      Order Food
                    </h2>
                    <p className="text-base leading-relaxed">
                      As easy as 1, 2, 3. Just select your favorite pizza and
                      place your order.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center p-4 md:w-1/3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 bg-yellow-100 rounded-full">
                    <img src={Pickup} />
                  </div>
                  <div className="flex-grow">
                    <h2 className="mb-3 text-lg font-bold text-gray-900 title-font">
                      Pickup Food
                    </h2>
                    <p className="text-base leading-relaxed">
                      Pick up your order from the nearest store or get it
                      delivered to your doorstep.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center p-4 md:w-1/3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 bg-yellow-100 rounded-full">
                    <img src={Enjoy} />
                  </div>
                  <div className="flex-grow">
                    <h2 className="mb-3 text-lg font-bold text-gray-900 title-font">
                      Enjoy Food
                    </h2>
                    <p className="text-base leading-relaxed">
                      As soon as you get your order, enjoy the delicious pizza
                      with your loved ones.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About and Address Section */}
      {/* Address */}
      <section className="py-4 mt-6 flex flex-col justify-center items-center md:flex-row  items-center justify-evenly">
        <div className="container flex flex-col md:flex-row">
          <div className="flex flex-col items-center justify-center rounded-lg lg:w-1/2 ml-16 ">
            <div className="flex flex-col items-center justify-center md:flex-row bg-white absolute w-full md:w-[600px] md:mt-[200px] p-4">
             <div className=" flex flex-col items-center justify-center md:flex-row md:justify-evenly">
             <div className="flex flex-col items-center justify-center">
                <h2 className="w-full flex mb-3 text-lg font-bold text-gray-800 title-font">
                  Address-66/65 Heerapath,Near City Park, Mansrovar Jaipur
                </h2>
              </div>
              <div >
                <div>
                  <h2 className="text-sm font-bold text-gray-900 title-font">
                    EMAIL
                  </h2>
                  <h4 className="text-sm font-bold text-orange-900 title-font">vikramkumarsaini007@gmail.com</h4>
                </div>
                <div>
                  <a href="#" className="text-sm font-bold text-gray-900 title-font">
                   PHONE
                  </a>
                  <h4 className="text-sm font-bold title-font" >9352748568</h4>
                </div>
              </div>
             </div>
            </div>
            <div className="flex flex-col flex-wrap ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.330832659634!2d75.75596060986976!3d26.86122817658061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db50eff4199ad%3A0x9afdea6b662a32ee!2sHeerapath!5e0!3m2!1sen!2sin!4v1741584547364!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"width="650"
              height="400"
              referrerpolicy="no-referrer-when-downgrade"
              className=" w-full md:w-[650px] md:h-[400px]"
            >
              <div className="bg-white w-12 h-12">
                Address- Jaipur Heera path
              </div>
            </iframe>
            </div>
          </div>
        </div>
         {/* About */}
         <div className="container flex flex-col">
            <h2  className="mb-3 text-lg font-bold text-orange-900 title-font">About</h2>
            <div>
                At Pizza App,we are passionate about crafting exceptional pizzas that bring joy to every bite. Our jounery began with a commitment to using the freshest, high-quality ingredients,combined with authentic recipes passed down thrrough generations. Whether your're craving a classic Margherita or an adventurous specialty pizza, each creaton is made with care and attention to detail, Join us in celebration the art of pizza-making and indulge in flavors that will leave you wanting more. Welcome to the world of Pizza App, where every pizza tells a delicious story
            </div>
         </div>
      </section>
    </div>
    </Layout>
  );
}

export default Home;
