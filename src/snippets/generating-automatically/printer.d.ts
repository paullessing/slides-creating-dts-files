export declare class PrintService {
    print(text: string, ...other: string[]): void;
}
export declare class HelloWorldPrinter {
    private prefix;
    private printService;
    constructor(prefix: string, printService: PrintService);
    helloWorld(): void;
}






