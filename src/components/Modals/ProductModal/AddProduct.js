import React, { useState, useEffect } from 'react'
import './AddProduct.css'
import Productimage from '../AddImage/ProductImage'
import ModalUpploadImage from '../ModalComponents/Modaluploadimage/ModalUpploadImage'
// import MonthSelectModal from '../ModalComponents/MonthSelectModal'
// import $ from 'jquery'
// import 'jquery'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
    const GetDataFromDataBase = () => {
        const Data = localStorage.getItem('Products')
        if (Data) {
            return JSON.parse(Data)
        }
        else {
            return []
        }
    }
    useEffect(() => {

    }, [])
    const [Products, setProduct] = useState(GetDataFromDataBase())
    const [id, setId] = useState('')
    const [Code, setCode] = useState('')
    const [Type, setType] = useState('')
    const [Category, setCategory] = useState('')
    const [Currency, setCurrency] = useState('')
    const [Name, setName] = useState('')
    const [Stock, setStock] = useState('')
    const [Price, setPrice] = useState('')
    const [Discount, setDiscount] = useState('')
    const [Month, setMonth] = useState('')

    const handleAddProductSubmit = (e) => {
        e.preventDefault();
        if (id && Code && Type && Category && Name && Currency && Stock && Price && Discount && Month) {
            let Product = { id, Code, Type, Category, Name, Currency, Stock, Price, Discount, Month }
            setProduct([...Products, Product])
            setId('')
            setCode('')
            setCategory('')
            setName('')
            setCurrency('')
            setStock('')
            setPrice('')
            setDiscount('')
            setMonth('')
            return <Productimage/>
        } else {
            // alert("Plese Fill The Data")
            toast.error(<p className='m-0 font-px-15' style={{color:"#7b7878"}}>1. Some Thing Went Wrong.!</p>, {
                position: "top-center",
                autoClose: 8000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
    useEffect(() => {
        localStorage.setItem("Products", JSON.stringify(Products))
    }, [Products])
    const Alic = {
        alignItems: "center !important",
        padding: "2px 10px",
        cursor: "pointer"
    }
    const [togglestate, setToggleTab] = useState(1)
    const toggleTab = (index) => {
        setToggleTab(index)
    }
    return (
        <div className="modal modalBg fade promodal" id="AddProduct" tabindex="1" role="dialog" data-backdrop="" aria-labelledby="randomLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content ct modal-content-border-simple">
                    <div className="modal-header">
                        <h5 className="modal-title font-px-11 font-we-600 modal-title-simple" id="staticBackdropLabel"> <i className="fas fa-bars mr-5"></i>Add Product</h5>
                        <span className='closs-modal closs-modal-simple' data-bs-dismiss="modal" aria-label="Close">×</span>
                    </div>
                    <div className='modal-header-2 modal-header justify-content-inherit' style={{ justifycontent: "inherit !important" }}>
                        <button className='bg-none border-none font-px-13 App-Hover-Btn' style={{ color: "#2b92d5" }} > <span className=' mr-5 font-family-sans font-we-600 font-px-18'>+</span> New</button>
                        <button className='bg-none border-none font-px-13 App-Hover-Btn' style={{ color: "#2b92d5" }} onClick={handleAddProductSubmit}> <i className='fa fa-save mr-5'></i> Save </button>
                        <button className='bg-none border-none font-px-13 App-Hover-Btn' data-bs-dismiss="modal" aria-label="Close" style={{ color: "#2b92d5" }}> <i className='fa fa-remove mr-5'></i> Close </button>
                    </div>
                    <div className='modal-header al-c modal-header-3' style={Alic}>
                        <span style={{ color: "#2b92d5" }} className='font-px-11 font-we-600 font-we-600'>Basic Information</span>
                        <i className="fa-solid fa-angle-up font-px-14" style={{ color: "#2b92d5" }}></i>
                    </div>
                    <div className="modal-body modal-body-2">
                        <div className=''>
                            <div className='Product-modal-Basic-Form'>
                                <form id='form_id'>
                                    <div className='row Product-modal-Basic-Body' style={{ marginbottom: "7px !important" }}>
                                        <div className='col-lg-6'>
                                            <div className='row'>
                                                <div className='col-lg-6'>
                                                    <div className='Prod-Input'>
                                                        <label className='font-px-11 font-we-600'>Product ID</label>
                                                        <input
                                                            type='text'
                                                            title='Basic information'
                                                            value={id}
                                                            onChange={(e) => setId(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className='col-lg-6'>
                                                    <div className='Prod-Input'>
                                                        <label className='font-px-11 font-we-600'>Product Code</label>
                                                        <input
                                                            type='text'
                                                            title='Basic information'
                                                            value={Code}
                                                            onChange={(e) => setCode(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className='col-lg-6'>
                                                    <div className='Prod-Input'>
                                                        <label className='font-px-11 font-we-600'>Product Type</label>
                                                        <i className="fa-solid fa-magnifying-glass cursor-pointer"></i>
                                                        <input
                                                            title='Basic information'
                                                            value={Type}
                                                            onChange={(e) => setType(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className='col-lg-6'>
                                                    <div className='Prod-Input'>
                                                        <label className='font-px-11 font-we-600'>Product Category</label>
                                                        <i className="fa-solid fa-magnifying-glass cursor-pointer"></i>
                                                        <input
                                                            title='Basic information'
                                                            value={Category}
                                                            onChange={(e) => setCategory(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className='col-lg-12'>
                                                    <div className='Prod-Input'>
                                                        <label className='font-px-11 font-we-600'>Product Name</label>
                                                        <input
                                                            type='text'
                                                            title='Basic information'
                                                            value={Name}
                                                            onChange={(e) => setName(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className='col-lg-6'>
                                                    <div className='Prod-Input'>
                                                        <label className='font-px-11 font-we-600'>Currency</label>
                                                        <i className="fa-solid fa-magnifying-glass cursor-pointer"></i>
                                                        {/* <input
                                                            title='Basic information'
                                                            value={Currency}
                                                            onChange={(e) => setCurrency(e.target.value)}
                                                        /> */}
                                                        <select className='font-px-13 select-focus'
                                                            value={Currency}
                                                            title='Basic Information'
                                                            onChange={(e) => setCurrency(e.target.value)}>
                                                            <option hidden></option>
                                                            <option>PKR</option>
                                                            <option>USD</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className='col-lg-6'>
                                                    <div className='Prod-Input'>
                                                        <label className='font-px-11 font-we-600'>Quantity</label>
                                                        <input
                                                            type='number'
                                                            title='Basic information'
                                                            value={Stock}
                                                            onChange={(e) => setStock(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className='col-lg-6'>
                                                    <div className='Prod-Input'>
                                                        <label className='font-px-11 font-we-600'>Price</label>
                                                        <input
                                                            type='text'
                                                            title='Basic information'
                                                            value={Price}
                                                            onChange={(e) => setPrice(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className='col-lg-6'>
                                                    <div className='Prod-Input'>
                                                        <label className='font-px-11 font-we-600'> Discount</label>
                                                        <input
                                                            type='number'
                                                            title='Basic information'
                                                            value={Discount}
                                                            onChange={(e) => setDiscount(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className='col-lg-12'>
                                                    <div className='Prod-Input'>
                                                        <label className='font-px-11 font-we-600'> Product Description</label> <span className='font-px-11 font-we-600 float-right mt-7'>[Optional]</span>
                                                        <textarea placeholder='Enter Description'></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <ModalUpploadImage />
                                        </div>
                                    </div>
                                    {/* <button>Add</button> */}
                                    <div className='App-Personal-Tabs' style={{ marginTop: "7px",marginbottom: "7px"}}>
                                        <div className='row'>
                                            <div className='col-lg-12'>
                                                <div className='App-Tabs-UL'>
                                                    <ul className='m-0 p-0 d-flex tabs-nav' id='tabs-nav2'>
                                                        <li className={togglestate === 1 ? "active" : "li-none"} onClick={() => toggleTab(1)}> <span className='font-we-600'> <i className='fa fa-user'></i> Personal</span> </li>
                                                        <li className={togglestate === 2 ? "active" : "li-none"} onClick={() => toggleTab(2)}> <span href='#tab2' className='font-we-600'> <i class="fa-solid fa-file-invoice-dollar"></i> Payment </span></li>
                                                    </ul>
                                                </div>
                                                <div className={togglestate === 1 ? "show" : "hide"}>
                                                    <div className='row'>
                                                        <div className='col-lg-6'>
                                                            <div className='row'>
                                                                <div className='col-lg-6'>
                                                                    <div className='Prod-Input'>
                                                                        <label className='font-px-11 font-we-600 font-we-600'>Product Date</label>
                                                                        <input
                                                                            type='date'
                                                                            title='Basic information'
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-6'>
                                                                    {/* <MonthSelectModal Month=''/> */}
                                                                    <div className='Prod-Input'>
                                                                        <label className='font-px-11 font-we-600 font-we-600'>Select Month :</label>
                                                                        <i className="fa-solid fa-magnifying-glass cursor-pointer"></i>
                                                                        <select className='font-px-13 select-focus' title='Basic Information' value={Month} onChange={(e) => setMonth(e.target.value)}>
                                                                            <option hidden></option>
                                                                            <option>January</option>
                                                                            <option>February </option>
                                                                            <option>March </option>
                                                                            <option>April </option>
                                                                            <option>May </option>
                                                                            <option>June </option>
                                                                            <option>July </option>
                                                                            <option>August </option>
                                                                            <option>September </option>
                                                                            <option>October </option>
                                                                            <option>November </option>
                                                                            <option>December</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-6'>
                                                                    <div className='Prod-Input'>
                                                                        <label className='font-px-11 font-we-600 font-we-600'>Your Username</label>
                                                                        <input
                                                                            type='text'
                                                                            title='Basic information'
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-6'>
                                                                    <div className='Prod-Input'>
                                                                        <label className='font-px-11 font-we-600 font-we-600'>Your Email</label>
                                                                        <input
                                                                            type='email'
                                                                            title='Basic information' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={togglestate === 2 ? "show" : "hide"}>
                                                    2
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='modal-footer'>
                    </div>
                </div>
            </div>
        <ToastContainer />

            <Productimage />
        </div>
    )
}

export default AddProduct