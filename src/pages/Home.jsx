import Button from "../components/elements/Button.jsx"
import InputText from "../components/elements/InputText.jsx"
import HeadingSemiBold from "../components/elements/HeadingSemiBold.jsx"
import BodyRegular from "../components/elements/BodyRegular.jsx"
import BodyMedium from "../components/elements/BodyMedium.jsx"
import HeadingBold from "../components/elements/HeadingBold.jsx"
import NavBar from "../components/models/NavBar.jsx"
import SecondaryButton from "../components/elements/SecondaryButton.jsx"
import '../App.css'
import { useState } from "react"
import useProductStore from "../store/useProductStore.js"
import BodyLarge from "../components/elements/BodyLarge.jsx"
import ratings from "../assets/ratings.png"
import { useImages } from "../store/images.js"
import { useSelector, useDispatch } from "react-redux"

const App = () => {
  const {images, avatar} = useImages()
  const [selectedCategory, setSelectedCategory] = useState("Semua Kelas")
  const {value : products } = useSelector((state) => state.products)
  const categories = ["Semua Kelas", ...new Set(products.map((item) => item.category))]
  
  const filteredProducts =
  selectedCategory === "Semua Kelas"
  ? products
  : products.filter((item) => item.category === selectedCategory)
  
  return (
    <div className="flex flex-col w-full min-h-full justify-start items-center 
    px-[20px] py-[28px] gap-[24px] sm:gap-[64px] sm:px-[120px] sm:py-[64px] bg-background" >
      <div className="bg-[url('/assets/bgHero.jpg')] rounded-[10px] bg-cover bg-center bg-no-repeat">
      <div className="border border-black/80 rounded-[10px] flex flex-col 
      justify-center items-center px-[20px] py-[37px] w-full 
      sm:px-[140px] sm:pt-[68.5px] sm:pb-[50.5px] bg-black/80 gap-[12px]" >
        <HeadingBold className="text-center text-2xl sm:text-5xl">
          Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!</HeadingBold>
        <BodyMedium className="text-white text-center font-normal sm:font-medium text-sm sm:text-base ">Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
          Pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan
          pemahaman Anda.
        </BodyMedium>
        <Button className="w-fit font-normal sm:font-bold py-[10px] px-[8px] sm:px-[16px] mt-[12px]">Temukan Video Course untuk Dipelajari!</Button>
      </div>
      </div>
      <div className="flex flex-col w-full gap-[32px] ">
        <div className="flex flex-col w-full gap-[10px]">
        <HeadingSemiBold className="text-left">Koleksi Video Pembelajaran Unggulan</HeadingSemiBold>
        <BodyMedium className="text-left text-dark-secondary text-sm sm:text-base">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</BodyMedium>
        </div>
        <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
          <NavBar>
            {categories.map((category, index) => (
              <li key={index} onClick={ () => setSelectedCategory(category)}
              className={`cursor-pointer ${selectedCategory === category ? 
                "text-tertiary-default flex flex-col gap-[12px]" : 
                ""}`}
              >{category}
              {selectedCategory === category && 
              <span className="inline border-3 rounded-sm w-[50px]"></span>}
              </li>
            ))}
          </NavBar>
        </div>

        <div className="w-full">
        <div className='flex flex-col items-center justify-center w-full gap-[20px] sm:gap-[24px] 
        sm:grid sm:grid-cols-[auto_auto] lg:grid-cols-[auto_auto_auto] 2xl:grid-cols-[auto_auto_auto_auto] '>
        {filteredProducts.map((e, index) => {
            const randomIndex = Math.floor(Math.random() * images.length)
            const randomImage = images[randomIndex]
            const randomAvatar = avatar[randomIndex]
            return (
              <div key={index} className="border border-other-border flex flex-col items-center justify-center w-full max-w-sm p-[16px] sm:p-[20px] 
  gap-[16px] rounded-[10px] bg-white">
              <div className='flex flex-col gap-[9px] sm:gap-[16px] justify-center'>
                  <div className='flex flex-row sm:grid gap-[12px] sm:gap-[16px] items-center'>

                  <div>
                  <img className='w-[100px] sm:w-[344px] aspect-square sm:aspect-16/9 object-cover object-center rounded-[10px]' src={randomImage} alt="product" />
                  </div>

                  <div className='flex flex-col gap-[8px] sm:gap-[16px]'>
                  <div className='flex flex-col gap-[8px]'>
                  <HeadingSemiBold size="card" className="text-left cursor-pointer">{e.title}</HeadingSemiBold>
                  <BodyMedium className="hidden sm:block sm:text-base text-dark-secondary">{e.desc.length > 78 ? e.desc.slice(0, 78) + '...' : e.desc}</BodyMedium>
                  </div>

                  <div className='flex flex-row w-full items-center gap-[10px] '>
                      <img className='w-[36px] aspect-square sm:w-[40px] sm:aspect-square' src={randomAvatar} alt="Avatar" />
                      <div className='flex flex-col'>
                      <BodyMedium className="text-sm sm:text-base cursor-pointer whitespace-nowrap">Giyu Tomioka</BodyMedium>
                      <div className='flex flex-row gap-[4px] items-center'>
                      <BodyRegular className="text-xs sm:text-sm text-dark-secondary whitespace-nowrap">Senior Accountant</BodyRegular>
                      <BodyRegular className="hidden sm:text-sm sm:inline text-dark-secondary">di</BodyRegular>
                      <BodyLarge className="text-dark-secondary hidden sm:inline sm:text-sm">Gojek</BodyLarge>
                      </div>
                      </div>
                  </div>
                  </div>

                  </div>
                  
                  <div className='flex flex-row items-center justify-between w-full'>
                      <div className='flex flex-row items-center gap-[8px]'>
                      <img src={ratings} alt="" />
                      <BodyMedium className="text-xs sm:text-sm text-dark-secondary underline whitespace-nowrap">3.5 (86)</BodyMedium>
                      </div>
                      <HeadingSemiBold size="price" className="text-primary whitespace-nowrap">{e.price}</HeadingSemiBold>
                  </div>
              </div>
              </div>
          )
        })}       
        </div>
        </div>  

      </div>
      <div className="bg-[url('/assets/bgFooter.jpg')] bg-cover bg-center bg-no-repeat rounded-sm w-full ">
        <div className="border border-black/80 bg-black/80 rounded-sm text-base sm:text-[18px] flex-col flex items-center justify-center
        py-[48px] px-[20px] sm:py-[92px] sm:px-[337.5px] gap-[4px] w-full">
          <BodyMedium className="text-white">NEWSLETTER</BodyMedium>
          <HeadingSemiBold className="text-center text-white">Mau Belajar Lebih Banyak?</HeadingSemiBold>
          <BodyRegular className="text-white text-center mt-[6px]">Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
            spesial dari program-program terbaik harisenin.com
          </BodyRegular>
          <div className=" border-amber-500 w-full sm:relative">
          <InputText placeholder="Masukkan Emailmu" className="bg-white border mt-[36px] text-center sm:text-left sm:px-[26px] sm:py-[18px]"/>
          <SecondaryButton className="w-full sm:w-fit py-[10px] px-[26px] sm:absolute sm:right-2 sm:top-11 mt-[16px] sm:mt-0">Subscribe</SecondaryButton>
          </div>
        </div>     
      </div>   

    </div>
  )
}

export default App