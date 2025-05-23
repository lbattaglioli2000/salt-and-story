import type { GraphQLClient, RequestOptions } from 'graphql-request';
import { GraphQLError, print } from 'graphql'
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Array: { input: any; output: any; }
  JsonArgument: { input: any; output: any; }
};

export type AssetContainer = {
  __typename?: 'AssetContainer';
  handle: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type AssetInterface = {
  blueprint?: Maybe<Scalars['String']['output']>;
  container: AssetContainer;
  duration?: Maybe<Scalars['Float']['output']>;
  edit_url?: Maybe<Scalars['String']['output']>;
  extension: Scalars['String']['output'];
  focus_css?: Maybe<Scalars['String']['output']>;
  folder?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  id: Scalars['String']['output'];
  is_audio?: Maybe<Scalars['Boolean']['output']>;
  is_image?: Maybe<Scalars['Boolean']['output']>;
  is_video?: Maybe<Scalars['Boolean']['output']>;
  last_modified?: Maybe<Scalars['String']['output']>;
  orientation?: Maybe<Scalars['String']['output']>;
  path: Scalars['String']['output'];
  permalink?: Maybe<Scalars['String']['output']>;
  ratio?: Maybe<Scalars['Float']['output']>;
  size?: Maybe<Scalars['String']['output']>;
  size_b?: Maybe<Scalars['Int']['output']>;
  size_bytes?: Maybe<Scalars['Int']['output']>;
  size_gb?: Maybe<Scalars['Float']['output']>;
  size_gigabytes?: Maybe<Scalars['Float']['output']>;
  size_kb?: Maybe<Scalars['Float']['output']>;
  size_kilobytes?: Maybe<Scalars['Float']['output']>;
  size_mb?: Maybe<Scalars['Float']['output']>;
  size_megabytes?: Maybe<Scalars['Float']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type AssetInterfacePagination = {
  __typename?: 'AssetInterfacePagination';
  /** Current page of the cursor */
  current_page: Scalars['Int']['output'];
  /** List of items on the current page */
  data: Array<AssetInterface>;
  /** Number of the first item returned */
  from?: Maybe<Scalars['Int']['output']>;
  /** Determines if cursor has more pages after the current page */
  has_more_pages: Scalars['Boolean']['output'];
  /** The last page (number of pages) */
  last_page: Scalars['Int']['output'];
  /** Number of items returned per page */
  per_page: Scalars['Int']['output'];
  /** Number of the last item returned */
  to?: Maybe<Scalars['Int']['output']>;
  /** Number of total items selected by the query */
  total: Scalars['Int']['output'];
};

export type Asset_Assets = AssetInterface & {
  __typename?: 'Asset_Assets';
  alt?: Maybe<Scalars['String']['output']>;
  blueprint?: Maybe<Scalars['String']['output']>;
  container: AssetContainer;
  duration?: Maybe<Scalars['Float']['output']>;
  edit_url?: Maybe<Scalars['String']['output']>;
  extension: Scalars['String']['output'];
  focus_css?: Maybe<Scalars['String']['output']>;
  folder?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  id: Scalars['String']['output'];
  is_audio?: Maybe<Scalars['Boolean']['output']>;
  is_image?: Maybe<Scalars['Boolean']['output']>;
  is_video?: Maybe<Scalars['Boolean']['output']>;
  last_modified?: Maybe<Scalars['String']['output']>;
  orientation?: Maybe<Scalars['String']['output']>;
  path: Scalars['String']['output'];
  permalink?: Maybe<Scalars['String']['output']>;
  ratio?: Maybe<Scalars['Float']['output']>;
  size?: Maybe<Scalars['String']['output']>;
  size_b?: Maybe<Scalars['Int']['output']>;
  size_bytes?: Maybe<Scalars['Int']['output']>;
  size_gb?: Maybe<Scalars['Float']['output']>;
  size_gigabytes?: Maybe<Scalars['Float']['output']>;
  size_kb?: Maybe<Scalars['Float']['output']>;
  size_kilobytes?: Maybe<Scalars['Float']['output']>;
  size_mb?: Maybe<Scalars['Float']['output']>;
  size_megabytes?: Maybe<Scalars['Float']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Asset_Images = AssetInterface & {
  __typename?: 'Asset_Images';
  alt?: Maybe<Scalars['String']['output']>;
  blueprint?: Maybe<Scalars['String']['output']>;
  container: AssetContainer;
  duration?: Maybe<Scalars['Float']['output']>;
  edit_url?: Maybe<Scalars['String']['output']>;
  extension: Scalars['String']['output'];
  focus_css?: Maybe<Scalars['String']['output']>;
  folder?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  id: Scalars['String']['output'];
  is_audio?: Maybe<Scalars['Boolean']['output']>;
  is_image?: Maybe<Scalars['Boolean']['output']>;
  is_video?: Maybe<Scalars['Boolean']['output']>;
  last_modified?: Maybe<Scalars['String']['output']>;
  orientation?: Maybe<Scalars['String']['output']>;
  path: Scalars['String']['output'];
  permalink?: Maybe<Scalars['String']['output']>;
  ratio?: Maybe<Scalars['Float']['output']>;
  size?: Maybe<Scalars['String']['output']>;
  size_b?: Maybe<Scalars['Int']['output']>;
  size_bytes?: Maybe<Scalars['Int']['output']>;
  size_gb?: Maybe<Scalars['Float']['output']>;
  size_gigabytes?: Maybe<Scalars['Float']['output']>;
  size_kb?: Maybe<Scalars['Float']['output']>;
  size_kilobytes?: Maybe<Scalars['Float']['output']>;
  size_mb?: Maybe<Scalars['Float']['output']>;
  size_megabytes?: Maybe<Scalars['Float']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Code = {
  __typename?: 'Code';
  code: Scalars['String']['output'];
  mode: Scalars['String']['output'];
};

export type Collection = {
  __typename?: 'Collection';
  handle: Scalars['String']['output'];
  structure?: Maybe<CollectionStructure>;
  title: Scalars['String']['output'];
};

export type CollectionStructure = {
  __typename?: 'CollectionStructure';
  expects_root: Scalars['Boolean']['output'];
  handle: Scalars['String']['output'];
  max_depth?: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
  tree?: Maybe<Array<Maybe<CollectionTreeBranch>>>;
};


export type CollectionStructureTreeArgs = {
  site?: InputMaybe<Scalars['String']['input']>;
};

export type CollectionTreeBranch = {
  __typename?: 'CollectionTreeBranch';
  children?: Maybe<Array<Maybe<CollectionTreeBranch>>>;
  depth: Scalars['Int']['output'];
  entry?: Maybe<EntryInterface>;
  /** @deprecated Replaced by `entry` */
  page?: Maybe<EntryInterface>;
};

export type DateRange = {
  __typename?: 'DateRange';
  end?: Maybe<Scalars['String']['output']>;
  start?: Maybe<Scalars['String']['output']>;
};


export type DateRangeEndArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};


export type DateRangeStartArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};

export type EntryInterface = {
  blueprint?: Maybe<Scalars['String']['output']>;
  collection: Collection;
  date?: Maybe<Scalars['String']['output']>;
  edit_url: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  last_modified?: Maybe<Scalars['String']['output']>;
  locale: Scalars['String']['output'];
  parent?: Maybe<EntryInterface>;
  permalink?: Maybe<Scalars['String']['output']>;
  private: Scalars['Boolean']['output'];
  published: Scalars['Boolean']['output'];
  site: Site;
  slug: Scalars['String']['output'];
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  uri?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};


export type EntryInterfaceDateArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};


export type EntryInterfaceLast_ModifiedArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};

