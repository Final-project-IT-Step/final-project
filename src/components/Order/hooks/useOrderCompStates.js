import { useState } from "react";
import { useEscortToComponent } from "../../Authorization/hooks";
import { useGetProductsInCart, useShopContext } from "../../Shop/hooks";

export const useOrderCompStates = () => {
    const { topDestionation: destination } = useEscortToComponent();
    const [ selectIsOpen, setSelectIsOpen ] = useState(false);
    const [ region, setRegion ] = useState('');
    const [ city, setCity ] = useState('');
    const [ warehouse, setWarehouse ] = useState('');
    const [ currentRegions, setCurrentRegions ] = useState({});
    const { cart } = useShopContext();
    const { productsInCart } = useGetProductsInCart();

    /* const { data: info = {}, isLoading } = useGetRegionsQuery();
    const { data: cities = {} } = useGetSettlementsQuery();
    const regions = info?.data */

   /*  const getCitiesHandler = (region) => {
        return region ? cities?.data?.filter(item => item.AreaDescription === `${ region } область`) : cities
    }
 */
  /*   const currentCities = getCitiesHandler(region);


    useEffect(() => {
        const unavailableRegions = ['АРК', 'Донецька', 'Луганська']
        if (!isLoading) {
            const newVal = regions.filter(item => item.Description !== region && !unavailableRegions.includes(item.Description))
            setCurrentRegions(newVal)
        }
    }, [isLoading, regions, region])
 */

    const switchHandler = (e) => {
        e.stopPropagation();
        setSelectIsOpen(prev => !prev);
    }

    const changeRegionHandler = (e,region) => {
        e.stopPropagation();
        setRegion(region.Description)
        setSelectIsOpen(prev => !prev);
    }

    const changeCityHandler = (e,city) => {
        e.stopPropagation();
        setCity(city.Description)
        setSelectIsOpen(prev => !prev);
    }

    return { 
        switchHandler, 
        changeRegionHandler,
        changeCityHandler,
        destination, 
        selectIsOpen, 
        currentRegions, 
        cart, 
        productsInCart, 
        region,
        city,
        warehouse, 
        setWarehouse,
        setSelectIsOpen,
        setCurrentRegions
    }
}