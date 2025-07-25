// Tipos e interfaces da aplicação
// Adicione aqui as definições de tipos TypeScript conforme necessário

export interface TherapyCard {
  id: string;
  title: string;
  icon: string;
  color: string;
  description: string;
  features: string[];
  link: string;
}

export interface NavigationItem {
  name: string;
  page: string;
}