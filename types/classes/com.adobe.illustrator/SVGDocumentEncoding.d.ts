/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class SVGDocumentEncoding extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** ISO 8859-1. */
			public static readonly ASCII: Adobe.Illustrator.SVGDocumentEncoding;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly UTF16: Adobe.Illustrator.SVGDocumentEncoding;
			public static readonly UTF8: Adobe.Illustrator.SVGDocumentEncoding;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}