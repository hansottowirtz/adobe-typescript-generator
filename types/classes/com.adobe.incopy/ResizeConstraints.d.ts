/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ResizeConstraints extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Keep current proportions
			 * @type {Adobe.Incopy.ResizeConstraints}
			 * @readonly
			 */
			public static readonly KEEP_CURRENT_PROPORTIONS: Adobe.Incopy.ResizeConstraints;
			/**
			 * Keep current value
			 * @type {Adobe.Incopy.ResizeConstraints}
			 * @readonly
			 */
			public static readonly KEEP_CURRENT_VALUE: Adobe.Incopy.ResizeConstraints;
			/**
			 * Alias for KEEP_CURRENT_PROPORTIONS. Keep current proportions
			 * @type {Adobe.Incopy.ResizeConstraints}
			 * @readonly
			 */
			public static readonly keepCurrentProportions: Adobe.Incopy.ResizeConstraints;
			/**
			 * Alias for KEEP_CURRENT_VALUE. Keep current value
			 * @type {Adobe.Incopy.ResizeConstraints}
			 * @readonly
			 */
			public static readonly keepCurrentValue: Adobe.Incopy.ResizeConstraints;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}