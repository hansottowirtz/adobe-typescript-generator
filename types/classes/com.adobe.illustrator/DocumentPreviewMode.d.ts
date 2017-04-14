/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class DocumentPreviewMode extends IllustratorEnumBase {
			/** Default Preview mode. */
			public static readonly DefaultPreview: DocumentPreviewMode;
			public static readonly enumCache: CSEnumSharedCache;
			/** Overprint Preview Mode. */
			public static readonly OverprintPreview: DocumentPreviewMode;
			/** Pixel Preview mode. */
			public static readonly PixelPreview: DocumentPreviewMode;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}