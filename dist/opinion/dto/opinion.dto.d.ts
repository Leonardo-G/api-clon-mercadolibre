export declare class CreateOpinionDTO {
    comment: string;
    rate: number;
}
declare const UpdateOpinionDTO_base: import("@nestjs/mapped-types").MappedType<Partial<CreateOpinionDTO>>;
export declare class UpdateOpinionDTO extends UpdateOpinionDTO_base {
}
export {};
