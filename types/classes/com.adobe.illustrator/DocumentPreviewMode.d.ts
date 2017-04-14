/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class DocumentPreviewMode extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** Default Preview mode. */
			public static readonly DefaultPreview: Adobe.Illustrator.DocumentPreviewMode;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Overprint Preview Mode. */
			public static readonly OverprintPreview: Adobe.Illustrator.DocumentPreviewMode;
			/** Pixel Preview mode. */
			public static readonly PixelPreview: Adobe.Illustrator.DocumentPreviewMode;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}