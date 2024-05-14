import {Meta, StoryObj} from "@storybook/react";
import MarkdownParser from "./index";

const meta: Meta<typeof  MarkdownParser> = {
    component: MarkdownParser,
    tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof MarkdownParser>

export const Custom: Story = {
    args: {}
}
