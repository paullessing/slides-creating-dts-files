import { logToConsole } from './console';

function concatenate(text, other: string[]): string {
  return [text, ...other].join(', ');
}

export class PrintService {
  public print(text: string, ...other: string[]): void {
    logToConsole(concatenate(text, other));
  }
}

export class HelloWorldPrinter {
  constructor(
    private prefix: string,
    private printService: PrintService
  ) {}

  public helloWorld(): void {
    this.printService.print(this.prefix, 'Hello World!');
  }
}

new HelloWorldPrinter('[HW]', new PrintService()).helloWorld();






