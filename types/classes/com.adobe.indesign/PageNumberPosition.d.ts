/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PageNumberPosition extends Adobe.Csawlib.CSEnumBase {
			/** Places page numbers after entry text. */
			public static readonly AFTER_ENTRY: Adobe.Indesign.PageNumberPosition;
			/**
			 * Alias for AFTER_ENTRY. Places page numbers after entry text.
			 */
			public static readonly afterEntry: Adobe.Indesign.PageNumberPosition;
			/** Places page numbers before entry text. */
			public static readonly BEFORE_ENTRY: Adobe.Indesign.PageNumberPosition;
			/**
			 * Alias for BEFORE_ENTRY. Places page numbers before entry 
			 * text.
			 */
			public static readonly beforeEntry: Adobe.Indesign.PageNumberPosition;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for NONE. Turns off page numbers. */
			public static readonly none: Adobe.Indesign.PageNumberPosition;
			/** Turns off page numbers. */
			public static readonly NONE: Adobe.Indesign.PageNumberPosition;
			/** Constructor */
			public constructor();
		}
	}
}