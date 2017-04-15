/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class WhenScalingOptions extends Adobe.Csawlib.CSEnumBase {
			/** Adjust the scaling percentage of the item's transform */
			public static readonly ADJUST_SCALING_PERCENTAGE: Adobe.Indesign.WhenScalingOptions;
			/**
			 * Alias for ADJUST_SCALING_PERCENTAGE. Adjust the scaling 
			 * percentage of the item's transform
			 */
			public static readonly adjustScalingPercentage: Adobe.Indesign.WhenScalingOptions;
			/** Apply scaling to the item's content */
			public static readonly APPLY_TO_CONTENT: Adobe.Indesign.WhenScalingOptions;
			/**
			 * Alias for APPLY_TO_CONTENT. Apply scaling to the item's 
			 * content
			 */
			public static readonly applyToContent: Adobe.Indesign.WhenScalingOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}