import React from 'react'

export function Layout({ children }) {
    return (
        <>
            <header>Header</header>
            <main>
                {children}
            </main>
            <footer>Footer</footer>
        </>
    )
}
