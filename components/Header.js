// components/Header.js

import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {

	const [isActive, setActive] = useState("false");

	const handleToggle = () => {
	  setActive(!isActive);
	};

	return (
		<header>
			<div className="container">

				<Link href="/"><a id="logo" aria-label="homepage" accessKey="1">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><polygon points="415.08 127.31 336.35 286.19 256.55 127.31 159.71 127.31 159.71 300.75 94.84 300.75 94.84 51.19 0.01 51.19 0.01 383.94 159.71 383.94 159.71 383.96 254.54 383.96 254.54 325.05 302.1 418.46 369.61 418.46 417.17 325.05 417.17 460.06 512 460.06 512 127.31 415.08 127.31"/></svg>Lucas Menezes
				</a></Link>

				<button onClick={handleToggle} className={isActive ? null : "open"} id="menu" type="button">Menu<div className="hamburger"></div></button>

				<nav className={isActive ? null : "open"}>
					<ul>
						<li><Link href="/#about" accessKey="2"><a onClick={handleToggle}>About</a></Link></li>
						<li><Link href="/#projects" accessKey="3"><a onClick={handleToggle}>Projects</a></Link></li>
						<li><Link href="/#contact" accessKey="4"><a onClick={handleToggle}>Contact</a></Link></li>
						{/* <li><a href="/blog" accessKey="5">Blog</a></li> */}
					</ul>
				</nav>
				<div className={isActive ? "layer" : "layer layer-active"}></div>
			
			</div>
		</header>
	)

}