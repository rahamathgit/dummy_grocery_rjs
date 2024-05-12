const datas = [{
    name: "Capsicum - Green (Loose), 1kg",
    profile: "images/1.png",
    sale: "Price: 68/-",
    save: "You Save: 39% OFF",
    tax: "(inclusive of all taxes)"
},{
    name: "Cauliflower, 1pc (approx. 400 to 600g)",
    profile: "images/2.png",
    sale: "Price: 20.5/-",
    save: "You Save: 29% OFF",
    tax: "(inclusive of all taxes)"
},{
    name: "Onion, 5 kg Multipack",
    profile: "images/3.png",
    sale: "Price: 180/-",
    save: "You Save: 31% OFF",
    tax: "(inclusive of all taxes)"
},{
    name: "Tomato - local, 2 x 1 kg Multipack",
    profile: "images/4.png",
    sale: "Price: 55.1/-",
    save: "You Save: 33% OFF",
    tax: "(inclusive of all taxes)"
},{
    name: "Ginger (Loose), 1 kg",
    profile: "images/5.png",
    sale: "Price: 153/-",
    save: "You Save: 27% OFF",
    tax: "(inclusive of all taxes)"
},{
    name: "Potato, 1 kg",
    profile: "images/6.png",
    sale: "Price: 34/-",
    save: "You Save: 35% OFF",
    tax: "(inclusive of all taxes)"
}]

function Slider({update}){
    return(
        <div className="slider">
            <h3>{update.name}</h3>
            <img src={update.profile} alt="cap" />
            <p>{update.sale}</p>
            <p>{update.save}</p>
            <p>{update.tax}</p>
            <div className="btn">
                <button className="primary">ADD TO CART</button>
                <button className="primary secondary">BUY NOW</button>
            </div>
        </div>
    )
}

const Slide1 = () => {
    return(
        <div className="master">
            {datas.map (update => <Slider update = {update}/>)}
        </div>
    )
}

export default Slide1;