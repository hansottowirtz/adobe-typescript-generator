/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class SVGDocumentEncoding extends IllustratorEnumBase {
			/** ISO 8859-1. */
			public static readonly ASCII: SVGDocumentEncoding;
			public static readonly enumCache: CSEnumSharedCache;
			public static readonly UTF16: SVGDocumentEncoding;
			public static readonly UTF8: SVGDocumentEncoding;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}