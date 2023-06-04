import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import Wagmi from "@/components/common/wagmi";



const rootStyles = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
};

const RootProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <div style={{ height: '100vh', margin: 0, backgroundColor: 'black' }}>
            <Header />
            <div style={rootStyles}>
                <Wagmi>
                    {children}
                </Wagmi>
            </div>
            <Footer />
        </div>
    )
};

export default RootProvider;