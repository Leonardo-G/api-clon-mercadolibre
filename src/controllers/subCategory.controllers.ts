import SubCategoryService from "../service/subCategory.service";

class SubCategoryControllers {
    constructor() {}

    postSubCategory() {
        console.log("Desde el controlador");
        SubCategoryService.newSubCategory();
    }
}

export default new SubCategoryControllers();