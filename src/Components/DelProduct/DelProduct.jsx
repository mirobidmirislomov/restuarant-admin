import { gql, useQuery, useMutation } from '@apollo/client'
import { useState } from 'react'
import './delProduct.css'

const ALL_RESTUARANTS = gql`
    query {
        restuarants{
            id
            name
            img
        }
    }
`

const PRODUCTS = gql`
    mutation products($id: ID!) {
        products(id: $id) {
            id
            name
            img
            price
        }
    }
`

const DEL_PRODUCT = gql`
    mutation delProduct($id: ID!) {
        delProduct(id: $id)
    }
`

function DelProduct() {
    const [product, setProduct] = useState()
    const { data: restuarants } = useQuery(ALL_RESTUARANTS)
    const [products] = useMutation(PRODUCTS, {
        update: (cache, data) => {
            setProduct(data.data);
        }
    })
    const [delProduct] = useMutation(DEL_PRODUCT, {
        update: (cache, data) => {
            console.log(data);
        }
    })

    function handleChange(e) {
        products({
            variables: {
                id: Number(e.target.value)
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()

        const id = Number(e.target.product.value)
        delProduct({
            variables: {
                id
            }
        })
    }
    return (
        <section className='section-delProduct'>
            <select name="res" id="" onChange={handleChange}>
                {restuarants && restuarants.restuarants.map((e, i) => {
                    return <option key={i} value={e.id}>{e.name}</option>
                })}
            </select>
            <form action="" onSubmit={handleSubmit}>
                <select name="product" id="">
                    {!product ? <option>Choose</option> : null}
                    {product && product.products.map((e, i) => {
                        return <option key={i} value={e.id}>{e.name}</option>
                    })}
                </select>
                <button onClick={() => window.location.reload()}>Delete</button>
            </form>
        </section>
    )
}

export default DelProduct