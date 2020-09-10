import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector([selectShop], (shop) => shop.collections);

// lesson 144
// Changed shop.data.js from an array to objects and need
// to map over each one in collections-overview.component
export const selectCollectionsForPreview = createSelector([selectCollections], (collections) =>
    Object.keys(collections).map((key) => collections[key])
);

// lesson 139 - 142
export const selectCollection = memoize((collectionUrlParam) =>
    createSelector([selectCollections], (collections) => collections[collectionUrlParam])
);
