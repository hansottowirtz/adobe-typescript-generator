/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class EPSPreview extends IllustratorEnumBase {
			/** Black and white Macintosh preview. */
			public static readonly BWMACINTOSH: EPSPreview;
			/** Black and white PC preview. */
			public static readonly BWTIFF: EPSPreview;
			/** Color Macintosh preview. */
			public static readonly COLORMACINTOSH: EPSPreview;
			/** Color PC preview. */
			public static readonly COLORTIFF: EPSPreview;
			public static readonly enumCache: CSEnumSharedCache;
			/** No preview. */
			public static readonly None: EPSPreview;
			/** Transparent color PC preview (8 or later) */
			public static readonly TRANSPARENTCOLORTIFF: EPSPreview;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}