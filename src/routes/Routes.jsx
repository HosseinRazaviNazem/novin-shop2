import { Route, Routes} from "react-router-dom";
import UserLayout from "../layout/User/UserLayout";
import AdminLayout from "../layout/Maneger/AdminLayout";
import SideBarLayout from "../layout/User/SideBarLayout";

import {
    Basket,
    AboutUs,
    CheckOut,
    Home,
    LoginPage,
    NotFound,
    PanelProduct,
    PanelQuantity,
    PayResult,
    Product,
    Products,
} from "../pages/index";

function Router() {
    return (
   
           
                <Routes>
                    <Route path="/" element={<UserLayout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="basket" element={<Basket/>}/>
                        <Route path="checkout" element={<CheckOut/>}/>
                        <Route path="payresult" element={<PayResult/>}/>
                        <Route path="about" element={<AboutUs/>}/>
                        <Route path="/loginpage" element={<LoginPage/>}/>
                        <Route path="/panelproduct" element={<PanelProduct/>}/>
                    </Route>
                    <Route path="/products" element={<SideBarLayout/>}>
                        <Route index element={<Products/>}/>
                    </Route>
                    <Route path="/admin" element={<AdminLayout/>}>
                        <Route index element={<PanelQuantity/>}/>
                        <Route path="panelproduct" element={<PanelProduct/>}/>
                    </Route>
                    <Route>
                       
                        <Route path="/product" element={<Product/>}/>
                    </Route>
                    <Route path="/*" element={<NotFound/>}/>
                </Routes>
         

    );
}

export default Router;
