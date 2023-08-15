import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class IsValidMongoIdPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
