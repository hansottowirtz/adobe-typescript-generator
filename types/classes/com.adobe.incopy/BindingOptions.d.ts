/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class BindingOptions extends Adobe.Csawlib.CSEnumBase {
			/** Uses the default binding side. */
			public static readonly DEFAULT_VALUE: Adobe.Incopy.BindingOptions;
			/** Alias for DEFAULT_VALUE. Uses the default binding side. */
			public static readonly defaultValue: Adobe.Incopy.BindingOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Moves the page to the left side of the spread's binding 
			 * spine.
			 */
			public static readonly LEFT_ALIGN: Adobe.Incopy.BindingOptions;
			/**
			 * Alias for LEFT_ALIGN. Moves the page to the left side of the 
			 * spread's binding spine.
			 */
			public static readonly leftAlign: Adobe.Incopy.BindingOptions;
			/**
			 * Moves the page to the right side of the spread's binding 
			 * spine.
			 */
			public static readonly RIGHT_ALIGN: Adobe.Incopy.BindingOptions;
			/**
			 * Alias for RIGHT_ALIGN. Moves the page to the right side of 
			 * the spread's binding spine.
			 */
			public static readonly rightAlign: Adobe.Incopy.BindingOptions;
			/** Constructor */
			public constructor();
		}
	}
}