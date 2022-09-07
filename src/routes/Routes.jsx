import { Route, Routes} from "react-router-dom";
import UserLayout from "../layout/UserLayout";
import AdminLayout from "../layout/AdminLayout";


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
                        <Route path="/product" element={<Product/>}/>
                        <Route path="/products" element={<Products/>}/>
                    </Route>
                        <Route path="/login" >
                        <Route index element={<LoginPage/>}/>
                        </Route>
                
                    <Route path="/admin" element={<AdminLayout/>}>
                        <Route index element={<PanelQuantity/>}/>
                        <Route path="products" element={<PanelProduct/>}/>
                        
                    </Route>
                   
                    <Route path="/*" element={<NotFound/>}/>
                </Routes>
         

    );
}

export default Router;
