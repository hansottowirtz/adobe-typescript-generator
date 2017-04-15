/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class DesignOptions extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Uses the current object's properties as the starting 
			 * appearance of the animation at runtime.
			 */
			public static readonly FROM_CURRENT_APPEARANCE: Adobe.Indesign.DesignOptions;
			/**
			 * Alias for FROM_CURRENT_APPEARANCE. Uses the current object's 
			 * properties as the starting appearance of the animation at 
			 * runtime.
			 */
			public static readonly fromCurrentAppearance: Adobe.Indesign.DesignOptions;
			/**
			 * Uses the current object's properties as the end appearance 
			 * of the animation at runtime.
			 */
			public static readonly TO_CURRENT_APPEARANCE: Adobe.Indesign.DesignOptions;
			/**
			 * Uses the current object's properties as the starting 
			 * appearance, and current position as the end location of the 
			 * animation at runtime.
			 */
			public static readonly TO_CURRENT_LOCATION: Adobe.Indesign.DesignOptions;
			/**
			 * Alias for TO_CURRENT_APPEARANCE. Uses the current object's 
			 * properties as the end appearance of the animation at 
			 * runtime.
			 */
			public static readonly toCurrentAppearance: Adobe.Indesign.DesignOptions;
			/**
			 * Alias for TO_CURRENT_LOCATION. Uses the current object's 
			 * properties as the starting appearance, and current position 
			 * as the end location of the animation at runtime.
			 */
			public static readonly toCurrentLocation: Adobe.Indesign.DesignOptions;
			/** Constructor */
			public constructor();
		}
	}
}