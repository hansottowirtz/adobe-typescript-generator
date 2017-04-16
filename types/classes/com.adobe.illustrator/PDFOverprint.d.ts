/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class PDFOverprint extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly DISCARDPDFOVERPRINT: Adobe.Illustrator.PDFOverprint;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly PRESERVEPDFOVERPRINT: Adobe.Illustrator.PDFOverprint;
			/** Constructor */
			public constructor();
		}
	}
}