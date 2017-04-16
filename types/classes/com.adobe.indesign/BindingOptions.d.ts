/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class BindingOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Uses the default binding side.
			 * @type {Adobe.Indesign.BindingOptions}
			 * @readonly
			 */
			public static readonly DEFAULT_VALUE: Adobe.Indesign.BindingOptions;
			/**
			 * Alias for DEFAULT_VALUE. Uses the default binding side.
			 * @type {Adobe.Indesign.BindingOptions}
			 * @readonly
			 */
			public static readonly defaultValue: Adobe.Indesign.BindingOptions;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Moves the page to the left side of the spread's binding 
			 * spine.
			 * @type {Adobe.Indesign.BindingOptions}
			 * @readonly
			 */
			public static readonly LEFT_ALIGN: Adobe.Indesign.BindingOptions;
			/**
			 * Alias for LEFT_ALIGN. Moves the page to the left side of the 
			 * spread's binding spine.
			 * @type {Adobe.Indesign.BindingOptions}
			 * @readonly
			 */
			public static readonly leftAlign: Adobe.Indesign.BindingOptions;
			/**
			 * Moves the page to the right side of the spread's binding 
			 * spine.
			 * @type {Adobe.Indesign.BindingOptions}
			 * @readonly
			 */
			public static readonly RIGHT_ALIGN: Adobe.Indesign.BindingOptions;
			/**
			 * Alias for RIGHT_ALIGN. Moves the page to the right side of 
			 * the spread's binding spine.
			 * @type {Adobe.Indesign.BindingOptions}
			 * @readonly
			 */
			public static readonly rightAlign: Adobe.Indesign.BindingOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}