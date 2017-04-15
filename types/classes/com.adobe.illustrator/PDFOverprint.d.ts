/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
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