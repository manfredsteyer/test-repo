export class B {
    data: unknown;

    init(): void {
        fetch('http://whatever')
            .then(r => r.json())
            .then(r => this.data = r);
    }
} 