export type EntryInterfacePagination = {
  __typename?: 'EntryInterfacePagination';
  /** Current page of the cursor */
  current_page: Scalars['Int']['output'];
  /** List of items on the current page */
  data: Array<EntryInterface>;
  /** Number of the first item returned */
  from?: Maybe<Scalars['Int']['output']>;
  /** Determines if cursor has more pages after the current page */
  has_more_pages: Scalars['Boolean']['output'];
  /** The last page (number of pages) */
  last_page: Scalars['Int']['output'];
  /** Number of items returned per page */
  per_page: Scalars['Int']['output'];
  /** Number of the last item returned */
  to?: Maybe<Scalars['Int']['output']>;
  /** Number of total items selected by the query */
  total: Scalars['Int']['output'];
};

export type Entry_Categories_Category = EntryInterface & {
  __typename?: 'Entry_Categories_Category';
  blueprint?: Maybe<Scalars['String']['output']>;
  categories?: Maybe<Array<Maybe<TermInterface>>>;
  collection: Collection;
  date?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  edit_url: Scalars['String']['output'];
  featured_image?: Maybe<AssetInterface>;
  id: Scalars['ID']['output'];
  last_modified?: Maybe<Scalars['String']['output']>;
  locale: Scalars['String']['output'];
  meta_description?: Maybe<Scalars['String']['output']>;
  meta_title?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<EntryInterface>;
  parent_category?: Maybe<Array<Maybe<TermInterface>>>;
  permalink?: Maybe<Scalars['String']['output']>;
  private: Scalars['Boolean']['output'];
  published: Scalars['Boolean']['output'];
  site: Site;
  slug: Scalars['String']['output'];
  social_image?: Maybe<AssetInterface>;
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  uri?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};


export type Entry_Categories_CategoryDateArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};


export type Entry_Categories_CategoryDescriptionArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};


export type Entry_Categories_CategoryLast_ModifiedArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};

