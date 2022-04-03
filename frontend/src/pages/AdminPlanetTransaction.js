import styles from '../styles/Transaction.scss';
const postData = 
    {
        "historys": [
            {
                "id": 1,
                "buyerId": "account1",
                "buyerAdr": "0xe51250721f911098273062509165185f0e18DF82",
                "price": 100,
                "name": "A1031",
                "tradeDate": "2022-03-14"
            },
            {
                "id": 2,
                "buyerId": "account1",
                "buyerAdr": "0xe51250721f911098273062509165185f0e18DF82",
                "price": 100,
                "name": "A1031",
                "tradeDate": "2022-03-14"
            },
            {
                "id": 3,
                "buyerId": "account1",
                "buyerAdr": "0xe51250721f911098273062509165185f0e18DF82",
                "price": 100,
                "name": "A1031",
                "tradeDate": "2022-03-14"
            },
            {
                "id": 4,
                "buyerId": "account1",
                "buyerAdr": "0xe51250721f911098273062509165185f0e18DF82",
                "price": 100,
                "name": "A10222",
                "tradeDate": "2022-03-14"
            },
            {
                "id": 5,
                "buyerId": "account1",
                "buyerAdr": "0xe51250721f911098273062509165185f0e18DF82",
                "price": 100,
                "name": "A10222",
                "tradeDate": "2022-03-14"
            },{
                "id": 1,
                "buyerId": "account1",
                "buyerAdr": "0xe51250721f911098273062509165185f0e18DF82",
                "price": 100,
                "name": "A1031",
                "tradeDate": "2022-03-14"
            },
            {
                "id": 2,
                "buyerId": "account1",
                "buyerAdr": "0xe51250721f911098273062509165185f0e18DF82",
                "price": 100,
                "name": "A1031",
                "tradeDate": "2022-03-14"
            },
            {
                "id": 3,
                "buyerId": "account1",
                "buyerAdr": "0xe51250721f911098273062509165185f0e18DF82",
                "price": 100,
                "name": "A1031",
                "tradeDate": "2022-03-14"
            },
            {
                "id": 4,
                "buyerId": "account1",
                "buyerAdr": "0xe51250721f911098273062509165185f0e18DF82",
                "price": 100,
                "name": "A10222",
                "tradeDate": "2022-03-14"
            },
            {
                "id": 5,
                "buyerId": "account1",
                "buyerAdr": "0xe51250721f911098273062509165185f0e18DF82",
                "price": 100,
                "name": "A10222",
                "tradeDate": "2022-03-14"
            },{
                "id": 1,
                "buyerId": "account1",
                "buyerAdr": "0xe51250721f911098273062509165185f0e18DF82",
                "price": 100,
                "name": "A1031",
                "tradeDate": "2022-03-14"
            },
            {
                "id": 2,
                "buyerId": "account1",
                "buyerAdr": "0xe51250721f911098273062509165185f0e18DF82",
                "price": 100,
                "name": "A1031",
                "tradeDate": "2022-03-14"
            },
            {
                "id": 3,
                "buyerId": "account1",
                "buyerAdr": "0xe51250721f911098273062509165185f0e18DF82",
                "price": 100,
                "name": "A1031",
                "tradeDate": "2022-03-14"
            },
            {
                "id": 4,
                "buyerId": "account1",
                "buyerAdr": "0xe51250721f911098273062509165185f0e18DF82",
                "price": 100,
                "name": "A10222",
                "tradeDate": "2022-03-14"
            },
            {
                "id": 5,
                "buyerId": "account1",
                "buyerAdr": "0xe51250721f911098273062509165185f0e18DF82",
                "price": 100,
                "name": "A10222",
                "tradeDate": "2022-03-14"
            }
            
        ]
    }
const AdminPlanetTransaction= ( ) => {
    return(
       <div className="transaction" style={styles}>
           <div className='transaction-board'>
               <table>
                   <thead>
                       <tr className='transaction-board-th'>
                           <th className='transaction-board-head num'>#</th>
                           <th className='transaction-board-head id'>아이디</th>
                           <th className='transaction-board-head money'>금액</th>
                           <th className='transaction-board-head title'>행성명</th>
                           <th className='transaction-board-head date'>거래일자</th>
                       </tr>
                   </thead>
                   <tbody className='transaction-board-tbody'>
                        {postData.historys && postData.historys.map((post, index) => (
                            <tr key={index} className='transaction-board-tr'>
                                <td className='transaction-board-body number'>{post.id}</td>
                                <td className='transaction-board-body'>
                                    <div className='transaction-board-body tokenID'>{post.buyerId}</div>
                                    <div className='transaction-board-body adr'>{post.buyerAdr}</div>
                                </td>
                                <td className='transaction-board-body ETH'>
                                    <img className="eth" src="../../ethereum.png" alt="ethereum" /><span className="priceText">{post.price} ETH </span>
                                </td>
                                <td className='transaction-board-body planet'>{post.name}</td>
                                <td className='transaction-board-body tradeDate'>{post.tradeDate}</td>

                            </tr>
                        ))}
                   </tbody>
               </table>
           </div>
       </div>
    );
}
export default AdminPlanetTransaction;