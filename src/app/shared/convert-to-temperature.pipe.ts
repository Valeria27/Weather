import {Pipe} from '@angular/core';
import { PipeTransform } from '@angular/core/src/change_detection/pipe_transform';

@Pipe({
    name: 'temperature'
})

export class ConvertToTemperaturePipe implements PipeTransform {
    transform (value: number, character:string): string{
        return value.toString().concat(' °'+character);
    }
}