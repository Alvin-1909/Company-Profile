import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface IContentfulAsset {
  sys: {
    id: string;
  };
  fields: {
    file: {
      url?: string;
      title?: string;
      description?: string;
      contentType?: string;
      name?: string;
    };
  };
}

export interface TypeTestimonialFields {
  clientName: EntryFieldTypes.Symbol;
  clientPhoto: EntryFieldTypes.AssetLink;
  testimonialText: EntryFieldTypes.Text;
}

export type TypeTestimonialSkeleton = EntrySkeletonType<
  TypeTestimonialFields,
  "companyProfile"
>;
export type TypeTestimonial<
  Modifiers extends ChainModifiers = ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeTestimonialSkeleton, Modifiers, Locales>;

export interface TypeTeamMemberFields {
  name: EntryFieldTypes.Symbol;
  position: EntryFieldTypes.Symbol;
  photo: EntryFieldTypes.AssetLink;
}

export type TypeTeamMemberSkeleton = EntrySkeletonType<
  TypeTeamMemberFields,
  "companyProfile"
>;
export type TypeTeamMember<
  Modifiers extends ChainModifiers = ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeTeamMemberSkeleton, Modifiers, Locales>;

export interface TypeProjectFields {
  projectName: EntryFieldTypes.Symbol;
  projectDescription: EntryFieldTypes.Text;
  projectImage: EntryFieldTypes.AssetLink;
}

export type TypeProjectSkeleton = EntrySkeletonType<
  TypeProjectFields,
  "companyProfile"
>;
export type TypeProject<
  Modifiers extends ChainModifiers = ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeProjectSkeleton, Modifiers, Locales>;

export interface TypeCompanyProfileFields {
  name: EntryFieldTypes.Symbol;
  description: EntryFieldTypes.RichText;
  logo: EntryFieldTypes.AssetLink;
  contact: EntryFieldTypes.Symbol;
  address: EntryFieldTypes.Symbol;
}

export type TypeCompanyProfileSkeleton = EntrySkeletonType<
  TypeCompanyProfileFields,
  "companyProfile"
>;
export type TypeCompanyProfile<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeCompanyProfileSkeleton, Modifiers, Locales>;
