# Atomic Design Bookstore

## Introduction:

This project follows the principles of Atomic Design. The components are divided into three categories:

-   **Atoms**: These are the smallest building blocks of our application. They include [Button](components/atoms/Button.tsx), [Heading](components/atoms/Heading.tsx), [Input](components/atoms/Input.tsx), [Label](components/atoms/Label.tsx), and [SocialIcon](components/atoms/SocialIcon.tsx).

-   **Molecules**: These are groups of atoms bonded together and are the smallest fundamental units of a compound. Examples include [BookCard](components/molecules/BookCard.tsx) and [SearchBar](components/molecules/SearchBar.tsx).

-   **Organisms**: These are groups of molecules joined together to form a relatively complex, distinct section of an interface. Examples include [BookGrid](components/organisms/BookGrid.tsx), [BookstoreFooter](components/organisms/BookstoreFooter.tsx), and [BookstoreHeader](components/organisms/BookstoreHeader.tsx).

## File/Folder Structure

Describe the file/folder structure of the project. For example:

-   `data/`: Contains static data files, like [bookList.ts](data/bookList.ts).
-   `utils/`: Contains utility functions, like [fetchBooks.ts](utils/fetchBooks.ts).
-   `components/`: Contains all the React components, divided into `atoms/`, `molecules/`, and `organisms/` according to Atomic Design principles.
-   `types/`: Contains TypeScript type definitions, like [book.ts](types/book.ts).
