/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class BindingOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Uses the default binding side.
			 * @type {Adobe.Incopy.BindingOptions}
			 * @readonly
			 */
			public static readonly DEFAULT_VALUE: Adobe.Incopy.BindingOptions;
			/**
			 * Alias for DEFAULT_VALUE. Uses the default binding side.
			 * @type {Adobe.Incopy.BindingOptions}
			 * @readonly
			 */
			public static readonly defaultValue: Adobe.Incopy.BindingOptions;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Moves the page to the left side of the spread's binding 
			 * spine.
			 * @type {Adobe.Incopy.BindingOptions}
			 * @readonly
			 */
			public static readonly LEFT_ALIGN: Adobe.Incopy.BindingOptions;
			/**
			 * Alias for LEFT_ALIGN. Moves the page to the left side of the 
			 * spread's binding spine.
			 * @type {Adobe.Incopy.BindingOptions}
			 * @readonly
			 */
			public static readonly leftAlign: Adobe.Incopy.BindingOptions;
			/**
			 * Moves the page to the right side of the spread's binding 
			 * spine.
			 * @type {Adobe.Incopy.BindingOptions}
			 * @readonly
			 */
			public static readonly RIGHT_ALIGN: Adobe.Incopy.BindingOptions;
			/**
			 * Alias for RIGHT_ALIGN. Moves the page to the right side of 
			 * the spread's binding spine.
			 * @type {Adobe.Incopy.BindingOptions}
			 * @readonly
			 */
			public static readonly rightAlign: Adobe.Incopy.BindingOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}