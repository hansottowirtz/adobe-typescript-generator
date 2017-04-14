/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class DocumentColorSpace extends IllustratorEnumBase {
			/** CMYK document color space. */
			public static readonly CMYK: DocumentColorSpace;
			public static readonly enumCache: CSEnumSharedCache;
			/** RGB document color space. */
			public static readonly RGB: DocumentColorSpace;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}