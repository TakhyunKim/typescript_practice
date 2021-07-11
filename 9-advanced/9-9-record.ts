type PageInfo = {
  title: string;
};
type Page = 'home' | 'about' | 'contact';

const nav: Record<Page, PageInfo> = {
  home: { title: 'Home' },
  about: { title: 'about' },
  contact: { title: 'contact' },
};

type Product = 'cat' | 'dog';
type NewProduct = Capitalize<Product>; // 'Cat', 'Dog' 대문자 전환 같은 기능
