export type MainMenuItem = 'quality' | 'metadata';

export type QualitySubItem = 'code-of-practice' | 'kesqaf' | 'kspm';

export type MetadataSubItem = 
  | 'quality-reports' 
  | 'classification-national' 
  | 'classification-international'
  | 'codelists'
  | 'dictionary';

export interface NavigationItem {
  id: string;
  label: string;
  children?: NavigationItem[];
  path?: string;
}

export const NAVIGATION_STRUCTURE: NavigationItem[] = [
  {
    id: 'quality',
    label: 'Quality',
    children: [
      { id: 'code-of-practice', label: 'Code of Practice', path: '/quality/code-of-practice' },
      { id: 'kesqaf', label: 'KeSQAF', path: '/quality/kesqaf' },
      { id: 'kspm', label: 'KSPM', path: '/quality/kspm' },
    ],
  },
  {
    id: 'metadata',
    label: 'Metadata',
    children: [
      { id: 'quality-reports', label: 'Quality Reports', path: '/metadata/quality-reports' },
      { 
        id: 'classification', 
        label: 'Classification',
        children: [
          { id: 'classification-national', label: 'National', path: '/metadata/classification/national' },
          { id: 'classification-international', label: 'International', path: '/metadata/classification/international' },
        ],
      },
      { id: 'codelists', label: 'Codelists', path: '/metadata/codelists' },
      { id: 'dictionary', label: 'Dictionary', path: '/metadata/dictionary' },
    ],
  },
];