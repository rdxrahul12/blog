import logo from "../assets/logo.png"
export default function Logo({width = '65px'}) {
    return (
        <img src={logo} alt="" width={width} />
    )
}