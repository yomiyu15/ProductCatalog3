// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true;
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title : " Introduction",
   href: "/products/introduction",
   
  },
  {
    title: " Conventional Banking Products",
    href: "/products",
    noLink: true,
    items: [
    
      {
        title: "Deposit Products",
        href: "/deposit_products",
        items: [
          { title: "Ordinarty Saving Account", href: "/ordinarySA" },
          { title: "Gamme Junior Saving Account", href: "/react" },
          { title: "Youth Saving Account", href: "/gatsby" },
          { title: "Sinqe Saving Account", href: "/laravel" },
          { title: "Gudunfa Junior Saving Account", href: "/react" },
          { title: "Farmers Saving Account", href: "/gatsby" },
          { title: "Special Saving Account", href: "/gatsby" },
        ],
      },
      { title: "Local currency deposit products", href: "/Local_currency_deposit_product" },
      {
        title: "Demand Deposit Accounts",
        href: "/demand-deposit",
        items: [
          { title: "Ordinary Demand Account", href: "/layouts" },
          { title: "Interest Bearing Account", href: "/integrations" },
          { title: "Fixed Time Demand Account", href: "/layouts" },
          { title: "Interest Bearing Account", href: "/integrations" },
          {
            title: "Manual",
            href: "/manual",
            items: [
              { title: "JavaScript", href: "/javascript" },
              { title: "Typescript", href: "/typescript" },
              { title: "Golang", href: "/golang" },
            ],
          },
        ],
      },
      { title: "Foreign Currency Deposit Products", href: "/Foreign Currency Deposit Product" },
      {
        title: "Credit/Loan Banking Products",
        href: "/faq",
      },
    ],
  },
  {
    title: "Interest Free Baanking Products",
    href: "/server-actions",
    noLink: true,
    items: [
      { title: "Saving/Deposit Banking Products", href: "/getSession" },
      { title: "Local currency Deposit Products", href: "/getToken" },
      { title: "Foreign Currency Deposit Products", href: "/getRole" },
      { title: "IFB Financing products .", href: "/getRole" },
    ],
  },
  {
    title: " Digital Banking Products",
    href: "/react-hooks",
    noLink: true,
    items: [
      { title: "Mobile/Digital/ Banking Products .", href: "/use-session" ,
        items: [
          { title: "Coopay-Ebirr", href: "/javascript" },
          { title: "Michu", href: "/typescript" },
          { title: "Golang", href: "/golang" },
        ],
      },
      { title: "Card Banking Products .", href: "/use-fetch" ,
        items: [
          { title: "Card Banking", href: "/javascript" },]
      },
      
    ],
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
