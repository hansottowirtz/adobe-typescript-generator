/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class SourceFieldType extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** The field can fill a data merge image placeholder. */
			public static readonly IMAGE_FIELD: Adobe.Indesign.SourceFieldType;
			/**
			 * Alias for IMAGE_FIELD. The field can fill a data merge image 
			 * placeholder.
			 */
			public static readonly imageField: Adobe.Indesign.SourceFieldType;
			/** The field can fill a data merge text placeholder. */
			public static readonly TEXT_FIELD: Adobe.Indesign.SourceFieldType;
			/**
			 * Alias for TEXT_FIELD. The field can fill a data merge text 
			 * placeholder.
			 */
			public static readonly textField: Adobe.Indesign.SourceFieldType;
			/** Constructor */
			public constructor();
		}
	}
}