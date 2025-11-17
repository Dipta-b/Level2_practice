interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;

}


function printBookDetails(details: Book) {
    const { title, author, publishedYear, isAvailable } = details;
    const result = `Title: ${title}, Author:${author}, Published:${publishedYear},  Available:${isAvailable ? 'Yes' : 'No'}`;
    return result;
}

