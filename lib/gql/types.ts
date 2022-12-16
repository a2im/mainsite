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
  JSON: any;
  DateTime: any;
  Upload: any;
};

export type Pagination = {
  __typename?: 'Pagination';
  total: Scalars['Int'];
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  pageCount: Scalars['Int'];
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  not?: InputMaybe<IdFilterInput>;
  eq?: InputMaybe<Scalars['ID']>;
  eqi?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  startsWith?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  contains?: InputMaybe<Scalars['ID']>;
  notContains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  null?: InputMaybe<Scalars['Boolean']>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  not?: InputMaybe<BooleanFilterInput>;
  eq?: InputMaybe<Scalars['Boolean']>;
  eqi?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  contains?: InputMaybe<Scalars['Boolean']>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  not?: InputMaybe<StringFilterInput>;
  eq?: InputMaybe<Scalars['String']>;
  eqi?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  contains?: InputMaybe<Scalars['String']>;
  notContains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  null?: InputMaybe<Scalars['Boolean']>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  not?: InputMaybe<IntFilterInput>;
  eq?: InputMaybe<Scalars['Int']>;
  eqi?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  startsWith?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  contains?: InputMaybe<Scalars['Int']>;
  notContains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  null?: InputMaybe<Scalars['Boolean']>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  not?: InputMaybe<FloatFilterInput>;
  eq?: InputMaybe<Scalars['Float']>;
  eqi?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  startsWith?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  contains?: InputMaybe<Scalars['Float']>;
  notContains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  null?: InputMaybe<Scalars['Boolean']>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  not?: InputMaybe<DateTimeFilterInput>;
  eq?: InputMaybe<Scalars['DateTime']>;
  eqi?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  contains?: InputMaybe<Scalars['DateTime']>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  null?: InputMaybe<Scalars['Boolean']>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not?: InputMaybe<JsonFilterInput>;
  eq?: InputMaybe<Scalars['JSON']>;
  eqi?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  startsWith?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  contains?: InputMaybe<Scalars['JSON']>;
  notContains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  null?: InputMaybe<Scalars['Boolean']>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type UploadFileFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  alternativeText?: InputMaybe<StringFilterInput>;
  caption?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  not?: InputMaybe<UploadFileFiltersInput>;
};

export type UploadFileInput = {
  name?: InputMaybe<Scalars['String']>;
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  mime?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  folder?: InputMaybe<Scalars['ID']>;
  folderPath?: InputMaybe<Scalars['String']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<UploadFile>;
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

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolderFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  not?: InputMaybe<UploadFolderFiltersInput>;
};

