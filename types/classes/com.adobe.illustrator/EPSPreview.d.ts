/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class EPSPreview extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** Black and white Macintosh preview. */
			public static readonly BWMACINTOSH: Adobe.Illustrator.EPSPreview;
			/** Black and white PC preview. */
			public static readonly BWTIFF: Adobe.Illustrator.EPSPreview;
			/** Color Macintosh preview. */
			public static readonly COLORMACINTOSH: Adobe.Illustrator.EPSPreview;
			/** Color PC preview. */
			public static readonly COLORTIFF: Adobe.Illustrator.EPSPreview;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** No preview. */
			public static readonly None: Adobe.Illustrator.EPSPreview;
			/** Transparent color PC preview (8 or later) */
			public static readonly TRANSPARENTCOLORTIFF: Adobe.Illustrator.EPSPreview;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}