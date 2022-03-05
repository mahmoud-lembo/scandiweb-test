# Junior Developer Test Task

Live URL: https://scandiweb.lembo.tech/

A web-app (accessible by an URL) containing two pages for:

1. Product list page
2. Adding a product page
3. Favorite Products Page

*Utilize OOP principles to handle differences in type logic/behavior
*MySQL logic handled by objects with properties instead of direct column values. using setters and getters
*Meet PSR standards
*Classes that extend each other, and abstract class for the main product logic
*Avoid using conditional statements (polymorphism)
*Do not using different endpoints for different products types
*PHP: ^7.0, plain classes, no frameworks, OOP approach
*SASS Usage
*Mysqli Database Connection
*React Components

### the list items:

- Product Image
- SKU (unique for each product)
- Name
- Price in $
- One of the product-specific attributes and its value
    - Size (in MB) for DVD-disc
    - Weight (in Kg) for Book
    - Dimensions (HxWxL) for Furniture

### **Add product page :**

- The form dynamically changed when the type is switched
- Special attributes have a description, related to their type, e.g.: “Please, provide dimensions” / “Please, provide weight” / “Please, provide size” when related product type is selected
- All fields are mandatory for submission, missing values should trigger notification “Please, submit required data”
- Implement input field value validation, invalid data must trigger notification “Please, provide the data of indicated type”
- The page have a “Save” button to save the product. Once saved, return to the “Product List” page with the new product added.
- The page have a “Cancel” button to cancel adding the product action. Once canceled, returned to the “Product List” page with no new products added.
