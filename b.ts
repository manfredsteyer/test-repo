export class B {
    data: unknown;

    async init(): Promise<void> {
        const r = await fetch('http://whatever');
        const data = await r.json();
    }
} 