export type Entry_Equipment_Equipment = EntryInterface & {
  __typename?: 'Entry_Equipment_Equipment';
  blueprint?: Maybe<Scalars['String']['output']>;
  care_instructions?: Maybe<Scalars['String']['output']>;
  category: LabeledValue;
  collection: Collection;
  date?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  difficulty?: Maybe<LabeledValue>;
  edit_url: Scalars['String']['output'];
  featured_image: AssetInterface;
  gallery?: Maybe<Array<Maybe<AssetInterface>>>;
  id: Scalars['ID']['output'];
  last_modified?: Maybe<Scalars['String']['output']>;
  locale: Scalars['String']['output'];
  meta_description?: Maybe<Scalars['String']['output']>;
  meta_title?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<EntryInterface>;
  permalink?: Maybe<Scalars['String']['output']>;
  price_range?: Maybe<LabeledValue>;
  private: Scalars['Boolean']['output'];
  product_recommendations?: Maybe<Array<Maybe<Sets_ProductRecommendations>>>;
  published: Scalars['Boolean']['output'];
  related_equipment?: Maybe<Array<Maybe<EntryInterface>>>;
  retailers?: Maybe<Array<Maybe<Sets_Retailers>>>;
  site: Site;
  slug: Scalars['String']['output'];
  social_image?: Maybe<AssetInterface>;
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  uri?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  usage_tips?: Maybe<Scalars['String']['output']>;
};


export type Entry_Equipment_EquipmentCare_InstructionsArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};


export type Entry_Equipment_EquipmentDateArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};


export type Entry_Equipment_EquipmentDescriptionArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};


export type Entry_Equipment_EquipmentLast_ModifiedArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};


export type Entry_Equipment_EquipmentUsage_TipsArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};

export type Entry_Pages_Page = EntryInterface & {
  __typename?: 'Entry_Pages_Page';
  blueprint?: Maybe<Scalars['String']['output']>;
  collection: Collection;
  content: Scalars['String']['output'];
  date?: Maybe<Scalars['String']['output']>;
  edit_url: Scalars['String']['output'];
  featured_image?: Maybe<AssetInterface>;
  id: Scalars['ID']['output'];
  last_modified?: Maybe<Scalars['String']['output']>;
  locale: Scalars['String']['output'];
  meta_description?: Maybe<Scalars['String']['output']>;
  meta_title?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<EntryInterface>;
  permalink?: Maybe<Scalars['String']['output']>;
  private: Scalars['Boolean']['output'];
  published: Scalars['Boolean']['output'];
  site: Site;
  slug: Scalars['String']['output'];
  social_image?: Maybe<AssetInterface>;
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  uri?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};


export type Entry_Pages_PageContentArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};


export type Entry_Pages_PageDateArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};


export type Entry_Pages_PageLast_ModifiedArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};

export type Entry_Recipes_Recipe = EntryInterface & {
  __typename?: 'Entry_Recipes_Recipe';
  blueprint?: Maybe<Scalars['String']['output']>;
  categories?: Maybe<Array<Maybe<TermInterface>>>;
  category: Array<Maybe<TermInterface>>;
  collection: Collection;
  complementary_dishes?: Maybe<Array<Maybe<GridItem_ComplementaryDishes>>>;
  cook_time: Scalars['String']['output'];
  date?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  difficulty: LabeledValue;
  edit_url: Scalars['String']['output'];
  equipment_needed?: Maybe<Array<Maybe<GridItem_EquipmentNeeded>>>;
  featured_image: AssetInterface;
  gallery?: Maybe<Array<Maybe<AssetInterface>>>;
  id: Scalars['ID']['output'];
  ingredients?: Maybe<Array<Maybe<GridItem_Ingredients>>>;
  instructions?: Maybe<Array<Maybe<Sets_Instructions>>>;
  last_modified?: Maybe<Scalars['String']['output']>;
  locale: Scalars['String']['output'];
  meta_description?: Maybe<Scalars['String']['output']>;
  meta_title?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<EntryInterface>;
  permalink?: Maybe<Scalars['String']['output']>;
  prep_time: Scalars['String']['output'];
  private: Scalars['Boolean']['output'];
  published: Scalars['Boolean']['output'];
  servings?: Maybe<Scalars['Int']['output']>;
  site: Site;
  slug: Scalars['String']['output'];
  social_image?: Maybe<AssetInterface>;
  status: Scalars['String']['output'];
  tags?: Maybe<Array<Maybe<TermInterface>>>;
  title: Scalars['String']['output'];
  uri?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  video?: Maybe<Scalars['String']['output']>;
  wine_pairings?: Maybe<Array<Maybe<Sets_WinePairings>>>;
};


export type Entry_Recipes_RecipeDateArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};


export type Entry_Recipes_RecipeDescriptionArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};


export type Entry_Recipes_RecipeLast_ModifiedArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};

