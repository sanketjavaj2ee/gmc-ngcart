
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'reverseText'})
export class ReversePipe implements PipeTransform{
  transform(input:String) {
      return input.split("").reverse().join("");
  }
}
