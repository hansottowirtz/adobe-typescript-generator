/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PageBindingOptions extends Adobe.Csawlib.CSEnumBase {
			/** Uses default page binding. */
			public static readonly DEFAULT_VALUE: Adobe.Indesign.PageBindingOptions;
			/** Alias for DEFAULT_VALUE. Uses default page binding. */
			public static readonly defaultValue: Adobe.Indesign.PageBindingOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Pages are bound on the left. */
			public static readonly LEFT_TO_RIGHT: Adobe.Indesign.PageBindingOptions;
			/** Alias for LEFT_TO_RIGHT. Pages are bound on the left. */
			public static readonly leftToRight: Adobe.Indesign.PageBindingOptions;
			/** Pages are bound on the right. */
			public static readonly RIGHT_TO_LEFT: Adobe.Indesign.PageBindingOptions;
			/** Alias for RIGHT_TO_LEFT. Pages are bound on the right. */
			public static readonly rightToLeft: Adobe.Indesign.PageBindingOptions;
			/** Constructor */
			public constructor();
		}
	}
}