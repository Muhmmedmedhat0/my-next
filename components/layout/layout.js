import React from 'react'
import Header from './main-header'

function Layout() {
	return (
		<>
		<Header/>
		<main>
			{props.children}
		</main>
		</>
	)
}

export default Layout