import LeftNavbar from './left-navbar.component';


class Root {
    render() {
        return () {
            <>
            <LeftNavbar />
            <Navbar />
            <Vedios />
            </>
        }
    }
}