import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
	return (
		<nav className='navbar navbar-expand-md navbar-dark'>
			<div className='container-fluid p-md-1'>
				<a className='navbar-brand fs-4 ms-4' href='#'>
					Navbar
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<FontAwesomeIcon icon={faBars} style={{ color: '#fff' }} />
				</button>
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav mx-md-auto mb-2 mb-lg-0 me-5 gap-5 align-items-center'>
						<li className='nav-item active'>
							<a className='nav-link' aria-current='page' href='#'>
								Home
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#'>
								About us
							</a>
						</li>

						<li className='nav-item'>
							<a className='nav-link'>Product</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
