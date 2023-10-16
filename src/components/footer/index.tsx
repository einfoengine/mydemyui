import Link from "next/link";

export default function Footer() {
    return(
        <footer className="relative isolate overflow-hidden bg-gray-900 text-gray-400">
            <div className="nt-footer-content container pt-32 pb-9 mx-auto grid grid-cols-10 gap-10 z-10">
                <div className="nt-footer-branding col-span-4">
                    <h2 className="text-xl leading-10 text-gray-50">MyPlace</h2>
                    <p>A modern next.js 13 template! This is a starter template. And of course this is a free template with a premium quality and feel! Including all our templates this template has a next.js version and a html version.</p>
                </div>
                <div className="nt-footer-menu col-span-2">
                    <h2 className="bold uppercase leading-10 text-gray-50">About</h2>
                    <ul>
                        <li>
                            <Link className="hover:text-white hover:pl-1" href={"/about"}>Team</Link>
                        </li>
                        <li>
                            <Link className="hover:text-white hover:pl-1" href={"/about"}>Terms and condition</Link>
                        </li>
                        <li>
                            <Link className="hover:text-white hover:pl-1" href={"/about"}>Opportunity</Link>
                        </li>
                        <li>
                            <Link className="hover:text-white hover:pl-1" href={"/about"}>Career</Link>
                        </li>
                        <li>
                            <Link className="hover:text-white hover:pl-1" href={"/about"}>Policy</Link>
                        </li>
                        <li>
                            <Link className="hover:text-white hover:pl-1" href={"/about"}>Documentation</Link>
                        </li>
                    </ul>
                </div>
                <div className="nt-footer-menu col-span-2">
                    <h2 className="bold uppercase leading-10 text-gray-50">Products</h2>
                    <ul>
                        <li>
                            <Link className="hover:text-white hover:pl-1" href={"/about"}>Company</Link>
                        </li>
                        <li>
                            <Link className="hover:text-white hover:pl-1" href={"/about"}>Terms and condition</Link>
                        </li>
                        <li>
                            <Link className="hover:text-white hover:pl-1" href={"/about"}>Opportunity</Link>
                        </li>
                        <li>
                            <Link className="hover:text-white hover:pl-1" href={"/about"}>Career</Link>
                        </li>
                        <li>
                            <Link className="hover:text-white hover:pl-1" href={"/about"}>Policy</Link>
                        </li>
                        <li>
                            <Link className="hover:text-white hover:pl-1" href={"/about"}>Career</Link>
                        </li>
                    </ul>
                </div>
                <div className="nt-footer-menu col-span-2">
                    <h2 className="bold uppercase leading-10 text-gray-50">Services</h2>
                    <ul>
                        <li>
                            <Link className="hover:text-white hover:pl-1" href={"/about"}>Company</Link>
                        </li>
                        <li>
                            <Link className="hover:text-white hover:pl-1" href={"/about"}>Terms and condition</Link>
                        </li>
                        <li>
                            <Link className="hover:text-white hover:pl-1" href={"/about"}>Opportunity</Link>
                        </li>
                        <li>
                            <Link className="hover:text-white hover:pl-1" href={"/about"}>Career</Link>
                        </li>
                        <li>
                            <Link className="hover:text-white hover:pl-1" href={"/about"}>Policy</Link>
                        </li>
                        <li>
                            <Link className="hover:text-white hover:pl-1" href={"/about"}>Career</Link>
                        </li>
                    </ul>
                </div>
                <div className="nt-copyright border-t border-gray-600 text-center col-span-12 mt-10 pt-10">
                    copyright: All right researved
                </div>
            </div>
            <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl" aria-hidden="true">
                <div
                className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                style={{
                    clipPath:
                    'polygon(50% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 47.5% 58.3%, 0.1% 64.9%)',
                }}
                />
            </div>
        </footer>
    )
}