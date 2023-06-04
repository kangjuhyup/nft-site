import Link from "next/link";

const HomeComponent = () => {
    return (
        <div>
            <div>
                <p>Issue your own NFT with a few simple inputs and a click.</p>
                <Link href={{pathname:'/mint'}}> Deploy NFT </Link>
            </div>
            <div>
                <p>Issue your own ERC20 token.</p>
                <Link href={{pathname:'/mint'}}> Deploy ERC20 </Link>
            </div>
            <div>
                <p>가지고 있는 ERC20 토큰을 다른 네트워크로 옮겨보세요.</p>
                <button onClick={()=>{alert('Comming soon')}}> Bridge ERC20</button>
            </div>
            <div>
                <p>가지고 있는 ERC20 토큰을 다른 토큰과 교환 해보세요.</p>
                <button onClick={()=>{alert('Comming soon')}}> Swap ERC20</button>
            </div>
            <div>
                <p>NFT 를 사고 팔아 보세요.</p>
                <button onClick={()=>{alert('Comming soon')}}> Market Place</button>
            </div>
        </div>
    )
}

export default HomeComponent;