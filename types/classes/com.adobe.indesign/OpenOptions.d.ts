/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class OpenOptions extends Adobe.Csawlib.CSEnumBase {
			/** Default based on the file type or extension. */
			public static readonly DEFAULT_VALUE: Adobe.Indesign.OpenOptions;
			/**
			 * Alias for DEFAULT_VALUE. Default based on the file type or 
			 * extension.
			 */
			public static readonly defaultValue: Adobe.Indesign.OpenOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Open a copy of the document. */
			public static readonly OPEN_COPY: Adobe.Indesign.OpenOptions;
			/** Open the document itself. */
			public static readonly OPEN_ORIGINAL: Adobe.Indesign.OpenOptions;
			/** Alias for OPEN_COPY. Open a copy of the document. */
			public static readonly openCopy: Adobe.Indesign.OpenOptions;
			/** Alias for OPEN_ORIGINAL. Open the document itself. */
			public static readonly openOriginal: Adobe.Indesign.OpenOptions;
			/** Constructor */
			public constructor();
		}
	}
}