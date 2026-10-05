export type Category = 'All' | 'Baby & Kids' | 'Royal' | 'Profession' | 'Wedding' | 'Festival' | 'Maternity' | 'Sketch' | 'Restoration';

export interface Style {
  id: string;
  category: Category;
  name: string;
  marathiName?: string;
  description: string;
  price: number;
  turnaround: string;
  badge?: string;
  beforeImage: string;
  afterImage: string;
  isFeatured?: boolean;
  isActive: boolean;
  order: number;
}
