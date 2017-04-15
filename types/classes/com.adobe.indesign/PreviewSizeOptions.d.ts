/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PreviewSizeOptions extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Extra large preview (1024 x 1024). */
			public static readonly EXTRA_LARGE: Adobe.Indesign.PreviewSizeOptions;
			/** Alias for EXTRA_LARGE. Extra large preview (1024 x 1024). */
			public static readonly extraLarge: Adobe.Indesign.PreviewSizeOptions;
			/** Alias for LARGE. Large preview (512 x 512). */
			public static readonly large: Adobe.Indesign.PreviewSizeOptions;
			/** Large preview (512 x 512). */
			public static readonly LARGE: Adobe.Indesign.PreviewSizeOptions;
			/** Alias for MEDIUM. Medium preview (256 x 256). */
			public static readonly medium: Adobe.Indesign.PreviewSizeOptions;
			/** Medium preview (256 x 256). */
			public static readonly MEDIUM: Adobe.Indesign.PreviewSizeOptions;
			/** Alias for SMALL. Small preview (128 x 128). */
			public static readonly small: Adobe.Indesign.PreviewSizeOptions;
			/** Small preview (128 x 128). */
			public static readonly SMALL: Adobe.Indesign.PreviewSizeOptions;
			/** Constructor */
			public constructor();
		}
	}
}