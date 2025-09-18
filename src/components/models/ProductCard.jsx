import ratings from '../../assets//ratings.png'
import BodyLarge from '../elements/BodyLarge.jsx'
import BodyMedium from '../elements/BodyMedium.jsx'
import BodyRegular from '../elements/BodyRegular.jsx'
import HeadingSemiBold from '../elements/HeadingSemiBold.jsx'
import { useNavigate} from 'react-router'
import { useImages } from "../../store/images.js"
import {useProduct} from "../../hooks/useProduct.js"
import Button from '../elements/Button.jsx'
import { useEffect } from 'react'

const Card = () => {
    const navigate = useNavigate()
    const {images, avatar} = useImages()
    const {product, isLoading, isError, getProduct , deleteProduct} = useProduct()
    useEffect(() => {
        getProduct()
    }, [])
    return (
        <div className='flex flex-col gap-[12px] w-full'>
            {isLoading && 
            <div className='flex justify-center'>
                <p>Loading...</p>
            </div>          
            }
            {isError && (
                <div className='flex flex-col justify-center items-center'>
                    <p>Error</p>
                    <button className='border' onClick={()=> getProduct()}>Reload</button>
                </div>)
            }
            {(!isLoading && !isError) && (
                <div>
                    <div className='flex flex-row justify-between gap-[12px]'>
                        {/* <button className='border rounded-sm p-1 cursor-pointer hover:text-primary'
                        onClick={() => navigate('/dashboard/entry-product')}>Add Product</button> */}                      
                        <Button onClick={() => navigate('/dashboard/entry-product') } >Add Product</Button>
                        {/* <button hidden={product.length === 0} 
                        className='border rounded-sm p-1 cursor-pointer hover:text-error-default'
                        >Delete All Product</button> */}
                    </div>
                    <div className='flex flex-col items-center justify-center w-full gap-[20px] sm:gap-[24px] 
                    sm:grid sm:grid-cols-[auto_auto] lg:grid-cols-[auto_auto_auto]'>

                    {product.map((item, index) => {
                        const randomIndex = Math.floor(Math.random() * images.length)
                        const randomImage = images[randomIndex]
                        const randomAvatar = avatar[randomIndex]        
                        return (
                            <div key={index} className="border border-other-border flex flex-col items-center justify-center w-full max-w-sm p-[16px] sm:p-[20px] 
                            gap-[16px] rounded-[10px] bg-white">
                            <div className='flex flex-col gap-[9px] sm:gap-[16px] justify-center'>
                                <div className='flex flex-row sm:grid gap-[12px] sm:gap-[16px] items-center'>

                                <div>
                                <img className='w-[100px] sm:w-[344px] aspect-square sm:aspect-16/9 object-cover object-center rounded-[10px]' src={randomImage} alt="Product" />
                                </div>

                                <div className='flex flex-col gap-[8px] sm:gap-[16px]'>
                                <div className='flex flex-col gap-[8px]'>
                                <HeadingSemiBold size="card" className="text-left cursor-pointer">{item.title}</HeadingSemiBold>
                                <BodyMedium className="hidden sm:block sm:text-base text-dark-secondary">{item.desc.length > 74 ? item.desc.slice(0, 74) : item.desc}</BodyMedium>
                                </div>

                                <div className='flex flex-row w-full items-center gap-[10px] '>
                                    <img className='w-[36px] aspect-square sm:w-[40px] sm:aspect-square' src={randomAvatar} alt="Avatar" />
                                    <div className='flex flex-col'>
                                    <BodyMedium className="text-sm sm:text-base cursor-pointer whitespace-nowrap">Giyu Tomioka</BodyMedium>
                                    <div className='flex flex-row gap-[4px] items-center'>
                                    <BodyRegular className="text-xs sm:text-sm text-dark-secondary whitespace-nowrap">Senior Accountant</BodyRegular>
                                    <BodyRegular className="hidden sm:inline text-dark-secondary sm:text-sm">di</BodyRegular>
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
                                    <HeadingSemiBold size="price" className="text-primary">{item.price}</HeadingSemiBold>
                                </div>
                                <div className='flex flex-row justify-between'>
                                    <button className='cursor-pointer hover:underline hover:text-secondary' onClick={() => navigate(`/dashboard/update-product/${item.id}`) }>Edit</button>
                                    <button className='cursor-pointer hover:underline hover:text-error-default' onClick={() => deleteProduct(item.id)}>Delete</button>
                                </div>
                            </div>
                            </div>
                        )
                    })}       
                    </div>
                </div>
            ) 
            }
        </div>
    )}
export default Card