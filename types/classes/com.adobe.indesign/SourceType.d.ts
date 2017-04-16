/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class SourceType extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Custom Text */
			public static readonly SOURCE_CUSTOM: Adobe.Indesign.SourceType;
			/** XML Structure */
			public static readonly SOURCE_XML_STRUCTURE: Adobe.Indesign.SourceType;
			/** XMP Description */
			public static readonly SOURCE_XMP_DESCRIPTION: Adobe.Indesign.SourceType;
			/** XMP Headline */
			public static readonly SOURCE_XMP_HEADLINE: Adobe.Indesign.SourceType;
			/** User specified XMP metadata property */
			public static readonly SOURCE_XMP_OTHER: Adobe.Indesign.SourceType;
			/** XMP Title */
			public static readonly SOURCE_XMP_TITLE: Adobe.Indesign.SourceType;
			/** Alias for SOURCE_CUSTOM. Custom Text */
			public static readonly sourceCustom: Adobe.Indesign.SourceType;
			/** Alias for SOURCE_XML_STRUCTURE. XML Structure */
			public static readonly sourceXmlStructure: Adobe.Indesign.SourceType;
			/** Alias for SOURCE_XMP_DESCRIPTION. XMP Description */
			public static readonly sourceXmpDescription: Adobe.Indesign.SourceType;
			/** Alias for SOURCE_XMP_HEADLINE. XMP Headline */
			public static readonly sourceXmpHeadline: Adobe.Indesign.SourceType;
			/**
			 * Alias for SOURCE_XMP_OTHER. User specified XMP metadata 
			 * property
			 */
			public static readonly sourceXmpOther: Adobe.Indesign.SourceType;
			/** Alias for SOURCE_XMP_TITLE. XMP Title */
			public static readonly sourceXmpTitle: Adobe.Indesign.SourceType;
			/** Constructor */
			public constructor();
		}
	}
}