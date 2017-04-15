/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Pdf overprint options. */
		class PDFOverprint extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** Discard overprint. */
			public static readonly DISCARDPDFOVERPRINT: Adobe.Illustrator.PDFOverprint;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Preserve overprint. */
			public static readonly PRESERVEPDFOVERPRINT: Adobe.Illustrator.PDFOverprint;
			/** Constructor */
			public constructor();
		}
	}
}