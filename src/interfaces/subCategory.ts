export interface ISubCategoryDocument {
    category: ICategory;
    subCategory: ISubCategory;
    imgUrl: string;
}

interface ICategory {
    code: string;
    title: string;
}

interface ISubCategory {
    code: string;
    title: string;
}

export interface ISubCategoryBody extends ISubCategoryDocument {};