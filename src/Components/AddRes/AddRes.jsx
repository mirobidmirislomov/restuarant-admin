import { gql, useQuery, useMutation } from '@apollo/client'
import './addRes.css'
 
const CATEGORIES = gql`
    query {
        categories {
            id
            name
            img
        }
    }
`

const RESTUARANTS = gql`
    query {
        restuarants{
            id
            name
            img
        }
    }
`

const NEW_RESTUARANT = gql`
    mutation newRestuarant($name: String! $img: String! $category_id: ID!) {
        newRestuarant(name: $name, img: $img, category_id: $category_id)
    }
`

function AddRes() {
    const { data: categories } = useQuery(CATEGORIES)
    const { data: restuarants } = useQuery(RESTUARANTS)
    const [ addRes ] = useMutation(NEW_RESTUARANT, {
        update: (cache, data) => {
            console.log(data);
        }
    })

    function handleSubmit(e) {
        e.preventDefault()

        const name = e.target.name.value
        const img = e.target.img.value
        const category_id = e.target.category.value

        addRes({
            variables: {
                name,
                img,
                category_id: Number(category_id)
            }
        })
    }

    return (
        <section className='section-table'>
            <form className='addres-form' onSubmit={handleSubmit}>
                <input type="text" placeholder='Restuarant name' required name='name'/>
                <input type="text" placeholder='Img url' required name='img'/>
                <select name="category" id="">
                    {categories && categories?.categories.map((e, i) => {
                        return <option key={i} value={e.id}>{e.name}</option>
                    })}
                </select>
                <button type='submit' onClick={()=> window.location.reload()}>Send</button>
            </form>

            <table className="tg">
                <thead>
                    <tr>
                        <th className="tg-0pky">Id</th>
                        <th className="tg-0pky">Restuarant Name</th>
                        <th className="tg-0pky">User Data</th>
                    </tr>
                </thead>
                <tbody>
                    {restuarants && restuarants.restuarants.map((e, i) => {
                        return <tr key={i}>
                            <td className="tg-0pky">{e.id}</td>
                            <td className="tg-0pky">{e.name}</td>
                            <td className="tg-0pky">{e.img}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </section>
    )
}

export default AddRes