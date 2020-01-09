import React from 'react'
import { StoryDecorator } from "@storybook/react";
import { ThemeProvider } from '../src/components/ThemeProvider'

const withTheme: StoryDecorator = (story) => {
    return (
        <ThemeProvider>
            {story()}
        </ThemeProvider>
    )
}

export default withTheme
