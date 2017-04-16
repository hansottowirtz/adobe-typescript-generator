/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class SourceFieldType extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * The field can fill a data merge image placeholder.
			 * @type {Adobe.Indesign.SourceFieldType}
			 * @readonly
			 */
			public static readonly IMAGE_FIELD: Adobe.Indesign.SourceFieldType;
			/**
			 * Alias for IMAGE_FIELD. The field can fill a data merge image 
			 * placeholder.
			 * @type {Adobe.Indesign.SourceFieldType}
			 * @readonly
			 */
			public static readonly imageField: Adobe.Indesign.SourceFieldType;
			/**
			 * The field can fill a data merge text placeholder.
			 * @type {Adobe.Indesign.SourceFieldType}
			 * @readonly
			 */
			public static readonly TEXT_FIELD: Adobe.Indesign.SourceFieldType;
			/**
			 * Alias for TEXT_FIELD. The field can fill a data merge text 
			 * placeholder.
			 * @type {Adobe.Indesign.SourceFieldType}
			 * @readonly
			 */
			public static readonly textField: Adobe.Indesign.SourceFieldType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}