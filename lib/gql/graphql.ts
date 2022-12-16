/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Ad = {
  __typename?: 'Ad';
  Asset?: Maybe<UploadFileEntityResponse>;
  Expiry?: Maybe<Scalars['DateTime']>;
  Name?: Maybe<Scalars['String']>;
  Type?: Maybe<Enum_Ad_Type>;
  URL?: Maybe<Scalars['String']>;
  apps?: Maybe<AppRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  sponsor?: Maybe<SponsorEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type AdAppsArgs = {
  filters?: InputMaybe<AppFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type AdEntity = {
  __typename?: 'AdEntity';
  attributes?: Maybe<Ad>;
  id?: Maybe<Scalars['ID']>;
};

export type AdEntityResponse = {
  __typename?: 'AdEntityResponse';
  data?: Maybe<AdEntity>;
};

export type AdEntityResponseCollection = {
  __typename?: 'AdEntityResponseCollection';
  data: Array<AdEntity>;
  meta: ResponseCollectionMeta;
};

export type AdFiltersInput = {
  Expiry?: InputMaybe<DateTimeFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Type?: InputMaybe<StringFilterInput>;
  URL?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<AdFiltersInput>>>;
  apps?: InputMaybe<AppFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isActive?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<AdFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AdFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  sponsor?: InputMaybe<SponsorFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type AdInput = {
  Asset?: InputMaybe<Scalars['ID']>;
  Expiry?: InputMaybe<Scalars['DateTime']>;
  Name?: InputMaybe<Scalars['String']>;
  Type?: InputMaybe<Enum_Ad_Type>;
  URL?: InputMaybe<Scalars['String']>;
  apps?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  sponsor?: InputMaybe<Scalars['ID']>;
};

export type AdRelationResponseCollection = {
  __typename?: 'AdRelationResponseCollection';
  data: Array<AdEntity>;
};

export type App = {
  __typename?: 'App';
  Description?: Maybe<Scalars['String']>;
  FeaturedImage?: Maybe<UploadFileEntityResponse>;
  Name?: Maybe<Scalars['String']>;
  URL?: Maybe<Scalars['String']>;
  ads?: Maybe<AdRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  devURL?: Maybe<Scalars['String']>;
  events?: Maybe<EventRelationResponseCollection>;
  news_categories?: Maybe<NewsCategoryRelationResponseCollection>;
  news_posts?: Maybe<PostRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  sponsor_packages?: Maybe<SponsorPackageRelationResponseCollection>;
  sponsors?: Maybe<SponsorRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type AppAdsArgs = {
  filters?: InputMaybe<AdFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type AppEventsArgs = {
  filters?: InputMaybe<EventFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type AppNews_CategoriesArgs = {
  filters?: InputMaybe<NewsCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type AppNews_PostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type AppSponsor_PackagesArgs = {
  filters?: InputMaybe<SponsorPackageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type AppSponsorsArgs = {
  filters?: InputMaybe<SponsorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type AppEntity = {
  __typename?: 'AppEntity';
  attributes?: Maybe<App>;
  id?: Maybe<Scalars['ID']>;
};

export type AppEntityResponse = {
  __typename?: 'AppEntityResponse';
  data?: Maybe<AppEntity>;
};

export type AppEntityResponseCollection = {
  __typename?: 'AppEntityResponseCollection';
  data: Array<AppEntity>;
  meta: ResponseCollectionMeta;
};

export type AppFiltersInput = {
  Description?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  URL?: InputMaybe<StringFilterInput>;
  ads?: InputMaybe<AdFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<AppFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  devURL?: InputMaybe<StringFilterInput>;
  events?: InputMaybe<EventFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  news_categories?: InputMaybe<NewsCategoryFiltersInput>;
  news_posts?: InputMaybe<PostFiltersInput>;
  not?: InputMaybe<AppFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AppFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  sponsor_packages?: InputMaybe<SponsorPackageFiltersInput>;
  sponsors?: InputMaybe<SponsorFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type AppInput = {
  Description?: InputMaybe<Scalars['String']>;
  FeaturedImage?: InputMaybe<Scalars['ID']>;
  Name?: InputMaybe<Scalars['String']>;
  URL?: InputMaybe<Scalars['String']>;
  ads?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  devURL?: InputMaybe<Scalars['String']>;
  events?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  news_categories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  news_posts?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  sponsor_packages?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  sponsors?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type AppRelationResponseCollection = {
  __typename?: 'AppRelationResponseCollection';
  data: Array<AppEntity>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  eqi?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  eqi?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export enum Enum_Ad_Type {
  HorizontalBanner = 'Horizontal_Banner',
  Skyscraper = 'Skyscraper'
}

export enum Enum_Sponsorpackage_Level {
  Tier_1 = 'Tier_1',
  Tier_2 = 'Tier_2',
  Tier_3 = 'Tier_3'
}

export type Event = {
  __typename?: 'Event';
  Cover?: Maybe<UploadFileEntityResponse>;
  Description?: Maybe<Scalars['String']>;
  EndDate?: Maybe<Scalars['DateTime']>;
  StartDate?: Maybe<Scalars['DateTime']>;
  Title?: Maybe<Scalars['String']>;
  URL?: Maybe<Scalars['String']>;
  apps?: Maybe<AppRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  libera_category?: Maybe<LiberaCategoryEntityResponse>;
  nominations?: Maybe<NominationRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  sponsor_packages?: Maybe<SponsorPackageRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type EventAppsArgs = {
  filters?: InputMaybe<AppFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type EventNominationsArgs = {
  filters?: InputMaybe<NominationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type EventSponsor_PackagesArgs = {
  filters?: InputMaybe<SponsorPackageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type EventEntity = {
  __typename?: 'EventEntity';
  attributes?: Maybe<Event>;
  id?: Maybe<Scalars['ID']>;
};

export type EventEntityResponse = {
  __typename?: 'EventEntityResponse';
  data?: Maybe<EventEntity>;
};

export type EventEntityResponseCollection = {
  __typename?: 'EventEntityResponseCollection';
  data: Array<EventEntity>;
  meta: ResponseCollectionMeta;
};

export type EventFiltersInput = {
  Description?: InputMaybe<StringFilterInput>;
  EndDate?: InputMaybe<DateTimeFilterInput>;
  StartDate?: InputMaybe<DateTimeFilterInput>;
  Title?: InputMaybe<StringFilterInput>;
  URL?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<EventFiltersInput>>>;
  apps?: InputMaybe<AppFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  libera_category?: InputMaybe<LiberaCategoryFiltersInput>;
  nominations?: InputMaybe<NominationFiltersInput>;
  not?: InputMaybe<EventFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EventFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  sponsor_packages?: InputMaybe<SponsorPackageFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type EventInput = {
  Cover?: InputMaybe<Scalars['ID']>;
  Description?: InputMaybe<Scalars['String']>;
  EndDate?: InputMaybe<Scalars['DateTime']>;
  StartDate?: InputMaybe<Scalars['DateTime']>;
  Title?: InputMaybe<Scalars['String']>;
  URL?: InputMaybe<Scalars['String']>;
  apps?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  libera_category?: InputMaybe<Scalars['ID']>;
  nominations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  sponsor_packages?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type EventRelationResponseCollection = {
  __typename?: 'EventRelationResponseCollection';
  data: Array<EventEntity>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  eqi?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type GenericMorph = Ad | App | Event | I18NLocale | IndieWeekSponsorFooter | LiberaCategory | LiberaSponsorFooter | NewsCategory | Nomination | Post | RecordLabel | Sponsor | SponsorPackage | Tag | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  eqi?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IndieWeekSponsorFooter = {
  __typename?: 'IndieWeekSponsorFooter';
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  sponsors?: Maybe<SponsorRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type IndieWeekSponsorFooterSponsorsArgs = {
  filters?: InputMaybe<SponsorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type IndieWeekSponsorFooterEntity = {
  __typename?: 'IndieWeekSponsorFooterEntity';
  attributes?: Maybe<IndieWeekSponsorFooter>;
  id?: Maybe<Scalars['ID']>;
};

export type IndieWeekSponsorFooterEntityResponse = {
  __typename?: 'IndieWeekSponsorFooterEntityResponse';
  data?: Maybe<IndieWeekSponsorFooterEntity>;
};

export type IndieWeekSponsorFooterInput = {
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  sponsors?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  eqi?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  eqi?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type LiberaCategory = {
  __typename?: 'LiberaCategory';
  Description?: Maybe<Scalars['String']>;
  Name?: Maybe<Scalars['String']>;
  Rules?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  events?: Maybe<EventRelationResponseCollection>;
  nomination?: Maybe<NominationEntityResponse>;
  nominations?: Maybe<NominationRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type LiberaCategoryEventsArgs = {
  filters?: InputMaybe<EventFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type LiberaCategoryNominationsArgs = {
  filters?: InputMaybe<NominationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type LiberaCategoryEntity = {
  __typename?: 'LiberaCategoryEntity';
  attributes?: Maybe<LiberaCategory>;
  id?: Maybe<Scalars['ID']>;
};

export type LiberaCategoryEntityResponse = {
  __typename?: 'LiberaCategoryEntityResponse';
  data?: Maybe<LiberaCategoryEntity>;
};

export type LiberaCategoryEntityResponseCollection = {
  __typename?: 'LiberaCategoryEntityResponseCollection';
  data: Array<LiberaCategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type LiberaCategoryFiltersInput = {
  Description?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Rules?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<LiberaCategoryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  events?: InputMaybe<EventFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  nomination?: InputMaybe<NominationFiltersInput>;
  nominations?: InputMaybe<NominationFiltersInput>;
  not?: InputMaybe<LiberaCategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<LiberaCategoryFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type LiberaCategoryInput = {
  Description?: InputMaybe<Scalars['String']>;
  Name?: InputMaybe<Scalars['String']>;
  Rules?: InputMaybe<Scalars['String']>;
  events?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  nomination?: InputMaybe<Scalars['ID']>;
  nominations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type LiberaCategoryRelationResponseCollection = {
  __typename?: 'LiberaCategoryRelationResponseCollection';
  data: Array<LiberaCategoryEntity>;
};

export type LiberaSponsorFooter = {
  __typename?: 'LiberaSponsorFooter';
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  sponsors?: Maybe<SponsorRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type LiberaSponsorFooterSponsorsArgs = {
  filters?: InputMaybe<SponsorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type LiberaSponsorFooterEntity = {
  __typename?: 'LiberaSponsorFooterEntity';
  attributes?: Maybe<LiberaSponsorFooter>;
  id?: Maybe<Scalars['ID']>;
};

export type LiberaSponsorFooterEntityResponse = {
  __typename?: 'LiberaSponsorFooterEntityResponse';
  data?: Maybe<LiberaSponsorFooterEntity>;
};

export type LiberaSponsorFooterInput = {
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  sponsors?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createAd?: Maybe<AdEntityResponse>;
  createApp?: Maybe<AppEntityResponse>;
  createEvent?: Maybe<EventEntityResponse>;
  createLiberaCategory?: Maybe<LiberaCategoryEntityResponse>;
  createNewsCategory?: Maybe<NewsCategoryEntityResponse>;
  createNomination?: Maybe<NominationEntityResponse>;
  createPost?: Maybe<PostEntityResponse>;
  createRecordLabel?: Maybe<RecordLabelEntityResponse>;
  createSponsor?: Maybe<SponsorEntityResponse>;
  createSponsorPackage?: Maybe<SponsorPackageEntityResponse>;
  createTag?: Maybe<TagEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteAd?: Maybe<AdEntityResponse>;
  deleteApp?: Maybe<AppEntityResponse>;
  deleteEvent?: Maybe<EventEntityResponse>;
  deleteIndieWeekSponsorFooter?: Maybe<IndieWeekSponsorFooterEntityResponse>;
  deleteLiberaCategory?: Maybe<LiberaCategoryEntityResponse>;
  deleteLiberaSponsorFooter?: Maybe<LiberaSponsorFooterEntityResponse>;
  deleteNewsCategory?: Maybe<NewsCategoryEntityResponse>;
  deleteNomination?: Maybe<NominationEntityResponse>;
  deletePost?: Maybe<PostEntityResponse>;
  deleteRecordLabel?: Maybe<RecordLabelEntityResponse>;
  deleteSponsor?: Maybe<SponsorEntityResponse>;
  deleteSponsorPackage?: Maybe<SponsorPackageEntityResponse>;
  deleteTag?: Maybe<TagEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAd?: Maybe<AdEntityResponse>;
  updateApp?: Maybe<AppEntityResponse>;
  updateEvent?: Maybe<EventEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateIndieWeekSponsorFooter?: Maybe<IndieWeekSponsorFooterEntityResponse>;
  updateLiberaCategory?: Maybe<LiberaCategoryEntityResponse>;
  updateLiberaSponsorFooter?: Maybe<LiberaSponsorFooterEntityResponse>;
  updateNewsCategory?: Maybe<NewsCategoryEntityResponse>;
  updateNomination?: Maybe<NominationEntityResponse>;
  updatePost?: Maybe<PostEntityResponse>;
  updateRecordLabel?: Maybe<RecordLabelEntityResponse>;
  updateSponsor?: Maybe<SponsorEntityResponse>;
  updateSponsorPackage?: Maybe<SponsorPackageEntityResponse>;
  updateTag?: Maybe<TagEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationCreateAdArgs = {
  data: AdInput;
};


export type MutationCreateAppArgs = {
  data: AppInput;
};


export type MutationCreateEventArgs = {
  data: EventInput;
};


export type MutationCreateLiberaCategoryArgs = {
  data: LiberaCategoryInput;
};


export type MutationCreateNewsCategoryArgs = {
  data: NewsCategoryInput;
};


export type MutationCreateNominationArgs = {
  data: NominationInput;
};


export type MutationCreatePostArgs = {
  data: PostInput;
};


export type MutationCreateRecordLabelArgs = {
  data: RecordLabelInput;
};


export type MutationCreateSponsorArgs = {
  data: SponsorInput;
};


export type MutationCreateSponsorPackageArgs = {
  data: SponsorPackageInput;
};


export type MutationCreateTagArgs = {
  data: TagInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteAdArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteAppArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteEventArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteLiberaCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteNewsCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteNominationArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePostArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteRecordLabelArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSponsorArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSponsorPackageArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTagArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateAdArgs = {
  data: AdInput;
  id: Scalars['ID'];
};


export type MutationUpdateAppArgs = {
  data: AppInput;
  id: Scalars['ID'];
};


export type MutationUpdateEventArgs = {
  data: EventInput;
  id: Scalars['ID'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateIndieWeekSponsorFooterArgs = {
  data: IndieWeekSponsorFooterInput;
};


export type MutationUpdateLiberaCategoryArgs = {
  data: LiberaCategoryInput;
  id: Scalars['ID'];
};


export type MutationUpdateLiberaSponsorFooterArgs = {
  data: LiberaSponsorFooterInput;
};


export type MutationUpdateNewsCategoryArgs = {
  data: NewsCategoryInput;
  id: Scalars['ID'];
};


export type MutationUpdateNominationArgs = {
  data: NominationInput;
  id: Scalars['ID'];
};


export type MutationUpdatePostArgs = {
  data: PostInput;
  id: Scalars['ID'];
};


export type MutationUpdateRecordLabelArgs = {
  data: RecordLabelInput;
  id: Scalars['ID'];
};


export type MutationUpdateSponsorArgs = {
  data: SponsorInput;
  id: Scalars['ID'];
};


export type MutationUpdateSponsorPackageArgs = {
  data: SponsorPackageInput;
  id: Scalars['ID'];
};


export type MutationUpdateTagArgs = {
  data: TagInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type NewsCategory = {
  __typename?: 'NewsCategory';
  Description?: Maybe<Scalars['String']>;
  Name?: Maybe<Scalars['String']>;
  apps?: Maybe<AppRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type NewsCategoryAppsArgs = {
  filters?: InputMaybe<AppFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsCategoryEntity = {
  __typename?: 'NewsCategoryEntity';
  attributes?: Maybe<NewsCategory>;
  id?: Maybe<Scalars['ID']>;
};

export type NewsCategoryEntityResponse = {
  __typename?: 'NewsCategoryEntityResponse';
  data?: Maybe<NewsCategoryEntity>;
};

export type NewsCategoryEntityResponseCollection = {
  __typename?: 'NewsCategoryEntityResponseCollection';
  data: Array<NewsCategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type NewsCategoryFiltersInput = {
  Description?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<NewsCategoryFiltersInput>>>;
  apps?: InputMaybe<AppFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<NewsCategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<NewsCategoryFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type NewsCategoryInput = {
  Description?: InputMaybe<Scalars['String']>;
  Name?: InputMaybe<Scalars['String']>;
  apps?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type NewsCategoryRelationResponseCollection = {
  __typename?: 'NewsCategoryRelationResponseCollection';
  data: Array<NewsCategoryEntity>;
};

export type Nomination = {
  __typename?: 'Nomination';
  Artwork?: Maybe<UploadFileEntityResponse>;
  Description?: Maybe<Scalars['String']>;
  Name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  event?: Maybe<EventEntityResponse>;
  isWinner?: Maybe<Scalars['Boolean']>;
  libera_categories?: Maybe<LiberaCategoryRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  record_labels?: Maybe<RecordLabelRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type NominationLibera_CategoriesArgs = {
  filters?: InputMaybe<LiberaCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type NominationRecord_LabelsArgs = {
  filters?: InputMaybe<RecordLabelFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NominationEntity = {
  __typename?: 'NominationEntity';
  attributes?: Maybe<Nomination>;
  id?: Maybe<Scalars['ID']>;
};

export type NominationEntityResponse = {
  __typename?: 'NominationEntityResponse';
  data?: Maybe<NominationEntity>;
};

export type NominationEntityResponseCollection = {
  __typename?: 'NominationEntityResponseCollection';
  data: Array<NominationEntity>;
  meta: ResponseCollectionMeta;
};

export type NominationFiltersInput = {
  Description?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<NominationFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  event?: InputMaybe<EventFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  isWinner?: InputMaybe<BooleanFilterInput>;
  libera_categories?: InputMaybe<LiberaCategoryFiltersInput>;
  not?: InputMaybe<NominationFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<NominationFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  record_labels?: InputMaybe<RecordLabelFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type NominationInput = {
  Artwork?: InputMaybe<Scalars['ID']>;
  Description?: InputMaybe<Scalars['String']>;
  Name?: InputMaybe<Scalars['String']>;
  event?: InputMaybe<Scalars['ID']>;
  isWinner?: InputMaybe<Scalars['Boolean']>;
  libera_categories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  record_labels?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type NominationRelationResponseCollection = {
  __typename?: 'NominationRelationResponseCollection';
  data: Array<NominationEntity>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export type Post = {
  __typename?: 'Post';
  Body?: Maybe<Scalars['String']>;
  Date?: Maybe<Scalars['DateTime']>;
  Excerpt?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  Title?: Maybe<Scalars['String']>;
  app?: Maybe<AppEntityResponse>;
  coverImage?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  news_categories?: Maybe<NewsCategoryRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  tags?: Maybe<TagRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type PostNews_CategoriesArgs = {
  filters?: InputMaybe<NewsCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PostTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PostEntity = {
  __typename?: 'PostEntity';
  attributes?: Maybe<Post>;
  id?: Maybe<Scalars['ID']>;
};

export type PostEntityResponse = {
  __typename?: 'PostEntityResponse';
  data?: Maybe<PostEntity>;
};

export type PostEntityResponseCollection = {
  __typename?: 'PostEntityResponseCollection';
  data: Array<PostEntity>;
  meta: ResponseCollectionMeta;
};

export type PostFiltersInput = {
  Body?: InputMaybe<StringFilterInput>;
  Date?: InputMaybe<DateTimeFilterInput>;
  Excerpt?: InputMaybe<StringFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  Title?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<PostFiltersInput>>>;
  app?: InputMaybe<AppFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  news_categories?: InputMaybe<NewsCategoryFiltersInput>;
  not?: InputMaybe<PostFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PostFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  tags?: InputMaybe<TagFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PostInput = {
  Body?: InputMaybe<Scalars['String']>;
  Date?: InputMaybe<Scalars['DateTime']>;
  Excerpt?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  Title?: InputMaybe<Scalars['String']>;
  app?: InputMaybe<Scalars['ID']>;
  coverImage?: InputMaybe<Scalars['ID']>;
  news_categories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type PostRelationResponseCollection = {
  __typename?: 'PostRelationResponseCollection';
  data: Array<PostEntity>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  ad?: Maybe<AdEntityResponse>;
  ads?: Maybe<AdEntityResponseCollection>;
  app?: Maybe<AppEntityResponse>;
  apps?: Maybe<AppEntityResponseCollection>;
  event?: Maybe<EventEntityResponse>;
  events?: Maybe<EventEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  indieWeekSponsorFooter?: Maybe<IndieWeekSponsorFooterEntityResponse>;
  liberaCategories?: Maybe<LiberaCategoryEntityResponseCollection>;
  liberaCategory?: Maybe<LiberaCategoryEntityResponse>;
  liberaSponsorFooter?: Maybe<LiberaSponsorFooterEntityResponse>;
  me?: Maybe<UsersPermissionsMe>;
  newsCategories?: Maybe<NewsCategoryEntityResponseCollection>;
  newsCategory?: Maybe<NewsCategoryEntityResponse>;
  nomination?: Maybe<NominationEntityResponse>;
  nominations?: Maybe<NominationEntityResponseCollection>;
  post?: Maybe<PostEntityResponse>;
  posts?: Maybe<PostEntityResponseCollection>;
  recordLabel?: Maybe<RecordLabelEntityResponse>;
  recordLabels?: Maybe<RecordLabelEntityResponseCollection>;
  sponsor?: Maybe<SponsorEntityResponse>;
  sponsorPackage?: Maybe<SponsorPackageEntityResponse>;
  sponsorPackages?: Maybe<SponsorPackageEntityResponseCollection>;
  sponsors?: Maybe<SponsorEntityResponseCollection>;
  tag?: Maybe<TagEntityResponse>;
  tags?: Maybe<TagEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryAdArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryAdsArgs = {
  filters?: InputMaybe<AdFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryAppArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryAppsArgs = {
  filters?: InputMaybe<AppFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryEventArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryEventsArgs = {
  filters?: InputMaybe<EventFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryIndieWeekSponsorFooterArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryLiberaCategoriesArgs = {
  filters?: InputMaybe<LiberaCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryLiberaCategoryArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryLiberaSponsorFooterArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryNewsCategoriesArgs = {
  filters?: InputMaybe<NewsCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryNewsCategoryArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryNominationArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryNominationsArgs = {
  filters?: InputMaybe<NominationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPostArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryPostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryRecordLabelArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryRecordLabelsArgs = {
  filters?: InputMaybe<RecordLabelFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySponsorArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QuerySponsorPackageArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QuerySponsorPackagesArgs = {
  filters?: InputMaybe<SponsorPackageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySponsorsArgs = {
  filters?: InputMaybe<SponsorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTagArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type RecordLabel = {
  __typename?: 'RecordLabel';
  Description?: Maybe<Scalars['String']>;
  Logo?: Maybe<UploadFileRelationResponseCollection>;
  Name?: Maybe<Scalars['String']>;
  Website?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type RecordLabelLogoArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type RecordLabelEntity = {
  __typename?: 'RecordLabelEntity';
  attributes?: Maybe<RecordLabel>;
  id?: Maybe<Scalars['ID']>;
};

export type RecordLabelEntityResponse = {
  __typename?: 'RecordLabelEntityResponse';
  data?: Maybe<RecordLabelEntity>;
};

export type RecordLabelEntityResponseCollection = {
  __typename?: 'RecordLabelEntityResponseCollection';
  data: Array<RecordLabelEntity>;
  meta: ResponseCollectionMeta;
};

export type RecordLabelFiltersInput = {
  Description?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Website?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<RecordLabelFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<RecordLabelFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<RecordLabelFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type RecordLabelInput = {
  Description?: InputMaybe<Scalars['String']>;
  Logo?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  Name?: InputMaybe<Scalars['String']>;
  Website?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type RecordLabelRelationResponseCollection = {
  __typename?: 'RecordLabelRelationResponseCollection';
  data: Array<RecordLabelEntity>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type Sponsor = {
  __typename?: 'Sponsor';
  Bio?: Maybe<Scalars['String']>;
  Logo?: Maybe<UploadFileEntityResponse>;
  Name?: Maybe<Scalars['String']>;
  URL?: Maybe<Scalars['String']>;
  ads?: Maybe<AdRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  sponsor_packages?: Maybe<SponsorPackageRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type SponsorAdsArgs = {
  filters?: InputMaybe<AdFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type SponsorSponsor_PackagesArgs = {
  filters?: InputMaybe<SponsorPackageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SponsorEntity = {
  __typename?: 'SponsorEntity';
  attributes?: Maybe<Sponsor>;
  id?: Maybe<Scalars['ID']>;
};

export type SponsorEntityResponse = {
  __typename?: 'SponsorEntityResponse';
  data?: Maybe<SponsorEntity>;
};

export type SponsorEntityResponseCollection = {
  __typename?: 'SponsorEntityResponseCollection';
  data: Array<SponsorEntity>;
  meta: ResponseCollectionMeta;
};

export type SponsorFiltersInput = {
  Bio?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  URL?: InputMaybe<StringFilterInput>;
  ads?: InputMaybe<AdFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<SponsorFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<SponsorFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SponsorFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  sponsor_packages?: InputMaybe<SponsorPackageFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SponsorInput = {
  Bio?: InputMaybe<Scalars['String']>;
  Logo?: InputMaybe<Scalars['ID']>;
  Name?: InputMaybe<Scalars['String']>;
  URL?: InputMaybe<Scalars['String']>;
  ads?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  sponsor_packages?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type SponsorPackage = {
  __typename?: 'SponsorPackage';
  Description?: Maybe<Scalars['String']>;
  Level?: Maybe<Enum_Sponsorpackage_Level>;
  Name?: Maybe<Scalars['String']>;
  apps?: Maybe<AppRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  event?: Maybe<EventEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type SponsorPackageAppsArgs = {
  filters?: InputMaybe<AppFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SponsorPackageEntity = {
  __typename?: 'SponsorPackageEntity';
  attributes?: Maybe<SponsorPackage>;
  id?: Maybe<Scalars['ID']>;
};

export type SponsorPackageEntityResponse = {
  __typename?: 'SponsorPackageEntityResponse';
  data?: Maybe<SponsorPackageEntity>;
};

export type SponsorPackageEntityResponseCollection = {
  __typename?: 'SponsorPackageEntityResponseCollection';
  data: Array<SponsorPackageEntity>;
  meta: ResponseCollectionMeta;
};

export type SponsorPackageFiltersInput = {
  Description?: InputMaybe<StringFilterInput>;
  Level?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<SponsorPackageFiltersInput>>>;
  apps?: InputMaybe<AppFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  event?: InputMaybe<EventFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<SponsorPackageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SponsorPackageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SponsorPackageInput = {
  Description?: InputMaybe<Scalars['String']>;
  Level?: InputMaybe<Enum_Sponsorpackage_Level>;
  Name?: InputMaybe<Scalars['String']>;
  apps?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  event?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type SponsorPackageRelationResponseCollection = {
  __typename?: 'SponsorPackageRelationResponseCollection';
  data: Array<SponsorPackageEntity>;
};

export type SponsorRelationResponseCollection = {
  __typename?: 'SponsorRelationResponseCollection';
  data: Array<SponsorEntity>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  eqi?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Tag = {
  __typename?: 'Tag';
  Name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TagEntity = {
  __typename?: 'TagEntity';
  attributes?: Maybe<Tag>;
  id?: Maybe<Scalars['ID']>;
};

export type TagEntityResponse = {
  __typename?: 'TagEntityResponse';
  data?: Maybe<TagEntity>;
};

export type TagEntityResponseCollection = {
  __typename?: 'TagEntityResponseCollection';
  data: Array<TagEntity>;
  meta: ResponseCollectionMeta;
};

export type TagFiltersInput = {
  Name?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<TagFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TagInput = {
  Name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TagRelationResponseCollection = {
  __typename?: 'TagRelationResponseCollection';
  data: Array<TagEntity>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<Scalars['ID']>;
  folderPath?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String'];
  pathId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
  pathId?: InputMaybe<Scalars['Int']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};
