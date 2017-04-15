/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class OpenOptions extends Adobe.Csawlib.CSEnumBase {
			/** Default based on the file type or extension. */
			public static readonly DEFAULT_VALUE: Adobe.Incopy.OpenOptions;
			/**
			 * Alias for DEFAULT_VALUE. Default based on the file type or 
			 * extension.
			 */
			public static readonly defaultValue: Adobe.Incopy.OpenOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Open a copy of the document. */
			public static readonly OPEN_COPY: Adobe.Incopy.OpenOptions;
			/** Open the document itself. */
			public static readonly OPEN_ORIGINAL: Adobe.Incopy.OpenOptions;
			/** Alias for OPEN_COPY. Open a copy of the document. */
			public static readonly openCopy: Adobe.Incopy.OpenOptions;
			/** Alias for OPEN_ORIGINAL. Open the document itself. */
			public static readonly openOriginal: Adobe.Incopy.OpenOptions;
			/** Constructor */
			public constructor();
		}
	}
}