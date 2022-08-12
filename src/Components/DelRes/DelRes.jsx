import { gql, useMutation, useQuery } from '@apollo/client'
import './delRes.css'

const RESTUARANTS = gql`
    query {
        restuarants{
            id
            name
            img
        }
    }
`

const DELETE_RES = gql`
    mutation delRes($id: ID!) {
        delRes(id: $id)
    }
`

function DelRes() {
    const { data: restuarants } = useQuery(RESTUARANTS)
    const [ data ] = useMutation(DELETE_RES, {
        update: (cache, data) => {
            console.log(data);
        }
    })
    function handleSubmit(e) {
        e.preventDefault()

        const id = Number(e.target.id.value)
        data({
            variables: {
                id
            }
        })
    }
    return (
        <section className='delRes-section'>
            <form className='delRes-form' action="" onSubmit={handleSubmit}>
                <h2>Choose id</h2>
                <select name="id" id="">
                    {restuarants && restuarants.restuarants.map((e, i) => {
                        return <option key={i} value={e.id}>{e.id}</option>
                    })}
                </select>
                <button onClick={() => window.location.reload()}>Delete</button>
            </form>
            <table className="tg">
                <thead>
                    <tr>
                        <th className="tg-0pky">Id</th>
                        <th className="tg-0pky">Restuarant Name</th>
                        <th className="tg-0pky">Restuarant Img</th>
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

export default DelRes