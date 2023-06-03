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
    <div style={rootStyles}>
        <Wagmi>
            {children}
        </Wagmi>
    </div>
    )
};

export default RootProvider;