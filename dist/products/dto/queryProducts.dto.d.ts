export declare class SearchQuerys {
    search?: string;
    category?: string;
    subcategory?: string;
    offer?: boolean;
    shipping?: 0 | 1 | 2;
    interests?: boolean;
    until?: string;
    condition?: 'nuevo' | 'reacondicionado' | 'usado';
    price_gte?: number;
    price_lte?: number;
    tags?: string;
    sort?: 'price_asc' | 'relevant';
    limit?: number;
    skip?: number;
}
