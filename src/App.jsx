import { useEffect, useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import {
  Backdrop,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Fab,
  TextField,
  Typography,
} from "@mui/material"
import heroImage from "./assets/IntroImage.png"
import about from "./assets/about.jpg"
import product1 from "./assets/product1.png"
import product2 from "./assets/product2.jpg"
import product3 from "./assets/product3.png"
import product4 from "./assets/product4.jpg"
import product5 from "./assets/product5.png"
import product6 from "./assets/product6.jpg"
import product7 from "./assets/product7.png"
import chip from "./assets/Chip.jpeg"
import nature from "./assets/Nature.png"
import review1 from "./assets/review1.jpg"
import review2 from "./assets/review2.jpg"
import review3 from "./assets/review3.jpg"
import review5 from "./assets/review5.jpg"
import logo from "./assets/logo.png"
import AOS from "aos"
import "aos/dist/aos.css"

const reviews = [
  {
    id: "r1",
    image: review1,
    name: "Nicolas Roger",
    description: ` Whenever I use GreenStar Phone, I always feel refreshing
    because of its nature in everyway, plus it's affordable and
    powerful that I needed. It is just seem like a perfect phone
    for me since I don't want to change phones often`,
    stars: 5,
  },
  {
    id: "r2",
    image: review5,
    name: "christian buehner",
    description: ` My Ability to learn to use modern devices are not great. But
    When I use products come from GreenStar, It just seems so easy
    for me, I have been told that it is because of the MinOS that
    makes everything so easy to interact. Now I can call my
    daughter every now and then without troubles`,
    stars: 5,
  },
  {
    id: "r3",
    image: review3,
    name: "Alexander Tokei",
    description: ` My Ability to learn to use modern devices are not great. But
    When I use products come from GreenStar, It just seems so easy
    for me, I have been told that it is because of the MinOS that
    makes everything so easy to interact. Now I can call my
    daughter every now and then without troubles`,
    stars: 4,
  },
]

function App() {
  const [theme, setTheme] = useState("light")
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    })
  }, [])
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const [backdrop, setBackdrop] = useState(false)
  const [ReviewBackdrop, setReviewBackdrop] = useState(false)
  const [ReviewContent, setReviewContent] = useState(false)
  const [imageBackdrop, setImageBackdrop] = useState()
  const [reviewPerson, setReviewPerson] = useState(0)
  let reviewEls = reviews.map((review, index) => {
    if (index == reviewPerson) {
      return (
        <li key={review.id} className="sm:basis-1/4 basis-1/2">
          <article
            className="text-center"
            onClick={handleReviewOpen.bind(null, review.id)}
          >
            <img className="rounded-full" src={review.image} alt="" />
            <h1>{review.name}</h1>
            <div className="text-yellow-400">
              {review.stars > 4 && <i className="fa-solid fa-star"></i>}
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </article>
        </li>
      )
    }
  })
  function chooseImage(image) {
    setImageBackdrop(image)
    handleImageOpen()
  }

  function handleImageClose() {
    setBackdrop(false)
  }
  function handleImageOpen() {
    setBackdrop(true)
  }

  function handleReviewClose() {
    setReviewBackdrop(false)
  }
  function handleReviewOpen(id) {
    setReviewContent(reviews.find((review) => review.id === id))
    setReviewBackdrop(true)
  }
  function IncreaseReviewIndex() {
    if (reviewPerson >= reviews.length - 1) {
      setReviewPerson(0)
    } else {
      setReviewPerson(reviewPerson + 1)
    }
  }
  function DecreaseReviewIndex() {
    if (reviewPerson <= 0) {
      setReviewPerson(reviews.length - 1)
    } else {
      setReviewPerson(reviewPerson - 1)
    }
  }
  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdrop}
        onClick={handleImageClose}
      >
        <div className="p-1 bg-slate-900/50 rounded-full  ">
          <img
            className="w-96 aspect-square rounded-full"
            src={imageBackdrop}
          />
        </div>
      </Backdrop>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={ReviewBackdrop}
        onClick={handleReviewClose}
      >
        <div className="sm:flex sm:px-32 sm:py-20 px-5 bg-slate-600/70">
          <div className="basis-1/2">
            <img
              className="sm:w-96 w-44 rounded-full"
              src={ReviewContent.image}
              alt=""
            />
          </div>
          <div className="basis-1/2">
            <h1 className="font-bold text-3xl">{ReviewContent.name}</h1>
            <p className=" text-lg sm:text-xl">{ReviewContent.description}</p>
            {ReviewContent.stars > 4 && (
              <i className="fa-solid fa-star text-yellow-500"></i>
            )}
            <i className="fa-solid fa-star text-yellow-500"></i>
            <i className="fa-solid fa-star text-yellow-500"></i>
            <i className="fa-solid fa-star text-yellow-500"></i>
            <i className="fa-solid fa-star text-yellow-500"></i>
          </div>
        </div>
      </Backdrop>
      <header className=" fixed top-0 w-full backdrop-blur-sm flex items-center justify-between text-slate-200 py-5 px-5 dark:bg-gray-800/70 bg-gray-900/70 z-50">
        <div className="cursor-pointer">
          <img src={logo} className="rounded-full w-14" alt="" />
        </div>
        <nav>
          <ul className="sm:flex hidden gap-5">
            <li className="hover:text-slate-100 transition text-xl">
              <a href="#introduction">Introduction</a>
            </li>
            <li className="hover:text-slate-100 transition text-xl">
              <a href="#about-us">About Us</a>
            </li>
            <li className="hover:text-slate-100 transition text-xl">
              <a href="#benefits">Benefits</a>
            </li>
            <li className="hover:text-slate-100 transition text-xl">
              <a href="#products">Products</a>
            </li>
            <li className="hover:text-slate-100 transition text-xl">
              <a href="#reviews">Reviews</a>
            </li>
            <li className="hover:text-slate-100 transition text-xl">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <Fab onClick={handleThemeSwitch} color="primary" aria-label="change">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        </Fab>
      </header>
      <main className="flex flex-col gap-20 h-full dark:bg-slate-900 dark:text-white">
        <section
          id="introduction"
          className="bg-slate-100 mb-2 bg-gradient-to-r from-slate-100 to-blue-700 dark:text-black"
        >
          <div className="container sm:mx-auto px-5 sm:flex pt-32 sm:pt-0 sm:items-center">
            <div className="basis-1/2 flex flex-col gap-5">
              <h1 className="sm:text-6xl text-3xl font-bold ">
                Welcome to GreenStar
              </h1>
              <p className="sm:text-xl text-md ">
                If you want to become a part of the earth, using the
                technologies that we have down from the root, Then come to us. A
                company full with beared fruits.
              </p>
              <div className="text-center ">
                <button className="border-2 border-black px-5 py-2 text-3xl hover:bg-slate-900 hover:text-slate-100 transition rounded-full">
                  Get Started
                </button>
              </div>
            </div>
            <div className="basis-1/2">
              <img src={heroImage} className="w-full " alt="" />
            </div>
          </div>
        </section>
        <section
          data-aos="fade-up"
          id="about-us"
          className=" container mx-auto px-5 "
        >
          <h1 className="text-4xl ml-5 my-5 underline">About Us:</h1>
          <div className="sm:flex sm:items-center">
            <p className="basis-1/2 text-xl">
              GreenStar is the company that doesn't run for the money, instead
              we run to the future where clean air is always with us. We always
              try our best to discover new things to make life easier, and
              better in everyway, even the earth are helped by us. We are the
              company that everyone needs.
            </p>
            <img
              className="basis-1/2 aspect-auto sm:w-1/3 rounded-md"
              src={about}
              alt=""
            />
          </div>
        </section>
        <section data-aos="fade-up" id="benefits" className="px-5">
          <div className="container mx-auto">
            <h1 className="text-4xl ml-5 my-5 underline">Benefits:</h1>
            <ul className="md:flex md:justify-center flex-wrap text-white ">
              <li className="basis-1/3 rounded-tl-lg sm:rounded-tr-none rounded-tr-lg bg-red-500  p-5 flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="p-5 mx-5 text-center bg-red-800 rounded-full">
                  <i className="fa-solid text-5xl text-red-500 rounded-full text-center fa-recycle"></i>
                </div>
                <div className="">
                  <b>Recyclable</b>
                  <p>
                    our technologies can be Recyclable because of out materials
                    are not harmful.
                  </p>
                </div>
              </li>
              <li className="basis-1/3 bg-blue-500 p-5 flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className=" px-7 py-5 mx-5  bg-blue-800 text-center rounded-full">
                  <i className="fa-solid inline-block text-5xl text-blue-500  text-center fa-bolt-lightning"></i>
                </div>
                <div className="">
                  <b>Speed</b>
                  <p>
                    our technologies can run faster than most technologies in
                    the world by using a technology called nano.
                  </p>
                </div>
              </li>
              <li className="basis-1/3 md:rounded-tr-lg bg-green-500 p-5 flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className=" p-5 mx-5 bg-green-800 rounded-full text-center">
                  <i className="fa-solid text-5xl text-green-500 text-center fa-seedling"></i>
                </div>
                <div className="">
                  <b>Enviroment Friendly</b>
                  <p>
                    Our technologies use at little as possible energy to not
                    pollute the enviroment
                  </p>
                </div>
              </li>
              <li className="basis-1/3 md:rounded-bl-lg bg-yellow-500 p-5 flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className=" p-5 mx-5 bg-yellow-800 rounded-full text-center">
                  <i className="fa-solid text-5xl text-yellow-500  fa-house"></i>
                </div>
                <div className="">
                  <b>Human Friendly</b>
                  <p>
                    You can use our Technologies with ease because They are very
                    to use.
                  </p>
                </div>
              </li>
              <li className="basis-1/3 bg-purple-500 p-5 flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className=" p-5 mx-5 bg-purple-800 text-center rounded-full">
                  <i className="fa-solid text-5xl text-purple-500 rounded-full text-center fa-money-bill"></i>
                </div>
                <div className="">
                  <b>Cheap Price</b>
                  <p>
                    Even though Our technologies are unique, We don't sell it
                    for money. Our mission is to protect the earth
                  </p>
                </div>
              </li>
              <li className="basis-1/3 rounded-bl-lg md:rounded-bl-none rounded-br-lg bg-pink-500 p-5 flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="px-7 py-5 mx-5 text-center bg-pink-800 rounded-full">
                  <i className="fa-solid block text-5xl text-pink-500  fa-hand-fist"></i>
                </div>
                <div className="">
                  <b>Strength</b>
                  <p>
                    Our technologies can be as powerful as ever because we let
                    the user to be able to customize it to their needs.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section data-aos="fade-up" className="container mx-auto px-5 sm:px-0">
          <h1 className="text-3xl text-center">
            All the category of devices that we have:
          </h1>
          <div>
            <ul className="flex flex-wrap sm:flex-row flex-col justify-center text-center  text-6xl gap-5 ">
              <li className="basis-1/3 border-4 p-4 dark:border-white border-slate-900 hover:">
                <div>
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <h3>Laptop</h3>
              </li>
              <li className="basis-1/3 border-4 p-4 dark:border-white border-slate-900">
                <div>
                  <i class="fa-solid fa-phone"></i>
                </div>
                <h3>SmartPhones</h3>
              </li>
              <li className="basis-1/3 border-4 p-4 dark:border-white border-slate-900">
                <div>
                  <i class="fa-solid fa-headphones"></i>
                </div>
                <h3>HeadPhones</h3>
              </li>
              <li className="basis-1/3 border-4 p-4 dark:border-white border-slate-900">
                <div>
                  <i class="fa-solid fa-clock"></i>
                </div>
                <h3>Watches</h3>
              </li>
              <li className="basis-1/3 border-4 p-4 dark:border-white border-slate-900">
                <h3>And Many More...</h3>
              </li>
            </ul>
          </div>
        </section>
        <section data-aos="fade-up" id="products" className="">
          <div className="text-center">
            <h1 className="text-4xl">Our Best-Selled Products</h1>
            <p className="text-xl">One of the truly best</p>
          </div>
          <div className="container mx-auto">
            <ul className="flex flex-wrap justify-center gap-2">
              <li>
                <Card sx={{ maxWidth: 345, maxHeight: 1000 }}>
                  <CardActionArea onClick={chooseImage.bind(null, product1)}>
                    <img
                      src={product1}
                      className="aspect-square w-full"
                      alt=""
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        SmartPhones
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Our SmartPhones are using the most user-friendly
                        Operating System called MinOS. It is simple enough but
                        can dive deeper to customize to your needs, it also
                        inherits two main features of Android and IOS, the power
                        to customize and the power to de-Complex
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      View More
                    </Button>
                  </CardActions>
                </Card>
              </li>
              <li>
                <Card sx={{ maxWidth: 345, maxHeight: 1000 }}>
                  <CardActionArea onClick={chooseImage.bind(null, product7)}>
                    <img
                      src={product7}
                      className="aspect-square w-full"
                      alt=""
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        HeadPhones
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        When we are studying or working, we really don't want
                        the noise to come right at us. That's why our Headphones
                        can help you with that. With the ability to cancel
                        noises, you will feel at peace. Besides, it has so many
                        features that you can experience without touching your
                        phone.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                  </CardActions>
                </Card>
              </li>
              <li>
                <Card sx={{ maxWidth: 345, maxHeight: 1000 }}>
                  <CardActionArea onClick={chooseImage.bind(null, product6)}>
                    <img
                      src={product6}
                      className="aspect-square w-full"
                      alt=""
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        M-Watches
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        we design M-Watches so that they can read your emotions
                        and health through blood flow in your veins, and it can
                        even detect if you are sick by detecting the temperature
                        of your body as well, with MinOs, you can even treat it
                        like a normal phone like reading messages or even call
                        people with ease.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                  </CardActions>
                </Card>
              </li>
            </ul>
          </div>
        </section>
        <section className="container mx-auto px-5  ">
          <article
            data-aos="fade-up"
            className="flex flex-col-reverse sm:flex-row gap-5 items-center "
          >
            <div className="basis-1/2">
              <img
                className="pt-20 rounded-full aspect-square"
                src={chip}
                alt=""
              />
            </div>
            <div className="basis-1/2 pt-20">
              <h5 className="text-3xl font-bold">The Power:</h5>
              <h1 className="text-4xl font-bold">Snapdragon Chip</h1>
              <p className="text-2xl">
                With the power of the new snapdragon chip, we tend to make the
                phone more available with more power in any devices
              </p>
            </div>
          </article>
          <article data-aos="fade-up" className="sm:flex gap-5 items-center  ">
            <div className="basis-1/2 pt-20">
              <h5 className="text-3xl font-bold">The Operating System:</h5>
              <h1 className="text-4xl font-bold">MinOs</h1>
              <p className="text-2xl">
                MinOS is one of our greatest Software up-to-date, it has so many
                potential to even be in the future. With all the optimization
                and de-bloated apps, and the power of AI making everything so
                simple in all MinOS devices
              </p>
            </div>
            <div className="basis-1/2">
              <div className=" bg-slate-900 text-white relative  flex justify-center items-center rounded-full aspect-square">
                <h1 className=" before:content-['MinOS'] before:absolute  before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/3 before:blur-xl  backdrop-blur-3xl text-9xl bg-transparent ">
                  MinOS
                </h1>
              </div>
            </div>
          </article>
          <article
            data-aos="fade-up"
            className="flex flex-col-reverse sm:flex-row gap-5 items-center "
          >
            <div className="basis-1/2">
              <img
                className="pt-20 rounded-full aspect-square"
                src={nature}
                alt=""
              />
            </div>
            <div className="basis-1/2 pt-20">
              <h5 className="text-3xl font-bold">The Friendliness:</h5>
              <h1 className="text-4xl font-bold">Natural</h1>
              <p className="text-2xl">
                We always want to protect the earth, that's why every product
                that we created will have at least 1 feature to clean the
                pollution like air, water or even noise pollution. We try our
                best to make our life more breathable and of course, more worth
                to live!
              </p>
            </div>
          </article>
        </section>
        <section
          data-aos="fade-up"
          id="reviews"
          className="container relative mx-auto flex flex-col gap-5 "
        >
          <h1 className="text-center text-4xl">
            Hear about people have bought GreenStar's Products
          </h1>
          <div className="">
            <button
              onClick={DecreaseReviewIndex}
              className="absolute hover:dark:bg-white hover:dark:text-black dark:border-white hover:bg-black hover:text-white border-black top-1/2 border-4  px-4 py-2 rounded-full"
            >
              {"<"}
            </button>
          </div>
          <div>
            <button
              onClick={IncreaseReviewIndex}
              className="absolute top-1/2 right-0 border-4 hover:dark:bg-white hover:dark:text-black dark:border-white hover:bg-black hover:text-white border-black px-4 py-2 rounded-full"
            >
              {">"}
            </button>
          </div>
          <ul className="flex justify-center gap-5">{reviewEls}</ul>
        </section>
        <section
          data-aos="fade-up"
          id="contact"
          className="container mx-auto py-20 px-5 flex sm:flex-row flex-col gap-5 sm:justify-between sm:items-center"
        >
          <div className="text-center">
            <h1 className="sm:text-4xl text-2xl ">Want to contact us ?</h1>
            <p className="sm:text-2xl">
              We always provide the best products for everyone, if you still
              have any question, please fill out the form and we will get back
              to you as soon as possible
            </p>
          </div>
          <form action="" className="flex flex-col gap-5  ">
            <input
              name="email"
              type="text"
              placeholder="Your Email"
              className="px-2 py-1 sm:px-5 sm:py-4 sm:text-3xl dark:text-white dark:bg-slate-900 text-black bg-slate-100 border-2 border-slate-900 dark:border-slate-100 rounded-full"
            />
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="px-2 py-1 sm:px-5 sm:py-4 sm:text-3xl dark:text-white dark:bg-slate-900 text-black bg-slate-100 border-2 border-slate-900 dark:border-slate-100 rounded-full"
            />
            <input
              name="phone number"
              type="text"
              placeholder="Your Phone number"
              className="px-2 py-1 sm:px-5 sm:py-4 sm:text-3xl dark:text-white dark:bg-slate-900 text-black bg-slate-100 border-2 border-slate-900 dark:border-slate-100 rounded-full"
            />
            <Button
              variant="contained"
              endIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              }
            >
              Send
            </Button>
          </form>
        </section>
      </main>
      <footer className="  gap-5 dark:bg-slate-900 dark:text-white">
        <div className="flex sm:items-center sm:flex-row flex-col text-center px-5 pt-10 container mx-auto gap-5 ">
          <div className="basis-1/3 flex flex-col gap-5">
            <h1 className="text-3xl">Wanna See More Devices?.</h1>
            <h3 className="text-2xl">
              We always provide our customers the best!
            </h3>
            <p className="text-md">
              Contact us to get the furthest notification, discounts and many
              more interesting events happening all in GreenStar
            </p>
            <ul className="flex  justify-center gap-5 text-4xl">
              <li>
                <a href="">
                  <i className="fa-brands fa-facebook hover:text-blue-700"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa-brands fa-instagram hover:text-amber-600"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa-brands fa-linkedin hover:text-cyan-700"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa-brands fa-telegram hover:text-cyan-500"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="basis-1/3">
            <h1 className="text-3xl">Phone Number</h1>
            <address>+84 0917077967</address>
            <h1 className="text-3xl">Address</h1>
            <address>Vietnam, Danang</address>
            <h1 className="text-3xl">Email</h1>
            <address>Greenstar@gmail.com</address>
          </div>
          <div className="basis-1/3 flex justify-center">
            <img src={logo} className="rounded-full" alt="" />
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
