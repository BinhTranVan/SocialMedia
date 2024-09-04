import React from "react";
import { ConfigProvider } from "antd";

function ThemeProvider({children}: {children: React.ReactNode}) {
    const primaryColor = "#054058";
    const secondaryColor = "#F3C110";

    return(
        <ConfigProvider theme={{
            token: {
                borderRadius: 2,
                colorPrimary: primaryColor,
            },
            components: {
                Button: {
                    controlHeight: 45,
                    controlOutline: 'none',
                    colorBorder: primaryColor,
                },
                Input: {
                    controlHeight: 45,
                    controlOutline: 'none',
                }
            }
        }}>{children}</ConfigProvider>
    )
}

export default ThemeProvider;