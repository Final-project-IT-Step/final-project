import { useState } from "react";
import { useShopContext } from "../../hooks";
import { teaProductData } from "../data";
import { ShopTeaAddToCart } from "./ShopTeaAddToCart";
import { ShopTeaInfo } from "./ShopTeaInfo";
import { AdminModal } from "../AdminModal";


export const ShopTeaInfoBox = ({ tea }) => {
    const teaData = teaProductData(tea);
    const { user } = useShopContext();
    const [adminModal, setAdminModal] = useState(false);
    const isAdmin = user?.userPrivilege >= 2

    return (
        <div className="shop-tea__info-box">
            <h3 className='shop-tea__info-box__title'>{ tea.title }</h3>
            
            {teaData.map(teaEl => {
                const { id, currentTitle, value } = teaEl
                return (
                    <ShopTeaInfo
                        keyValue = { value } 
                        title={ currentTitle }
                        key={ id }
                    />
                    )
                })
            }
            { isAdmin 
                && 
                <div className="admin-panel">
                    <span>Зараз на складі: <b>{ tea.available }</b></span>
                    <button
                        onClick={ () => setAdminModal(prev => !prev) }
                    >
                        <i className="fa-solid fa-gear"></i>
                    </button>
                </div>
            }
            { adminModal && <AdminModal setAdminModal = { setAdminModal } tea = { tea }/> }
            <ShopTeaAddToCart tea = { tea }/>
        </div>
    )
}