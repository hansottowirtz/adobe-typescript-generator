/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class DocumentColorSpace extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly CMYK: Adobe.Illustrator.DocumentColorSpace;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly RGB: Adobe.Illustrator.DocumentColorSpace;
			/** Constructor */
			public constructor();
		}
	}
}