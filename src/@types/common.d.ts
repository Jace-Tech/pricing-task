type CountryFlagProps = {
  name: string;
  flag: string;
};

type MenuType = {
  link: string;
  name: string;
  isSpecialLink?: boolean;
  hasTooltip?: string;
};

type FooterMenuType = {
  title: string;
  menuItems: MenuType[];
};

type CountryDataType = {
  id: number;
  phone: number;
  name: string;
  currency: string;
  capital: string | null;
  code: string;
  code3: string;
};


type OptionTypes = {
  label: string;
  value: string;
  key: string;
}