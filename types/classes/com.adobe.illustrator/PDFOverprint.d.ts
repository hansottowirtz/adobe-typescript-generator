/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PDFOverprint extends IllustratorEnumBase {
			/** Discard overprint. */
			public static readonly DISCARDPDFOVERPRINT: PDFOverprint;
			public static readonly enumCache: CSEnumSharedCache;
			/** Preserve overprint. */
			public static readonly PRESERVEPDFOVERPRINT: PDFOverprint;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}