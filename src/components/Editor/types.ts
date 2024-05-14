export interface EditorProps {
    defaultValue?: string,
    type?: 'custom' | 'light',
    onSubmit?: (context: string | HTMLElement) => void;
}