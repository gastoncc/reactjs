const products = [
    {
    id: "1",
    name: "comic marvel",
    price: "5.000",
    category: "comic",
    img: "",
    stock: "10",
    descripcion: "hulk n1",
},
{
    id: "2",
    name: "comic dc",
    price: "5.000",
    category: "comic",
    img: "",
    stock: "10",
    descripcion: "batman n1",
},
{
    id: "3",
    name: "blue lock manga",
    price: "5.000",
    category: "manga",
    img: "",
    stock: "10",
    descripcion: "blue lock n1",
}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id  = id))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category  = categoryId))
        }, 500)
    })
}
