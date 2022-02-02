export interface Post {
    _id: string;
    _createdAt: string;
    title: string;
    author: {
        name: any;
        image: any;
    };
    description: string;
    mainImage: {
        asset: {
            url: string;
        };
    };
    slug: {
        current: string;
    };
    body: [object];
}