const products = [
    {
        id:"Fg3232",
        name:"Remera essentials",
        description:"",
        stock:"",
        price:"150",
        image:"/img/remera-essentials.avif",
        category:"ropa"
    }, {
        id:"Df2121",
        name:"Retro 4 Industrial Blue",
        description:"",
        stock:"",
        price:"450",
        image:"/img/retro4-industrial-blue.avif",
        category:"zapatillas"
    }, {
        id:"Gf3131",
        name:"Aj1 Concord",
        description:"",
        stock:"",
        price:"250",
        image:"/img/aj1-concord.avif",
        category:"zapatillas"
    },{
        id:"Gt4242",
        name:"Remera Off White",
        description:"",
        stock:"",
        price:"120",
        image:"/img/remera-off-white.avif",
        category:"ropa"
    },{
        id:"Fd7667",
        name:"riñonera supreme blanca",
        description:"",
        stock:"",
        price:"120",
        image:"/img/bag-supreme-white.avif",
        category:"accesorios"
    },{
        id:"Fg8686",
        name:"riñonera supreme roja",
        description:"",
        stock:"",
        price:"120",
        image:"/img/bag-supreme-red.avif",
        category:"accesorios"
    },

]

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export { getProducts }