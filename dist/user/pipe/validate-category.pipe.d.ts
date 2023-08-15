import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class ValidateCategoryPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
