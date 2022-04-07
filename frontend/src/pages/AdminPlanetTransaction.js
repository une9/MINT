import styles from '../styles/Transaction.scss';
import { BsFillCaretDownFill } from 'react-icons/bs';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { forwardRef, useState,useEffect,useCallback } from 'react';
import moment from 'moment';
import axios from 'axios';

import { ethers } from 'ethers';
import contract from '../smartcontract/TileFactory.json'

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
    const [startDate, setStartDate] = useState(new Date());
    const [day, setDay] = useState(new Date());
    const [options, setOptions] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    
    const abi = contract.abi;
    const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
    const postDate = ()=>{
        console.log(day,"date 보냐서 리스트 가져오기");
    }
    const postCategory = (category)=>{
        console.log(category,"date 보냐서 리스트 가져오기");
    }
    const CustomInput = forwardRef(({ value, onClick }, ref) => (
        <button className="custom-input" onClick={onClick} ref={ref}>
            Date. {value}
        </button>
    ));
    
    const purchaseCall = useCallback(async () => {
        try {
            const { ethereum } = window;

            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
        
                const eventContract = new ethers.Contract(contractAddress, abi, signer);
                //const nftContract = new ethers.Contract(contractAddress, contract.abi, signer);

                const block = await provider.getBlockNumber();
                console.log(block);

                const transferEvent = await eventContract.queryFilter('nftPurchase', 'latest' - 500, 'latest');
        
                console.log(transferEvent,"event");
                console.log(transferEvent[0].args);
                console.log(Number(transferEvent[0].args.tileId));
                console.log(transferEvent[0].args.buyer);
                console.log(Number(transferEvent[0].args.purchaseTime));

                // const tile = nftContract.connect(signer).getTile(Number(transferEvent[0].args.tileId));
                // 이런 식으로 타일 정보 들고와서 사용하면 될 듯?
            } else {
                console.log("metamast 연결 X");
            }
        } catch (error) {
            console.log(error);
        }
    });

    useEffect(() => {
        setDay(moment(startDate).format("YYYYMMDD"));
        axios
      .get(process.env.REACT_APP_SERVER_URL + '/api/planets', {})
      .then((res) => {
        const category = res.data.planet;
        setOptions((prevState) => ({
          ...prevState,
          category,
        }));
      });
        purchaseCall();
        
    }, [startDate]);

    const SelectBox = (props) => {
        // console.log(props.options.category);
        return (
          <select
            className="transaction-filter-name"
            value={selectedCategory}
            onChange={(e) =>{
                    setSelectedCategory(e.target.value);
                    postCategory(selectedCategory);
                }
            }
          >
            <option className="transaction-filter-name-option">행성이름</option>
            {props.options.category &&
              props.options.category.map((option) => (
                <option 
                  className="transaction-filter-name-option"
                  key={option.pid}
                  value={option.name}
                >
                  {option.name}
                </option>
              ))}
          </select>
        );
      };
    return(
       <div className="transaction" style={styles}>
           <div className='transaction-filter'>
                {/* <span className='transaction-filter-name'>
                    행성이름 &nbsp;  
                    <BsFillCaretDownFill size="1.5em"/>
                </span> */}
                <SelectBox
                    options={options}
                    value={selectedCategory}
                    >
                </SelectBox>
                <span className='transaction-filter-date'>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => {setStartDate(date); postDate();}}
                        customInput={<CustomInput />}
                        dateFormat="yyyy-MM-dd"
                        />
                </span>
           </div>
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