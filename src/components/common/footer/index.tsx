import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2023 River Kang</p>
      <a target="_blank" href="https://github.com/kangjuhyup/nft-site"><Image style={{ backgroundColor: "white" }} src="/github.svg" alt="GitHub" width={50} height={50} /></a>
    </footer>
  )
}

export default Footer
