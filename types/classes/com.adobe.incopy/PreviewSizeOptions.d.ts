/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class PreviewSizeOptions extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Extra large preview (1024x1024) */
			public static readonly EXTRA_LARGE: Adobe.Incopy.PreviewSizeOptions;
			/** Alias for EXTRA_LARGE. Extra large preview (1024x1024) */
			public static readonly extraLarge: Adobe.Incopy.PreviewSizeOptions;
			/** Alias for LARGE. Large preview (512x512) */
			public static readonly large: Adobe.Incopy.PreviewSizeOptions;
			/** Large preview (512x512) */
			public static readonly LARGE: Adobe.Incopy.PreviewSizeOptions;
			/** Alias for MEDIUM. Medium preview (256x256) */
			public static readonly medium: Adobe.Incopy.PreviewSizeOptions;
			/** Medium preview (256x256) */
			public static readonly MEDIUM: Adobe.Incopy.PreviewSizeOptions;
			/** Alias for SMALL. Small preview (128x128) */
			public static readonly small: Adobe.Incopy.PreviewSizeOptions;
			/** Small preview (128x128) */
			public static readonly SMALL: Adobe.Incopy.PreviewSizeOptions;
			/** Constructor */
			public constructor();
		}
	}
}