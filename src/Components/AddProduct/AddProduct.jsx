import { gql, useQuery, useMutation } from '@apollo/client'
import './addProduct.css'

const RESTUARANTS = gql`
    query {
        restuarants{
            id
            name
            img
        }
    }
`

const PRODUCTS = gql`
    query {
        allProducts {
            id
            name
            img
            price
            restuarant_id
        }
    }
`

const NEW_PRODUCT = gql`
    mutation newProduct($name: String! $img: String! $price: String! $restuarant_id: ID!) {
        newProduct(name: $name, img: $img, price: $price, restuarant_id: $restuarant_id)
    }
`

function AddProduct() {
    const { data: restuarants } = useQuery(RESTUARANTS)
    const { data: products } = useQuery(PRODUCTS)
    const [ addProduct ] = useMutation(NEW_PRODUCT, {
        update: (cache, data) => {
            console.log(data);
        }
    })

    function handleSubmit(e) {
        e.preventDefault()

        const name = e.target.name.value
        const img = e.target.img.value
        const price = e.target.price.value
        const restuarant_id = e.target.restuarant.value

        addProduct({
            variables: {
                name,
                img,
                price,
                restuarant_id: Number(restuarant_id)
            }
        })
    }

    return (
        <section className='section-table'>
            <form className='addres-form' onSubmit={handleSubmit}>
                <input type="text" placeholder='Restuarant name' required name='name'/>
                <input type="text" placeholder='Img url' required name='img'/>
                <input type="number" placeholder='Product price' required name='price'/>
                <select name="restuarant" id="">
                    {restuarants && restuarants?.restuarants.map((e, i) => {
                        return <option key={i} value={e.id}>{e.name}</option>
                    })}
                </select>
                <button type='submit' onClick={()=> window.location.reload()}>Send</button>
            </form>

            <table className="tg">
                <thead>
                    <tr>
                        <th className="tg-0pky">Id</th>
                        <th className="tg-0pky">Product Name</th>
                        <th className="tg-0pky">Product Img</th>
                        <th className="tg-0pky">Price</th>
                        <th className="tg-0pky">Restuarant id</th>
                    </tr>
                </thead>
                <tbody>
                    {products && products.allProducts.map((e, i) => {
                        return <tr key={i}>
                            <td className="tg-0pky">{e.id}</td>
                            <td className="tg-0pky">{e.name}</td>
                            <td className="tg-0pky">{e.img}</td>
                            <td className="tg-0pky">{e.price}</td>
                            <td className="tg-0pky">{e.restuarant_id}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </section>
    )
}

export default AddProduct