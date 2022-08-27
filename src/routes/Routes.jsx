import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserLayout from "../layout/User/UserLayout";
import AdminLayout from "../layout/Maneger/AdminLayout";
import SideBarLayout from "../layout/User/SideBarLayout";
import RTL from "../components/rtl/rtl.component";
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
        <BrowserRouter>
            <RTL>
                <Routes>
                    <Route path="/" element={<UserLayout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="basket" element={<Basket/>}/>
                        <Route path="checkout" element={<CheckOut/>}/>
                        <Route path="payresult" element={<PayResult/>}/>
                        <Route path="about" element={<AboutUs/>}/>
                    </Route>
                    <Route path="/products" element={<SideBarLayout/>}>
                        <Route index element={<Products/>}/>
                    </Route>
                    <Route path="/admin" element={<AdminLayout/>}>
                        <Route index element={<PanelQuantity/>}/>
                        <Route path="panelproduct" element={<PanelProduct/>}/>
                    </Route>
                    <Route>
                        <Route path="/loginpage" element={<LoginPage/>}/>
                        <Route path="/product" element={<Product/>}/>
                    </Route>
                    <Route path="/*" element={<NotFound/>}/>
                </Routes>
            </RTL>
        </BrowserRouter>
    );
}

export default Router;
