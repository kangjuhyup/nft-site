import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import Wagmi from "@/components/common/wagmi";

import styles from "./styles.module.css";


const RootProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Header />
            <div className={styles.content}>
                <Wagmi>
                    {children}
                </Wagmi>
            </div>
            <Footer />
        </div>
    )
};

export default RootProvider;