import { IsExistCategoryMiddleware } from './is-exist-category.middleware';

describe('IsExistCategoryMiddleware', () => {
  it('should be defined', () => {
    expect(new IsExistCategoryMiddleware()).toBeDefined();
  });
});
