/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class DocumentPreviewMode extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly DefaultPreview: Adobe.Illustrator.DocumentPreviewMode;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly OverprintPreview: Adobe.Illustrator.DocumentPreviewMode;
			public static readonly PixelPreview: Adobe.Illustrator.DocumentPreviewMode;
			/** Constructor */
			public constructor();
		}
	}
}