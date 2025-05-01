export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html>
        <head>
            <title>Welcome to Acme</title>
        </head>
        <body>
        {children}
        </body>
        </html>
    )
}