export type Entry_Techniques_Techniques = EntryInterface & {
  __typename?: 'Entry_Techniques_Techniques';
  blueprint?: Maybe<Scalars['String']['output']>;
  categories?: Maybe<Array<Maybe<TermInterface>>>;
  collection: Collection;
  common_mistakes?: Maybe<Array<Maybe<GridItem_CommonMistakes>>>;
  date?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  difficulty_level: LabeledValue;
  duration: Scalars['String']['output'];
  edit_url: Scalars['String']['output'];
  equipment_needed?: Maybe<Array<Maybe<EntryInterface>>>;
  id: Scalars['ID']['output'];
  image: AssetInterface;
  ingredients?: Maybe<Array<Maybe<GridItem_Ingredients>>>;
  last_modified?: Maybe<Scalars['String']['output']>;
  locale: Scalars['String']['output'];
  parent?: Maybe<EntryInterface>;
  permalink?: Maybe<Scalars['String']['output']>;
  prerequisites?: Maybe<Array<Maybe<EntryInterface>>>;
  private: Scalars['Boolean']['output'];
  published: Scalars['Boolean']['output'];
  site: Site;
  slug: Scalars['String']['output'];
  status: Scalars['String']['output'];
  steps?: Maybe<Array<Maybe<Sets_Steps>>>;
  tags?: Maybe<Array<Maybe<TermInterface>>>;
  title: Scalars['String']['output'];
  uri?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  variations?: Maybe<Array<Maybe<EntryInterface>>>;
};


export type Entry_Techniques_TechniquesDateArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};


export type Entry_Techniques_TechniquesLast_ModifiedArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};

export type Field = {
  __typename?: 'Field';
  config?: Maybe<Scalars['Array']['output']>;
  display: Scalars['String']['output'];
  handle: Scalars['String']['output'];
  if?: Maybe<Scalars['Array']['output']>;
  instructions?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  unless?: Maybe<Scalars['Array']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type Form = {
  __typename?: 'Form';
  fields?: Maybe<Array<Maybe<Field>>>;
  handle: Scalars['String']['output'];
  honeypot?: Maybe<Scalars['String']['output']>;
  rules?: Maybe<Scalars['Array']['output']>;
  sections?: Maybe<Array<Maybe<Section>>>;
  title: Scalars['String']['output'];
};

export type GlobalSetInterface = {
  handle: Scalars['String']['output'];
  site: Site;
  title: Scalars['String']['output'];
};

export type GlobalSet_NewsletterSettings = GlobalSetInterface & {
  __typename?: 'GlobalSet_NewsletterSettings';
  description: Scalars['String']['output'];
  error_message: Scalars['String']['output'];
  form_description?: Maybe<Scalars['String']['output']>;
  form_title: Scalars['String']['output'];
  handle: Scalars['String']['output'];
  site: Site;
  success_message: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type GlobalSet_NewsletterSettingsDescriptionArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};


export type GlobalSet_NewsletterSettingsForm_DescriptionArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};

export type GlobalSet_SiteSettings = GlobalSetInterface & {
  __typename?: 'GlobalSet_SiteSettings';
  address?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  favicon: AssetInterface;
  handle: Scalars['String']['output'];
  logo: AssetInterface;
  phone?: Maybe<Scalars['String']['output']>;
  site: Site;
  site_description: Scalars['String']['output'];
  site_name: Scalars['String']['output'];
  social_media_links?: Maybe<Array<Maybe<GridItem_SocialMediaLinks>>>;
  title: Scalars['String']['output'];
};


export type GlobalSet_SiteSettingsAddressArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};

export type GridItem_CommonMistakes = {
  __typename?: 'GridItem_CommonMistakes';
  description: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  mistake: Scalars['String']['output'];
};

export type GridItem_ComplementaryDishes = {
  __typename?: 'GridItem_ComplementaryDishes';
  id?: Maybe<Scalars['String']['output']>;
  pairing_note?: Maybe<Scalars['String']['output']>;
  recipe?: Maybe<EntryInterface>;
};

export type GridItem_EquipmentNeeded = {
  __typename?: 'GridItem_EquipmentNeeded';
  equipment?: Maybe<EntryInterface>;
  id?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
};

export type GridItem_Ingredients = {
  __typename?: 'GridItem_Ingredients';
  amount?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  ingredient: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  unit?: Maybe<Scalars['String']['output']>;
};

export type GridItem_SocialMediaLinks = {
  __typename?: 'GridItem_SocialMediaLinks';
  id?: Maybe<Scalars['String']['output']>;
  platform: LabeledValue;
  url: Scalars['String']['output'];
};

export type Group_Instructions_Timer = {
  __typename?: 'Group_Instructions_Timer';
  minutes?: Maybe<Scalars['Int']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  seconds?: Maybe<Scalars['Int']['output']>;
};

