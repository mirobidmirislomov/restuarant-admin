import './Main.css'
import { gql, useQuery } from '@apollo/client'

const GET_ORDERS = gql`
    query {
        orders {
            id
            product
            username
            address
            phone
            created_at
        }
    }
`

function Main() {
    const { data } = useQuery(GET_ORDERS)
    return (
        <section className='main-section'>
            <div className="table">
                <table className="tg">
                    <thead>
                        <tr>
                            <th className="tg-0pky">ID</th>
                            <th className="tg-0pky">Product Name</th>
                            <th className="tg-0pky">Username</th>
                            <th className="tg-0pky">User address</th>
                            <th className="tg-0pky">User Number</th>
                            <th className="tg-0pky">Order time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.orders.map((e, i) => {
                            return <tr key={i}>
                                <td className="tg-0pky">{e.id}</td>
                                <td className="tg-0pky">{e.product}</td>
                                <td className="tg-0pky">{e.username}</td>
                                <td className="tg-0pky">{e.address}</td>
                                <td className="tg-0pky">{e.phone}</td>
                                <td className="tg-0pky">{e.created_at}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Main