/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class PageBindingOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Uses default page binding.
			 * @type {Adobe.Incopy.PageBindingOptions}
			 * @readonly
			 */
			public static readonly DEFAULT_VALUE: Adobe.Incopy.PageBindingOptions;
			/**
			 * Alias for DEFAULT_VALUE. Uses default page binding.
			 * @type {Adobe.Incopy.PageBindingOptions}
			 * @readonly
			 */
			public static readonly defaultValue: Adobe.Incopy.PageBindingOptions;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Pages are bound on the left.
			 * @type {Adobe.Incopy.PageBindingOptions}
			 * @readonly
			 */
			public static readonly LEFT_TO_RIGHT: Adobe.Incopy.PageBindingOptions;
			/**
			 * Alias for LEFT_TO_RIGHT. Pages are bound on the left.
			 * @type {Adobe.Incopy.PageBindingOptions}
			 * @readonly
			 */
			public static readonly leftToRight: Adobe.Incopy.PageBindingOptions;
			/**
			 * Pages are bound on the right.
			 * @type {Adobe.Incopy.PageBindingOptions}
			 * @readonly
			 */
			public static readonly RIGHT_TO_LEFT: Adobe.Incopy.PageBindingOptions;
			/**
			 * Alias for RIGHT_TO_LEFT. Pages are bound on the right.
			 * @type {Adobe.Incopy.PageBindingOptions}
			 * @readonly
			 */
			public static readonly rightToLeft: Adobe.Incopy.PageBindingOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}