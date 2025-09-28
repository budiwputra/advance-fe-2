import { useNavigate, useParams } from "react-router"
import { useRef, useEffect } from "react"
import InputText from "../components/elements/InputText"
import BodyRegular from "../components/elements/BodyRegular"
import Button from "../components/elements/Button"
import SelectOption from "../components/elements/SelectOption"
import TextArea from "../components/elements/TextArea"
import { useProduct } from "../hooks/useProduct"

const EntryProduct = ({isUpdate}) => {
    const {id} = useParams()
    const formRef = useRef(null)
    
    const {product, addProduct, updateProduct} = useProduct()
    const navigate = useNavigate()
    
    const optionCategory = [
    {
    label : "Pemasaran",
    value : "Pemasaran"    
    }, 
    {
    label : "Desain Grafis",
    value : "Desain Grafis"    
    }, 
    {
    label : "Pengembangan Diri",
    value : "Pengembangan Diri"    
    }, 
    {
    label : "Bisnis Manajemen",
    value : "Bisnis Manajemen"    
    }, 
    {
    label : "Digital & Teknologi",
    value : "Digital & Teknologi"    
    }]

    useEffect(() => {
        if (isUpdate && product.length  > 0 ) {
            const productItem = product.find(item => item.id === id)
            formRef.current.title.value = productItem.title,
            formRef.current.category.value = productItem.category,
            formRef.current.desc.value = productItem.desc,
            formRef.current.price.value = productItem.price
        } else {
            if (formRef.current) formRef.current.reset()
        }
    },[isUpdate, product, id])

    return (
        <div className="h-full p-[36px]">
            <div className="h-full rounded-sm p-[36px]">
                <div className="sm:w-[590px] flex flex-col gap-[20px]">
                    <form ref={formRef} className="flex flex-col gap-[20px]" action=""
                    onSubmit={(e) => {
                        e.preventDefault()
                        if (isUpdate) {
                            updateProduct(id,  {
                                title : e.target.title.value,
                                category : e.target.category.value,
                                desc : e.target.desc.value,
                                price : e.target.price.value
                            })
                        } else {
                            addProduct({
                                title : e.target.title.value,
                                category : e.target.category.value,
                                desc : e.target.desc.value,
                                price : e.target.price.value
                            })                          
                        }
                        navigate("/dashboard/list-product")
                        e.target.reset()
                    }}
                    >
                        <BodyRegular>Title</BodyRegular>
                        <InputText name="title" placeholder="Masukkan title" />
                        <BodyRegular>Category</BodyRegular>
                        <SelectOption name="category" id="category">
                            {optionCategory.map((item, index) => (
                                <option key={index} value={item.value} label={item.label}></option>
                            ))}
                        </SelectOption>
                        <BodyRegular>Description</BodyRegular>
                        <TextArea name="desc" id="desc"/>
                        <BodyRegular>Price</BodyRegular>
                        <InputText name="price" placeholder="Masukkan Harga"/>
                        <Button type="submit">{isUpdate ? "Update" : "Submit"}</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EntryProduct