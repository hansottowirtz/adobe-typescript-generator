/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class AnimationEaseOptions extends Adobe.Csawlib.CSEnumBase {
			/** cutom read only ease type. */
			public static readonly CUSTOM_EASE: Adobe.Indesign.AnimationEaseOptions;
			/** Alias for CUSTOM_EASE. cutom read only ease type. */
			public static readonly customEase: Adobe.Indesign.AnimationEaseOptions;
			/** simple ease in. */
			public static readonly EASE_IN: Adobe.Indesign.AnimationEaseOptions;
			/** simple ease in and out. */
			public static readonly EASE_IN_OUT: Adobe.Indesign.AnimationEaseOptions;
			/** simple ease out. */
			public static readonly EASE_OUT: Adobe.Indesign.AnimationEaseOptions;
			/** Alias for EASE_IN. simple ease in. */
			public static readonly easeIn: Adobe.Indesign.AnimationEaseOptions;
			/** Alias for EASE_IN_OUT. simple ease in and out. */
			public static readonly easeInOut: Adobe.Indesign.AnimationEaseOptions;
			/** Alias for EASE_OUT. simple ease out. */
			public static readonly easeOut: Adobe.Indesign.AnimationEaseOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** no easing. */
			public static readonly NO_EASE: Adobe.Indesign.AnimationEaseOptions;
			/** Alias for NO_EASE. no easing. */
			public static readonly noEase: Adobe.Indesign.AnimationEaseOptions;
			/** Constructor */
			public constructor();
		}
	}
}