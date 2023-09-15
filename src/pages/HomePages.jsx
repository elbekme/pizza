import { Fragment, useContext } from "react"
import { categories } from "../data/categories"
import { products } from "../data/products"

import CategoryCard from "../components/category/CategoryCard"
import PizzaSection from "../components/PizzaSection"
import ZakuskaSection from "../components/ZakuskaSection"
import SushiSection from "../components/SushiSection"
import DesertSection from "../components/DesertSection"
import WaterSection from "../components/WaterSection"
import KomboSection from "../components/KomboSection"
import NewSection from "../components/NewSection"
import { LanguageContext } from "../context/LanguageContext"


const HomePages = () => {
    let pizza = products.filter((el) => el.category === 'Пицца');
    let sushi = products.filter((el) => el.category === 'Суши');
    let desert = products.filter((el) => el.category === 'Десерты');
    let zakuska = products.filter((el) => el.category === 'Закуски');
    let water = products.filter((el) => el.category === 'Напитки');
    // let sous = products.filter((el) => el.category === 'Соусы');
    let kombo = products.filter((el) => el.category === 'Комбо');
    // let xit = products.filter((el) => el.filter === 'Хит');
    let New = products.filter((el) => el.filter === 'New');


    const {lang} = useContext(LanguageContext);

  return (
    <Fragment>
        <div className="mt-5 d-flex justify-content-between ">
        {categories.map(ct => (
            <div key={ct.name}>
                <CategoryCard {...ct}/>
            </div>
            ))}
        </div>
        <div>
            <ul className=" mt-1 d-flex justify-content-between">
                <li>
                <a className="link" href='#new'>{lang.Новий}</a>
                </li>
                <li>
                <a className="link" href='#pizza'>{lang.Пицца}</a>
                </li>
                <li>
                <a className="link" href='#sushi'>{lang.Суши}</a>
                </li>
                <li>
                <a className="link" href='#zakuska'>{lang.Закуски}</a>
                </li>
                <li>
                <a className="link" href='#desert'>{lang.Десерты}</a>
                </li>
                <li>
                <a className="link" href='#water'>{lang.Напитки}</a>
                </li>
                <li>
                <a className="link" href='#kombo'>{lang.Комбо}</a>
                </li>
            </ul>
        </div>

        <h1 className="my-4">{lang.Новий}</h1>

        <div id="new " className="d-flex justify-content-between flex-wrap">
            {New.map(np =>
                <div key={np.id}>
                    <NewSection {...np}/>
                </div>
                )}
        </div>

        <h1 className="my-4">{lang.Пицца}</h1>

        <div id="pizza " className="d-flex justify-content-between flex-wrap">
            {pizza.map(pp =>
                <div key={pp.id}>
                    <PizzaSection {...pp}/>
                </div>
                )}
        </div>

        <h1 className="my-4">{lang.Суши}</h1>
        
        <div id="sushi" className="d-flex justify-content-between flex-wrap">
            {sushi.map(sp =>
                <div key={sp.id}>
                    <SushiSection {...sp}/>
                </div>
                )}
        </div>

        <h1 className="my-4">{lang.Закуски}</h1>
        
        <div id="zakuska" className="d-flex justify-content-between flex-wrap">
            {zakuska.map(zp =>
                <div key={zp.id}>
                    <ZakuskaSection {...zp}/>
                </div>
                )}
        </div>

        <h1 className="my-4">{lang.Десерты}</h1>
        
        <div id="desert" className="d-flex justify-content-between flex-wrap">
            {desert.map(dp =>
                <div key={dp.id}>
                    <DesertSection {...dp}/>
                </div>
                )}
        </div>

        <h1 className="my-4">{lang.Напитки}</h1>
        
        <div id="water" className="d-flex justify-content-between flex-wrap">
            {water.map(dp =>
                <div key={dp.id}>
                    <WaterSection {...dp}/>
                </div>
                )}
        </div>

        {/* <h1 className="my-4">Соусы</h1>
        
        <div id="sous" className="d-flex justify-content-between flex-wrap">
            {sous.map(sp =>
                <div key={sp.id}>
                    <SousSection {...sp}/>
                </div>
                )}
        </div> */}

        <h1 className="my-4">{lang.Комбо}</h1>
        
        <div id="kombo" className="d-flex justify-content-between flex-wrap">
            {kombo.map(kp =>
                <div key={kp.id}>
                    <KomboSection {...kp}/>
                </div>
                )}
        </div>

    </Fragment>
  )
}

export default HomePages