export type LabeledValue = {
  __typename?: 'LabeledValue';
  label?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type NavTreeBranch = {
  __typename?: 'NavTreeBranch';
  children?: Maybe<Array<Maybe<NavTreeBranch>>>;
  depth: Scalars['Int']['output'];
  page?: Maybe<PageInterface>;
};

export type Navigation = {
  __typename?: 'Navigation';
  expects_root: Scalars['Boolean']['output'];
  handle: Scalars['String']['output'];
  max_depth?: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
  tree?: Maybe<Array<Maybe<NavTreeBranch>>>;
};


export type NavigationTreeArgs = {
  site?: InputMaybe<Scalars['String']['input']>;
};

export type PageInterface = {
  entry_id?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  permalink?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  asset?: Maybe<AssetInterface>;
  assetContainer?: Maybe<AssetContainer>;
  assetContainers?: Maybe<Array<Maybe<AssetContainer>>>;
  assets?: Maybe<AssetInterfacePagination>;
  collection?: Maybe<Collection>;
  collections?: Maybe<Array<Maybe<Collection>>>;
  entries?: Maybe<EntryInterfacePagination>;
  entry?: Maybe<EntryInterface>;
  globalSet?: Maybe<GlobalSetInterface>;
  globalSets?: Maybe<Array<Maybe<GlobalSetInterface>>>;
  ping?: Maybe<Scalars['String']['output']>;
  taxonomies?: Maybe<Array<Maybe<Taxonomy>>>;
  taxonomy?: Maybe<Taxonomy>;
  term?: Maybe<TermInterface>;
  terms?: Maybe<TermInterfacePagination>;
};


export type QueryAssetArgs = {
  container?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAssetContainerArgs = {
  handle: Scalars['String']['input'];
};


export type QueryAssetsArgs = {
  container: Scalars['String']['input'];
  filter?: InputMaybe<Scalars['JsonArgument']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCollectionArgs = {
  handle?: InputMaybe<Scalars['String']['input']>;
};


export type QueryEntriesArgs = {
  collection?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<Scalars['JsonArgument']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query_scope?: InputMaybe<Scalars['JsonArgument']['input']>;
  site?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryEntryArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JsonArgument']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  uri?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGlobalSetArgs = {
  handle?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTaxonomyArgs = {
  handle?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTermArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTermsArgs = {
  filter?: InputMaybe<Scalars['JsonArgument']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  site?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  taxonomy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Role = {
  __typename?: 'Role';
  handle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Section = {
  __typename?: 'Section';
  display?: Maybe<Scalars['String']['output']>;
  fields?: Maybe<Array<Maybe<Field>>>;
  instructions?: Maybe<Scalars['String']['output']>;
};

export type Set_Instructions_Step = {
  __typename?: 'Set_Instructions_Step';
  description: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<AssetInterface>;
  timer?: Maybe<Group_Instructions_Timer>;
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
};


export type Set_Instructions_StepDescriptionArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};

export type Set_ProductRecommendations_Product = {
  __typename?: 'Set_ProductRecommendations_Product';
  features?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};


export type Set_ProductRecommendations_ProductFeaturesArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};

export type Set_Retailers_Retailer = {
  __typename?: 'Set_Retailers_Retailer';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type Set_Steps_Step = {
  __typename?: 'Set_Steps_Step';
  description: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<AssetInterface>;
  pro_tips?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  timer?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type Set_WinePairings_Wine = {
  __typename?: 'Set_WinePairings_Wine';
  id?: Maybe<Scalars['String']['output']>;
  serving_tips?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type: Scalars['String']['output'];
  wine_description?: Maybe<Scalars['String']['output']>;
  wine_image?: Maybe<AssetInterface>;
  wine_name?: Maybe<Scalars['String']['output']>;
  wine_region?: Maybe<Scalars['String']['output']>;
  wine_type?: Maybe<Scalars['String']['output']>;
};

export type Sets_Instructions = Set_Instructions_Step;

export type Sets_ProductRecommendations = Set_ProductRecommendations_Product;

export type Sets_Retailers = Set_Retailers_Retailer;

export type Sets_Steps = Set_Steps_Step;

export type Sets_WinePairings = Set_WinePairings_Wine;

export type Site = {
  __typename?: 'Site';
  handle: Scalars['String']['output'];
  locale: Scalars['String']['output'];
  name: Scalars['String']['output'];
  short_locale: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type TableRow = {
  __typename?: 'TableRow';
  cells?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Taxonomy = {
  __typename?: 'Taxonomy';
  handle: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type TermInterface = {
  edit_url: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  permalink?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  taxonomy: Taxonomy;
  title: Scalars['String']['output'];
  uri?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type TermInterfacePagination = {
  __typename?: 'TermInterfacePagination';
  /** Current page of the cursor */
  current_page: Scalars['Int']['output'];
  /** List of items on the current page */
  data: Array<TermInterface>;
  /** Number of the first item returned */
  from?: Maybe<Scalars['Int']['output']>;
  /** Determines if cursor has more pages after the current page */
  has_more_pages: Scalars['Boolean']['output'];
  /** The last page (number of pages) */
  last_page: Scalars['Int']['output'];
  /** Number of items returned per page */
  per_page: Scalars['Int']['output'];
  /** Number of the last item returned */
  to?: Maybe<Scalars['Int']['output']>;
  /** Number of total items selected by the query */
  total: Scalars['Int']['output'];
};

export type Term_Categories_Category = TermInterface & {
  __typename?: 'Term_Categories_Category';
  author?: Maybe<User>;
  content?: Maybe<Scalars['String']['output']>;
  edit_url: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  permalink?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  taxonomy: Taxonomy;
  template?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  uri?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};


export type Term_Categories_CategoryContentArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};

export type Term_Tags_Tag = TermInterface & {
  __typename?: 'Term_Tags_Tag';
  description?: Maybe<Scalars['String']['output']>;
  edit_url: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  permalink?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  taxonomy: Taxonomy;
  title: Scalars['String']['output'];
  uri?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};


export type Term_Tags_TagDescriptionArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<AssetInterface>;
  edit_url?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Maybe<UserGroup>>>;
  id?: Maybe<Scalars['String']['output']>;
  initials?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<Array<Maybe<Role>>>;
};

export type UserGroup = {
  __typename?: 'UserGroup';
  handle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type AllCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCategoriesQuery = { __typename?: 'Query', terms?: { __typename?: 'TermInterfacePagination', data: Array<{ __typename?: 'Term_Categories_Category', id: string, title: string, slug: string, content?: string | null } | { __typename?: 'Term_Tags_Tag' }> } | null };

export type AllEquipmentQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type AllEquipmentQuery = { __typename?: 'Query', entries?: { __typename?: 'EntryInterfacePagination', data: Array<{ __typename?: 'Entry_Categories_Category' } | { __typename?: 'Entry_Equipment_Equipment', id: string, title: string, slug: string, description: string, care_instructions?: string | null, usage_tips?: string | null, featured_image: { __typename?: 'Asset_Assets', url?: string | null } | { __typename?: 'Asset_Images', url?: string | null }, gallery?: Array<{ __typename?: 'Asset_Assets', url?: string | null } | { __typename?: 'Asset_Images', url?: string | null } | null> | null, category: { __typename?: 'LabeledValue', value?: string | null, label?: string | null }, difficulty?: { __typename?: 'LabeledValue', value?: string | null, label?: string | null } | null, price_range?: { __typename?: 'LabeledValue', value?: string | null, label?: string | null } | null, retailers?: Array<{ __typename?: 'Set_Retailers_Retailer', name?: string | null, url?: string | null, notes?: string | null } | null> | null, product_recommendations?: Array<{ __typename?: 'Set_ProductRecommendations_Product', name?: string | null, price?: string | null, features?: string | null } | null> | null, related_equipment?: Array<{ __typename?: 'Entry_Categories_Category', title: string, slug: string } | { __typename?: 'Entry_Equipment_Equipment', title: string, slug: string } | { __typename?: 'Entry_Pages_Page', title: string, slug: string } | { __typename?: 'Entry_Recipes_Recipe', title: string, slug: string } | { __typename?: 'Entry_Techniques_Techniques', title: string, slug: string } | null> | null } | { __typename?: 'Entry_Pages_Page' } | { __typename?: 'Entry_Recipes_Recipe' } | { __typename?: 'Entry_Techniques_Techniques' }> } | null };

export type AllRecipesQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type AllRecipesQuery = { __typename?: 'Query', entries?: { __typename?: 'EntryInterfacePagination', total: number, per_page: number, current_page: number, last_page: number, has_more_pages: boolean, data: Array<{ __typename?: 'Entry_Categories_Category' } | { __typename?: 'Entry_Equipment_Equipment' } | { __typename?: 'Entry_Pages_Page' } | { __typename?: 'Entry_Recipes_Recipe', id: string, title: string, slug: string, description: string, cook_time: string, prep_time: string, servings?: number | null, published: boolean, featured_image: { __typename?: 'Asset_Assets', url?: string | null } | { __typename?: 'Asset_Images', url?: string | null }, difficulty: { __typename?: 'LabeledValue', value?: string | null, label?: string | null }, category: Array<{ __typename?: 'Term_Categories_Category', title: string, slug: string } | { __typename?: 'Term_Tags_Tag', title: string, slug: string } | null>, tags?: Array<{ __typename?: 'Term_Categories_Category', title: string, slug: string } | { __typename?: 'Term_Tags_Tag', title: string, slug: string } | null> | null } | { __typename?: 'Entry_Techniques_Techniques' }> } | null };

export type RecipeBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type RecipeBySlugQuery = { __typename?: 'Query', entry?: { __typename?: 'Entry_Categories_Category' } | { __typename?: 'Entry_Equipment_Equipment' } | { __typename?: 'Entry_Pages_Page' } | { __typename?: 'Entry_Recipes_Recipe', id: string, title: string, slug: string, description: string, cook_time: string, prep_time: string, servings?: number | null, published: boolean, featured_image: { __typename?: 'Asset_Assets', url?: string | null } | { __typename?: 'Asset_Images', url?: string | null }, difficulty: { __typename?: 'LabeledValue', value?: string | null, label?: string | null }, wine_pairings?: Array<{ __typename?: 'Set_WinePairings_Wine', wine_name?: string | null, wine_type?: string | null, wine_region?: string | null, wine_description?: string | null, wine_image?: { __typename?: 'Asset_Assets', url?: string | null } | { __typename?: 'Asset_Images', url?: string | null } | null } | null> | null, complementary_dishes?: Array<{ __typename?: 'GridItem_ComplementaryDishes', pairing_note?: string | null, recipe?: { __typename?: 'Entry_Categories_Category' } | { __typename?: 'Entry_Equipment_Equipment' } | { __typename?: 'Entry_Pages_Page' } | { __typename?: 'Entry_Recipes_Recipe', cook_time: string, prep_time: string, description: string, title: string, featured_image: { __typename?: 'Asset_Assets', url?: string | null } | { __typename?: 'Asset_Images', url?: string | null } } | { __typename?: 'Entry_Techniques_Techniques' } | null } | null> | null, equipment_needed?: Array<{ __typename?: 'GridItem_EquipmentNeeded', note?: string | null, equipment?: { __typename?: 'Entry_Categories_Category', title: string, slug: string } | { __typename?: 'Entry_Equipment_Equipment', title: string, slug: string } | { __typename?: 'Entry_Pages_Page', title: string, slug: string } | { __typename?: 'Entry_Recipes_Recipe', title: string, slug: string } | { __typename?: 'Entry_Techniques_Techniques', title: string, slug: string } | null } | null> | null, ingredients?: Array<{ __typename?: 'GridItem_Ingredients', amount?: string | null, unit?: string | null, notes?: string | null, ingredient: string } | null> | null, instructions?: Array<{ __typename?: 'Set_Instructions_Step', title: string, description: string, image?: { __typename?: 'Asset_Assets', url?: string | null } | { __typename?: 'Asset_Images', url?: string | null } | null, timer?: { __typename?: 'Group_Instructions_Timer', minutes?: number | null, seconds?: number | null, notes?: string | null } | null } | null> | null, category: Array<{ __typename?: 'Term_Categories_Category', title: string, slug: string } | { __typename?: 'Term_Tags_Tag', title: string, slug: string } | null>, tags?: Array<{ __typename?: 'Term_Categories_Category', title: string, slug: string } | { __typename?: 'Term_Tags_Tag', title: string, slug: string } | null> | null } | { __typename?: 'Entry_Techniques_Techniques' } | null };

export type SiteSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type SiteSettingsQuery = { __typename?: 'Query', globalSet?: { __typename?: 'GlobalSet_NewsletterSettings' } | { __typename?: 'GlobalSet_SiteSettings', site_name: string, site_description: string, email?: string | null, phone?: string | null, address?: string | null, logo: { __typename?: 'Asset_Assets', url?: string | null } | { __typename?: 'Asset_Images', url?: string | null }, favicon: { __typename?: 'Asset_Assets', url?: string | null } | { __typename?: 'Asset_Images', url?: string | null }, social_media_links?: Array<{ __typename?: 'GridItem_SocialMediaLinks', url: string, platform: { __typename?: 'LabeledValue', value?: string | null, label?: string | null } } | null> | null } | null };

export type AllTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTagsQuery = { __typename?: 'Query', terms?: { __typename?: 'TermInterfacePagination', data: Array<{ __typename?: 'Term_Categories_Category' } | { __typename?: 'Term_Tags_Tag', id: string, title: string, slug: string, description?: string | null }> } | null };

export type AllTechniquesQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type AllTechniquesQuery = { __typename?: 'Query', entries?: { __typename?: 'EntryInterfacePagination', data: Array<{ __typename?: 'Entry_Categories_Category' } | { __typename?: 'Entry_Equipment_Equipment' } | { __typename?: 'Entry_Pages_Page' } | { __typename?: 'Entry_Recipes_Recipe' } | { __typename?: 'Entry_Techniques_Techniques', id: string, title: string, slug: string, description: string, duration: string, image: { __typename?: 'Asset_Assets', url?: string | null } | { __typename?: 'Asset_Images', url?: string | null }, difficulty_level: { __typename?: 'LabeledValue', value?: string | null, label?: string | null }, steps?: Array<{ __typename?: 'Set_Steps_Step', title: string, description: string, timer?: string | null, pro_tips?: Array<string | null> | null, image?: { __typename?: 'Asset_Assets', url?: string | null } | { __typename?: 'Asset_Images', url?: string | null } | null } | null> | null, categories?: Array<{ __typename?: 'Term_Categories_Category', title: string, slug: string } | { __typename?: 'Term_Tags_Tag', title: string, slug: string } | null> | null, tags?: Array<{ __typename?: 'Term_Categories_Category', title: string, slug: string } | { __typename?: 'Term_Tags_Tag', title: string, slug: string } | null> | null }> } | null };


export const AllCategoriesDocument = gql`
    query AllCategories {
  terms(taxonomy: ["categories"]) {
    data {
      ... on Term_Categories_Category {
        id
        title
        slug
        content
      }
    }
  }
}
    `;
export const AllEquipmentDocument = gql`
    query AllEquipment($page: Int = 1, $limit: Int = 10) {
  entries(collection: ["equipment"], page: $page, limit: $limit) {
    data {
      ... on Entry_Equipment_Equipment {
        id
        title
        slug
        description
        featured_image {
          url
        }
        gallery {
          url
        }
        category {
          value
          label
        }
        difficulty {
          value
          label
        }
        care_instructions
        usage_tips
        price_range {
          value
          label
        }
        retailers {
          ... on Set_Retailers_Retailer {
            name
            url
            notes
          }
        }
        product_recommendations {
          ... on Set_ProductRecommendations_Product {
            name
            price
            features
          }
        }
        related_equipment {
          title
          slug
        }
      }
    }
  }
}
    `;
export const AllRecipesDocument = gql`
    query AllRecipes($page: Int = 1, $limit: Int = 10) {
  entries(collection: ["recipes"], page: $page, limit: $limit) {
    data {
      ... on Entry_Recipes_Recipe {
        id
        title
        slug
        description
        featured_image {
          url
        }
        cook_time
        prep_time
        servings
        difficulty {
          value
          label
        }
        category {
          title
          slug
        }
        tags {
          title
          slug
        }
        published
      }
    }
    total
    per_page
    current_page
    last_page
    has_more_pages
  }
}
    `;
export const RecipeBySlugDocument = gql`
    query RecipeBySlug($slug: String!) {
  entry(collection: "recipes", slug: $slug) {
    ... on Entry_Recipes_Recipe {
      id
      title
      slug
      description
      featured_image {
        url
      }
      cook_time
      prep_time
      servings
      difficulty {
        value
        label
      }
      wine_pairings {
        ... on Set_WinePairings_Wine {
          wine_name
          wine_type
          wine_region
          wine_description
          wine_image {
            url
          }
        }
      }
      complementary_dishes {
        pairing_note
        recipe {
          ... on Entry_Recipes_Recipe {
            cook_time
            prep_time
            description
            title
            featured_image {
              url
            }
          }
        }
      }
      equipment_needed {
        equipment {
          title
          slug
        }
        note
      }
      ingredients {
        amount
        unit
        notes
        ingredient
      }
      instructions {
        ... on Set_Instructions_Step {
          title
          description
          image {
            url
          }
          timer {
            minutes
            seconds
            notes
          }
        }
      }
      category {
        title
        slug
      }
      tags {
        title
        slug
      }
      published
    }
  }
}
    `;
export const SiteSettingsDocument = gql`
    query SiteSettings {
  globalSet(handle: "site_settings") {
    ... on GlobalSet_SiteSettings {
      site_name
      site_description
      logo {
        url
      }
      favicon {
        url
      }
      social_media_links {
        platform {
          value
          label
        }
        url
      }
      email
      phone
      address
    }
  }
}
    `;
export const AllTagsDocument = gql`
    query AllTags {
  terms(taxonomy: ["tags"]) {
    data {
      ... on Term_Tags_Tag {
        id
        title
        slug
        description
      }
    }
  }
}
    `;
export const AllTechniquesDocument = gql`
    query AllTechniques($page: Int = 1, $limit: Int = 10) {
  entries(collection: ["techniques"], page: $page, limit: $limit) {
    data {
      ... on Entry_Techniques_Techniques {
        id
        title
        slug
        description
        image {
          url
        }
        difficulty_level {
          value
          label
        }
        duration
        steps {
          ... on Set_Steps_Step {
            title
            description
            image {
              url
            }
            timer
            pro_tips
          }
        }
        categories {
          title
          slug
        }
        tags {
          title
          slug
        }
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();
const AllCategoriesDocumentString = print(AllCategoriesDocument);
const AllEquipmentDocumentString = print(AllEquipmentDocument);
const AllRecipesDocumentString = print(AllRecipesDocument);
const RecipeBySlugDocumentString = print(RecipeBySlugDocument);
const SiteSettingsDocumentString = print(SiteSettingsDocument);
const AllTagsDocumentString = print(AllTagsDocument);
const AllTechniquesDocumentString = print(AllTechniquesDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    AllCategories(variables?: AllCategoriesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: AllCategoriesQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AllCategoriesQuery>(AllCategoriesDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AllCategories', 'query', variables);
    },
    AllEquipment(variables?: AllEquipmentQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: AllEquipmentQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AllEquipmentQuery>(AllEquipmentDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AllEquipment', 'query', variables);
    },
    AllRecipes(variables?: AllRecipesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: AllRecipesQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AllRecipesQuery>(AllRecipesDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AllRecipes', 'query', variables);
    },
    RecipeBySlug(variables: RecipeBySlugQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: RecipeBySlugQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<RecipeBySlugQuery>(RecipeBySlugDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'RecipeBySlug', 'query', variables);
    },
    SiteSettings(variables?: SiteSettingsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: SiteSettingsQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<SiteSettingsQuery>(SiteSettingsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SiteSettings', 'query', variables);
    },
    AllTags(variables?: AllTagsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: AllTagsQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AllTagsQuery>(AllTagsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AllTags', 'query', variables);
    },
    AllTechniques(variables?: AllTechniquesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: AllTechniquesQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AllTechniquesQuery>(AllTechniquesDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AllTechniques', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;