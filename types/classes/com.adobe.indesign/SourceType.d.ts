/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class SourceType extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Custom Text
			 * @type {Adobe.Indesign.SourceType}
			 * @readonly
			 */
			public static readonly SOURCE_CUSTOM: Adobe.Indesign.SourceType;
			/**
			 * XML Structure
			 * @type {Adobe.Indesign.SourceType}
			 * @readonly
			 */
			public static readonly SOURCE_XML_STRUCTURE: Adobe.Indesign.SourceType;
			/**
			 * XMP Description
			 * @type {Adobe.Indesign.SourceType}
			 * @readonly
			 */
			public static readonly SOURCE_XMP_DESCRIPTION: Adobe.Indesign.SourceType;
			/**
			 * XMP Headline
			 * @type {Adobe.Indesign.SourceType}
			 * @readonly
			 */
			public static readonly SOURCE_XMP_HEADLINE: Adobe.Indesign.SourceType;
			/**
			 * User specified XMP metadata property
			 * @type {Adobe.Indesign.SourceType}
			 * @readonly
			 */
			public static readonly SOURCE_XMP_OTHER: Adobe.Indesign.SourceType;
			/**
			 * XMP Title
			 * @type {Adobe.Indesign.SourceType}
			 * @readonly
			 */
			public static readonly SOURCE_XMP_TITLE: Adobe.Indesign.SourceType;
			/**
			 * Alias for SOURCE_CUSTOM. Custom Text
			 * @type {Adobe.Indesign.SourceType}
			 * @readonly
			 */
			public static readonly sourceCustom: Adobe.Indesign.SourceType;
			/**
			 * Alias for SOURCE_XML_STRUCTURE. XML Structure
			 * @type {Adobe.Indesign.SourceType}
			 * @readonly
			 */
			public static readonly sourceXmlStructure: Adobe.Indesign.SourceType;
			/**
			 * Alias for SOURCE_XMP_DESCRIPTION. XMP Description
			 * @type {Adobe.Indesign.SourceType}
			 * @readonly
			 */
			public static readonly sourceXmpDescription: Adobe.Indesign.SourceType;
			/**
			 * Alias for SOURCE_XMP_HEADLINE. XMP Headline
			 * @type {Adobe.Indesign.SourceType}
			 * @readonly
			 */
			public static readonly sourceXmpHeadline: Adobe.Indesign.SourceType;
			/**
			 * Alias for SOURCE_XMP_OTHER. User specified XMP metadata 
			 * property
			 * @type {Adobe.Indesign.SourceType}
			 * @readonly
			 */
			public static readonly sourceXmpOther: Adobe.Indesign.SourceType;
			/**
			 * Alias for SOURCE_XMP_TITLE. XMP Title
			 * @type {Adobe.Indesign.SourceType}
			 * @readonly
			 */
			public static readonly sourceXmpTitle: Adobe.Indesign.SourceType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}