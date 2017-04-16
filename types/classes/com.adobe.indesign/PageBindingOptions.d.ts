/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PageBindingOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Uses default page binding.
			 * @type {Adobe.Indesign.PageBindingOptions}
			 * @readonly
			 */
			public static readonly DEFAULT_VALUE: Adobe.Indesign.PageBindingOptions;
			/**
			 * Alias for DEFAULT_VALUE. Uses default page binding.
			 * @type {Adobe.Indesign.PageBindingOptions}
			 * @readonly
			 */
			public static readonly defaultValue: Adobe.Indesign.PageBindingOptions;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Pages are bound on the left.
			 * @type {Adobe.Indesign.PageBindingOptions}
			 * @readonly
			 */
			public static readonly LEFT_TO_RIGHT: Adobe.Indesign.PageBindingOptions;
			/**
			 * Alias for LEFT_TO_RIGHT. Pages are bound on the left.
			 * @type {Adobe.Indesign.PageBindingOptions}
			 * @readonly
			 */
			public static readonly leftToRight: Adobe.Indesign.PageBindingOptions;
			/**
			 * Pages are bound on the right.
			 * @type {Adobe.Indesign.PageBindingOptions}
			 * @readonly
			 */
			public static readonly RIGHT_TO_LEFT: Adobe.Indesign.PageBindingOptions;
			/**
			 * Alias for RIGHT_TO_LEFT. Pages are bound on the right.
			 * @type {Adobe.Indesign.PageBindingOptions}
			 * @readonly
			 */
			public static readonly rightToLeft: Adobe.Indesign.PageBindingOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}