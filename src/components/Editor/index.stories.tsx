import {Meta, StoryObj} from "@storybook/react";
import {userEvent, within, fn} from "@storybook/test";
import Editor from "./index.tsx";
import '../../main.css'

const meta: Meta<typeof Editor> = {
    component: Editor,
    decorators: [(Story) => {
        return (
            <div className='w-full h-full flex justify-center items-center'>
                <Story></Story>
            </div>
        )
    }],
    render: (args, {loaded: {todo}}) => <Editor {...args} defaultValue={todo}></Editor>
}
export default meta

type Story = StoryObj<typeof Editor>

export const Custom: Story = {
    args: {
        defaultValue: '123123123',
        type: 'light',
        onSubmit: fn()
    },
    parameters: {
        backgrounds: {
            default: 'light',
        },
    },
    loaders: [
        async () => ({
            todo: await (await fetch('https://jsonplaceholder.typicode.com/todos/1')).text(),
        }),
    ],
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)
        // await userEvent.type(canvas.getByRole('textbox'), '\n\n # Hello World \n\n')
        // await userEvent.type(canvas.getByRole('textbox'), '<div>hello test</div>')
    }
}