import './globals.css'

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html>
        <head>
            <title>Welcome to Acme</title>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@100;400;800&display=swap"
                  rel="stylesheet"/>
        </head>
        <body>
        {children}
        </body>
        </html>
    )
}