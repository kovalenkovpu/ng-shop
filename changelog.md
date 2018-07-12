# Task3 branch
1. Architecture changed to modules
2. LocalStorageService, 
3. ConfigOptionsService, 
4. ConstantsService registered with @useValue
5. GeneratorService registered with @useFactory
6. CoreModule created
7. LocalStorageService, ConfigOptionsService, ConstantsService, GeneratorService registered inside CoreModule
8. ContactUs demo component is created, services injected
9. AddClickHostDirective created and registered in CoreModule
10. AddClickHostDirective works for Contact Us component


# Task2 branch
1. `Product component` changed to be representative only;
2. `Add to Cart` logic moved above to `Product List Component`, disabled if product is not available;
3. Refactored Service registration (only inside `@injectable`);
4. Created `Cart Item Component` to display each item inside a cart;
5. Data model for `Cart Service` is changed to support deleting, adding and removing items;
6. Refactored `Cart Service` methods to support new data model and functionality;
7. `@Input` and `@Output` decorators are used for `Product List` and `Product Item`;
8. `mouseenter` for `Cart List` is added using `@ViewChild`;
9. `@HostBinding`, `@HostListener` used for `Cart Item` to log message in console;
10. `[ngClass]` for `Cart Item Component`;
11. `shared-module` component for `hightlight-on-hover` directive to change Purchase background on mouseenter;


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