export type UploadFolderInput = {
  name?: InputMaybe<Scalars['String']>;
  pathId?: InputMaybe<Scalars['Int']>;
  parent?: InputMaybe<Scalars['ID']>;
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  path?: InputMaybe<Scalars['String']>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  name: Scalars['String'];
  pathId: Scalars['Int'];
  parent?: Maybe<UploadFolderEntityResponse>;
  children?: Maybe<UploadFolderRelationResponseCollection>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  path: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
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
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<UploadFolder>;
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

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type I18NLocaleFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<I18NLocale>;
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

export type UsersPermissionsPermissionFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  action?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<UsersPermissionsPermission>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRoleFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<UsersPermissionsRole>;
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

export type UsersPermissionsUserFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  username?: InputMaybe<StringFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  password?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  blocked?: InputMaybe<BooleanFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsUserInput = {
  username?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  blocked?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<Scalars['ID']>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<UsersPermissionsUser>;
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

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export enum Enum_Ad_Type {
  HorizontalBanner = 'Horizontal_Banner',
  Skyscraper = 'Skyscraper'
}

export type AdFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  URL?: InputMaybe<StringFilterInput>;
  sponsor?: InputMaybe<SponsorFiltersInput>;
  Expiry?: InputMaybe<DateTimeFilterInput>;
  apps?: InputMaybe<AppFiltersInput>;
  Type?: InputMaybe<StringFilterInput>;
  isActive?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<AdFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<AdFiltersInput>>>;
  not?: InputMaybe<AdFiltersInput>;
};

export type AdInput = {
  Name?: InputMaybe<Scalars['String']>;
  URL?: InputMaybe<Scalars['String']>;
  Asset?: InputMaybe<Scalars['ID']>;
  sponsor?: InputMaybe<Scalars['ID']>;
  Expiry?: InputMaybe<Scalars['DateTime']>;
  apps?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  Type?: InputMaybe<Enum_Ad_Type>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type Ad = {
  __typename?: 'Ad';
  Name?: Maybe<Scalars['String']>;
  URL?: Maybe<Scalars['String']>;
  Asset?: Maybe<UploadFileEntityResponse>;
  sponsor?: Maybe<SponsorEntityResponse>;
  Expiry?: Maybe<Scalars['DateTime']>;
  apps?: Maybe<AppRelationResponseCollection>;
  Type?: Maybe<Enum_Ad_Type>;
  isActive?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
};


export type AdAppsArgs = {
  filters?: InputMaybe<AppFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
};

export type AdEntity = {
  __typename?: 'AdEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<Ad>;
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

export type AdRelationResponseCollection = {
  __typename?: 'AdRelationResponseCollection';
  data: Array<AdEntity>;
};

export type AppFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Description?: InputMaybe<StringFilterInput>;
  URL?: InputMaybe<StringFilterInput>;
  devURL?: InputMaybe<StringFilterInput>;
  events?: InputMaybe<EventFiltersInput>;
  sponsors?: InputMaybe<SponsorFiltersInput>;
  sponsor_packages?: InputMaybe<SponsorPackageFiltersInput>;
  ads?: InputMaybe<AdFiltersInput>;
  news_posts?: InputMaybe<PostFiltersInput>;
  news_categories?: InputMaybe<NewsCategoryFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<AppFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<AppFiltersInput>>>;
  not?: InputMaybe<AppFiltersInput>;
};

export type AppInput = {
  Name?: InputMaybe<Scalars['String']>;
  Description?: InputMaybe<Scalars['String']>;
  URL?: InputMaybe<Scalars['String']>;
  devURL?: InputMaybe<Scalars['String']>;
  FeaturedImage?: InputMaybe<Scalars['ID']>;
  events?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  sponsors?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  sponsor_packages?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  ads?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  news_posts?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  news_categories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type App = {
  __typename?: 'App';
  Name?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  URL?: Maybe<Scalars['String']>;
  devURL?: Maybe<Scalars['String']>;
  FeaturedImage?: Maybe<UploadFileEntityResponse>;
  events?: Maybe<EventRelationResponseCollection>;
  sponsors?: Maybe<SponsorRelationResponseCollection>;
  sponsor_packages?: Maybe<SponsorPackageRelationResponseCollection>;
  ads?: Maybe<AdRelationResponseCollection>;
  news_posts?: Maybe<PostRelationResponseCollection>;
  news_categories?: Maybe<NewsCategoryRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
};


export type AppEventsArgs = {
  filters?: InputMaybe<EventFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
};


export type AppSponsorsArgs = {
  filters?: InputMaybe<SponsorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
};


export type AppSponsor_PackagesArgs = {
  filters?: InputMaybe<SponsorPackageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
};


export type AppAdsArgs = {
  filters?: InputMaybe<AdFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
};


export type AppNews_PostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
};


export type AppNews_CategoriesArgs = {
  filters?: InputMaybe<NewsCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
};

export type AppEntity = {
  __typename?: 'AppEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<App>;
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

export type AppRelationResponseCollection = {
  __typename?: 'AppRelationResponseCollection';
  data: Array<AppEntity>;
};

export type EventFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  Title?: InputMaybe<StringFilterInput>;
  Description?: InputMaybe<StringFilterInput>;
  StartDate?: InputMaybe<DateTimeFilterInput>;
  EndDate?: InputMaybe<DateTimeFilterInput>;
  URL?: InputMaybe<StringFilterInput>;
  sponsor_packages?: InputMaybe<SponsorPackageFiltersInput>;
  nominations?: InputMaybe<NominationFiltersInput>;
  libera_category?: InputMaybe<LiberaCategoryFiltersInput>;
  apps?: InputMaybe<AppFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<EventFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<EventFiltersInput>>>;
  not?: InputMaybe<EventFiltersInput>;
};

export type EventInput = {
  Title?: InputMaybe<Scalars['String']>;
  Description?: InputMaybe<Scalars['String']>;
  StartDate?: InputMaybe<Scalars['DateTime']>;
  EndDate?: InputMaybe<Scalars['DateTime']>;
  Cover?: InputMaybe<Scalars['ID']>;
  URL?: InputMaybe<Scalars['String']>;
  sponsor_packages?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  nominations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  libera_category?: InputMaybe<Scalars['ID']>;
  apps?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type Event = {
  __typename?: 'Event';
  Title?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  StartDate?: Maybe<Scalars['DateTime']>;
  EndDate?: Maybe<Scalars['DateTime']>;
  Cover?: Maybe<UploadFileEntityResponse>;
  URL?: Maybe<Scalars['String']>;
  sponsor_packages?: Maybe<SponsorPackageRelationResponseCollection>;
  nominations?: Maybe<NominationRelationResponseCollection>;
  libera_category?: Maybe<LiberaCategoryEntityResponse>;
  apps?: Maybe<AppRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
};


export type EventSponsor_PackagesArgs = {
  filters?: InputMaybe<SponsorPackageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
};


export type EventNominationsArgs = {
  filters?: InputMaybe<NominationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
};


export type EventAppsArgs = {
  filters?: InputMaybe<AppFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
};

export type EventEntity = {
  __typename?: 'EventEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<Event>;
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

export type EventRelationResponseCollection = {
  __typename?: 'EventRelationResponseCollection';
  data: Array<EventEntity>;
};

export type IndieWeekSponsorFooterInput = {
  sponsors?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type IndieWeekSponsorFooter = {
  __typename?: 'IndieWeekSponsorFooter';
  sponsors?: Maybe<SponsorRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
};


export type IndieWeekSponsorFooterSponsorsArgs = {
  filters?: InputMaybe<SponsorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
};

export type IndieWeekSponsorFooterEntity = {
  __typename?: 'IndieWeekSponsorFooterEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<IndieWeekSponsorFooter>;
};

export type IndieWeekSponsorFooterEntityResponse = {
  __typename?: 'IndieWeekSponsorFooterEntityResponse';
  data?: Maybe<IndieWeekSponsorFooterEntity>;
};

export type LiberaCategoryFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Description?: InputMaybe<StringFilterInput>;
  Rules?: InputMaybe<StringFilterInput>;
  nominations?: InputMaybe<NominationFiltersInput>;
  events?: InputMaybe<EventFiltersInput>;
  nomination?: InputMaybe<NominationFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<LiberaCategoryFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<LiberaCategoryFiltersInput>>>;
  not?: InputMaybe<LiberaCategoryFiltersInput>;
};

export type LiberaCategoryInput = {
  Name?: InputMaybe<Scalars['String']>;
  Description?: InputMaybe<Scalars['String']>;
  Rules?: InputMaybe<Scalars['String']>;
  nominations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  events?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  nomination?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type LiberaCategory = {
  __typename?: 'LiberaCategory';
  Name?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  Rules?: Maybe<Scalars['String']>;
  nominations?: Maybe<NominationRelationResponseCollection>;
  events?: Maybe<EventRelationResponseCollection>;
  nomination?: Maybe<NominationEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
};


export type LiberaCategoryNominationsArgs = {
  filters?: InputMaybe<NominationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
};


export type LiberaCategoryEventsArgs = {
  filters?: InputMaybe<EventFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
};

export type LiberaCategoryEntity = {
  __typename?: 'LiberaCategoryEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<LiberaCategory>;
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

export type LiberaCategoryRelationResponseCollection = {
  __typename?: 'LiberaCategoryRelationResponseCollection';
  data: Array<LiberaCategoryEntity>;
};

export type LiberaSponsorFooterInput = {
  sponsors?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type LiberaSponsorFooter = {
  __typename?: 'LiberaSponsorFooter';
  sponsors?: Maybe<SponsorRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
};


export type LiberaSponsorFooterSponsorsArgs = {
  filters?: InputMaybe<SponsorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
};

export type LiberaSponsorFooterEntity = {
  __typename?: 'LiberaSponsorFooterEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<LiberaSponsorFooter>;
};

export type LiberaSponsorFooterEntityResponse = {
  __typename?: 'LiberaSponsorFooterEntityResponse';
  data?: Maybe<LiberaSponsorFooterEntity>;
};

export type NewsCategoryFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Description?: InputMaybe<StringFilterInput>;
  apps?: InputMaybe<AppFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<NewsCategoryFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<NewsCategoryFiltersInput>>>;
  not?: InputMaybe<NewsCategoryFiltersInput>;
};

export type NewsCategoryInput = {
  Name?: InputMaybe<Scalars['String']>;
  Description?: InputMaybe<Scalars['String']>;
  apps?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type NewsCategory = {
  __typename?: 'NewsCategory';
  Name?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  apps?: Maybe<AppRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
};


export type NewsCategoryAppsArgs = {
  filters?: InputMaybe<AppFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
};

export type NewsCategoryEntity = {
  __typename?: 'NewsCategoryEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<NewsCategory>;
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

export type NewsCategoryRelationResponseCollection = {
  __typename?: 'NewsCategoryRelationResponseCollection';
  data: Array<NewsCategoryEntity>;
};

export type NominationFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Description?: InputMaybe<StringFilterInput>;
  isWinner?: InputMaybe<BooleanFilterInput>;
  event?: InputMaybe<EventFiltersInput>;
  record_labels?: InputMaybe<RecordLabelFiltersInput>;
  libera_categories?: InputMaybe<LiberaCategoryFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<NominationFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<NominationFiltersInput>>>;
  not?: InputMaybe<NominationFiltersInput>;
};

export type NominationInput = {
  Name?: InputMaybe<Scalars['String']>;
  Description?: InputMaybe<Scalars['String']>;
  isWinner?: InputMaybe<Scalars['Boolean']>;
  Artwork?: InputMaybe<Scalars['ID']>;
  event?: InputMaybe<Scalars['ID']>;
  record_labels?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  libera_categories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type Nomination = {
  __typename?: 'Nomination';
  Name?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  isWinner?: Maybe<Scalars['Boolean']>;
  Artwork?: Maybe<UploadFileEntityResponse>;
  event?: Maybe<EventEntityResponse>;
  record_labels?: Maybe<RecordLabelRelationResponseCollection>;
  libera_categories?: Maybe<LiberaCategoryRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
};


export type NominationRecord_LabelsArgs = {
  filters?: InputMaybe<RecordLabelFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
};


export type NominationLibera_CategoriesArgs = {
  filters?: InputMaybe<LiberaCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
};

export type NominationEntity = {
  __typename?: 'NominationEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<Nomination>;
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

export type NominationRelationResponseCollection = {
  __typename?: 'NominationRelationResponseCollection';
  data: Array<NominationEntity>;
};

export type PostFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  Title?: InputMaybe<StringFilterInput>;
  Date?: InputMaybe<DateTimeFilterInput>;
  Excerpt?: InputMaybe<StringFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  Body?: InputMaybe<StringFilterInput>;
  app?: InputMaybe<AppFiltersInput>;
  news_categories?: InputMaybe<NewsCategoryFiltersInput>;
  tags?: InputMaybe<TagFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<PostFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<PostFiltersInput>>>;
  not?: InputMaybe<PostFiltersInput>;
};

export type PostInput = {
  Title?: InputMaybe<Scalars['String']>;
  coverImage?: InputMaybe<Scalars['ID']>;
  Date?: InputMaybe<Scalars['DateTime']>;
  Excerpt?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  Body?: InputMaybe<Scalars['String']>;
  app?: InputMaybe<Scalars['ID']>;
  news_categories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type Post = {
  __typename?: 'Post';
  Title?: Maybe<Scalars['String']>;
  coverImage?: Maybe<UploadFileEntityResponse>;
  Date?: Maybe<Scalars['DateTime']>;
  Excerpt?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  Body?: Maybe<Scalars['String']>;
  app?: Maybe<AppEntityResponse>;
  news_categories?: Maybe<NewsCategoryRelationResponseCollection>;
  tags?: Maybe<TagRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
};


export type PostNews_CategoriesArgs = {
  filters?: InputMaybe<NewsCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
};


export type PostTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
};

export type PostEntity = {
  __typename?: 'PostEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<Post>;
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

export type PostRelationResponseCollection = {
  __typename?: 'PostRelationResponseCollection';
  data: Array<PostEntity>;
};

export type RecordLabelFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Website?: InputMaybe<StringFilterInput>;
  Description?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<RecordLabelFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<RecordLabelFiltersInput>>>;
  not?: InputMaybe<RecordLabelFiltersInput>;
};

export type RecordLabelInput = {
  Name?: InputMaybe<Scalars['String']>;
  Website?: InputMaybe<Scalars['String']>;
  Logo?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  Description?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type RecordLabel = {
  __typename?: 'RecordLabel';
  Name?: Maybe<Scalars['String']>;
  Website?: Maybe<Scalars['String']>;
  Logo?: Maybe<UploadFileRelationResponseCollection>;
  Description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
};


export type RecordLabelLogoArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type RecordLabelEntity = {
  __typename?: 'RecordLabelEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<RecordLabel>;
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

export type RecordLabelRelationResponseCollection = {
  __typename?: 'RecordLabelRelationResponseCollection';
  data: Array<RecordLabelEntity>;
};

export type SponsorFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Bio?: InputMaybe<StringFilterInput>;
  URL?: InputMaybe<StringFilterInput>;
  sponsor_packages?: InputMaybe<SponsorPackageFiltersInput>;
  ads?: InputMaybe<AdFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<SponsorFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<SponsorFiltersInput>>>;
  not?: InputMaybe<SponsorFiltersInput>;
};

export type SponsorInput = {
  Name?: InputMaybe<Scalars['String']>;
  Bio?: InputMaybe<Scalars['String']>;
  Logo?: InputMaybe<Scalars['ID']>;
  URL?: InputMaybe<Scalars['String']>;
  sponsor_packages?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  ads?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type Sponsor = {
  __typename?: 'Sponsor';
  Name?: Maybe<Scalars['String']>;
  Bio?: Maybe<Scalars['String']>;
  Logo?: Maybe<UploadFileEntityResponse>;
  URL?: Maybe<Scalars['String']>;
  sponsor_packages?: Maybe<SponsorPackageRelationResponseCollection>;
  ads?: Maybe<AdRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
};


export type SponsorSponsor_PackagesArgs = {
  filters?: InputMaybe<SponsorPackageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
};


export type SponsorAdsArgs = {
  filters?: InputMaybe<AdFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
};

export type SponsorEntity = {
  __typename?: 'SponsorEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<Sponsor>;
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

export type SponsorRelationResponseCollection = {
  __typename?: 'SponsorRelationResponseCollection';
  data: Array<SponsorEntity>;
};

export enum Enum_Sponsorpackage_Level {
  Tier_1 = 'Tier_1',
  Tier_2 = 'Tier_2',
  Tier_3 = 'Tier_3'
}

export type SponsorPackageFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Description?: InputMaybe<StringFilterInput>;
  event?: InputMaybe<EventFiltersInput>;
  Level?: InputMaybe<StringFilterInput>;
  apps?: InputMaybe<AppFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<SponsorPackageFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<SponsorPackageFiltersInput>>>;
  not?: InputMaybe<SponsorPackageFiltersInput>;
};

export type SponsorPackageInput = {
  Name?: InputMaybe<Scalars['String']>;
  Description?: InputMaybe<Scalars['String']>;
  event?: InputMaybe<Scalars['ID']>;
  Level?: InputMaybe<Enum_Sponsorpackage_Level>;
  apps?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type SponsorPackage = {
  __typename?: 'SponsorPackage';
  Name?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  event?: Maybe<EventEntityResponse>;
  Level?: Maybe<Enum_Sponsorpackage_Level>;
  apps?: Maybe<AppRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
};


export type SponsorPackageAppsArgs = {
  filters?: InputMaybe<AppFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
};

export type SponsorPackageEntity = {
  __typename?: 'SponsorPackageEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<SponsorPackage>;
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

export type SponsorPackageRelationResponseCollection = {
  __typename?: 'SponsorPackageRelationResponseCollection';
  data: Array<SponsorPackageEntity>;
};

export type TagFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>;
  not?: InputMaybe<TagFiltersInput>;
};

export type TagInput = {
  Name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type Tag = {
  __typename?: 'Tag';
  Name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
};

export type TagEntity = {
  __typename?: 'TagEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<Tag>;
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

export type TagRelationResponseCollection = {
  __typename?: 'TagRelationResponseCollection';
  data: Array<TagEntity>;
};

export type GenericMorph = UploadFile | UploadFolder | I18NLocale | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | Ad | App | Event | IndieWeekSponsorFooter | LiberaCategory | LiberaSponsorFooter | NewsCategory | Nomination | Post | RecordLabel | Sponsor | SponsorPackage | Tag;

export type FileInfoInput = {
  name?: InputMaybe<Scalars['String']>;
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type PaginationArg = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  ad?: Maybe<AdEntityResponse>;
  ads?: Maybe<AdEntityResponseCollection>;
  app?: Maybe<AppEntityResponse>;
  apps?: Maybe<AppEntityResponseCollection>;
  event?: Maybe<EventEntityResponse>;
  events?: Maybe<EventEntityResponseCollection>;
  indieWeekSponsorFooter?: Maybe<IndieWeekSponsorFooterEntityResponse>;
  liberaCategory?: Maybe<LiberaCategoryEntityResponse>;
  liberaCategories?: Maybe<LiberaCategoryEntityResponseCollection>;
  liberaSponsorFooter?: Maybe<LiberaSponsorFooterEntityResponse>;
  newsCategory?: Maybe<NewsCategoryEntityResponse>;
  newsCategories?: Maybe<NewsCategoryEntityResponseCollection>;
  nomination?: Maybe<NominationEntityResponse>;
  nominations?: Maybe<NominationEntityResponseCollection>;
  post?: Maybe<PostEntityResponse>;
  posts?: Maybe<PostEntityResponseCollection>;
  recordLabel?: Maybe<RecordLabelEntityResponse>;
  recordLabels?: Maybe<RecordLabelEntityResponseCollection>;
  sponsor?: Maybe<SponsorEntityResponse>;
  sponsors?: Maybe<SponsorEntityResponseCollection>;
  sponsorPackage?: Maybe<SponsorPackageEntityResponse>;
  sponsorPackages?: Maybe<SponsorPackageEntityResponseCollection>;
  tag?: Maybe<TagEntityResponse>;
  tags?: Maybe<TagEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
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


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
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


export type QueryAdArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryAdsArgs = {
  filters?: InputMaybe<AdFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryAppArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryAppsArgs = {
  filters?: InputMaybe<AppFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryEventArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryEventsArgs = {
  filters?: InputMaybe<EventFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryIndieWeekSponsorFooterArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryLiberaCategoryArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryLiberaCategoriesArgs = {
  filters?: InputMaybe<LiberaCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryLiberaSponsorFooterArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryNewsCategoryArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryNewsCategoriesArgs = {
  filters?: InputMaybe<NewsCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryNominationArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryNominationsArgs = {
  filters?: InputMaybe<NominationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryPostArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryPostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryRecordLabelArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryRecordLabelsArgs = {
  filters?: InputMaybe<RecordLabelFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QuerySponsorArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QuerySponsorsArgs = {
  filters?: InputMaybe<SponsorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QuerySponsorPackageArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QuerySponsorPackagesArgs = {
  filters?: InputMaybe<SponsorPackageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryTagArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  createAd?: Maybe<AdEntityResponse>;
  updateAd?: Maybe<AdEntityResponse>;
  deleteAd?: Maybe<AdEntityResponse>;
  createApp?: Maybe<AppEntityResponse>;
  updateApp?: Maybe<AppEntityResponse>;
  deleteApp?: Maybe<AppEntityResponse>;
  createEvent?: Maybe<EventEntityResponse>;
  updateEvent?: Maybe<EventEntityResponse>;
  deleteEvent?: Maybe<EventEntityResponse>;
  updateIndieWeekSponsorFooter?: Maybe<IndieWeekSponsorFooterEntityResponse>;
  deleteIndieWeekSponsorFooter?: Maybe<IndieWeekSponsorFooterEntityResponse>;
  createLiberaCategory?: Maybe<LiberaCategoryEntityResponse>;
  updateLiberaCategory?: Maybe<LiberaCategoryEntityResponse>;
  deleteLiberaCategory?: Maybe<LiberaCategoryEntityResponse>;
  updateLiberaSponsorFooter?: Maybe<LiberaSponsorFooterEntityResponse>;
  deleteLiberaSponsorFooter?: Maybe<LiberaSponsorFooterEntityResponse>;
  createNewsCategory?: Maybe<NewsCategoryEntityResponse>;
  updateNewsCategory?: Maybe<NewsCategoryEntityResponse>;
  deleteNewsCategory?: Maybe<NewsCategoryEntityResponse>;
  createNomination?: Maybe<NominationEntityResponse>;
  updateNomination?: Maybe<NominationEntityResponse>;
  deleteNomination?: Maybe<NominationEntityResponse>;
  createPost?: Maybe<PostEntityResponse>;
  updatePost?: Maybe<PostEntityResponse>;
  deletePost?: Maybe<PostEntityResponse>;
  createRecordLabel?: Maybe<RecordLabelEntityResponse>;
  updateRecordLabel?: Maybe<RecordLabelEntityResponse>;
  deleteRecordLabel?: Maybe<RecordLabelEntityResponse>;
  createSponsor?: Maybe<SponsorEntityResponse>;
  updateSponsor?: Maybe<SponsorEntityResponse>;
  deleteSponsor?: Maybe<SponsorEntityResponse>;
  createSponsorPackage?: Maybe<SponsorPackageEntityResponse>;
  updateSponsorPackage?: Maybe<SponsorPackageEntityResponse>;
  deleteSponsorPackage?: Maybe<SponsorPackageEntityResponse>;
  createTag?: Maybe<TagEntityResponse>;
  updateTag?: Maybe<TagEntityResponse>;
  deleteTag?: Maybe<TagEntityResponse>;
  upload: UploadFileEntityResponse;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  updateFileInfo: UploadFileEntityResponse;
  removeFile?: Maybe<UploadFileEntityResponse>;
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationUpdateUploadFileArgs = {
  id: Scalars['ID'];
  data: UploadFileInput;
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationUpdateUploadFolderArgs = {
  id: Scalars['ID'];
  data: UploadFolderInput;
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID'];
};


export type MutationCreateAdArgs = {
  data: AdInput;
};


export type MutationUpdateAdArgs = {
  id: Scalars['ID'];
  data: AdInput;
};


export type MutationDeleteAdArgs = {
  id: Scalars['ID'];
};


export type MutationCreateAppArgs = {
  data: AppInput;
};


export type MutationUpdateAppArgs = {
  id: Scalars['ID'];
  data: AppInput;
};


export type MutationDeleteAppArgs = {
  id: Scalars['ID'];
};


export type MutationCreateEventArgs = {
  data: EventInput;
};


export type MutationUpdateEventArgs = {
  id: Scalars['ID'];
  data: EventInput;
};


export type MutationDeleteEventArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateIndieWeekSponsorFooterArgs = {
  data: IndieWeekSponsorFooterInput;
};


export type MutationCreateLiberaCategoryArgs = {
  data: LiberaCategoryInput;
};


export type MutationUpdateLiberaCategoryArgs = {
  id: Scalars['ID'];
  data: LiberaCategoryInput;
};


export type MutationDeleteLiberaCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateLiberaSponsorFooterArgs = {
  data: LiberaSponsorFooterInput;
};


export type MutationCreateNewsCategoryArgs = {
  data: NewsCategoryInput;
};


export type MutationUpdateNewsCategoryArgs = {
  id: Scalars['ID'];
  data: NewsCategoryInput;
};


export type MutationDeleteNewsCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationCreateNominationArgs = {
  data: NominationInput;
};


export type MutationUpdateNominationArgs = {
  id: Scalars['ID'];
  data: NominationInput;
};


export type MutationDeleteNominationArgs = {
  id: Scalars['ID'];
};


export type MutationCreatePostArgs = {
  data: PostInput;
};


export type MutationUpdatePostArgs = {
  id: Scalars['ID'];
  data: PostInput;
};


export type MutationDeletePostArgs = {
  id: Scalars['ID'];
};


export type MutationCreateRecordLabelArgs = {
  data: RecordLabelInput;
};


export type MutationUpdateRecordLabelArgs = {
  id: Scalars['ID'];
  data: RecordLabelInput;
};


export type MutationDeleteRecordLabelArgs = {
  id: Scalars['ID'];
};


export type MutationCreateSponsorArgs = {
  data: SponsorInput;
};


export type MutationUpdateSponsorArgs = {
  id: Scalars['ID'];
  data: SponsorInput;
};


export type MutationDeleteSponsorArgs = {
  id: Scalars['ID'];
};


export type MutationCreateSponsorPackageArgs = {
  data: SponsorPackageInput;
};


export type MutationUpdateSponsorPackageArgs = {
  id: Scalars['ID'];
  data: SponsorPackageInput;
};


export type MutationDeleteSponsorPackageArgs = {
  id: Scalars['ID'];
};


export type MutationCreateTagArgs = {
  data: TagInput;
};


export type MutationUpdateTagArgs = {
  id: Scalars['ID'];
  data: TagInput;
};


export type MutationDeleteTagArgs = {
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  refId?: InputMaybe<Scalars['ID']>;
  ref?: InputMaybe<Scalars['String']>;
  field?: InputMaybe<Scalars['String']>;
  info?: InputMaybe<FileInfoInput>;
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  refId?: InputMaybe<Scalars['ID']>;
  ref?: InputMaybe<Scalars['String']>;
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
  data: UsersPermissionsRoleInput;
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationUpdateUsersPermissionsUserArgs = {
  id: Scalars['ID'];
  data: UsersPermissionsUserInput;
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};
