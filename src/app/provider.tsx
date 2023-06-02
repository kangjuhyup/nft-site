import Wagmi from "@/components/common/wagmi";

const RootProvider = ({ children }: { children: React.ReactNode }) => {
    return (<div>
        <Wagmi>
            {children}
        </Wagmi>
    </div>
    )
};

export default RootProvider;