import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'medicFilter'})
export class MedicFilterPipe implements PipeTransform {
    transform(value: any[], args: string): any[] {
        let filter: string = args ? args.toLocaleLowerCase() : null;
        return filter ? value.filter((book) =>
          book.name.toLocaleLowerCase().startsWith(filter) != false) : value;
    }
}
