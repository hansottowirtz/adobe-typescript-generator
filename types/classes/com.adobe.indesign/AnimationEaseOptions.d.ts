/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class AnimationEaseOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * cutom read only ease type.
			 * @type {Adobe.Indesign.AnimationEaseOptions}
			 * @readonly
			 */
			public static readonly CUSTOM_EASE: Adobe.Indesign.AnimationEaseOptions;
			/**
			 * Alias for CUSTOM_EASE. cutom read only ease type.
			 * @type {Adobe.Indesign.AnimationEaseOptions}
			 * @readonly
			 */
			public static readonly customEase: Adobe.Indesign.AnimationEaseOptions;
			/**
			 * simple ease in.
			 * @type {Adobe.Indesign.AnimationEaseOptions}
			 * @readonly
			 */
			public static readonly EASE_IN: Adobe.Indesign.AnimationEaseOptions;
			/**
			 * simple ease in and out.
			 * @type {Adobe.Indesign.AnimationEaseOptions}
			 * @readonly
			 */
			public static readonly EASE_IN_OUT: Adobe.Indesign.AnimationEaseOptions;
			/**
			 * simple ease out.
			 * @type {Adobe.Indesign.AnimationEaseOptions}
			 * @readonly
			 */
			public static readonly EASE_OUT: Adobe.Indesign.AnimationEaseOptions;
			/**
			 * Alias for EASE_IN. simple ease in.
			 * @type {Adobe.Indesign.AnimationEaseOptions}
			 * @readonly
			 */
			public static readonly easeIn: Adobe.Indesign.AnimationEaseOptions;
			/**
			 * Alias for EASE_IN_OUT. simple ease in and out.
			 * @type {Adobe.Indesign.AnimationEaseOptions}
			 * @readonly
			 */
			public static readonly easeInOut: Adobe.Indesign.AnimationEaseOptions;
			/**
			 * Alias for EASE_OUT. simple ease out.
			 * @type {Adobe.Indesign.AnimationEaseOptions}
			 * @readonly
			 */
			public static readonly easeOut: Adobe.Indesign.AnimationEaseOptions;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * no easing.
			 * @type {Adobe.Indesign.AnimationEaseOptions}
			 * @readonly
			 */
			public static readonly NO_EASE: Adobe.Indesign.AnimationEaseOptions;
			/**
			 * Alias for NO_EASE. no easing.
			 * @type {Adobe.Indesign.AnimationEaseOptions}
			 * @readonly
			 */
			public static readonly noEase: Adobe.Indesign.AnimationEaseOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}