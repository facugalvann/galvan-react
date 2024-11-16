const products = [
    {
        id:"Fg3232",
        name:"Remera essentials",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat explicabo sed pariatur alias rerum officia ipsam odit at, omnis quo corrupti dolores earum quibusdam! Iure illo sunt nihil dolores vero!",
        stock:"8",
        price:"150",
        image:"/img/remera-essentials.avif",
        category:"ropa"
    }, {
        id:"Df2121",
        name:"Retro 4 Industrial Blue",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat explicabo sed pariatur alias rerum officia ipsam odit at, omnis quo corrupti dolores earum quibusdam! Iure illo sunt nihil dolores vero!",
        stock:"7",
        price:"450",
        image:"/img/retro4-industrial-blue.avif",
        category:"zapatillas"
    }, {
        id:"Gf3131",
        name:"Air jordan 1 Concord",
        description:" ipsum dolor sit amet consectetur adipisicing elit. Repellat explicabo sed pariatur alias rerum officia ipsam odit at, omnis quo corrupti dolores earum quibusdam! Iure illo sunt nihil dolores vero!Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat explicabo sed pariatur alias rerum officia ipsam odit at, omnis quo corrupti dolores earum quibusdam! Iure illo sunt nihil dolores vero!Lorem",
        stock:"5",
        price:"250",
        image:"/img/aj1-concord.avif",
        category:"zapatillas"
    },{
        id:"Gt4242",
        name:"Remera Off White",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat explicabo sed pariatur alias rerum officia ipsam odit at, omnis quo corrupti dolores earum quibusdam! Iure illo sunt nihil dolores vero!",
        stock:"2",
        price:"120",
        image:"/img/remera-off-white.avif",
        category:"ropa"
    },{
        id:"Fd7667",
        name:"riñonera supreme blanca",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat explicabo sed pariatur alias rerum officia ipsam odit at, omnis quo corrupti dolores earum quibusdam! Iure illo sunt nihil dolores vero!",
        stock:"2",
        price:"120",
        image:"/img/bag-supreme-white.avif",
        category:"accesorios"
    },{
        id:"Fg8686",
        name:"riñonera supreme roja",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat explicabo sed pariatur alias rerum officia ipsam odit at, omnis quo corrupti dolores earum quibusdam! Iure illo sunt nihil dolores vero!",
        stock:"6",
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