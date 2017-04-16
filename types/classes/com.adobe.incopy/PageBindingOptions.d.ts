/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class PageBindingOptions extends Adobe.Csawlib.CSEnumBase {
			/** Uses default page binding. */
			public static readonly DEFAULT_VALUE: Adobe.Incopy.PageBindingOptions;
			/** Alias for DEFAULT_VALUE. Uses default page binding. */
			public static readonly defaultValue: Adobe.Incopy.PageBindingOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Pages are bound on the left. */
			public static readonly LEFT_TO_RIGHT: Adobe.Incopy.PageBindingOptions;
			/** Alias for LEFT_TO_RIGHT. Pages are bound on the left. */
			public static readonly leftToRight: Adobe.Incopy.PageBindingOptions;
			/** Pages are bound on the right. */
			public static readonly RIGHT_TO_LEFT: Adobe.Incopy.PageBindingOptions;
			/** Alias for RIGHT_TO_LEFT. Pages are bound on the right. */
			public static readonly rightToLeft: Adobe.Incopy.PageBindingOptions;
			/** Constructor */
			public constructor();
		}
	}
}