/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** The color spaces available for documents. */
		class DocumentColorSpace extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** CMYK document color space. */
			public static readonly CMYK: Adobe.Illustrator.DocumentColorSpace;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** RGB document color space. */
			public static readonly RGB: Adobe.Illustrator.DocumentColorSpace;
			/** Constructor */
			public constructor();
		}
	}
}