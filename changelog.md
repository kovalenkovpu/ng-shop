# Task1 branch
1. Added `Product component` that displays product information, `Add To Cart` button, uses `*ngFor` to display 
specifications of a product;
2. `onBuy()` event that is triggered when `Add To Cart` is clicked, takes product.id parameter;
3. Created `Product Model` with several primitive fields, array field and enum field;
4. Created `Product List` component that takes arrays of Products and passes down Product to `Product component` (p.1);
5. Created `Products Service` to get the single Product item and array of Products;

6. Added `Cart component` to store the bought products;
7. Added `Cart Service` to add and get all data stored in the Cart;
8. Added `Communicator Service`:
    creates `channel$` to emit data from `Product component` when Product is added to Cart;
    `Cart component` subscribes to this `channel$`;
    `Cart component` changes its variables respectively when sees changes;


# Task2 branch
1. `Product component` changed to be representative only;
2. `Add to Cart` logic moved above to `Product List Component`, disabled if product is not available;
3. Refactored Service registration (only inside `@injectable`);
