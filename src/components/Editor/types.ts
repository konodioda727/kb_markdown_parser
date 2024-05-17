export interface EditorProps {
    defaultValue?: string,
    onSubmit?: (context: string | HTMLElement) => void;
}